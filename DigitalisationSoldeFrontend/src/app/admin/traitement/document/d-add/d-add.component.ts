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
import { Document3001Service } from 'src/app/_services/document3001.service';
import { Document2101Service } from 'src/app/_services/document2101.service';
import { Document2021Service } from 'src/app/_services/document2021.service';
import { Document1107Service } from 'src/app/_services/document1107.service';
import { Document1105Service } from 'src/app/_services/document1105.service';
import { Document1104Service } from 'src/app/_services/document1104.service';
import { Document1102Service } from 'src/app/_services/document1102.service';
import { Document1101Service } from 'src/app/_services/document1101.service';
import { Document1106Service } from 'src/app/_services/document1106.service';
import { Document1109Service } from 'src/app/_services/document1109.service';
import { Document2011Service } from 'src/app/_services/document2011.service';
import { IDocument1101 } from 'src/app/_interfaces/document1101';
import { IDocument1102 } from 'src/app/_interfaces/document1102';
import { IDocument1104 } from 'src/app/_interfaces/document1104';
import { IDocument1105 } from 'src/app/_interfaces/document1105';
import { IDocument1106 } from 'src/app/_interfaces/document1106';
import { IDocument2101 } from 'src/app/_interfaces/document2101';
import { IDocument3001 } from 'src/app/_interfaces/document3001';
import { IDocument1109 } from 'src/app/_interfaces/document1109';
import { IDocument2011 } from 'src/app/_interfaces/document2011';
import { IDocument1107 } from 'src/app/_interfaces/document1107';
import { IDocument2021 } from 'src/app/_interfaces/document2021';

@Component({
  selector: 'app-d-add',
  templateUrl: './d-add.component.html',
  styleUrls: ['./d-add.component.scss']
})
export class DAddComponent {

