import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { IAffectationDossier } from 'src/app/_interfaces/affectation-dossier';
import { IDossier } from 'src/app/_interfaces/dossier';
import { AffectationDossierService } from 'src/app/_services/affectation-dossier.service';
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

  transactionList: any;


  constructor(private router: Router, private dossierService: DossierService, private affectationDossierService: AffectationDossierService,) { }

  ngOnInit() {
    this.affectationDossierService.getAffectationDossiers().subscribe({
      next: (affectationDossiers) => {
        this.affectationDossiers = affectationDossiers;
        this.dossierService.getDossiers().subscribe({
          next: (dossiers) => {
            this.dossiers = dossiers;
            for (let dossier of this.dossiers) {
              let latestAffectationDossier = null;
              let latestDate = null;

              for (const affectationDossier of this.affectationDossiers) {
                if (affectationDossier.idDossier === dossier.id) {
                  const date = new Date(affectationDossier.dateAffectation);
                  if (!latestDate || date > latestDate) {

                    latestDate = date;
                    latestAffectationDossier = affectationDossier;
                  }
                }
              }
              const idAgent = localStorage.getItem('agentId') as unknown as number
              if (latestAffectationDossier!.idAgent == idAgent) {
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
  createDocument(dossier: IDossier) {
    this.router.navigate(["/admin/traitement/document/add/" + dossier.id])
  }


}
