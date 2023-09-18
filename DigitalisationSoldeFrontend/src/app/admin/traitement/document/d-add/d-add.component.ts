import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Modal1101Component } from '../modal1101/modal1101.component';
import { Modal1102Component } from '../modal1102/modal1102.component';
import { Modal3001Component } from '../modal3001/modal3001.component';
import { Modal2101Component } from '../modal2101/modal2101.component';
import { Modal2021Component } from '../modal2021/modal2021.component';
import { Modal2011Component } from '../modal2011/modal2011.component';
import { Modal1109Component } from '../modal1109/modal1109.component';
import { Modal1107Component } from '../modal1107/modal1107.component';
import { Modal1106Component } from '../modal1106/modal1106.component';
import { Modal1105Component } from '../modal1105/modal1105.component';
import { Modal1104Component } from '../modal1104/modal1104.component';
import { Modal1103Component } from '../modal1103/modal1103.component';
import { Document1103Service } from 'src/app/_services/document1103.service';
import { IDocument1103 } from 'src/app/_interfaces/document1103';

@Component({
  selector: 'app-d-add',
  templateUrl: './d-add.component.html',
  styleUrls: ['./d-add.component.scss']
})
export class DAddComponent {

  modalRef?: MdbModalRef<Modal1101Component>;
  id: number = 0;
  document1103s: IDocument1103[] = [];
  constructor(
    private document1103Service: Document1103Service,
    private route: ActivatedRoute, private router: Router, private modalService: MdbModalService,) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') as unknown as number

    });
    this.document1103Service.getDocument1103s().subscribe({
      next: (document1103s) => {
        this.document1103s = document1103s.filter((document1103) => {
          return document1103.idDossier == this.id;
        });
        
      },
    });
  }
  openModal1101() {
    this.modalRef = this.modalService.open(Modal1101Component, {
      modalClass: 'modal-lg',
    })
  }

  openModal1102() {
    this.modalRef = this.modalService.open(Modal1102Component, {
      modalClass: 'modal-lg',
    })
  }

  openModal1103() {
    this.modalRef = this.modalService.open(Modal1103Component, {
      modalClass: 'modal-lg',
      data: this.id
    })
  }

  openModal1104() {
    this.modalRef = this.modalService.open(Modal1104Component, {
      modalClass: 'modal-lg',
    })
  }

  openModal1105() {
    this.modalRef = this.modalService.open(Modal1105Component, {
      modalClass: 'modal-lg',
    })
  }

  openModal1106() {
    this.modalRef = this.modalService.open(Modal1106Component, {
      modalClass: 'modal-lg',
    })
  }

  openModal1107() {
    this.modalRef = this.modalService.open(Modal1107Component, {
      modalClass: 'modal-lg',
    })
  }

  openModal1109() {
    this.modalRef = this.modalService.open(Modal1109Component, {
      modalClass: 'modal-lg',
    })
  }

  openModal2011() {
    this.modalRef = this.modalService.open(Modal2011Component, {
      modalClass: 'modal-lg',
    })
  }

  openModal2021() {
    this.modalRef = this.modalService.open(Modal2021Component, {
      modalClass: 'modal-lg',
    })
  }

  openModal2101() {
    this.modalRef = this.modalService.open(Modal2101Component, {
      modalClass: 'modal-lg',
    })
  }

  openModal3001() {
    this.modalRef = this.modalService.open(Modal3001Component, {
      modalClass: 'modal-lg',
    })
  }

}
