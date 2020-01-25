import { Component, OnInit } from '@angular/core';
import {Game} from '../../../../models/game.model';
import {LocalStorageService} from "../../../shared/services/localstorage.service";

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  gamesInList: Game[] = [];

  ngOnInit() {
    this.gamesInList = JSON.parse(this.localStorageService.getLocal('shopping cart'));
  }

  getTotalPrice(): string  {
    let total: number = 0;
    for (let i = 0; i < this.gamesInList.length; i++) {
      total =  total + this.gamesInList[i].price;
    }
    return total.toFixed(2);
  }

  removeGameByName(name: string) {
    let game = this.gamesInList.find(x => x.name == name);
    let index = this.gamesInList.indexOf(game);
    this.gamesInList.splice(index, 1);
    this.localStorageService.removeLocal('shopping cart');
    this.localStorageService.setLocal('shopping cart', this.gamesInList);
    this.ngOnInit();
  }
}
