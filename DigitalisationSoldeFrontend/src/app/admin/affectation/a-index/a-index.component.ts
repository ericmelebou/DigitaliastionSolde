import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Table } from 'primeng/table';
import { IDossier } from 'src/app/_interfaces/dossier';
import { DossierService } from 'src/app/_services/dossier.service';
import { ModalComponent } from 'src/app/depot/modal/modal.component';
import { ModalAffecteComponent } from '../modal-affecte/modal-affecte.component';

@Component({
  selector: 'app-a-index',
  templateUrl: './a-index.component.html',
  styleUrls: ['./a-index.component.scss']
})
export class AIndexComponent {
  dossiers: IDossier[] = [];
  dossier?: IDossier;

  modalRef?: MdbModalRef<ModalAffecteComponent>;
  transactionList: any;


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

  navigateToCreateUser() {
    this.router.navigate(['profile/create'])
  }
  showDetails(dossier: IDossier){
    this.router.navigate(["/admin/affectation/show/" + dossier.id])
  }

  openModal(dossier : IDossier) {
    this.dossier = dossier
    this.modalRef = this.modalService.open(ModalAffecteComponent, {
      modalClass: 'modal-lg',
      data : dossier
    })
   
  }
}
