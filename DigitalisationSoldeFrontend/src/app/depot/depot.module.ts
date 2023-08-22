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


@NgModule({
  declarations: [
    DIndexComponent,
    DAddComponent,
    DLayoutComponent,
  ],
  imports: [
    CommonModule,
    DepotRoutingModule,
    CommonModule,
    ButtonModule,
    RouterModule,
    StyleClassModule,
    AppConfigModule,
  ]
})
export class DepotModule { }
