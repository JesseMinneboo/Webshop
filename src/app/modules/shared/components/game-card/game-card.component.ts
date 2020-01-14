import {Component, Input, OnInit} from '@angular/core';
import {GameService} from "../../../game/services/game.service";
import {Game, IGame} from "../../../../models/game.model";

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
