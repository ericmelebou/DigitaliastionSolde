import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/api/product';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ProductService } from 'src/app/service/product.service';
import { FileAppService } from '../service/file.app.service';
import { Folder } from 'src/app/api/folder';
import { Metric } from 'src/app/api/metric';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { DossierService } from 'src/app/_services/dossier.service';
import { IDossier } from 'src/app/_interfaces/dossier';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/_services/agent.service';
import { IAgent } from 'src/app/_interfaces/agent';
import { AffectationDossierService } from 'src/app/_services/affectation-dossier.service';
import { IAffectationDossier } from 'src/app/_interfaces/affectation-dossier';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class HomeComponent {
  fileChart: any;

  fileChartOptions: any;

  chartPlugins: any;

  files: File[] = [];

  metrics: Metric[] = [];

  folders: Folder[] = [];

  menuitems: MenuItem[] = [];

  subscription: Subscription;

  nbrDossierInterne: any;

  nbrDossierExterne: any;

  nbrDossierTraiter: any;

  nbrDossierRejeter: any;

  nbrDossierPriseCompte: any;

  nbrDossierRecu: any;

  dossiers: IDossier[] = [];
  agents: IAgent[] = [];

  affectationDossiers: IAffectationDossier[] = [];
  dossiersNonTraiter: IDossier[] = [];
  dossiersAffecter: IDossier[] = [];

  expandedRows: expandedRows = {};

  isExpanded: boolean = false;


  agent: IAgent | undefined

  constructor(
    private fileService: FileAppService,
    private layoutService: LayoutService,
    private dossierService: DossierService,
    private agentService: AgentService,
    private affectationDossierService: AffectationDossierService,
    private router: Router
  ) {
    this.subscription = this.layoutService.configUpdate$.subscribe((config) => {
      this.initChart();
    });
  }



  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
  }

  navigateToCreateUser() {
    this.router.navigate(['profile/create'])
  }
  showDetails(dossier: IDossier) {
    this.router.navigate(["/admin/affectation/show/" + dossier.id])
  }
  getAgentById(idAgent: number) {
    return this.agents.find(agent => agent.id === idAgent)
  }
  getDossierAffecter(affectationDossiers: IAffectationDossier[], dossiers: IDossier[]) {

    for (const dossier of dossiers) {
      for (const affectationDossier of affectationDossiers) {
        if (affectationDossier.idAffectationDossier.idDossier === dossier.id) {
          this.dossiersAffecter.push(dossier)
          return;
        }
      }

    }
  }
  getAffectationDossierByLatestAffectation(idDossier: number) {
    let latestAffectationDossier = null;
    let latestDate = null;

    for (const affectationDossier of this.affectationDossiers) {
      if (affectationDossier.idAffectationDossier.idDossier === idDossier) {
        const date = new Date(affectationDossier.dateAffectation);
        if (!latestDate || date > latestDate) {

          latestDate = date;
          latestAffectationDossier = affectationDossier;
        }
      }
    }
    return latestAffectationDossier;
  }

  ngOnInit() {

    this.agentService.getAgents().subscribe({
      next: (agents) => {
        this.agents = agents;
      }
    })
    this.affectationDossierService.getAffectationDossiers().subscribe({
      next: (affectationDossiers) => {
        this.affectationDossiers = affectationDossiers;

      }
    })
    const dossiersNon = this.dossiers.filter(
      (dossier => dossier.status === 'Envoyé')
    )
    this.dossiersNonTraiter = dossiersNon
    console.log("Dossier non traiter", this.dossiersNonTraiter);

    this.dossierService.getDossiers().subscribe({
      next: (dossiers) => {
        this.dossiers = dossiers;
        this.affectationDossierService.getAffectationDossiers().subscribe({
          next: (affectationDossiers) => {
            this.affectationDossiers = affectationDossiers;
            this.getDossierAffecter(this.affectationDossiers, this.dossiers)
            console.log(this.dossiersAffecter)

          }
        })


        const dossiersNon = this.dossiers.filter(
          (dossier => dossier.status === 'Envoyé')
        )
        this.dossiersNonTraiter = dossiersNon
        console.log("Dossier non traiter", this.dossiersNonTraiter);

        // Filtrer les dossiers internes
        const dossiersInternes = this.dossiers.filter(
          (dossier) => dossier.origine === 'Interne'
        );
        this.nbrDossierInterne = dossiersInternes.length;

        // Filtrer les dossiers externes
        const dossiersExternes = this.dossiers.filter(
          (dossier) => dossier.origine === 'Externe'
        );

        this.nbrDossierExterne = dossiersExternes.length;

        // Filtrer les dossiers recus
        const dossiersRecus = this.dossiers.filter(
          (dossier) => dossier.status === 'Envoyé'
        );
        this.nbrDossierRecu = dossiersRecus.length;

        // Filtrer les dossiers traiter
        const dossiersTraiter = this.dossiers.filter(
          (dossier) => dossier.status === 'Traité'
        );
        this.nbrDossierTraiter = dossiersTraiter.length;

        // Filtrer les dossiers prise en compte
        const dossiersPriseCompte = this.dossiers.filter(
          (dossier) => dossier.status === 'Prise en compte'
        );
        this.nbrDossierPriseCompte = dossiersPriseCompte.length;

        // Filtrer les dossiers rejeter
        const dossiersRejeter = this.dossiers.filter(
          (dossier) => dossier.status === 'Rejeté'
        );
        this.nbrDossierRejeter = dossiersRejeter.length;

        console.log('Liste de tous les dossiers : ', this.dossiers);
        console.log('Nombre de dossiers internes : ', this.nbrDossierInterne);
        console.log('Nombre de dossiers externes : ', this.nbrDossierExterne);
      },
    });

    this.fileService.getFiles().then((data) => (this.files = data));



    this.fileService.getMetrics().then((data) => {
      this.metrics = data;

      if (this.metrics.length > 0) {

        this.metrics[0].files = this.nbrDossierRecu;
        this.metrics[1].files = this.nbrDossierRejeter;
        this.metrics[2].files = this.nbrDossierTraiter;
        this.metrics[3].files = this.nbrDossierPriseCompte;
      }

      // Après la modification, this.metrics aura été mis à jour
      console.log(this.metrics);
    });


    this.fileService.getFoldersLarge().then((data) => (this.folders = data));

    this.initChart();

    this.menuitems = [
      { label: 'View', icon: 'pi pi-search' },
      { label: 'Refresh', icon: 'pi pi-refresh' },
    ];
  }



  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.chartPlugins = [
      {
        beforeDraw: function (chart: any) {
          let ctx = chart.ctx;
          let width = chart.width;
          let height = chart.height;
          let fontSize = 1.5;
          let oldFill = ctx.fillStyle;

          ctx.restore();
          ctx.font = fontSize + 'rem sans-serif';
          ctx.textBaseline = 'middle';

          let text = 'Free Space';
          let text2 = 50 + 'GB / ' + 80 + 'GB';
          let textX = Math.round((width - ctx.measureText(text).width) / 2);
          let textY = (height + chart.chartArea.top) / 2.25;

          let text2X = Math.round((width - ctx.measureText(text).width) / 2.1);
          let text2Y = (height + chart.chartArea.top) / 1.75;

          ctx.fillStyle = chart.config.data.datasets[0].backgroundColor[0];
          ctx.fillText(text, textX, textY);
          ctx.fillText(text2, text2X, text2Y);
          ctx.fillStyle = oldFill;
          ctx.save();
        },
      },
    ];

    this.fileChart = {
      datasets: [
        {
          data: [300, 100],
          backgroundColor: [
            documentStyle.getPropertyValue('--primary-600'),
            documentStyle.getPropertyValue('--primary-100'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--primary-700'),
            documentStyle.getPropertyValue('--primary-200'),
          ],
          borderColor: 'transparent',
          fill: true,
        },
      ],
    };

    this.fileChartOptions = {
      animation: {
        duration: 0,
      },
      cutout: '90%',
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };
  }

  expandAll() {
    if (!this.isExpanded) {
      this.dossiers.forEach(dossier => dossier && dossier.codeIdentification ? this.expandedRows[dossier.codeIdentification] = true : '');

    } else {
      this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
  }


}



