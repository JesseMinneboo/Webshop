import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { LocalStorageService } from '../../services/localstorage.service';
import {User} from '../../../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  user: User;

  constructor(private route: Router,
              private authService: AuthService,
              private localStorageService: LocalStorageService) { }

  ngOnInit() {
    console.log(JSON.parse(this.localStorageService.getLocal('user')));
    let newUser: User = JSON.parse(this.localStorageService.getLocal('user'));
    this.authService.setAuthUser(newUser);
    this.user = this.authService.getAuthUser();

    if(newUser != null){
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  logout() {
    this.authService.deleteCurrentUser();
    location.reload();
  }

  getCurrentRoute() {
    return this.route.url;
  }
}
