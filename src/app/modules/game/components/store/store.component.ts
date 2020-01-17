import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Game, IGame} from "../../../../models/game.model";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  @ViewChild('gameNameInput', {static: true}) gameNameInput: ElementRef; // search result
  allGames: Game[] = [];
  isFetching = false;

  constructor(private gameService: GameService) { }


  ngOnInit() {
    if(this.isFetching) {
      this.getSearchedGame(this.gameNameInput.nativeElement.value);
      this.isFetching = false;
    } else {
      this.getAllGames();
    }
  }

  getAllGames() {
    this.gameService.getAllGames().subscribe(response => {
      this.allGames = response;
    })
  }

  getSearchedGame(title: ElementRef) {
    this.gameService.getGamesByTitle(title).subscribe(response => {
      this.allGames = response;
    })
  }

  onKeyPress() {
    this.isFetching = true;
    this.deleteGamesArray();
    this.getSearchedGame(this.gameNameInput.nativeElement.value);
    console.log(this.allGames)
    this.ngOnInit();
  }

  deleteGamesArray() {
    this.allGames = [];
  }
}
