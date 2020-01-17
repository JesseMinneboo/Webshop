import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onLoginSubmit = async (form: NgForm): Promise<void> => {
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    await this.authService.login(email, password);

    console.log(this.authService.getAuthUser());
    console.log(this.authService.isAuthenticated);

    if(this.authService.isAuthenticated) {
      await this.router.navigateByUrl('home');
      this.isLoading = false;
    } else {
      // todo: show error message;
    }
  }
}
