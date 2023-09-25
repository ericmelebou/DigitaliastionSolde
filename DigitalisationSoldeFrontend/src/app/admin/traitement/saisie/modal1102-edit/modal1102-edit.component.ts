import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDocument1102 } from 'src/app/_interfaces/document1102';
import { Modal1102Component } from '../modal1102/modal1102.component';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Document1102Service } from 'src/app/_services/document1102.service';

@Component({
  selector: 'app-modal1102-edit',
  templateUrl: './modal1102-edit.component.html',
  styleUrls: ['./modal1102-edit.component.scss']
})
export class Modal1102EditComponent {
  public form: any;
  selectedTypeDossier: any;
  document?: IDocument1102;

  id: any = 0;
  constructor(
    public modalRef: MdbModalRef<Modal1102Component>,
    private fb: FormBuilder,
    private router: Router,
    private document1102Service: Document1102Service,

  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      codeCategorieAnc: ['', Validators.required],
      codeEchelleCorpsAnc: ['', Validators.required],
      codeGradeAnc: ['', Validators.required],
      codeIndiceAnc: ['', Validators.required],
      codeCategorieNv: ['', Validators.required],
      codeEchelleCorpsNv: ['', Validators.required],
      codeGradeNv: ['', Validators.required],
      codeIndiceNv: ['', Validators.required],
    })
    this.document = this.modalRef.component as unknown as IDocument1102
    this.form.patchValue({
      codeCategorieAnc: this.document.codeCategorieAnc,
      codeEchelleCorpsAnc: this.document.codeEchelleCorpsAnc,
      codeGradeAnc: this.document.codeGradeAnc,
      codeIndiceAnc: this.document.codeIndiceAnc,
      codeCategorieNv: this.document.codeCategorieNv,
      codeEchelleCorpsNv: this.document.codeEchelleCorpsNv,
      codeGradeNv: this.document.codeGradeNv,
      codeIndiceNv: this.document.codeIndiceNv,
    });

  }
  async onSubmit(data: FormGroup) {
    this.document = {
      id: this.document!.id,
      codeCategorieAnc: data.value.codeCategorieAnc,
      codeEchelleCorpsAnc: data.value.codeEchelleCorpsAnc,
      codeGradeAnc: data.value.codeGradeAnc,
      codeIndiceAnc: data.value.codeIndiceAnc,
      codeCategorieNv: data.value.codeCategorieNv,
      codeEchelleCorpsNv: data.value.codeEchelleCorpsNv,
      codeGradeNv: data.value.codeGradeNv,
      codeIndiceNv: data.value.codeIndiceNv,
    };
    this.document1102Service.updateDocument1102(this.document!).subscribe({
      next: res => {
        console.log(res)
        window.location.reload();
      }, error: erro => alert(erro)
    })
  }
}
