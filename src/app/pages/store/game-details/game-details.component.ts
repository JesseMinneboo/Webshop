import { Component, OnInit } from '@angular/core';
import {Game, IGame} from '../../../services/game/game.model';
import {GameService} from '../../../services/game/game.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  game = new Game();

  constructor(private activatedRoute: ActivatedRoute, private gameService: GameService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data: Params) => {
      this.gameService.getGameById(data.gameId).subscribe(response => {
        this.game = response;
      });
    });

  }

  addToCart(game: Game) {
    console.log("added to cart: " + game.name);
  }
}
