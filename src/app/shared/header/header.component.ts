import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  username = 'Jesse Minneboo';

  constructor() { }

  ngOnInit() {
  }

  logout() {
  this.isLoggedIn = false;
}

}
