import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Document2101Service } from 'src/app/_services/document2101.service';

@Component({
  selector: 'app-modal2101',
  templateUrl: './modal2101.component.html',
  styleUrls: ['./modal2101.component.scss']
})
export class Modal2101Component {
  public form: any;
  id: any = 0;
 
 
  constructor(
    public modalRef: MdbModalRef<Modal2101Component>,
    private fb: FormBuilder,
    private router: Router,
    private document2101Service: Document2101Service,
  ) { }

  ngOnInit(): void {
    this.id = this.modalRef.component as unknown as any;
    this.form = this.fb.group({
      numeroEcriture: ['', Validators.required],
      codePoste: ['', Validators.required],
      dateDebut: ['', Validators.required],
    });
  }

  async onSubmit(data: FormGroup) {
    data.value.idDossier = this.id['0']
    data.value.status = "À saisir"
    this.document2101Service.createDocument2101(data.value).subscribe({
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