  modalRef1101?: MdbModalRef<Modal1101Component>;
  modalRef1102?: MdbModalRef<Modal1102Component>;
  modalRef1103?: MdbModalRef<Modal1103Component>;
  modalRef1104?: MdbModalRef<Modal1104Component>;
  modalRef1105?: MdbModalRef<Modal1105Component>;
  modalRef1106?: MdbModalRef<Modal1106Component>;
  modalRef1107?: MdbModalRef<Modal1107Component>;
  modalRef1109?: MdbModalRef<Modal1109Component>;
  modalRef2011?: MdbModalRef<Modal2011Component>;
  modalRef2021?: MdbModalRef<Modal2021Component>;
  modalRef2101?: MdbModalRef<Modal2101Component>;
  modalRef3001?: MdbModalRef<Modal3001Component>;
  id: number = 0;
  document1101s: IDocument1101[] = [];
  document1102s: IDocument1102[] = [];
  document1103s: IDocument1103[] = [];
  document1104s: IDocument1104[] = [];
  document1105s: IDocument1105[] = [];
  document1106s: IDocument1106[] = [];
  document1107s: IDocument1107[] = [];
  document1109s: IDocument1109[] = [];
  document2011s: IDocument2011[] = [];
  document2021s: IDocument2021[] = [];
  document2101s: IDocument2101[] = [];
  document3001s: IDocument3001[] = [];
  constructor(
    private document1101Service: Document1101Service,
    private document1102Service: Document1102Service,
    private document1103Service: Document1103Service,
    private document1104Service: Document1104Service,
    private document1105Service: Document1105Service,
    private document1106Service: Document1106Service,
    private document1107Service: Document1107Service,
    private document1109Service: Document1109Service,
    private document2011Service: Document2011Service,
    private document2021Service: Document2021Service,
    private document2101Service: Document2101Service,
    private document3001Service: Document3001Service,
    private route: ActivatedRoute, private router: Router, private modalService: MdbModalService,) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') as unknown as number

    });
    this.document1101Service.getDocument1101s().subscribe({
      next: (document1101s) => {
        this.document1101s = document1101s.filter((document1101) => {
          return document1101.idDossier == this.id;
        });

      },
    });
    this.document1102Service.getDocument1102s().subscribe({
      next: (document1102s) => {
        this.document1102s = document1102s.filter((document1102) => {
          return document1102.idDossier == this.id;
        });

      },
    });
    this.document1103Service.getDocument1103s().subscribe({
      next: (document1103s) => {
        this.document1103s = document1103s.filter((document1103) => {
          return document1103.idDossier == this.id;
        });

      },
    });
    this.document1104Service.getDocument1104s().subscribe({
      next: (document1104s) => {
        this.document1104s = document1104s.filter((document1104) => {
          return document1104.idDossier == this.id;
        });

      },
    });
    this.document1105Service.getDocument1105s().subscribe({
      next: (document1105s) => {
        this.document1105s = document1105s.filter((document1105) => {
          return document1105.idDossier == this.id;
        });

      },
    });
    this.document1106Service.getDocument1106s().subscribe({
      next: (document1106s) => {
        this.document1106s = document1106s.filter((document1106) => {
          return document1106.idDossier == this.id;
        });

      },
    });
    this.document1107Service.getDocument1107s().subscribe({
      next: (document1107s) => {
        this.document1107s = document1107s.filter((document1107) => {
          return document1107.idDossier == this.id;
        });

      },
    });
    this.document1109Service.getDocument1109s().subscribe({
      next: (document1109s) => {
        this.document1109s = document1109s.filter((document1109) => {
          return document1109.idDossier == this.id;
        });

      },
    });
    this.document2011Service.getDocument2011s().subscribe({
      next: (document2011s) => {
        this.document2011s = document2011s.filter((document2011) => {
          return document2011.idDossier == this.id;
        });

      },
    });
    this.document2021Service.getDocument2021s().subscribe({
      next: (document2021s) => {
        this.document2021s = document2021s.filter((document2021) => {
          return document2021.idDossier == this.id;
        });

      },
    });
    this.document2101Service.getDocument2101s().subscribe({
      next: (document2101s) => {
        this.document2101s = document2101s.filter((document2101) => {
          return document2101.idDossier == this.id;
        });

      },
    });
    this.document3001Service.getDocument3001s().subscribe({
      next: (document3001s) => {
        this.document3001s = document3001s.filter((document3001) => {
          return document3001.idDossier == this.id;
        });

      },
    });
  }
  openModal1101() {
    this.modalRef1101 = this.modalService.open(Modal1101Component, {
      modalClass: 'modal-lg',
      data: this.id
    })
  }

  openModal1102() {
    this.modalRef1102 = this.modalService.open(Modal1102Component, {
      modalClass: 'modal-lg',
      data: this.id
    })
  }

  openModal1103() {
    this.modalRef1103 = this.modalService.open(Modal1103Component, {
      modalClass: 'modal-lg',
      data: this.id
    })
  }

  openModal1104() {
    this.modalRef1104 = this.modalService.open(Modal1104Component, {
      modalClass: 'modal-lg',
      data: this.id
    })
  }

  openModal1105() {
    this.modalRef1105 = this.modalService.open(Modal1105Component, {
      modalClass: 'modal-lg',
      data: this.id
    })
  }

  openModal1106() {
    this.modalRef1106 = this.modalService.open(Modal1106Component, {
      modalClass: 'modal-lg',
      data: this.id
    })
  }

  openModal1107() {
    this.modalRef1107 = this.modalService.open(Modal1107Component, {
      modalClass: 'modal-lg',
      data: this.id
    })
  }

  openModal1109() {
    this.modalRef1109 = this.modalService.open(Modal1109Component, {
      modalClass: 'modal-lg',
      data: this.id
    })
  }

  openModal2011() {
    this.modalRef2011 = this.modalService.open(Modal2011Component, {
      modalClass: 'modal-lg',
      data: this.id
    })
  }

  openModal2021() {
    this.modalRef2021 = this.modalService.open(Modal2021Component, {
      modalClass: 'modal-lg',
      data: this.id
    })
  }

  openModal2101() {
    this.modalRef2101 = this.modalService.open(Modal2101Component, {
      modalClass: 'modal-lg',
      data: this.id
    })
  }

  openModal3001() {
    this.modalRef3001 = this.modalService.open(Modal3001Component, {
      modalClass: 'modal-lg',
      data: this.id
    })
  }

}
