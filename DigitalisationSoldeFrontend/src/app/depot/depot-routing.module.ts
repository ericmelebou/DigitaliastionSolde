import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DlayoutComponent } from './dlayout/dlayout.component';
import { HomeComponent } from './home/home.component';
import { DAddComponent } from './dossier/d-add/d-add.component';
import { FormLayoutDemoModule } from './dossier/formlayout/formlayoutdemo.module';
import { FormLayoutDemoComponent } from './dossier/formlayout/formlayoutdemo.component';

const routes: Routes = [
  {
    path: '', component: DlayoutComponent, children: [
      { path: "", redirectTo: "addDossier", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      {path : "form-layout",  component :  FormLayoutDemoComponent},
      {path: "addDossier", component : DAddComponent }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepotRoutingModule { }
