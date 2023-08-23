import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-d-index',
  templateUrl: './d-index.component.html',
  styleUrls: ['./d-index.component.scss']
})
export class DIndexComponent {
  displayedColumns: string[] = ['name', 'date'];

  // Exemple de données statiques
  dataSource = new MatTableDataSource([
    { name: 'Dossier 1', date: '2023-08-25' },
    { name: 'Dossier 2', date: '2023-08-26' },
    { name: 'Dossier 3', date: '2023-08-27' },
    // Ajoutez plus de données si nécessaire
  ]);

}
