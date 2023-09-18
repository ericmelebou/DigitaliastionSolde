import { Component } from '@angular/core';
import { ITypeDossier } from 'src/app/_interfaces/type-dossier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeDossierService } from 'src/app/_services/type-dossier.service';
import { IPieceJustificative } from 'src/app/_interfaces/piece-justificative';
import { DossierService } from 'src/app/_services/dossier.service';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-d-add',
  templateUrl: './d-add.component.html',
  styleUrls: ['./d-add.component.scss'],
  providers: [MessageService]
})
export class DAddComponent {
  public form: any;
  selectedTypeDossier: any;
  typeDossierList: ITypeDossier[] = [];
  typeDossierFiltedList: ITypeDossier[] = [];
  typeDossier?: ITypeDossier;
  pieceJustificatifs: IPieceJustificative[] = [];
  pieceJustificatifsFiltered: IPieceJustificative[] = [];
  uploadedFiles: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private typeDossierService: TypeDossierService,
    private dossierService: DossierService,
    private toastr: ToastrService,
    private messageService: MessageService
  ) { }
  fichierDemande: File | null = null;
  fichierPiecesJustificatives: File | null = null;
  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      typeDossier: ['', Validators.required],
    });

    this.typeDossierService.getTypesDossiers().subscribe({
      next: (typesDossiers) => {
        this.typeDossierList = typesDossiers;
        console.log('ma liste des types dossiers', this.typeDossierList);
      },
    });
  }

  onUpload(event: any) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    });
  }

  onBasicUpload() {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
  }

  getFichierDemande(event: any) {
    this.fichierDemande = event.target.files[0];
  }
  getFichierPiecesJustificatives(event: any) {
    this.fichierPiecesJustificatives = event.target.files[0];
  }

  async onSubmit(data: FormGroup) {
    const formData: FormData = new FormData();
    formData.append('idAgent', localStorage.getItem('agentId') as any);
    formData.append('origine', 'Interne');
    formData.append('codeIdentification',  "335-FFF");
    formData.append('status', 'Envoyé');
    formData.append('typeDossier.id', data.value.typeDossier.id);
    formData.append('typeDossier.libelle', data.value.typeDossier.libelle);
    formData.append(
      'typeDossier.informations',
      data.value.typeDossier.informations
    );

    console.log(data.value.typeDossier);

    if (this.fichierDemande) {
      formData.append('demandeFile', this.fichierDemande);
       
    }
    if (this.fichierPiecesJustificatives) {
      formData.append('piecesFile', this.fichierPiecesJustificatives);
      
    }
   
    this.dossierService.createDossier(formData).subscribe(
      (response: any) => {
        console.log('Succès', response);
        this.showSuccessAlert();
      },
      (error: any) => {
        console.error('Erreur', error);
      }
    );
  }
 
  filteredByTypeDossier(event: any) {
    const typeId = event.target.value; // Obtenez l'ID du type de dossier sélectionné depuis l'événement

    if (!typeId) {
      this.pieceJustificatifsFiltered = []; // Réinitialisez la liste si aucun type n'est sélectionné
      return;
    }

    const selectedType = this.typeDossierList.find(
      (type) => type.id === typeId
    ); // Remplacez 'id' par la propriété appropriée

    if (selectedType) {
      this.pieceJustificatifsFiltered = selectedType.piecesJustificatives; // Remplacez 'piecesJustificatives' par la propriété appropriée
    } else {
      this.pieceJustificatifsFiltered = [];
    }
  }

  showSuccessAlert() {
    const alert = document.createElement('div');
    alert.className = 'alert alert-success';
    alert.role = 'alert';
    alert.textContent = 'Le dossier a été ajouté avec succès';

    alert.style.position = 'fixed';
    alert.style.top = '20px';
    alert.style.right = '20px';

    const parentElement = document.body; // Ou remplacez par l'élément parent souhaité
    parentElement.appendChild(alert);

    setTimeout(() => {
      alert.remove();
      this.router.navigate(['/depot']);
    }, 5000);
  }

  selectedState: any = null;

  states: any[] = [
    { name: 'Arizona', code: 'Arizona' },
    { name: 'California', value: 'California' },
    { name: 'Florida', code: 'Florida' },
    { name: 'Ohio', code: 'Ohio' },
    { name: 'Washington', code: 'Washington' },
  ];

  dropdownItems = [
    { name: 'Option 1', code: 'Option 1' },
    { name: 'Option 2', code: 'Option 2' },
    { name: 'Option 3', code: 'Option 3' },
  ];

  cities1: any[] = [];

  cities2: any[] = [];

  city1: any = null;

  city2: any = null;
}
