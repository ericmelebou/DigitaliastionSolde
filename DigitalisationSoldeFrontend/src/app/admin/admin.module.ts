import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChartModule } from 'primeng/chart';
import { KnobModule } from 'primeng/knob';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
		ButtonModule,
    RatingModule,
    FormsModule,
    RippleModule,
    DropdownModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    ChartModule,
    KnobModule

  ]
})
export class AdminModule { }
