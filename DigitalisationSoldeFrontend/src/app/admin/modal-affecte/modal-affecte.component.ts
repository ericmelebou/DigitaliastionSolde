import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { IDossier } from 'src/app/_interfaces/dossier';
import { DossierService } from 'src/app/_services/dossier.service';
import { IAgent } from 'src/app/_interfaces/agent';
import { AgentService } from 'src/app/_services/agent.service';

@Component({
  selector: 'app-modal-affecte',
  templateUrl: './modal-affecte.component.html',
  styleUrls: ['./modal-affecte.component.scss'],
})
export class ModalAffecteComponent {
  form: any;
  selectedAgent: any;
  agentList: IAgent[] = [];

  constructor(
    public modalRef: MdbModalRef<ModalAffecteComponent>,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private agentService : AgentService
  ) {}
  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      codeIdentification : [''],
      agent: ['', Validators.required],
    });


    this.agentService.getAgents().subscribe({
      next: (agents) => {
        this.agentList = agents;
        console.log('ma liste des agents', this.agentList);
      },
    });

    

  }
}
