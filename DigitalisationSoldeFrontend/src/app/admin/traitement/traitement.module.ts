import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraitementRoutingModule } from './traitement-routing.module';
import { TIndexComponent } from './t-index/t-index.component';


@NgModule({
  declarations: [
    TIndexComponent
  ],
  imports: [
    CommonModule,
    TraitementRoutingModule
  ]
})
export class TraitementModule { }
