import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { IDossier } from 'src/app/_interfaces/dossier';
import { DossierService } from 'src/app/_services/dossier.service';
import { TokenService } from 'src/app/_services/token.service';
import { ModalComponent } from '../modal/modal.component';
import { Product } from 'src/app/api/product';
import { Customer, Representative } from 'src/app/api/customer';
import { Table } from 'primeng/table';
interface expandedRows {
  [key: string]: boolean;
}

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
  customers1: Customer[] = [];

  customers2: Customer[] = [];

  customers3: Customer[] = [];

  selectedCustomers1: Customer[] = [];

  selectedCustomer: Customer = {};

  representatives: Representative[] = [];

  statuses: any[] = [];

  products: Product[] = [];

  rowGroupMetadata: any;

  expandedRows: expandedRows = {};

  activityValues: number[] = [0, 100];

  isExpanded: boolean = false;

  idFrozen: boolean = false;

  loading: boolean = true;
  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.customers3) {
      for (let i = 0; i < this.customers3.length; i++) {
        const rowData = this.customers3[i];
        const representativeName = rowData?.representative?.name || '';

        if (i === 0) {
          this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
        }
        else {
          const previousRowData = this.customers3[i - 1];
          const previousRowGroup = previousRowData?.representative?.name;
          if (representativeName === previousRowGroup) {
            this.rowGroupMetadata[representativeName].size++;
          }
          else {
            this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
          }
        }
      }
    }
  }

  expandAll() {
    if (!this.isExpanded) {
      this.products.forEach(product => product && product.name ? this.expandedRows[product.name] = true : '');

    } else {
      this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
  }

  formatCurrency(value: number) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  @ViewChild('filter') filter!: ElementRef;

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
  constructor(
    private modalService: MdbModalService,
    private router: Router,
    private dossierService: DossierService,
    private tokenService: TokenService
  ) {
    this.isDataEmpty = this.dossiersList.length === 0;
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
    const idAgent = localStorage.getItem('agentId') as unknown as number;
    this.dossierService.getDossiersByAgent(idAgent).subscribe({
      next: (dossiers) => {

        this.dossiersList = dossiers;
        console.log('ma liste des dossiers de cet agent', this.dossiersList);
      },
    });
  }
}
