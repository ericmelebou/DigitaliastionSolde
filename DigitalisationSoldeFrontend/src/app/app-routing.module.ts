import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], loadChildren: () => import('./depot/depot.module').then(m => m.DepotModule) },
  { path: 'auth', data: { breadcrumb: 'Auth' }, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
