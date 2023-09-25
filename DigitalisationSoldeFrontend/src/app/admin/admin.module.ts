import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChartModule } from 'primeng/chart';
import { KnobModule } from 'primeng/knob';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { FileAppService } from './service/file.app.service';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SliderModule } from 'primeng/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [HomeComponent],
  providers: [FileAppService],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RippleModule,
    DropdownModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    ChartModule,
    KnobModule,
    MenuModule,
    ToastModule,
		FormsModule,
		RatingModule,
		ButtonModule,
		SliderModule,
		InputTextModule,
		ToggleButtonModule,
		MultiSelectModule,
		ProgressBarModule,
    ReactiveFormsModule
  ],
})
export class AdminModule {}
