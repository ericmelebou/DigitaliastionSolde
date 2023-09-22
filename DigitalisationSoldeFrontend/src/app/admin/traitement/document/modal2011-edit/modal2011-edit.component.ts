import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDocument2011 } from 'src/app/_interfaces/document2011';
import { Modal2011Component } from '../modal2011/modal2011.component';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';
import { Document2011Service } from 'src/app/_services/document2011.service';

@Component({
  selector: 'app-modal2011-edit',
  templateUrl: './modal2011-edit.component.html',
  styleUrls: ['./modal2011-edit.component.scss']
})
export class Modal2011EditComponent {
  public form: any;
  selectedTypeDossier: any;
  document?: IDocument2011;

  id: any = 0;
  constructor(
    public modalRef: MdbModalRef<Modal2011Component>,
    private fb: FormBuilder,
    private router: Router,
    private document2011Service: Document2011Service,

  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      codePoste: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      montant: ['', Validators.required],
     
    })
    this.document = this.modalRef.component as unknown as IDocument2011
    this.form.patchValue({
      codePoste: this.document.codePoste,
      dateDebut: this.document.dateDebut,
      dateFin: this.document.dateFin,
      montant: this.document.montant,
      
    });

  }
  async onSubmit(data: FormGroup) {
    this.document = {
      id: this.document!.id,
      codePoste: data.value.codePoste,
      dateDebut: data.value.dateDebut,
      dateFin: data.value.dateFin,
      montant: data.value.montant,
     
    };
    this.document2011Service.updateDocument2011(this.document!).subscribe({
      next: res => {
        console.log(res)
        window.location.reload();
      }, error: erro => alert(erro)
    })
  }
}
