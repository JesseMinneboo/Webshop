import { Component, OnInit } from '@angular/core';
import {Game} from '../../../../models/game.model';
import {GameService} from '../../services/game.service';
import {ActivatedRoute, Params} from '@angular/router';
import {LocalStorageService} from '../../../shared/services/localstorage.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  shoppingCartArray: Game[] = [];
  game = new Game();
  isLoading = true;

  constructor(private activatedRoute: ActivatedRoute,
              private gameService: GameService,
              private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data: Params) => {
      this.gameService.getGameById(data.gameId).subscribe(response => {
        this.game = response;
      });
    });
    this.isLoading = false;
  }

  // todo: add games to local storage
  addToCart(gameName: string) {
    this.shoppingCartArray = [];
    this.shoppingCartArray = JSON.parse(this.localStorageService.getLocal('shopping cart'));

    if (this.shoppingCartArray.find(x => x.name = gameName)) {
      console.log('You already have this game!');
    } else {
      this.shoppingCartArray.push(this.game);
      this.localStorageService.setLocal('shopping cart', this.shoppingCartArray);
      console.log(this.shoppingCartArray.length);
    }
  }
}
