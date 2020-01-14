import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import {HeaderComponent} from '../../shared/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onLoginSubmit(form: NgForm) {
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    const postData = {
      email: email,
      password: password
    }

    this.authService.loginUser(postData).subscribe(response => {
      this.isLoading = false;
      this.authService.setCurrentUser(response);

      if(response != null){
        form.reset();
        location.reload();
        // todo: route back to home and reload the page somehow
      }else {
        this.error = 'This is not a known account. Please try again...'
      }

    }, error => {
      console.log(error);
      this.isLoading = false;
      this.error = error;
    })
  }
}
