import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Document1109Service } from 'src/app/_services/document1109.service';

@Component({
  selector: 'app-modal1109',
  templateUrl: './modal1109.component.html',
  styleUrls: ['./modal1109.component.scss']
})
export class Modal1109Component {
  public form: any;
  id: any = 0;
 
 
  constructor(
    public modalRef: MdbModalRef<Modal1109Component>,
    private fb: FormBuilder,
    private router: Router,
    private document1109Service: Document1109Service,
  ) { }

  ngOnInit(): void {
    this.id = this.modalRef.component as unknown as any;
    this.form = this.fb.group({
      dateMariage: ['', Validators.required],
    });
  }

  async onSubmit(data: FormGroup) {
    data.value.idDossier = this.id['0']
    this.document1109Service.createDocument1109(data.value).subscribe({
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
