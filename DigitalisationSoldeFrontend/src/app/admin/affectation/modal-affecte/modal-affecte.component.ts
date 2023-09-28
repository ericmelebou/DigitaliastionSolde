import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { IDossier } from 'src/app/_interfaces/dossier';
import { IAgent } from 'src/app/_interfaces/agent';
import { AgentService } from 'src/app/_services/agent.service';
import { AffectationDossierService } from 'src/app/_services/affectation-dossier.service';
import { IAffectationDossier } from 'src/app/_interfaces/affectation-dossier';
import { DossierService } from 'src/app/_services/dossier.service';

@Component({
  selector: 'app-modal-affecte',
  templateUrl: './modal-affecte.component.html',
  styleUrls: ['./modal-affecte.component.scss'],
})
export class ModalAffecteComponent {
  form: any;
  selectedAgent: any;
  agentList: IAgent[] = [];
  agentSaisieList: IAgent[] = [];
  dossier?: IDossier;
  agentId: number = localStorage.getItem('agentId') as unknown as number;
  affectationDossier: IAffectationDossier = {
    id: 0,
    idDossier: 0,
    idAgent: 0,
    dateAffectation: '',
    status: true,
    idAffectateur: this.agentId
  };
  affectationDossiers: IAffectationDossier[] = [];
  latestAffectationDossier?: IAffectationDossier;
  constructor(
    public modalRef: MdbModalRef<ModalAffecteComponent>,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private agentService: AgentService,
    private affectationDossierService: AffectationDossierService,
    private dossierService: DossierService
  ) { }
  closeMessage = 'Modal closed';
  close(): void {

    this.modalRef.close(this.closeMessage);
  }
  ngOnInit(): void {
    this.dossier = this.modalRef.component as unknown as IDossier

    this.form = this.fb.group({
      id: [''],
      codeIdentification: [''],
      agent: ['', Validators.required],
    });
    this.form.patchValue({
      id: this.dossier.id,
      codeIdentification: this.dossier.codeIdentification,

    });
    this.form.id = this.dossier.id
    this.agentService.getAgents().subscribe({
      next: (agents) => {
        this.agentList = agents;
        for (const agent of this.agentList) {
          for (let role of agent.roles!) {
            if (role.nom === "SAISIE") {
              this.agentSaisieList.push(agent);
            }
          }
        }
      },
    });
    this.affectationDossierService.getAffectationDossiers().subscribe({
      next: (affectationDossiers) => {
        this.affectationDossiers = affectationDossiers;

      }
    })


  }
  async onSubmit(data: FormGroup) {

    this.affectationDossier!.idDossier = this.dossier!.id;
    this.affectationDossier!.idAgent = data.value.agent.id;
    console.log(this.affectationDossier);
    this.affectationDossierService.createAffectationDossier(this.affectationDossier).subscribe({
      next: response => {
        console.log(response);
        this.latestAffectationDossier = this.getAffectationDossierByLatestAffectation(this.dossier!.id) as unknown as IAffectationDossier;
        if (this.latestAffectationDossier) {
          this.latestAffectationDossier!.status = false;
          this.affectationDossierService.updateAffectationDossier(this.latestAffectationDossier).subscribe({
            next: answer => {
              console.log(answer)
            }
          });
        }
        this.dossierService.getDossier(this.dossier!.id).subscribe({
          next: dossier => {
            dossier!.status = "Pris en charge"
            const formData: FormData = new FormData();
            formData.append('id', dossier.id as any);
            formData.append('status', 'Pris en charge');

            this.dossierService.updateDossier(formData).subscribe(
              (response: any) => {
                this.modalRef.close(this.closeMessage);
                this.router.navigate(['/admin'])
              },
              (error: any) => {
                console.error('Erreur', error);
              }
            )
          }
        })
      }
    });
  }
  getAffectationDossierByLatestAffectation(idDossier: number) {
    let latestAffectationDossier = null;
    let latestDate = null;

    for (const affectationDossier of this.affectationDossiers) {
      if (affectationDossier.idDossier === idDossier) {
        const date = new Date(affectationDossier.dateAffectation);
        if (!latestDate || date > latestDate) {

          latestDate = date;
          latestAffectationDossier = affectationDossier;
        }
      }
    }
    return latestAffectationDossier;
  }
}
