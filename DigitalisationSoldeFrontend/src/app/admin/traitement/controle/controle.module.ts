import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControleRoutingModule } from './controle-routing.module';
import { CIndexComponent } from './c-index/c-index.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChipsModule } from 'primeng/chips';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { SaisieRoutingModule } from '../saisie/saisie-routing.module';
import { CShowComponent } from './c-show/c-show.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    CIndexComponent,
    CShowComponent
  ],
  imports: [
    CommonModule,
    ControleRoutingModule,
    SaisieRoutingModule,
    TableModule,
    ButtonModule,
		FormsModule,
    ReactiveFormsModule,
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule,
    DialogModule,
    RouterLink
  ]
})
export class ControleModule { }
