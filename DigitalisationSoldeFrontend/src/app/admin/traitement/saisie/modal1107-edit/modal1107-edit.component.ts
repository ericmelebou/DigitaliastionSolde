import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDocument1107 } from 'src/app/_interfaces/document1107';
import { Document1107Service } from 'src/app/_services/document1107.service';
import { Modal1107Component } from '../modal1107/modal1107.component';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal1107-edit',
  templateUrl: './modal1107-edit.component.html',
  styleUrls: ['./modal1107-edit.component.scss']
})
export class Modal1107EditComponent {
  public form: any;
  selectedTypeDossier: any;
  document?: IDocument1107;

  id: any = 0;
  constructor(
    public modalRef: MdbModalRef<Modal1107Component>,
    private fb: FormBuilder,
    private router: Router,
    private document1107Service: Document1107Service,

  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      codeModeReglement: ['', Validators.required],
      numeroCompteEnBanque: ['', Validators.required],
      codeAgence: ['', Validators.required],
      cleRib: ['', Validators.required],
      
    })
    this.document = this.modalRef.component as unknown as IDocument1107
    this.form.patchValue({
      codeModeReglement: this.document.codeModeReglement,
      numeroCompteEnBanque: this.document.numeroCompteEnBanque,
      codeAgence: this.document.codeAgence,
      cleRib: this.document.cleRib,
       
    });

  }
  async onSubmit(data: FormGroup) {
    this.document = {
      id: this.document!.id,
      codeModeReglement: data.value.codeModeReglement,
      numeroCompteEnBanque: data.value.numeroCompteEnBanque,
      codeAgence: data.value.codeAgence,
      cleRib: data.value.cleRib,
       
    };
    this.document1107Service.updateDocument1107(this.document!).subscribe({
      next: res => {
        console.log(res)
        window.location.reload();
      }, error: erro => alert(erro)
    })
  }
}
