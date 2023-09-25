import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DAddComponent } from './d-add/d-add.component';

const routes: Routes = [
  { path: 'add/:id', component: DAddComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaisieRoutingModule { }
