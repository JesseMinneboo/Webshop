import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { GameService } from '../../services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LocalStorageService } from "../../../shared/services/localstorage.service";
import { AuthService } from "../../../auth/services/auth.service";

@Component({
  selector: 'app-game-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  shoppingCartArray: Product[] = [];
  product = new Product();
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
        this.product = response;
      });
    });
    this.isLoading = false;
  }

  addToCart() {
    if (this.authService.isAuthenticated) {
      this.shoppingCartArray = JSON.parse(this.localStorageService.getLocal('shopping cart'));
      if(this.gameExistsInArray(this.shoppingCartArray, this.product.name)) {
        this.error = 'You already have this store';
      } else {
        this.shoppingCartArray.push(this.product);
        this.localStorageService.setLocal('shopping cart', this.shoppingCartArray);
        this.router.navigateByUrl('/cart');

      }
    } else {
      this.error = 'You have to login to purchase games'
    }
  }

  gameExistsInArray (games: Product[], gameName: string) {
    for (let i = 0; i < games.length; i++) {
      if (games[i].name == gameName) {
        return true;
      }
    }
    return false;
  }
}
