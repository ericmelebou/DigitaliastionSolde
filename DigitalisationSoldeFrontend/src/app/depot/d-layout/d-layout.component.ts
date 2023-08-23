import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ModalComponent } from '../modal/modal.component';
import { TokenService } from 'src/app/_services/token.service';


@Component({
  selector: 'app-d-layout',
  templateUrl: './d-layout.component.html',
  styleUrls: ['./d-layout.component.scss']
})
export class DLayoutComponent {

  constructor(private tokenService: TokenService) { }
  logOut() {
    this.tokenService.clearToken()
  }
}
