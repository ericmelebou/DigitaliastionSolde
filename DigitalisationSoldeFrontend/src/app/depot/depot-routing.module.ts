import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DIndexComponent } from './d-index/d-index.component';
import { DAddComponent } from './d-add/d-add.component';
import { DLayoutComponent } from './d-layout/d-layout.component';
import { ModalComponent } from './modal/modal.component';
import { DShowComponent } from './d-show/d-show.component';

const routes: Routes = [
  {
    path: '', component: DLayoutComponent, children: [
      { path: '', component: DIndexComponent },
      { path: 'add', component: DAddComponent },
      { path: 'show/:id', component: DShowComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepotRoutingModule { }
