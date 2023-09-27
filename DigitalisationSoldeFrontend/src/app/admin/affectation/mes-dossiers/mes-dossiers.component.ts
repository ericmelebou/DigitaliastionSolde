import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { IAffectationDossier } from 'src/app/_interfaces/affectation-dossier';
import { IDossier } from 'src/app/_interfaces/dossier';
import { AffectationDossierService } from 'src/app/_services/affectation-dossier.service';
import { DocumentService } from 'src/app/_services/document.service';
import { DossierService } from 'src/app/_services/dossier.service';

@Component({
  selector: 'app-mes-dossiers',
  templateUrl: './mes-dossiers.component.html',
  styleUrls: ['./mes-dossiers.component.scss']
})
export class MesDossiersComponent {
  dossiers: IDossier[] = [];
  mesDossiers: IDossier[] = [];
  dossier?: IDossier;
  affectationDossiers: IAffectationDossier[] = [];
  transmettredossier: boolean = false;

  transactionList: any;


  constructor(private router: Router,
    private dossierService: DossierService,
    private documentService: DocumentService,
    private affectationDossierService: AffectationDossierService,) { }

  ngOnInit() {
    this.affectationDossierService.getAffectationDossiers().subscribe({
      next: (affectationDossiers) => {
        this.affectationDossiers = affectationDossiers;
        this.dossierService.getDossiers().subscribe({
          next: (dossiers) => {
            this.dossiers = dossiers;
            for (let dossier of this.dossiers) {
              console.log(this.dossiers)
              let latestAffectationDossier = null;
              let latestDate = null;

              for (const affectationDossier of this.affectationDossiers) {
                if (affectationDossier.idDossier == dossier.id) {
                  const date = new Date(affectationDossier.dateAffectation);
                  if (!latestDate || date > latestDate) {
                    latestDate = date;
                    latestAffectationDossier = affectationDossier;
                  }
                }
              }
              const idAgent = localStorage.getItem('agentId') as unknown as number
              if (latestAffectationDossier?.idAgent == idAgent && (dossier.status == "Pris en charge" || dossier.status == "À rectifier")) {
                this.mesDossiers.push(dossier)
              }
             
            }
          },
        });
      }
    })

  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
  }

  navigateToCreateUser() {
    this.router.navigate(['profile/create'])
  }
  traiterDocument(dossier: IDossier) {
    this.router.navigate(["/admin/traitement/saisie/add/" + dossier.id])
  }
  transmettre(dossier: IDossier) {
    this.transmettredossier = true;
    this.dossier = dossier;
  }
  confirmTransmission() {
    this.transmettredossier = false;
    const formData: FormData = new FormData();
    formData.append('id', this.dossier!.id as any);
    formData.append('status', 'À contrôler');
    this.dossierService.updateDossier(formData).subscribe(
      (response: any) => {
        this.documentService.getDocuments().subscribe({
          next: documents => {
            documents.forEach(document => {
              if (document.idDossier == this.dossier!.id) {
                document.status = "À contrôler"
                this.documentService.updateDocument(document).subscribe({
                  next: answer => {
                    console.log(answer)

                  }
                })
              }
            });
          }
        })
        this.showSuccessAlert();
      },
      (error: any) => {
        console.error('Erreur', error);
      }
    )
  }
  showSuccessAlert() {
    const alert = document.createElement('div');
    alert.className = 'alert alert-success';
    alert.role = 'alert';
    alert.textContent = 'Le dossier a bien été transmis au contrôleur avec succès !';

    alert.style.position = 'fixed';
    alert.style.top = '20px';
    alert.style.right = '20px';

    const parentElement = document.body;
    parentElement.appendChild(alert);
    window.location.reload();
    setTimeout(() => {
      alert.remove();
    }, 5000);
  }
}
