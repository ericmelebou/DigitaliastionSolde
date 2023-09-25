import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CIndexComponent } from './c-index/c-index.component';

const routes: Routes = [
  { path: '', component: CIndexComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControleRoutingModule { }
