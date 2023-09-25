import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VIndexComponent } from './v-index/v-index.component';

const routes: Routes = [
  { path: '', component: VIndexComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidationRoutingModule { }
