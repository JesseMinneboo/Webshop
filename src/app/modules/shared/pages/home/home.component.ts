import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../store/models/product.model';
import { Router } from '@angular/router';
import { GameService } from '../../../store/services/product.service';
import { GameType } from '../../../store/types/product.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  newGames: IProduct[] = [];
  popularGames: IProduct[] = [];
  freeGames: IProduct[] = [];
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
