import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-d-layout',
  templateUrl: './d-layout.component.html',
  styleUrls: ['./d-layout.component.scss']
})
export class DLayoutComponent {

  openModal() {
    

  }

  displayedColumns: string[] = ['name', 'date'];

  // Exemple de données statiques
  dataSource = new MatTableDataSource([
    { name: 'Dossier 1', date: '2023-08-25' },
    { name: 'Dossier 2', date: '2023-08-26' },
    { name: 'Dossier 3', date: '2023-08-27' },
    // Ajoutez plus de données si nécessaire
  ]);




}
