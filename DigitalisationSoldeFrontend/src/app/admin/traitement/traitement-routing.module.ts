import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TIndexComponent } from './t-index/t-index.component';

const routes: Routes = [
  { path: '', component: TIndexComponent, },
  { path: 'document', loadChildren: () => import('./document/document.module').then(m => m.DocumentModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraitementRoutingModule { }
