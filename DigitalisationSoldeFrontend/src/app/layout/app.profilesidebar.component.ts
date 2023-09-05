import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AgentService } from '../_services/agent.service';
import { IAgent } from '../_interfaces/agent';
import { TokenService } from '../_services/token.service';

@Component({
    selector: 'app-profilemenu',
    templateUrl: './app.profilesidebar.component.html'
})
export class AppProfileSidebarComponent {

    agent?: IAgent;
    constructor(public layoutService: LayoutService, private agentService: AgentService, private tokenService : TokenService) { }

    ngOnInit() {
        this.agentService.getAgent(localStorage.getItem('agentId') as unknown as number).subscribe({
            next: (agent) => {
                this.agent = agent;
                console.log('Agent connecté : ', this.agent);
            },
        });
    }
    logOut() {
        this.tokenService.clearToken()
      }
    get visible(): boolean {
        return this.layoutService.state.profileSidebarVisible;
    }

    set visible(_val: boolean) {
        this.layoutService.state.profileSidebarVisible = _val;
    }
}