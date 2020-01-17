import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService,) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logOutUser();
  }

  getCurrentRoute() {
    return this.route.url;
  }
}
