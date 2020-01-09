import { Component, OnInit } from '@angular/core';
import {Game} from '../../models/game.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  constructor(private router: Router) { }

  gamesInList: Array<Game> = [];

  ngOnInit() {
  }


  goToHome() {
    this.router.navigateByUrl('/home')
  }
}
