import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAgent } from 'src/app/_interfaces/agent';
import { IRole } from 'src/app/_interfaces/role';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
	templateUrl: './register.component.html'
})
export class RegisterComponent {

	confirmed: boolean = false;
	rememberMe: boolean = false;
	agentRoles?: IRole[];
	constructor(private layoutService: LayoutService, private fb: FormBuilder,
		private router: Router, private authService: AuthService,
		private tokenService: TokenService,) { }
	authDenied = false;
	noConnection = false;
	form: any;

	agent: IAgent = {
		nom: '',
		prenom: '',
		email: '',
		password: '',
	}
	ngOnInit(): void {
		this.form = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
			nom: ['', Validators.required],
			prenom: ['', Validators.required],
		})
	}
	async toSignUp(data: FormGroup) {
		this.agent!.email = data.value['email']
		this.agent!.password = data.value['password']
		this.agent!.nom = data.value['nom']
		this.agent!.prenom = data.value['prenom']
		await this.authService.signUp(this.agent).subscribe(
			{
				next: data => {
					this.agent = data.agent
					localStorage.setItem('agentId', data.agent.id)
					this.tokenService.saveToken(data.token)
					this.agentRoles = data.agent.roles
					console.log(this.agentRoles)
					if (this.agentRoles!.length === 1 && this.agentRoles![0].nom === "USAGER") {
						this.router.navigate(['/depot'])
					} else {
						this.router.navigate(['/admin'])
					}
				},
				error: error => {
					console.log(error)
					if (error.status == 0) {
						this.noConnection = true
						this.authDenied = false
					} else if (error.status == 403) {
						this.authDenied = true
						this.noConnection = false
					}
				}
			}
		)

	}
	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}

}
