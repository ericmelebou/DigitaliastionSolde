import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControleRoutingModule } from './controle-routing.module';
import { CIndexComponent } from './c-index/c-index.component';


@NgModule({
  declarations: [
    CIndexComponent
  ],
  imports: [
    CommonModule,
    ControleRoutingModule
  ]
})
export class ControleModule { }
