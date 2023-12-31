import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { IDossier } from 'src/app/_interfaces/dossier';
import { DossierService } from 'src/app/_services/dossier.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  form: any
  dossier?: IDossier
  id: number = 0;
  constructor(public modalRef: MdbModalRef<ModalComponent>, private route: ActivatedRoute,
    private dossierService: DossierService) { }
  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }
  ngOnInit(): void {


    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') as unknown as number
      console.log(this.id)
    });

    this.dossierService.getDossier(this.id).subscribe({
      next: dossier => {
        this.dossier = dossier
        console.log(this.dossier)
      }
    });
  }
}
