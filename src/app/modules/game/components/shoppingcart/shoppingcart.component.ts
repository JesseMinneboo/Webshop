import { Component, OnInit } from '@angular/core';
import {Game} from '../../../../models/game.model';
import {LocalStorageService} from '../../../shared/services/localstorage.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  gamesInList: Array<Game> = [];

  ngOnInit() {
    console.log(JSON.parse(this.localStorageService.getLocal('shopping cart')));
    this.gamesInList = JSON.parse(this.localStorageService.getLocal('shopping cart'));
  }

}
