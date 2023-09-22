import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDocument1109 } from 'src/app/_interfaces/document1109';
import { Document1109Service } from 'src/app/_services/document1109.service';
import { Modal1109Component } from '../modal1109/modal1109.component';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal1109-edit',
  templateUrl: './modal1109-edit.component.html',
  styleUrls: ['./modal1109-edit.component.scss']
})
export class Modal1109EditComponent {
  public form: any;
  selectedTypeDossier: any;
  document?: IDocument1109;

  id: any = 0;
  constructor(
    public modalRef: MdbModalRef<Modal1109Component>,
    private fb: FormBuilder,
    private router: Router,
    private document1109Service: Document1109Service,

  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      dateMariage: ['', Validators.required],
      
    })
    this.document = this.modalRef.component as unknown as IDocument1109
    this.form.patchValue({
      dateMariage: this.document.dateMariage,
     
    });

  }
  async onSubmit(data: FormGroup) {
    this.document = {
      id: this.document!.id,
      dateMariage: data.value.dateMariage,
      
    };
    this.document1109Service.updateDocument1109(this.document!).subscribe({
      next: res => {
        console.log(res)
        window.location.reload();
      }, error: erro => alert(erro)
    })
  }
}
