import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss']
})
export class RemoveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigateByUrl('/home')
  }

  goToAdmin() {
    this.router.navigateByUrl('/admin')
  }

  goToResults() {
    this.router.navigateByUrl('/admin/remove/result')
  }
}
