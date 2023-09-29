import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { IDocument1102 } from 'src/app/_interfaces/document1102';
import { Document1102Service } from 'src/app/_services/document1102.service';

@Component({
  selector: 'app-modal1102',
  templateUrl: './modal1102.component.html',
  styleUrls: ['./modal1102.component.scss']
})
export class Modal1102Component {
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
    this.id = (this.modalRef.component as unknown as any).idDossier
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

  }
  async onSubmit(data: FormGroup) {
    data.value.idDossier = this.id
    data.value.status = "À saisir"
    this.document1102Service.createDocument1102(data.value).subscribe({
      next: document => {
        this.document = document
        console.log(this.document)
        this.modalRef.close(this.document)
        window.location.reload();
      }
    });
  }
}
