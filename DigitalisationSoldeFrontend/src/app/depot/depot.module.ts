import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DlayoutComponent } from './dlayout/dlayout.component';
import { DepotRoutingModule } from './depot-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    DlayoutComponent,
  ],
  imports: [
    CommonModule,
    DepotRoutingModule
  ]
})
export class DepotModule { }
