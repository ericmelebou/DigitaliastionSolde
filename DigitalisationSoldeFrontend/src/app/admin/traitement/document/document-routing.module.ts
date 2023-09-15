import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DIndexComponent } from './d-index/d-index.component';
import { DAddComponent } from './d-add/d-add.component';

const routes: Routes = [
  { path: '', component: DIndexComponent, },
  { path: 'add/:id', component: DAddComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
