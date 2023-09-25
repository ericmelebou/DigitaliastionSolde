import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDocument2101 } from 'src/app/_interfaces/document2101';
import { Document2101Service } from 'src/app/_services/document2101.service';
import { Modal2101Component } from '../modal2101/modal2101.component';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal2101-edit',
  templateUrl: './modal2101-edit.component.html',
  styleUrls: ['./modal2101-edit.component.scss']
})
export class Modal2101EditComponent {
  public form: any;
  selectedTypeDossier: any;
  document?: IDocument2101;

  id: any = 0;
  constructor(
    public modalRef: MdbModalRef<Modal2101Component>,
    private fb: FormBuilder,
    private router: Router,
    private document2101Service: Document2101Service,

  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      numeroEcriture: ['', Validators.required],
      codePoste: ['', Validators.required],
      dateDebut: ['', Validators.required],
      
    })
    this.document = this.modalRef.component as unknown as IDocument2101
    this.form.patchValue({
      numeroEcriture: this.document.numeroEcriture,
      codePoste: this.document.codePoste,
      dateDebut: this.document.dateDebut,
      
    });

  }
  async onSubmit(data: FormGroup) {
    this.document = {
      id: this.document!.id,
      numeroEcriture: data.value.nom,
      codePoste: data.value.codeSexe,
      dateDebut: data.value.codeSituationMatrimoniale,
      
    };
    this.document2101Service.updateDocument2101(this.document!).subscribe({
      next: res => {
        console.log(res)
        window.location.reload();
      }, error: erro => alert(erro)
    })
  }
}
