import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffectationRoutingModule } from './affectation-routing.module';
import { AIndexComponent } from './a-index/a-index.component';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { AShowComponent } from './a-show/a-show.component';
import { CardModule } from 'primeng/card'; 
import { FormsModule } from '@angular/forms';
import { MesDossiersComponent } from './mes-dossiers/mes-dossiers.component';


@NgModule({
  declarations: [
    AIndexComponent,
    AShowComponent,
    MesDossiersComponent
  ],
  imports: [
    CommonModule,
    AffectationRoutingModule,
    FormsModule,
    RippleModule,
		ButtonModule,
		InputTextModule,
		TableModule,
		ProgressBarModule,
    CardModule,
  ]
})
export class AffectationModule { }
