import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Document2011Service } from 'src/app/_services/document2011.service';

@Component({
  selector: 'app-modal2011',
  templateUrl: './modal2011.component.html',
  styleUrls: ['./modal2011.component.scss']
})
export class Modal2011Component {
  public form: any;
  id: any = 0;


  constructor(
    public modalRef: MdbModalRef<Modal2011Component>,
    private fb: FormBuilder,
    private router: Router,
    private document2011Service: Document2011Service,
  ) { }

  ngOnInit(): void {
    this.id = (this.modalRef.component as unknown as any).idDossier
    this.form = this.fb.group({
      codePoste: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      montant: ['', Validators.required],
    });
  }
  async onSubmit(data: FormGroup) {
    data.value.idDossier = this.id
    data.value.status = "À saisir"
    this.document2011Service.createDocument2011(data.value).subscribe({
      next: document => {
        console.log('Document créé avec succès :', document);
        this.modalRef.close(document);
        window.location.reload();
      },
      error: err => {
        console.error('Erreur lors de la création du document :', err);
      }
    });
  }
}
