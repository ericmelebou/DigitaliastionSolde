import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Document2021Service } from 'src/app/_services/document2021.service';

@Component({
  selector: 'app-modal2021',
  templateUrl: './modal2021.component.html',
  styleUrls: ['./modal2021.component.scss']
})
export class Modal2021Component {
  public form: any;
  id: any = 0;
 
  
  constructor(
    public modalRef: MdbModalRef<Modal2021Component>,
    private fb: FormBuilder,
    private router: Router,
    private document2021Service: Document2021Service,
  ) { }

  ngOnInit(): void {
    this.id = this.modalRef.component as unknown as any;
    this.form = this.fb.group({
      codePoste: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      montant: ['', Validators.required],
      montantGlobal: ['', Validators.required],
    });
  }
  async onSubmit(data: FormGroup) {
    data.value.idDossier = this.id['0']
    data.value.status = "À saisir"
    this.document2021Service.createDocument2021(data.value).subscribe({
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
