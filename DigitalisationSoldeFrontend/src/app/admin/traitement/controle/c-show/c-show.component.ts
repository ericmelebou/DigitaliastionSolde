import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { IDocument1101 } from 'src/app/_interfaces/document1101';
import { IDocument1102 } from 'src/app/_interfaces/document1102';
import { IDocument1103 } from 'src/app/_interfaces/document1103';
import { IDocument1104 } from 'src/app/_interfaces/document1104';
import { IDocument1105 } from 'src/app/_interfaces/document1105';
import { IDocument1106 } from 'src/app/_interfaces/document1106';
import { IDocument1107 } from 'src/app/_interfaces/document1107';
import { IDocument1109 } from 'src/app/_interfaces/document1109';
import { IDocument2011 } from 'src/app/_interfaces/document2011';
import { IDocument2021 } from 'src/app/_interfaces/document2021';
import { IDocument2101 } from 'src/app/_interfaces/document2101';
import { IDocument3001 } from 'src/app/_interfaces/document3001';
import { Document1101Service } from 'src/app/_services/document1101.service';
import { Document1102Service } from 'src/app/_services/document1102.service';
import { Document1103Service } from 'src/app/_services/document1103.service';
import { Document1104Service } from 'src/app/_services/document1104.service';
import { Document1105Service } from 'src/app/_services/document1105.service';
import { Document1106Service } from 'src/app/_services/document1106.service';
import { Document1107Service } from 'src/app/_services/document1107.service';
import { Document1109Service } from 'src/app/_services/document1109.service';
import { Document2011Service } from 'src/app/_services/document2011.service';
import { Document2021Service } from 'src/app/_services/document2021.service';
import { Document2101Service } from 'src/app/_services/document2101.service';
import { Document3001Service } from 'src/app/_services/document3001.service';

@Component({
  selector: 'app-c-show',
  templateUrl: './c-show.component.html',
  styleUrls: ['./c-show.component.scss']
})
export class CShowComponent {

  document1101?: IDocument1101;
  document1102?: IDocument1102;
  document1103?: IDocument1103;
  document1104?: IDocument1104;
  document1105?: IDocument1105;
  document1106?: IDocument1106;
  document1107?: IDocument1107;
  document1109?: IDocument1109;
  document2011?: IDocument2011;
  document2021?: IDocument2021;
  document2101?: IDocument2101;
  document3001?: IDocument3001;


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

 id: number = 0

  isFull1101: boolean = false;
  isFull1102: boolean = false;
  isFull1103: boolean = false;
  isFull1104: boolean = false;
  isFull1105: boolean = false;
  isFull1106: boolean = false;
  isFull1107: boolean = false;
  isFull1109: boolean = false;

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
        this.isFull1101 = this.document1101s.length >= 1
      },
    });
    this.document1102Service.getDocument1102s().subscribe({
      next: (document1102s) => {
        this.document1102s = document1102s.filter((document1102) => {
          return document1102.idDossier == this.id;
        });
        this.isFull1102 = this.document1102s.length >= 1
      },
    });
    this.document1103Service.getDocument1103s().subscribe({
      next: (document1103s) => {
        this.document1103s = document1103s.filter((document1103) => {
          return document1103.idDossier == this.id;
        });
        this.isFull1103 = this.document1103s.length >= 1
      },
    });
    this.document1104Service.getDocument1104s().subscribe({
      next: (document1104s) => {
        this.document1104s = document1104s.filter((document1104) => {
          return document1104.idDossier == this.id;
        });
        this.isFull1104 = this.document1104s.length >= 1
      },
    });
    this.document1105Service.getDocument1105s().subscribe({
      next: (document1105s) => {
        this.document1105s = document1105s.filter((document1105) => {
          return document1105.idDossier == this.id;
        });
        this.isFull1105 = this.document1105s.length >= 1
      },
    });
    this.document1106Service.getDocument1106s().subscribe({
      next: (document1106s) => {
        this.document1106s = document1106s.filter((document1106) => {
          return document1106.idDossier == this.id;
        });
        this.isFull1106 = this.document1106s.length >= 1
      },
    });
    this.document1107Service.getDocument1107s().subscribe({
      next: (document1107s) => {
        this.document1107s = document1107s.filter((document1107) => {
          return document1107.idDossier == this.id;
        });
        this.isFull1107 = this.document1107s.length >= 1
      },
    });
    this.document1109Service.getDocument1109s().subscribe({
      next: (document1109s) => {
        this.document1109s = document1109s.filter((document1109) => {
          return document1109.idDossier == this.id;
        });
        this.isFull1109 = this.document1109s.length >= 1
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


}
