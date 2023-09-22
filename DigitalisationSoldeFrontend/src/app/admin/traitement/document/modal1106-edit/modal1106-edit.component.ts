import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDocument1106 } from 'src/app/_interfaces/document1106';
import { Document1106Service } from 'src/app/_services/document1106.service';
import { Modal1106Component } from '../modal1106/modal1106.component';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal1106-edit',
  templateUrl: './modal1106-edit.component.html',
  styleUrls: ['./modal1106-edit.component.scss']
})
export class Modal1106EditComponent {
 public form: any;
  selectedTypeDossier: any;
  document?: IDocument1106;

  id: any = 0;
  constructor(
    public modalRef: MdbModalRef<Modal1106Component>,
    private fb: FormBuilder,
    private router: Router,
    private document1106Service: Document1106Service,

  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      codePositionSolde: ['', Validators.required],
       
    })
    this.document = this.modalRef.component as unknown as IDocument1106
    this.form.patchValue({
      codePositionSolde: this.document.codePositionSolde,
     
    });

  }
  async onSubmit(data: FormGroup) {
    this.document = {
      id: this.document!.id,
      codePositionSolde: data.value.codePositionSolde,
    
    };
    this.document1106Service.updateDocument1106(this.document!).subscribe({
      next: res => {
        console.log(res)
        window.location.reload();
      }, error: erro => alert(erro)
    })
  }
}
