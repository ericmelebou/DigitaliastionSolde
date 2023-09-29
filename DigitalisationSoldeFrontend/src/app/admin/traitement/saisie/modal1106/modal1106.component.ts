import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Document1106Service } from 'src/app/_services/document1106.service';

@Component({
  selector: 'app-modal1106',
  templateUrl: './modal1106.component.html',
  styleUrls: ['./modal1106.component.scss']
})
export class Modal1106Component {
  public form: any;
  id: any = 0;


  constructor(
    public modalRef: MdbModalRef<Modal1106Component>,
    private fb: FormBuilder,
    private router: Router,
    private document1106Service: Document1106Service,
  ) { }

  ngOnInit(): void {
    this.id = (this.modalRef.component as unknown as any).idDossier
    this.form = this.fb.group({
      codePositionSolde: ['', Validators.required],
    });
  }

  async onSubmit(data: FormGroup) {
    data.value.idDossier = this.id
    data.value.status = "À saisir"
    this.document1106Service.createDocument1106(data.value).subscribe({
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
