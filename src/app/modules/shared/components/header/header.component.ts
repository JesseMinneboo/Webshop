import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, public authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.route.navigateByUrl('');
  }

  getCurrentRoute() {
    return this.route.url;
  }
}
