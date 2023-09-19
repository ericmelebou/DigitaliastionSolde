import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { IDocument1101 } from 'src/app/_interfaces/document1101';
import { Document1101Service } from 'src/app/_services/document1101.service';

@Component({
  selector: 'app-modal1101',
  templateUrl: './modal1101.component.html',
  styleUrls: ['./modal1101.component.scss']
})
export class Modal1101Component {
  public form: any;
  selectedTypeDossier: any;
  document?: IDocument1101;

  id: any = 0;
  constructor(
    public modalRef: MdbModalRef<Modal1101Component>,
    private fb: FormBuilder,
    private router: Router,
    private document1101Service: Document1101Service,

  ) { }
  ngOnInit(): void {
    this.id = this.modalRef.component as unknown as any
    this.form = this.fb.group({
      codeTitre: ['', Validators.required],
      nom: ['', Validators.required],
      codeSexe: ['', Validators.required],
      codeSituationMatrimoniale: ['', Validators.required],
      codeStatut: ['', Validators.required],
      nombreEnfantAf: ['', Validators.required],
      codeSalaireUnique: ['', Validators.required],
      categorieImpIrpp: ['', Validators.required],
    })

  }
  async onSubmit(data: FormGroup) {
    data.value.idDossier = this.id['0']
    this.document1101Service.createDocument1101(data.value).subscribe({
      next: document => {
        this.document = document
        console.log(this.document)
        this.modalRef.close(this.document)
        window.location.reload();
      }
    });
  }
}
