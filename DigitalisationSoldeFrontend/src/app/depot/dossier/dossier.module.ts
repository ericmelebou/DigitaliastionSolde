import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DAddComponent } from './d-add/d-add.component';
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DAddComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
		FormsModule,
		DropdownModule
  ]
})
export class DossierModule { }
