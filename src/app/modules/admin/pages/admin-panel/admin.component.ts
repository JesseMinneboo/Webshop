import {Component, OnInit} from '@angular/core';
import {GameService} from "../../../game/services/game.service";
import {GameType} from "../../../game/types/gametype.enum";
import {IGame} from "../../../game/models/game.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  headElements = ['Name', 'Price', 'Image path', 'Edit', "Remove"];
  elements: IGame[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getFourGames(GameType.ALL).subscribe(response => {
      this.elements = response;
    });
  }

  removeGameById(id: number) {
    this.gameService.deleteGameById(id).subscribe(response => {
      this.ngOnInit();
    });
  }


}
