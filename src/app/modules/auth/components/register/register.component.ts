import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  onRegisterSubmit = async (form: NgForm): Promise<void> => {
    this.isLoading = true;
    const email = form.value.email;
    const name = form.value.name;
    const surname = form.value.surname;
    const password = form.value.password;

    console.log("EMAIL: " + email);
    console.log("NAME: " + name);
    console.log("SURNAME: " + surname);
    console.log("PASSWORD: " + password);

    await this.authService.register(email, name, surname, password);
    await this.authService.login(email, password);

    console.log(this.authService.getAuthUser());
    console.log(this.authService.isAuthenticated);

    if(this.authService.isAuthenticated) {
      this.isLoading = false;
      form.reset();
      await this.router.navigateByUrl('home');
    }
  }
}
