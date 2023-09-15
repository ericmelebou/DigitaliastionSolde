import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AIndexComponent } from './a-index/a-index.component';
import { AShowComponent } from './a-show/a-show.component';
import { MesDossiersComponent } from './mes-dossiers/mes-dossiers.component';

const routes: Routes = [
  { path: '', component: AIndexComponent, },
  { path: 'mes-dossiers', component: MesDossiersComponent, },
  { path: 'show/:id', component: AShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffectationRoutingModule { }
