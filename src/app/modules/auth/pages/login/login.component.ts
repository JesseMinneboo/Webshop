import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router";
import { LocalStorageService } from "../../../shared/services/localstorage.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;

  constructor(private authService: AuthService,
              private router: Router,
              private localStorageService: LocalStorageService,
              private toastr: ToastrService) {}

  ngOnInit() {}

  onLoginSubmit = async (form: NgForm): Promise<void> => {
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    await this.authService.login(email, password);

    if(this.authService.isAuthenticated) {
      this.isLoading = false;
      this.toastr.success( "Login successfully");
      await this.router.navigateByUrl('home');
    } else {
      this.isLoading = false;
      this.toastr.error("Your email or password is incorrect.", "Login failed");
    }
  }
}
