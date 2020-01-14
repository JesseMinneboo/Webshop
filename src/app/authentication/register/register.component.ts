import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  onRegisterSubmit(form: NgForm) {
    this.isLoading = true;
    const email = form.value.email;
    const name = form.value.name;
    const surname = form.value.surname;
    const password = form.value.password;

    const postData = {
      email: email,
      name: name,
      surname: surname,
      password: password
    }

    this.authService.registerUser(postData).subscribe(response => {
      console.log(response);
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.error = 'An error occurred!';
      this.isLoading = false;
    });
    form.reset();
  }
}
