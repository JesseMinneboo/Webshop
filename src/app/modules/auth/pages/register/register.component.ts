import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLoading = false;

  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() { }

  onRegisterSubmit = async (form: NgForm): Promise<void> => {
    this.isLoading = true;
    const email = form.value.email;
    const name = form.value.name;
    const surname = form.value.surname;
    const password = form.value.password;

    await this.authService.register(email, password, name, surname);
    await this.authService.login(email, password);

    if(this.authService.isAuthenticated) {
      this.toastr.success("Successfully registered");
      this.isLoading = false;
      form.reset();
      await this.router.navigateByUrl('home');
    } else {
      this.toastr.error("Something went wrong. Try again.");
      this.isLoading = false;
    }
  }
}
