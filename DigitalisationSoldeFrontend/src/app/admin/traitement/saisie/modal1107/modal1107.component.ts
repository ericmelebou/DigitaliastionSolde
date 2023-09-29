import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Document1107Service } from 'src/app/_services/document1107.service';

@Component({
  selector: 'app-modal1107',
  templateUrl: './modal1107.component.html',
  styleUrls: ['./modal1107.component.scss']
})
export class Modal1107Component {
  public form: any;
  id: any = 0;


  constructor(
    public modalRef: MdbModalRef<Modal1107Component>,
    private fb: FormBuilder,
    private router: Router,
    private document1107Service: Document1107Service,
  ) { }

  ngOnInit(): void {
    this.id = (this.modalRef.component as unknown as any).idDossier
    this.form = this.fb.group({
      codeModeReglement: ['', Validators.required],
      numeroCompteEnBanque: ['', Validators.required],
      codeAgence: ['', Validators.required],
      cleRib: ['', Validators.required],
    });
  }

  async onSubmit(data: FormGroup) {
    data.value.idDossier = this.id
    data.value.status = "À saisir"
    this.document1107Service.createDocument1107(data.value).subscribe({
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
