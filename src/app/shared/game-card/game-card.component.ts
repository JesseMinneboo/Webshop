import {Component, Input, OnInit} from '@angular/core';
import {GameService} from "../../services/game/game.service";
import {Game, IGame} from "../../services/game/game.model";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() gameElement: IGame;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  onClickGame(id: any) {
    this.gameService.clickOnGame(id).subscribe();
  }
}
