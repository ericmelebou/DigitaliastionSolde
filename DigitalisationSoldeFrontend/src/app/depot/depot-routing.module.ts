import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DlayoutComponent } from './dlayout/dlayout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: DlayoutComponent, children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "", component: HomeComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepotRoutingModule { }