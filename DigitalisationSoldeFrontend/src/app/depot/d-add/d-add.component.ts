import { Component } from '@angular/core';
import { ITypeDossier } from 'src/app/_interfaces/type-dossier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeDossierService } from 'src/app/_services/type-dossier.service';
import { TokenService } from 'src/app/_services/token.service';
import { IPieceJustificative } from 'src/app/_interfaces/piece-justificative';
import { PieceJustificativeService } from 'src/app/_services/piece-justificative.service';

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
  pieceJustificatifs : IPieceJustificative[] = [];


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private typeDossierService: TypeDossierService,
    private tokenService: TokenService,
    private pieceJustificatifService : PieceJustificativeService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      typeDossier: ['', Validators.required],
    });

    this.typeDossierService.getTypeDossiers().subscribe({
      next: (typesDossiers) => {
        this.typeDossierList = typesDossiers;
        console.log('ma liste des types dossiers', this.typeDossierList);
      },
    });

    this.pieceJustificatifService.getPieceJustificatives().subscribe({
      next: (pieces) => {
        this.pieceJustificatifs = pieces;
        console.log('ma liste des pièces justificatives', this.pieceJustificatifs);
      },
    });


  }

  async onSubmit(data: FormGroup) {
    this.typeDossierService.createTypeDossier(data.value).subscribe({
      next: (typeDossier) => {
        this.typeDossier = typeDossier;
        console.log(this.typeDossier);
      },
    });
  }
}
