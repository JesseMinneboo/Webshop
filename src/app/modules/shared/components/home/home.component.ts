import {Component, OnInit} from '@angular/core';
import {IGame} from '../../../../models/game.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {GameService} from '../../../game/services/game.service';
import {GameType} from '../../../game/types/gametype.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  newGames: IGame[] = [];
  popularGames: IGame[] = [];
  freeGames: IGame[] = [];

  constructor(private router: Router, private gameService: GameService) { }

  ngOnInit() {
    this.getFourNewGames();
    this.getFourPopularGames();
    this.getFourFreeGames();
  }

  getFourNewGames() {
    this.gameService.getFourGames(GameType.NEW).subscribe(response => {
      this.newGames = response;
    });
  }

  getFourPopularGames() {
   this.gameService.getFourGames(GameType.POPULAR).subscribe(response => {
     this.popularGames = response;
   })
  }

  getFourFreeGames() {
    this.gameService.getFourGames(GameType.FREE).subscribe(response => {
      this.freeGames = response;
    })
  }

}
