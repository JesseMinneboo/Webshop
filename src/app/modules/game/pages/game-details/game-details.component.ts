import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LocalStorageService } from "../../../shared/services/localstorage.service";
import { AuthService } from "../../../auth/services/auth.service";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  shoppingCartArray: Game[] = [];
  game = new Game();
  error: string;
  isLoading = true;

  constructor(private activatedRoute: ActivatedRoute,
              private gameService: GameService,
              private localStorageService: LocalStorageService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data: Params) => {
      this.gameService.getGameById(data.gameId).subscribe(response => {
        this.game = response;
      });
    });
    this.isLoading = false;
  }

  addToCart() {
    if (this.authService.isAuthenticated) {
      this.shoppingCartArray = JSON.parse(this.localStorageService.getLocal('shopping cart'));
      if(this.gameExistsInArray(this.shoppingCartArray, this.game.name)) {
        this.error = 'You already have this game';
      } else {
        this.shoppingCartArray.push(this.game);
        this.localStorageService.setLocal('shopping cart', this.shoppingCartArray);
        this.router.navigateByUrl('/cart');

      }
    } else {
      this.error = 'You have to login to purchase games'
    }
  }

  gameExistsInArray (games: Game[], gameName: string) {
    for (let i = 0; i < games.length; i++) {
      if (games[i].name == gameName) {
        return true;
      }
    }
    return false;
  }
}
