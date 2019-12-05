import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  validatingForm: FormGroup;


  constructor() { }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      signupFormModalName: new FormControl('', Validators.required),
      signupFormModalEmail: new FormControl('', Validators.email),
      signupFormModalPassword: new FormControl('', Validators.required),
    });
  }

  get signupFormModalName() {
    return this.validatingForm.get('signupFormModalName');
  }

  get signupFormModalEmail() {
    return this.validatingForm.get('signupFormModalEmail');
  }

  get signupFormModalPassword() {
    return this.validatingForm.get('signupFormModalPassword');
  }

}
