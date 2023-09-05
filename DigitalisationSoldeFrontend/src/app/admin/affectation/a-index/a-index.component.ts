import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { IDossier } from 'src/app/_interfaces/dossier';
import { DossierService } from 'src/app/_services/dossier.service';

@Component({
  selector: 'app-a-index',
  templateUrl: './a-index.component.html',
  styleUrls: ['./a-index.component.scss']
})
export class AIndexComponent {
  dossiers: IDossier[] = [];


  constructor(private router: Router, private dossierService: DossierService) { }

  ngOnInit() {
    this.dossierService.getDossiers().subscribe({
      next: (dossiers) => {
        this.dossiers = dossiers;
        console.log('Liste de tous les dossiers : ', this.dossiers);
      },
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
  }

  navigateToCreateUser() {
    this.router.navigate(['profile/create'])
  }
  showDetails(dossier: IDossier){
    this.router.navigate(["/admin/affectation/show/" + dossier.id])
  }
}
