import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";
import {LocalStorageService} from "../../../shared/services/localstorage.service";
import {User} from '../../../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService,
              private router: Router,
              private localStorageService: LocalStorageService) {}

  ngOnInit() {}

  onLoginSubmit = async (form: NgForm): Promise<void> => {
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    await this.authService.login(email, password);


    console.log(this.authService.getAuthUser());
    if (this.authService.getAuthUser().email === null) {
      this.error = 'Your email or password is incorrect';
      this.authService.isAuthenticated = false;
      this.isLoading = false;
    } else {
      if(this.authService.isAuthenticated) {
        this.isLoading = false;
        this.localStorageService.setLocal('shopping cart', []);
        await this.router.navigateByUrl('home');
      } else {
        this.isLoading = false;
      }
    }

  }
}
