import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationRoutingModule } from './validation-routing.module';
import { VIndexComponent } from './v-index/v-index.component';


@NgModule({
  declarations: [
    VIndexComponent
  ],
  imports: [
    CommonModule,
    ValidationRoutingModule
  ]
})
export class ValidationModule { }
