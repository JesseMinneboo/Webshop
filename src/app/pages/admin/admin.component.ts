import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {GameType} from "../../services/enums/gametype.enum";
import {GameInterface} from "../../models/game.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  headElements = ['Name', 'Price', 'Image path', 'Edit', "Remove"];
  elements: GameInterface[] = [];

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
