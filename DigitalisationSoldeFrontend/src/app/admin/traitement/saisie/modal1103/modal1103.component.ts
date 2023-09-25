import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { IDocument1103 } from 'src/app/_interfaces/document1103';
import { IDossier } from 'src/app/_interfaces/dossier';
import { Document1103Service } from 'src/app/_services/document1103.service';
import { ModalComponent } from 'src/app/depot/modal/modal.component';

@Component({
  selector: 'app-modal1103',
  templateUrl: './modal1103.component.html',
  styleUrls: ['./modal1103.component.scss']
})
export class Modal1103Component {
  public form: any;
  selectedTypeDossier: any;
  document?: IDocument1103;

  id: any = 0;
  constructor(
    public modalRef: MdbModalRef<Modal1103Component>,
    private fb: FormBuilder,
    private router: Router,
    private document1103Service: Document1103Service,

  ) { }
  ngOnInit(): void {
    this.id = this.modalRef.component as unknown as any
    this.form = this.fb.group({
      codeServiceAnc: ['', Validators.required],
      codeServiceNv: ['', Validators.required],
    })

  }
  async onSubmit(data: FormGroup) {
    data.value.idDossier = this.id['0']
    data.value.status = "À saisir"
    this.document1103Service.createDocument1103(data.value).subscribe({
      next: document => {
        this.document = document
        console.log(this.document)
        this.modalRef.close(this.document)
        window.location.reload();
      }
    });
  }
}
