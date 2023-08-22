import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';
import { ErrorComponent } from './auth/error/error.component';

const routes: Routes = [
  { path: 'uikit', data: { breadcrumb: 'UI Kit' }, loadChildren: () => import('./uikit/uikit.module').then(m => m.UIkitModule) },
  { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: 'depot', canActivate: [AuthGuard], loadChildren: () => import('./depot/depot.module').then(m => m.DepotModule) },
  { path: 'auth', data: { breadcrumb: 'Auth' }, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '**', component: ErrorComponent },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
