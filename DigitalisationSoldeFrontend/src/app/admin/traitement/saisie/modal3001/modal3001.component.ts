import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Document3001Service } from 'src/app/_services/document3001.service';

@Component({
  selector: 'app-modal3001',
  templateUrl: './modal3001.component.html',
  styleUrls: ['./modal3001.component.scss']
})
export class Modal3001Component {
  public form: any;
  id: any = 0;
 

  constructor(
    public modalRef: MdbModalRef<Modal3001Component>,
    private fb: FormBuilder,
    private router: Router,
    private document3001Service: Document3001Service,
  ) { }

  ngOnInit(): void {
    this.id = this.modalRef.component as unknown as any;
    this.form = this.fb.group({
      tauxRappel: ['', Validators.required],
      pointsRappel: ['', Validators.required],
      dateDebutRappel: ['', Validators.required],
      dateFinRappel: ['', Validators.required],
      nombreJoursRappel: ['', Validators.required],
      codePoste: ['', Validators.required],
      montant: ['', Validators.required],
    });
  }
  async onSubmit(data: FormGroup) {
    data.value.idDossier = this.id['0']
    data.value.status = "À saisir"
    this.document3001Service.createDocument3001(data.value).subscribe({
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
