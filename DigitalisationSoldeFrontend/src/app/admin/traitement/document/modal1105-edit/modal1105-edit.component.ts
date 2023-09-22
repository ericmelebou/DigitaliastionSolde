import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDocument1105 } from 'src/app/_interfaces/document1105';
import { Document1105Service } from 'src/app/_services/document1105.service';
import { Modal1105Component } from '../modal1105/modal1105.component';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal1105-edit',
  templateUrl: './modal1105-edit.component.html',
  styleUrls: ['./modal1105-edit.component.scss']
})
export class Modal1105EditComponent {
  public form: any;
  selectedTypeDossier: any;
  document?: IDocument1105;

  id: any = 0;
  constructor(
    public modalRef: MdbModalRef<Modal1105Component>,
    private fb: FormBuilder,
    private router: Router,
    private document1105Service: Document1105Service,

  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      codeLieuAffectation: ['', Validators.required],
      
    })
    this.document = this.modalRef.component as unknown as IDocument1105
    this.form.patchValue({
      codeLieuAffectation: this.document.codeLieuAffectation,
     
    });

  }
  async onSubmit(data: FormGroup) {
    this.document = {
      id: this.document!.id,
      codeLieuAffectation: data.value.codeLieuAffectation,
   
    };
    this.document1105Service.updateDocument1105(this.document!).subscribe({
      next: res => {
        console.log(res)
        window.location.reload();
      }, error: erro => alert(erro)
    })
  }
}
