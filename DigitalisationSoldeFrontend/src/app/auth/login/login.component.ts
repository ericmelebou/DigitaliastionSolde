import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAgent } from 'src/app/_interfaces/agent';
import { IRole } from 'src/app/_interfaces/role';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
	templateUrl: './login.component.html'
})
export class LoginComponent {

	rememberMe: boolean = false;
	agentRoles?: IRole[];
	constructor(private layoutService: LayoutService, private fb: FormBuilder,
		private router: Router, private authService: AuthService,
		private tokenService: TokenService,) { }
	authDenied = false;
	noConnection = false;
	form: any;
	credential = {
		email: '',
		password: ''
	}
	agent?: IAgent
	ngOnInit(): void {

		this.form = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required],

		})
	}
	async toLogIn(data: FormGroup) {


		this.credential.email = data.value['email']
		this.credential.password = data.value['password']
		await this.authService.logIn(this.credential).subscribe(
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
