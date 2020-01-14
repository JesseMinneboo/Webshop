import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../authentication/auth.service';
import { LocalStorageService } from '../../services/cookies/localstorage.service';
import {User} from '../../authentication/user.model';

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
    this.authService.setCurrentUser(newUser);
    this.user = this.authService.getCurrentUser();

    if(newUser != null){
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  reloadHeader() {
    this.ngOnInit();
  }

  logout() {
    this.authService.deleteCurrentUser();
  }

  getCurrentRoute() {
    return this.route.url;
  }
}
