import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDocument3001 } from 'src/app/_interfaces/document3001';
import { Document3001Service } from 'src/app/_services/document3001.service';
import { Modal3001Component } from '../modal3001/modal3001.component';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal3001-edit',
  templateUrl: './modal3001-edit.component.html',
  styleUrls: ['./modal3001-edit.component.scss']
})
export class Modal3001EditComponent {
  public form: any;
  selectedTypeDossier: any;
  document?: IDocument3001;

  id: any = 0;
  constructor(
    public modalRef: MdbModalRef<Modal3001Component>,
    private fb: FormBuilder,
    private router: Router,
    private document3001Service: Document3001Service,

  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      tauxRappel: ['', Validators.required],
      pointsRappel: ['', Validators.required],
      dateDebutRappel: ['', Validators.required],
      dateFinRappel: ['', Validators.required],
      nombreJoursRappel: ['', Validators.required],
      codePoste: ['', Validators.required],
      montant: ['', Validators.required],
    })
    this.document = this.modalRef.component as unknown as IDocument3001
    this.form.patchValue({
      tauxRappel: this.document.tauxRappel,
      pointsRappel: this.document.pointsRappel,
      dateDebutRappel: this.document.dateDebutRappel,
      dateFinRappel: this.document.dateFinRappel,
      nombreJoursRappel: this.document.nombreJoursRappel,
      codePoste: this.document.codePoste,
      montant: this.document.montant,
    });

  }
  async onSubmit(data: FormGroup) {
    this.document = {
      id: this.document!.id,
      tauxRappel: data.value.tauxRappel,
      pointsRappel: data.value.pointsRappel,
      dateDebutRappel: data.value.dateDebutRappel,
      dateFinRappel: data.value.dateFinRappel,
      nombreJoursRappel: data.value.nombreJoursRappel,
      codePoste: data.value.codePoste,
      montant: data.value.montant,
    };
    this.document3001Service.updateDocument3001(this.document!).subscribe({
      next: res => {
        console.log(res)
        window.location.reload();
      }, error: erro => alert(erro)
    })
  }
}
