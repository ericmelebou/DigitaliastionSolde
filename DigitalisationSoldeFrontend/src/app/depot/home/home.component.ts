import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  subscription: Subscription;

  darkMode: boolean = false;

  constructor(public router: Router, private layoutService: LayoutService) {
      this.subscription = this.layoutService.configUpdate$.subscribe(config => {
          this.darkMode = config.colorScheme === 'dark' || config.colorScheme === 'dim' ? true : false;
      });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}
