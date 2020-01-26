import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../../../game/services/game.service';
import { IGame } from '../../../game/models/game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() gameElement: IGame;
  @Input() isLoading = true;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  onClickGame(id: any) {
    this.gameService.clickOnGame(id).subscribe();
  }
}
