import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Table } from 'primeng/table';
import { IDossier } from 'src/app/_interfaces/dossier';
import { DossierService } from 'src/app/_services/dossier.service';

@Component({
  selector: 'app-c-index',
  templateUrl: './c-index.component.html',
  styleUrls: ['./c-index.component.scss']
})
export class CIndexComponent {


  dossiers: IDossier[] = [];
  dossier?: IDossier;

  constructor(private router: Router, private dossierService: DossierService,private modalService: MdbModalService,) { }


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


}
