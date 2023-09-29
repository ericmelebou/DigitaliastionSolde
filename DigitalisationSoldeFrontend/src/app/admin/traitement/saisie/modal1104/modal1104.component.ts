import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { IDocument1104 } from 'src/app/_interfaces/document1104';
import { Document1104Service } from 'src/app/_services/document1104.service';

@Component({
  selector: 'app-modal1104',
  templateUrl: './modal1104.component.html',
  styleUrls: ['./modal1104.component.scss']
})
export class Modal1104Component {
  public form: any;
  document?: IDocument1104;

  id: any = 0;
  constructor(
    public modalRef: MdbModalRef<Modal1104Component>,
    private fb: FormBuilder,
    private router: Router,
    private document1104Service: Document1104Service,
  ) { }

  ngOnInit(): void {
    this.id = (this.modalRef.component as unknown as any).idDossier
    this.form = this.fb.group({
      codeEmploi: ['', Validators.required],
      dateFinEmploi: ['', Validators.required],
    });
  }
  async onSubmit(data: FormGroup) {
    data.value.idDossier = this.id;
    data.value.status = "À saisir"
    this.document1104Service.createDocument1104(data.value).subscribe({
      next: document => {
        this.document = document;
        console.log(this.document);
        this.modalRef.close(this.document);
        window.location.reload();
      }
    });
  }
}
