import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepotRoutingModule } from './depot-routing.module';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { DIndexComponent } from './d-index/d-index.component';
import { DAddComponent } from './d-add/d-add.component';
import { DLayoutComponent } from './d-layout/d-layout.component';
import { MatTableModule } from '@angular/material/table';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { DShowComponent } from './d-show/d-show.component';



@NgModule({
  declarations: [
    DIndexComponent,
    DAddComponent,
    DLayoutComponent,
    ModalComponent,
    DShowComponent,
  ],
  imports: [
    CommonModule,
    DepotRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MdbModalModule,
    CommonModule,
    ButtonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
    NgbPaginationModule,
    RouterModule,
    StyleClassModule,
    MatTableModule,
    AppConfigModule,
  ]
})
export class DepotModule { }
