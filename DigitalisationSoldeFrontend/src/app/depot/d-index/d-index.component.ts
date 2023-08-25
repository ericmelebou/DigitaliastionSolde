import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { IDossier } from 'src/app/_interfaces/dossier';
import { DossierService } from 'src/app/_services/dossier.service';
import { TokenService } from 'src/app/_services/token.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-d-index',
  templateUrl: './d-index.component.html',
  styleUrls: ['./d-index.component.scss'],
})

export class DIndexComponent {
  displayedColumns: string[] = ['name', 'date'];
  modalRef?: MdbModalRef<ModalComponent>;
  dossiersList: IDossier[] = [];
  totalItems: any = 3;
  isDataEmpty: boolean;

  searchTerm: string = '';
  items: string[] = ['apple', 'banana', 'cherry', 'grape', 'orange'];

  constructor(
    private modalService: MdbModalService,
    private router: Router,
    private dossierService: DossierService,
    private tokenService: TokenService
  ) {
    this.isDataEmpty = this.dossiersList.length===0;
  }

  
  openModal(dossier: IDossier): void {
    this.router.navigate(['/depot/show', dossier.id]);
  }


  // Exemple de données statiques
  dataSource = new MatTableDataSource([
    { name: 'Type de dossier', date: '2023-08-25' },
    { name: 'Origine', date: '2023-08-26' },
    { name: 'Code identification', date: '2023-08-27' },
    { name: 'Code identification', date: '2023-08-27' },
    // Ajoutez plus de données si nécessaire
  ]);

  ngOnInit(): void {
    this.dossierService.getDossiers().subscribe({
      next: (dossiers) => {
        this.dossiersList = dossiers;
        console.log('ma liste des dossiers', this.dossiersList);
      },
    });
  }
}
