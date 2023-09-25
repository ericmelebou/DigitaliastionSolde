import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'saisie', loadChildren: () => import('./saisie/saisie.module').then(m => m.SaisieModule) },
  { path: 'controle', loadChildren: () => import('./controle/controle.module').then(m => m.ControleModule) },
  { path: 'validation', loadChildren: () => import('./validation/validation.module').then(m => m.ValidationModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraitementRoutingModule { }
