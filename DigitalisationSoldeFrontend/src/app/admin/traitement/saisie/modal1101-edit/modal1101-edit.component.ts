import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Document1101Service } from 'src/app/_services/document1101.service';
import { Modal1101Component } from '../modal1101/modal1101.component';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';
import { IDocument1101 } from 'src/app/_interfaces/document1101';

@Component({
  selector: 'app-modal1101-edit',
  templateUrl: './modal1101-edit.component.html',
  styleUrls: ['./modal1101-edit.component.scss']
})
export class Modal1101EditComponent {
  public form: any;
  selectedTypeDossier: any;
  document?: IDocument1101;

  id: any = 0;
  constructor(
    public modalRef: MdbModalRef<Modal1101Component>,
    private fb: FormBuilder,
    private router: Router,
    private document1101Service: Document1101Service,

  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      codeTitre: ['', Validators.required],
      nom: ['', Validators.required],
      codeSexe: ['', Validators.required],
      codeSituationMatrimoniale: ['', Validators.required],
      codeStatut: ['', Validators.required],
      nombreEnfantAf: ['', Validators.required],
      codeSalaireUnique: ['', Validators.required],
      categorieImpIrpp: ['', Validators.required],
    })
    this.document = this.modalRef.component as unknown as IDocument1101
    this.form.patchValue({
      codeTitre: this.document.codeTitre,
      nom: this.document.nom,
      codeSexe: this.document.codeSexe,
      codeSituationMatrimoniale: this.document.codeSituationMatrimoniale,
      codeStatut: this.document.codeStatut,
      nombreEnfantAf: this.document.nombreEnfantAf,
      codeSalaireUnique: this.document.codeSalaireUnique,
      categorieImpIrpp: this.document.categorieImpIrpp,
    });

  }
  async onSubmit(data: FormGroup) {
    this.document = {
      id: this.document!.id,
      nom: data.value.nom,
      codeSexe: data.value.codeSexe,
      codeSituationMatrimoniale: data.value.codeSituationMatrimoniale,
      codeStatut: data.value.codeStatut,
      nombreEnfantAf: data.value.nombreEnfantAf,
      codeSalaireUnique: data.value.codeSalaireUnique,
      categorieImpIrpp: data.value.categorieImpIrpp,
      codeTitre: data.value.codeTitre,
    };
    this.document1101Service.updateDocument1101(this.document!).subscribe({
      next: res => {
        console.log(res)
        window.location.reload();
      }, error: erro => alert(erro)
    })
  }
}
