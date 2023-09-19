import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Document1105Service } from 'src/app/_services/document1105.service';

@Component({
  selector: 'app-modal1105',
  templateUrl: './modal1105.component.html',
  styleUrls: ['./modal1105.component.scss']
})
export class Modal1105Component {
  public form: any;
  id: any = 0;
  constructor(
    public modalRef: MdbModalRef<Modal1105Component>,
    private fb: FormBuilder,
    private router: Router,
    private document1105Service: Document1105Service,
  ) { }

  ngOnInit(): void {
    this.id = this.modalRef.component as unknown as any;
    this.form = this.fb.group({
      codeLieuAffectation: ['', Validators.required],
    });
  }

  async onSubmit(data: FormGroup) {
    data.value.idDossier = this.id['0']
    this.document1105Service.createDocument1105(data.value).subscribe({
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
