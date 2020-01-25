import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Game} from '../../../../models/game.model';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  @ViewChild('gameNameInput', {static: true}) gameNameInput: ElementRef; // search result
  allGames: Game[] = [];
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
