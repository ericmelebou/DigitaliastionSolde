import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DAddComponent } from './d-add/d-add.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', data: { breadcrumb: 'Form Layout' }, component: DAddComponent },
    { path: 'formlayout', data: { breadcrumb: 'Form Layout' }, loadChildren: () => import('../dossier/formlayout/formlayoutdemo.module').then(m => m.FormLayoutDemoModule) },
    { path: '**', redirectTo: '/notfound' }

	])],
	exports: [RouterModule]
})
export class DossierRoutingModule { }
