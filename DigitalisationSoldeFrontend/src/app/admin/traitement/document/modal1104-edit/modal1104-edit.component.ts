import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDocument1104 } from 'src/app/_interfaces/document1104';
import { Document1104Service } from 'src/app/_services/document1104.service';
import { Modal1104Component } from '../modal1104/modal1104.component';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal1104-edit',
  templateUrl: './modal1104-edit.component.html',
  styleUrls: ['./modal1104-edit.component.scss']
})
export class Modal1104EditComponent {
  public form: any;
  selectedTypeDossier: any;
  document?: IDocument1104;

  id: any = 0;
  constructor(
    public modalRef: MdbModalRef<Modal1104Component>,
    private fb: FormBuilder,
    private router: Router,
    private document1104Service: Document1104Service,

  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      codeEmploi: ['', Validators.required],
      dateFinEmploi: ['', Validators.required],
       
    })
    this.document = this.modalRef.component as unknown as IDocument1104
    this.form.patchValue({
      codeEmploi: this.document.codeEmploi,
      dateFinEmploi: this.document.dateFinEmploi,
       
    });

  }
  async onSubmit(data: FormGroup) {
    this.document = {
      id: this.document!.id,
      codeEmploi: data.value.codeEmploi,
      dateFinEmploi: data.value.dateFinEmploi,
      
    };
    this.document1104Service.updateDocument1104(this.document!).subscribe({
      next: res => {
        console.log(res)
        window.location.reload();
      }, error: erro => alert(erro)
    })
  }
}
