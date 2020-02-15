import { Component } from '@angular/core';
import { AuthService } from "./modules/auth/services/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private authService: AuthService) {
    this.authService.tryTokenLogin();
  }

}
