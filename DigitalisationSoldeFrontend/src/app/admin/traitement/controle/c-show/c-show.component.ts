import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { IDossier } from 'src/app/_interfaces/dossier';
import { DocumentService } from 'src/app/_services/document.service';
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
import { DossierService } from 'src/app/_services/dossier.service';

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

  deleteDocument1101: boolean = false;
  deleteDocument1102: boolean = false;
  deleteDocument1103: boolean = false;
  deleteDocument1104: boolean = false;
  deleteDocument1105: boolean = false;
  deleteDocument1106: boolean = false;
  deleteDocument1107: boolean = false;
  deleteDocument1109: boolean = false;
  deleteDocument2021: boolean = false;
  deleteDocument2101: boolean = false;
  deleteDocument3001: boolean = false;
  deleteDocument2011: boolean = false;

  deleteRedDocument1101: boolean = false;
  deleteRedDocument1102: boolean = false;
  deleteRedDocument1103: boolean = false;
  deleteRedDocument1104: boolean = false;
  deleteRedDocument1105: boolean = false;
  deleteRedDocument1106: boolean = false;
  deleteRedDocument1107: boolean = false;
  deleteRedDocument1109: boolean = false;
  deleteRedDocument2021: boolean = false;
  deleteRedDocument2101: boolean = false;
  deleteRedDocument3001: boolean = false;
  deleteRedDocument2011: boolean = false;

  public form1101: any;
  public form1102: any;
  public form1103: any;
  public form1104: any;
  public form1105: any;
  public form1106: any;
  public form1107: any;
  public form1109: any;
  public form2011: any;
  public form2021: any;
  public form2101: any;
  public form3001: any;

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

  toCorrect: boolean = false;
  dossier?: IDossier

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
    private route: ActivatedRoute, private dossierService: DossierService, private fb: FormBuilder, private router: Router, private modalService: MdbModalService, private documentService: DocumentService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') as unknown as number
      this.dossierService.getDossier(this.id).subscribe({
        next: (dossier) => {
          this.dossier = dossier
        }
      })
    });
    this.document1101Service.getDocument1101s().subscribe({
      next: (document1101s) => {
        this.document1101s = document1101s.filter((document1101) => {
          return document1101.idDossier == this.id && document1101.status != "Rejeté";
        });
        if (!this.toCorrect) {
          this.toCorrect = document1101s.filter((document1101) => {
            return document1101.idDossier == this.id && document1101.status == "À rectifier";
          }).length > 0;
        }

        this.isFull1101 = this.document1101s.length >= 1
      },
    });
    this.document1102Service.getDocument1102s().subscribe({
      next: (document1102s) => {
        this.document1102s = document1102s.filter((document1102) => {
          return document1102.idDossier == this.id && document1102.status != "Rejeté";
        });
        if (!this.toCorrect) {
          this.toCorrect = document1102s.filter((document1102) => {
            return document1102.idDossier == this.id && document1102.status == "À rectifier";
          }).length > 0;
        }

        this.isFull1102 = this.document1102s.length >= 1
      },
    });
    this.document1103Service.getDocument1103s().subscribe({
      next: (document1103s) => {
        this.document1103s = document1103s.filter((document1103) => {
          return document1103.idDossier == this.id && document1103.status != "Rejeté";
        });
        if (!this.toCorrect) {
          this.toCorrect = document1103s.filter((document1103) => {
            return document1103.idDossier == this.id && document1103.status == "À rectifier";
          }).length > 0;
        }

        this.isFull1103 = this.document1103s.length >= 1
      },
    });
    this.document1104Service.getDocument1104s().subscribe({
      next: (document1104s) => {
        this.document1104s = document1104s.filter((document1104) => {
          return document1104.idDossier == this.id && document1104.status != "Rejeté";
        });
        if (!this.toCorrect) {
          console.log(this.toCorrect)
          this.toCorrect = document1104s.filter((document1104) => {
            return document1104.idDossier == this.id && document1104.status == "À rectifier";
          }).length > 0;
          console.log(this.toCorrect)
        }

        this.isFull1104 = this.document1104s.length >= 1
      },
    });
    this.document1105Service.getDocument1105s().subscribe({
      next: (document1105s) => {
        this.document1105s = document1105s.filter((document1105) => {
          return document1105.idDossier == this.id && document1105.status != "Rejeté";
        });
        if (!this.toCorrect) {
          this.toCorrect = document1105s.filter((document1105) => {
            return document1105.idDossier == this.id && document1105.status == "À rectifier";
          }).length > 0;
        }

        this.isFull1105 = this.document1105s.length >= 1
      },
    });
    this.document1106Service.getDocument1106s().subscribe({
      next: (document1106s) => {
        this.document1106s = document1106s.filter((document1106) => {
          return document1106.idDossier == this.id && document1106.status != "Rejeté";
        });
        if (!this.toCorrect) {
          this.toCorrect = document1106s.filter((document1106) => {
            return document1106.idDossier == this.id && document1106.status == "À rectifier";
          }).length > 0;
          this.isFull1105 = this.document1105s.length >= 1
        }
        this.isFull1106 = this.document1106s.length >= 1
      },
    });
    this.document1107Service.getDocument1107s().subscribe({
      next: (document1107s) => {
        this.document1107s = document1107s.filter((document1107) => {
          return document1107.idDossier == this.id && document1107.status != "Rejeté";
        });
        if (!this.toCorrect) {
          this.toCorrect = document1107s.filter((document1107) => {
            return document1107.idDossier == this.id && document1107.status == "À rectifier";
          }).length > 0;
        }

        this.isFull1107 = this.document1107s.length >= 1
      },
    });
    this.document1109Service.getDocument1109s().subscribe({
      next: (document1109s) => {
        this.document1109s = document1109s.filter((document1109) => {
          return document1109.idDossier == this.id && document1109.status != "Rejeté";
        });
        if (!this.toCorrect) {
          this.toCorrect = document1109s.filter((document1109) => {
            return document1109.idDossier == this.id && document1109.status == "À rectifier";
          }).length > 0;
        }

        this.isFull1109 = this.document1109s.length >= 1
      },
    });
    this.document2011Service.getDocument2011s().subscribe({
      next: (document2011s) => {
        this.document2011s = document2011s.filter((document2011) => {
          return document2011.idDossier == this.id && document2011.status != "Rejeté";
        });
        if (!this.toCorrect) {
          this.toCorrect = document2011s.filter((document2011) => {
            return document2011.idDossier == this.id && document2011.status == "À rectifier";
          }).length > 0;
        }

      },
    });
    this.document2021Service.getDocument2021s().subscribe({
      next: (document2021s) => {
        this.document2021s = document2021s.filter((document2021) => {
          return document2021.idDossier == this.id && document2021.status != "Rejeté";
        });
        if (!this.toCorrect) {
          this.toCorrect = document2021s.filter((document2021) => {
            return document2021.idDossier == this.id && document2021.status == "À rectifier";
          }).length > 0;
        }

      },
    });
    this.document2101Service.getDocument2101s().subscribe({
      next: (document2101s) => {
        this.document2101s = document2101s.filter((document2101) => {
          return document2101.idDossier == this.id && document2101.status != "Rejeté";
        });
        if (!this.toCorrect) {
          this.toCorrect = document2101s.filter((document2101) => {
            return document2101.idDossier == this.id && document2101.status == "À rectifier";
          }).length > 0;
        }

      },
    });
    this.document3001Service.getDocument3001s().subscribe({
      next: (document3001s) => {
        this.document3001s = document3001s.filter((document3001) => {
          return document3001.idDossier == this.id && document3001.status != "Rejeté";
        });
        if (!this.toCorrect) {
          this.toCorrect = document3001s.filter((document3001) => {
            return document3001.idDossier == this.id && document3001.status == "À rectifier";
          }).length > 0;
        }

      },
    });
    this.form1101 = this.fb.group({
      motifRejet: ['', Validators.required],
    })
    this.form1102 = this.fb.group({
      motifRejet: ['', Validators.required],
    })
    this.form1103 = this.fb.group({
      motifRejet: ['', Validators.required],
    })
    this.form1104 = this.fb.group({
      motifRejet: ['', Validators.required],
    })
    this.form1105 = this.fb.group({
      motifRejet: ['', Validators.required],
    })
    this.form1106 = this.fb.group({
      motifRejet: ['', Validators.required],
    })
    this.form1107 = this.fb.group({
      motifRejet: ['', Validators.required],
    })
    this.form1109 = this.fb.group({
      motifRejet: ['', Validators.required],
    })
    this.form2011 = this.fb.group({
      motifRejet: ['', Validators.required],
    })
    this.form2021 = this.fb.group({
      motifRejet: ['', Validators.required],
    })
    this.form2101 = this.fb.group({
      motifRejet: ['', Validators.required],
    })
    this.form3001 = this.fb.group({
      motifRejet: ['', Validators.required],
    })
  }
  async onSubmit1101(data: FormGroup) {
    this.deleteRedDocument1101 = false;
    this.document1101!.status = "À rectifier"
    this.document1101!.motifRejet = data.value.motifRejet
    this.document1101 = this.document1101 as IDocument1101
    this.documentService.updateDocument(this.document1101).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  async onSubmit1102(data: FormGroup) {
    this.deleteRedDocument1102 = false;
    this.document1102!.status = "À rectifier"
    this.document1102!.motifRejet = data.value.motifRejet
    this.document1102 = this.document1102 as IDocument1102
    this.documentService.updateDocument(this.document1102).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  async onSubmit1103(data: FormGroup) {
    this.deleteRedDocument1103 = false;
    this.document1103!.status = "À rectifier"
    this.document1103!.motifRejet = data.value.motifRejet
    this.document1103 = this.document1103 as IDocument1103
    this.documentService.updateDocument(this.document1103).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  async onSubmit1104(data: FormGroup) {
    this.deleteRedDocument1104 = false;
    this.document1104!.status = "À rectifier"
    this.document1104!.motifRejet = data.value.motifRejet
    this.document1104 = this.document1104 as IDocument1104
    this.documentService.updateDocument(this.document1104).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  async onSubmit1105(data: FormGroup) {
    this.deleteRedDocument1105 = false;
    this.document1105!.status = "À rectifier"
    this.document1105!.motifRejet = data.value.motifRejet
    this.document1105 = this.document1105 as IDocument1105
    this.documentService.updateDocument(this.document1105).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  async onSubmit1106(data: FormGroup) {
    this.deleteRedDocument1106 = false;
    this.document1106!.status = "À rectifier"
    this.document1106!.motifRejet = data.value.motifRejet
    this.document1106 = this.document1106 as IDocument1106
    this.documentService.updateDocument(this.document1106).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  async onSubmit1107(data: FormGroup) {
    this.deleteRedDocument1107 = false;
    this.document1107!.status = "À rectifier"
    this.document1107!.motifRejet = data.value.motifRejet
    this.document1107 = this.document1107 as IDocument1107
    this.documentService.updateDocument(this.document1107).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  async onSubmit1109(data: FormGroup) {
    this.deleteRedDocument1109 = false;
    this.document1109!.status = "À rectifier"
    this.document1109!.motifRejet = data.value.motifRejet
    this.document1109 = this.document1109 as IDocument1109
    this.documentService.updateDocument(this.document1109).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  async onSubmit2011(data: FormGroup) {
    this.deleteRedDocument2011 = false;
    this.document2011!.status = "À rectifier"
    this.document2011!.motifRejet = data.value.motifRejet
    this.document2011 = this.document2011 as IDocument2011
    this.documentService.updateDocument(this.document2011).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  async onSubmit2021(data: FormGroup) {
    this.deleteRedDocument2021 = false;
    this.document2021!.status = "À rectifier"
    this.document2021!.motifRejet = data.value.motifRejet
    this.document2021 = this.document2021 as IDocument2021
    this.documentService.updateDocument(this.document2021).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  async onSubmit2101(data: FormGroup) {
    this.deleteRedDocument2101 = false;
    this.document2101!.status = "À rectifier"
    this.document2101!.motifRejet = data.value.motifRejet
    this.document2101 = this.document2101 as IDocument2101
    this.documentService.updateDocument(this.document2101).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  async onSubmit3001(data: FormGroup) {
    this.deleteRedDocument3001 = false;
    this.document3001!.status = "À rectifier"
    this.document3001!.motifRejet = data.value.motifRejet
    this.document3001 = this.document3001 as IDocument3001
    this.documentService.updateDocument(this.document3001).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  // Pour IDocument1101
  delete1101(document1101: IDocument1101) {
    this.deleteDocument1101 = true;
    this.document1101 = document1101;
  }
  confirmDelete1101() {
    this.deleteDocument1101 = false;
    console.log(this.document1101);
    const documentIdToDelete = this.document1101?.id as number;
    this.document1101Service.deleteDocument1101(documentIdToDelete).subscribe(() => {
      console.log('Document1101 supprimé avec succès');
      window.location.reload();
    }, error => {
      console.error('Erreur lors de la suppression du Document1101 :', error);
    });
  }
  redDelete1101(document1101: IDocument1101) {
    this.deleteRedDocument1101 = true;
    this.document1101 = document1101;
  }
  confirmRedDelete1101() {
    this.deleteRedDocument1101 = false;
    this.document1101!.status = "Rejeté"
    this.document1101 = this.document1101 as IDocument1101
    this.documentService.updateDocument(this.document1101).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  // Pour IDocument1102
  delete1102(document1102: IDocument1102) {
    this.deleteDocument1102 = true;
    this.document1102 = document1102;
  }
  confirmDelete1102() {
    this.deleteDocument1102 = false;
    console.log(this.document1102);
    const documentIdToDelete = this.document1102?.id as number;
    this.document1102Service.deleteDocument1102(documentIdToDelete).subscribe(() => {
      console.log('Document1102 supprimé avec succès');
      window.location.reload();
    }, error => {
      console.error('Erreur lors de la suppression du Document1102 :', error);
    });
  }
  redDelete1102(document1102: IDocument1102) {
    this.deleteRedDocument1102 = true;
    this.document1102 = document1102;
  }
  confirmRedDelete1102() {
    this.deleteRedDocument1102 = false;
    this.document1102!.status = "Rejeté"
    this.document1102 = this.document1102 as IDocument1102
    this.documentService.updateDocument(this.document1102).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  // Pour IDocument1103
  delete1103(document1103: IDocument1103) {
    this.deleteDocument1103 = true;
    this.document1103 = document1103;
  }
  confirmDelete1103() {
    this.deleteDocument1103 = false;
    console.log(this.document1103);
    const documentIdToDelete = this.document1103?.id as number;
    this.document1103Service.deleteDocument1103(documentIdToDelete).subscribe(() => {
      console.log('Document1103 supprimé avec succès');
      window.location.reload();
    }, error => {
      console.error('Erreur lors de la suppression du Document1103 :', error);
    });
  }
  redDelete1103(document1103: IDocument1103) {
    this.deleteRedDocument1103 = true;
    this.document1103 = document1103;
  }
  confirmRedDelete1103() {
    this.deleteRedDocument1103 = false;
    this.document1103!.status = "Rejeté"
    this.document1103 = this.document1103 as IDocument1103
    this.documentService.updateDocument(this.document1103).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  // Pour IDocument1104
  delete1104(document1104: IDocument1104) {
    this.deleteDocument1104 = true;
    this.document1104 = document1104;
  }
  confirmDelete1104() {
    this.deleteDocument1104 = false;
    console.log(this.document1104);
    const documentIdToDelete = this.document1104?.id as number;
    this.document1104Service.deleteDocument1104(documentIdToDelete).subscribe(() => {
      console.log('Document1104 supprimé avec succès');
      window.location.reload();
    }, error => {
      console.error('Erreur lors de la suppression du Document1104 :', error);
    });
  }
  redDelete1104(document1104: IDocument1104) {
    this.deleteRedDocument1104 = true;
    this.document1104 = document1104;
  }
  confirmRedDelete1104() {
    this.deleteRedDocument1104 = false;
    this.document1104!.status = "Rejeté"
    this.document1104 = this.document1104 as IDocument1104
    this.documentService.updateDocument(this.document1104).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  // Pour IDocument1105
  delete1105(document1105: IDocument1105) {
    this.deleteDocument1105 = true;
    this.document1105 = document1105;
  }
  confirmDelete1105() {
    this.deleteDocument1105 = false;
    console.log(this.document1105);
    const documentIdToDelete = this.document1105?.id as number;
    this.document1105Service.deleteDocument1105(documentIdToDelete).subscribe(() => {
      console.log('Document1105 supprimé avec succès');
      window.location.reload();
    }, error => {
      console.error('Erreur lors de la suppression du Document1105 :', error);
    });
  }
  redDelete1105(document1105: IDocument1105) {
    this.deleteRedDocument1105 = true;
    this.document1105 = document1105;
  }
  confirmRedDelete1105() {
    this.deleteRedDocument1105 = false;
    this.document1105!.status = "Rejeté"
    this.document1105 = this.document1105 as IDocument1105
    this.documentService.updateDocument(this.document1105).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  // Pour IDocument1106
  delete1106(document1106: IDocument1106) {
    this.deleteDocument1106 = true;
    this.document1106 = document1106;
  }
  confirmDelete1106() {
    this.deleteDocument1106 = false;
    console.log(this.document1106);
    const documentIdToDelete = this.document1106?.id as number;
    this.document1106Service.deleteDocument1106(documentIdToDelete).subscribe(() => {
      console.log('Document1106 supprimé avec succès');
      window.location.reload();
    }, error => {
      console.error('Erreur lors de la suppression du Document1106 :', error);
    });
  }
  redDelete1106(document1106: IDocument1106) {
    this.deleteRedDocument1106 = true;
    this.document1106 = document1106;
  }
  confirmRedDelete1106() {
    this.deleteRedDocument1106 = false;
    this.document1106!.status = "Rejeté"
    this.document1106 = this.document1106 as IDocument1106
    this.documentService.updateDocument(this.document1106).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  // Pour IDocument1107
  delete1107(document1107: IDocument1107) {
    this.deleteDocument1107 = true;
    this.document1107 = document1107;
  }
  confirmDelete1107() {
    this.deleteDocument1107 = false;
    console.log(this.document1107);
    const documentIdToDelete = this.document1107?.id as number;
    this.document1107Service.deleteDocument1107(documentIdToDelete).subscribe(() => {
      console.log('Document1107 supprimé avec succès');
      window.location.reload();
    }, error => {
      console.error('Erreur lors de la suppression du Document1107 :', error);
    });
  }
  redDelete1107(document1107: IDocument1107) {
    this.deleteRedDocument1107 = true;
    this.document1107 = document1107;
  }
  confirmRedDelete1107() {
    this.deleteRedDocument1107 = false;
    this.document1107!.status = "Rejeté"
    this.document1107 = this.document1107 as IDocument1107
    this.documentService.updateDocument(this.document1107).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  // Pour IDocument1109
  delete1109(document1109: IDocument1109) {
    this.deleteDocument1109 = true;
    this.document1109 = document1109;
  }
  confirmDelete1109() {
    this.deleteDocument1109 = false;
    console.log(this.document1109);
    const documentIdToDelete = this.document1109?.id as number;
    this.document1109Service.deleteDocument1109(documentIdToDelete).subscribe(() => {
      console.log('Document1109 supprimé avec succès');
      window.location.reload();
    }, error => {
      console.error('Erreur lors de la suppression du Document1109 :', error);
    });
  }
  redDelete1109(document1109: IDocument1109) {
    this.deleteRedDocument1109 = true;
    this.document1109 = document1109;
  }
  confirmRedDelete1109() {
    this.deleteRedDocument1109 = false;
    this.document1109!.status = "Rejeté"
    this.document1109 = this.document1109 as IDocument1109
    this.documentService.updateDocument(this.document1109).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  // Pour IDocument2011
  delete2011(document2011: IDocument2011) {
    this.deleteDocument2011 = true;
    this.document2011 = document2011;
  }
  confirmDelete2011() {
    this.deleteDocument2011 = false;
    console.log(this.document2011);
    const documentIdToDelete = this.document2011?.id as number;
    this.document2011Service.deleteDocument2011(documentIdToDelete).subscribe(() => {
      console.log('Document2011 supprimé avec succès');
      window.location.reload();
    }, error => {
      console.error('Erreur lors de la suppression du Document2011 :', error);
    });
  }
  redDelete2011(document2011: IDocument2011) {
    this.deleteRedDocument2011 = true;
    this.document2011 = document2011;
  }
  confirmRedDelete2011() {
    this.deleteRedDocument2011 = false;
    this.document2011!.status = "Rejeté"
    this.document2011 = this.document2011 as IDocument2011
    this.documentService.updateDocument(this.document2011).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  // Pour IDocument2021
  delete2021(document2021: IDocument2021) {
    this.deleteDocument2021 = true;
    this.document2021 = document2021;
  }
  confirmDelete2021() {
    this.deleteDocument2021 = false;
    console.log(this.document2021);
    const documentIdToDelete = this.document2021?.id as number;
    this.document2021Service.deleteDocument2021(documentIdToDelete).subscribe(() => {
      console.log('Document2021 supprimé avec succès');
      window.location.reload();
    }, error => {
      console.error('Erreur lors de la suppression du Document2021 :', error);
    });
  }
  redDelete2021(document2021: IDocument2021) {
    this.deleteRedDocument2021 = true;
    this.document2021 = document2021;
  }
  confirmRedDelete2021() {
    this.deleteRedDocument2021 = false;
    this.document2021!.status = "Rejeté"
    this.document2021 = this.document2021 as IDocument2021
    this.documentService.updateDocument(this.document2021).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  // Pour IDocument2101
  delete2101(document2101: IDocument2101) {
    this.deleteDocument2101 = true;
    this.document2101 = document2101;
  }
  confirmDelete2101() {
    this.deleteDocument2101 = false;
    console.log(this.document2101);
    const documentIdToDelete = this.document2101?.id as number;
    this.document2101Service.deleteDocument2101(documentIdToDelete).subscribe(() => {
      console.log('Document2101 supprimé avec succès');
      window.location.reload();
    }, error => {
      console.error('Erreur lors de la suppression du Document2101 :', error);
    });
  }
  redDelete2101(document2101: IDocument2101) {
    this.deleteRedDocument2101 = true;
    this.document2101 = document2101;
  }
  confirmRedDelete2101() {
    this.deleteRedDocument2101 = false;
    this.document2101!.status = "Rejeté"
    this.document2101 = this.document2101 as IDocument2101
    this.documentService.updateDocument(this.document2101).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  // Pour IDocument3001
  delete3001(document3001: IDocument3001) {
    this.deleteDocument3001 = true;
    this.document3001 = document3001;
  }
  confirmDelete3001() {
    this.deleteDocument3001 = false;
    console.log(this.document3001);
    const documentIdToDelete = this.document3001?.id as number;
    this.document3001Service.deleteDocument3001(documentIdToDelete).subscribe(() => {
      console.log('Document3001 supprimé avec succès');
      window.location.reload();
    }, error => {
      console.error('Erreur lors de la suppression du Document3001 :', error);
    });
  }
  redDelete3001(document3001: IDocument3001) {
    this.deleteRedDocument3001 = true;
    this.document3001 = document3001;
  }
  confirmRedDelete3001() {
    this.deleteRedDocument3001 = false;
    this.document3001!.status = "Rejeté"
    this.document3001 = this.document3001 as IDocument3001
    this.documentService.updateDocument(this.document3001).subscribe({
      next: answer => {
        console.log(answer)
        window.location.reload();
      }
    })
  }
  backToCorrect() {
    const formData: FormData = new FormData();
    formData.append('id', this.dossier!.id as any);
    formData.append('status', 'À saisir');
    this.dossierService.updateDossier(formData).subscribe({
      next: (answer: any) => {
        console.log(answer)
        this.router.navigate(['/admin/traitement/controle']);
      }
    })
  }
  backToList() {
    this.router.navigate(['/admin/traitement/controle']);
  }
}
