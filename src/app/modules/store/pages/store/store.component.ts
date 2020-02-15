import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product.model';
import { GameService } from '../../services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  @ViewChild('gameNameInput', {static: true}) gameNameInput: ElementRef;
  allGames: Product[] = [];
  isLoading = true;

  constructor(private gameService: GameService) { }


  ngOnInit() {
    if (this.isLoading) {
      this.getSearchedGame(this.gameNameInput.nativeElement.value);
      this.isLoading = false;
    } else {
      this.isLoading = true;
      this.getAllGames();
      this.isLoading = false;
    }
  }

  getAllGames() {
    this.gameService.getAllGames().subscribe(response => {
      this.allGames = response;
    });
  }

  getSearchedGame(title: ElementRef) {
    this.gameService.getGamesByTitle(title).subscribe(response => {
      this.allGames = response;
    });
  }

  onKeyPress() {
    this.isLoading = true;
    this.deleteGamesArray();
    this.getSearchedGame(this.gameNameInput.nativeElement.value);
    this.ngOnInit();
  }

  deleteGamesArray() {
    this.allGames = [];
  }
}
