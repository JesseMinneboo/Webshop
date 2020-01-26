import { Component, OnInit } from '@angular/core';
import { IGame } from '../../../game/models/game.model';
import { Router } from '@angular/router';
import { GameService } from '../../../game/services/game.service';
import { GameType } from '../../../game/types/gametype.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  newGames: IGame[] = [];
  popularGames: IGame[] = [];
  freeGames: IGame[] = [];
  isLoading = true;

  constructor(private router: Router,
              private gameService: GameService) { }

  ngOnInit() {
    this.getFourNewGames();
    this.getFourPopularGames();
    this.getFourFreeGames();
    this.isLoading = false;
  }

  getFourNewGames() {
    this.gameService.fetchGamesByType(GameType.NEW).subscribe(response => {
      this.newGames = response;
    });
  }

  getFourPopularGames() {
   this.gameService.fetchGamesByType(GameType.POPULAR).subscribe(response => {
     this.popularGames = response;
   });
  }

  getFourFreeGames() {
    this.gameService.fetchGamesByType(GameType.FREE).subscribe(response => {
      this.freeGames = response;
    });
  }

}
