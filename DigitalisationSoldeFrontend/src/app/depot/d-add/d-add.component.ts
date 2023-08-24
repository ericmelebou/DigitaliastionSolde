import { Component } from '@angular/core';
import { ITypeDossier } from 'src/app/_interfaces/type-dossier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeDossierService } from 'src/app/_services/type-dossier.service';
import { TokenService } from 'src/app/_services/token.service';
import { IPieceJustificative } from 'src/app/_interfaces/piece-justificative';
import { PieceJustificativeService } from 'src/app/_services/piece-justificative.service';
import { DossierService } from 'src/app/_services/dossier.service';

@Component({
  selector: 'app-d-add',
  templateUrl: './d-add.component.html',
  styleUrls: ['./d-add.component.scss'],
})
export class DAddComponent {
  public form: any;
  selectedTypeDossier: any;
  typeDossierList: ITypeDossier[] = [];
  typeDossier?: ITypeDossier;
  pieceJustificatifs: IPieceJustificative[] = [];


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private typeDossierService: TypeDossierService,
    private dossierService: DossierService,
    private tokenService: TokenService,
    private pieceJustificatifService: PieceJustificativeService
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

  getFichierDemande(event: any) {
    this.fichierDemande = event.target.files[0];
  }
  getFichierPiecesJustificatives(event: any) {
    this.fichierPiecesJustificatives = event.target.files[0];
  }

  async onSubmit(data: FormGroup) {
    const formData: FormData = new FormData();
    formData.append('codeIdentification', data.value.codeIdentification);
    formData.append('idAgent', localStorage.getItem('agentId') as any);
    formData.append('origine', "Interne");
    formData.append('codeIdentification', data.value.codeIdentification);

    if (this.fichierDemande) {
      formData.append('demandeFile', this.fichierDemande);
    console.log(this.fichierDemande);

    }
    if (this.fichierPiecesJustificatives) {
      formData.append('piecesFile', this.fichierPiecesJustificatives);
    console.log(this.fichierPiecesJustificatives);

    }
    console.log(formData)
    this.dossierService.createDossier(formData).subscribe(
      (response: any) => {
        console.log('Succès', response);
      },
      (error: any) => {
        console.error('Erreur', error);
      }
    );
  }
}
