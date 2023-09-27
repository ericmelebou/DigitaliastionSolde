import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CIndexComponent } from './c-index/c-index.component';
import { CShowComponent } from './c-show/c-show.component';

const routes: Routes = [
  { path: '', component: CIndexComponent,},
    {path: 'c-show/:id', component: CShowComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControleRoutingModule { }
