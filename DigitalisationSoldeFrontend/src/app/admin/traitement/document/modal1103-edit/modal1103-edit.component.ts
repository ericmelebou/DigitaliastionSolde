import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDocument1103 } from 'src/app/_interfaces/document1103';
import { Modal1103Component } from '../modal1103/modal1103.component';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';
import { Document1103Service } from 'src/app/_services/document1103.service';

@Component({
  selector: 'app-modal1103-edit',
  templateUrl: './modal1103-edit.component.html',
  styleUrls: ['./modal1103-edit.component.scss']
})
export class Modal1103EditComponent {
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
    this.form = this.fb.group({
      codeServiceAnc: ['', Validators.required],
      codeServiceNv: ['', Validators.required],
      
    })
    this.document = this.modalRef.component as unknown as IDocument1103
    this.form.patchValue({
      codeServiceAnc: this.document.codeServiceAnc,
      codeServiceNv: this.document.codeServiceNv,

    });

  }
  async onSubmit(data: FormGroup) {
    this.document = {
      id: this.document!.id,
      codeServiceAnc: data.value.codeServiceAnc,
      codeServiceNv: data.value.codeServiceNv,

    };
    this.document1103Service.updateDocument1103(this.document!).subscribe({
      next: res => {
        console.log(res)
        window.location.reload();
      }, error: erro => alert(erro)
    })
  }
}
