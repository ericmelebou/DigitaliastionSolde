import { Component, ElementRef, ViewChild } from '@angular/core';
import { DlayoutService } from '../../dlayout.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  @ViewChild('menubutton') menuButton!: ElementRef;

    constructor(public layoutService: DlayoutService) { }

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onProfileButtonClick() {
        this.layoutService.showProfileSidebar();
    }
    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }
}
