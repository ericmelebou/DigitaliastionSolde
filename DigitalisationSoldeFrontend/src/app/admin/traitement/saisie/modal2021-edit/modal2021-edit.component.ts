import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { IDocument2021 } from 'src/app/_interfaces/document2021';
import { Document2021Service } from 'src/app/_services/document2021.service';
import { Modal2021Component } from '../modal2021/modal2021.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal2021-edit',
  templateUrl: './modal2021-edit.component.html',
  styleUrls: ['./modal2021-edit.component.scss']
})
export class Modal2021EditComponent {
  public form: any;
  selectedTypeDossier: any;
  document?: IDocument2021;

  id: any = 0;
  constructor(
    public modalRef: MdbModalRef<Modal2021Component>,
    private fb: FormBuilder,
    private router: Router,
    private document2021Service: Document2021Service,

  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      codePoste: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      montant: ['', Validators.required],
      montantGlobal: ['', Validators.required],
    })
    this.document = this.modalRef.component as unknown as IDocument2021
    this.form.patchValue({
      codePoste: this.document.codePoste,
      dateDebut: this.document.dateDebut,
      dateFin: this.document.dateFin,
      montant: this.document.montant,
      montantGlobal: this.document.montantGlobal,
    });

  }
  async onSubmit(data: FormGroup) {
    this.document = {
      id: this.document!.id,
      codePoste: data.value.codePoste,
      dateDebut: data.value.dateDebut,
      dateFin: data.value.dateFin,
      montant: data.value.montant,
      montantGlobal: data.value.montantGlobal,
    };
    this.document2021Service.updateDocument2021(this.document!).subscribe({
      next: res => {
        console.log(res)
        window.location.reload();
      }, error: erro => alert(erro)
    })
  }
}
