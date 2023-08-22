import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DAddComponent } from './d-add/d-add.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', data: { breadcrumb: 'Form Layout' }, component: DAddComponent }
	])],
	exports: [RouterModule]
})
export class DossierRoutingModule { }