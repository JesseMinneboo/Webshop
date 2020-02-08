import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  updateForm: FormGroup;

  constructor(private userService: UserService,
              private toastr: ToastrService,
              private formBuilder: FormBuilder,
              private route: Router,
              public authService: AuthService) {
  }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      name: [''],
      surname: [''],
      email: [''],
      password: [''],
      avatarUrl: [''],
    });

    this.updateForm.get("name").setValue(this.authService.getAuthUser().name);
    this.updateForm.get("surname").setValue(this.authService.getAuthUser().surname);
    this.updateForm.get("email").setValue(this.authService.getAuthUser().email);
    this.updateForm.get("avatarUrl").setValue(this.authService.getAuthUser().avatarUrl);
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId);
    this.authService.logout();
    this.toastr.success("User has been deleted");
    this.route.navigateByUrl('home')
  }

  onUpdateUser = async (updateForm: FormGroup): Promise<void> => {
    const name = updateForm.value.name;
    const surname = updateForm.value.surname;
    const email = updateForm.value.email;
    const password = updateForm.value.password;
    const avatarUrl = updateForm.value.avatarUrl;


    if (password.trim() === '') {
      this.toastr.error("Please rewrite or change your password");
    } else {
      this.userService.updateUser(this.authService.getAuthUser().id, name, surname, email, password).then(() => {
        this.userService.updateAvatar(this.authService.getAuthUser().id, avatarUrl).then(() => {
          location.reload();
        });
      });
    }
      this.toastr.success("User has been updated");
    }

}
