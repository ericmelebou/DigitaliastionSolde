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
import { MatTableModule } from '@angular/material/table';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { ToastrModule } from 'ngx-toastr';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { DShowComponent } from './d-show/d-show.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DropdownModule } from 'primeng/dropdown';
import { AppTopbarComponent } from '../layout/app.topbar.component';
import { FileUploadModule } from 'primeng/fileupload';


@NgModule({
  declarations: [
    DIndexComponent,
    DAddComponent,
    DLayoutComponent,
    ModalComponent,
    DShowComponent
  ],
  imports: [
    CommonModule,
    DepotRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MdbModalModule,
    CommonModule,
    ButtonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
    NgbPaginationModule,
    RouterModule,
    StyleClassModule,
    MatTableModule,
    AppConfigModule,
    DropdownModule,
		InputNumberModule,
		InputTextModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
    TableModule,
		RatingModule,
		ButtonModule,
		SliderModule,
		InputTextModule,
		ToggleButtonModule,
		RippleModule,
		MultiSelectModule,
		DropdownModule,
		ProgressBarModule,
		ToastModule,
    FileUploadModule
  ]
})
export class DepotModule { }
