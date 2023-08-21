import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DlayoutComponent } from './dlayout/dlayout.component';
import { DepotRoutingModule } from './depot-routing.module';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { MenuComponent } from './partials/menu/menu.component';
import { TopbarComponent } from './partials/topbar/topbar.component';
import { ProfilemenuComponent } from './partials/profilemenu/profilemenu.component';
import { BreadcrumbComponent } from './partials/breadcrumb/breadcrumb.component';
import { MenuitemComponent } from './partials/menuitem/menuitem.component';


@NgModule({
  declarations: [
    HomeComponent,
    DlayoutComponent,
    SidebarComponent,
    MenuComponent,
    TopbarComponent,
    ProfilemenuComponent,
    BreadcrumbComponent,
    MenuitemComponent,
  ],
  imports: [
    CommonModule,
    DepotRoutingModule,
    CommonModule,
    ButtonModule,
    RouterModule,
    StyleClassModule,
    AppConfigModule,
  ]
})
export class DepotModule { }
