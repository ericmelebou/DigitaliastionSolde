import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaisieRoutingModule } from './saisie-routing.module';
import { DAddComponent } from './d-add/d-add.component';
import { Modal1101Component } from './modal1101/modal1101.component';
import { Modal1102Component } from './modal1102/modal1102.component';
import { Modal1103Component } from './modal1103/modal1103.component';
import { Modal1104Component } from './modal1104/modal1104.component';
import { Modal1105Component } from './modal1105/modal1105.component';
import { Modal1106Component } from './modal1106/modal1106.component';
import { Modal1107Component } from './modal1107/modal1107.component';
import { Modal2011Component } from './modal2011/modal2011.component';
import { Modal2021Component } from './modal2021/modal2021.component';
import { Modal1109Component } from './modal1109/modal1109.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { Modal1101EditComponent } from './modal1101-edit/modal1101-edit.component';
import { Modal1102EditComponent } from './modal1102-edit/modal1102-edit.component';
import { Modal1103EditComponent } from './modal1103-edit/modal1103-edit.component';
import { Modal1104EditComponent } from './modal1104-edit/modal1104-edit.component';
import { Modal1105EditComponent } from './modal1105-edit/modal1105-edit.component';
import { Modal1106EditComponent } from './modal1106-edit/modal1106-edit.component';
import { Modal1107EditComponent } from './modal1107-edit/modal1107-edit.component';
import { Modal1109EditComponent } from './modal1109-edit/modal1109-edit.component';
import { Modal2011EditComponent } from './modal2011-edit/modal2011-edit.component';
import { Modal3001Component } from './modal3001/modal3001.component';
import { Modal2101Component } from './modal2101/modal2101.component';
import { Modal2101EditComponent } from './modal2101-edit/modal2101-edit.component';
import { Modal2021EditComponent } from './modal2021-edit/modal2021-edit.component';
import { Modal3001EditComponent } from './modal3001-edit/modal3001-edit.component';


@NgModule({
  declarations: [
    DAddComponent,
    Modal1101Component,
    Modal1102Component,
    Modal1103Component,
    Modal1104Component,
    Modal1105Component,
    Modal1106Component,
    Modal1107Component,
    Modal2011Component,
    Modal3001Component,
    Modal2021Component,
    Modal2101Component,
    Modal1109Component,
    Modal1101EditComponent,
    Modal1102EditComponent,
    Modal1103EditComponent,
    Modal1104EditComponent,
    Modal1105EditComponent,
    Modal1106EditComponent,
    Modal1107EditComponent,
    Modal1109EditComponent,
    Modal2011EditComponent,
    Modal2101EditComponent,
    Modal2021EditComponent,
    Modal3001EditComponent
  ],
  imports: [
    CommonModule,
    SaisieRoutingModule,
    CommonModule,
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
    DialogModule
  ]
})
export class SaisieModule { }
