import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAddComponent() {
    this.router.navigateByUrl('/add_game');
  }

  goToEditComponent() {
    this.router.navigateByUrl('/edit_game');
  }

  goToRemoveComponent() {
    this.router.navigateByUrl('/remove_game');
  }

  goToHome() {
    this.router.navigateByUrl('/home')
  }
}
