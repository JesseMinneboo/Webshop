import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Game, GameInterface} from "../../models/game.model";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  @ViewChild('gameNameInput', {static: true}) gameNameInput: ElementRef; // search result
  allGames: Game[] = [];
  isFetching = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if(this.isFetching) {
      this.getSearchedGame(this.gameNameInput.nativeElement.value);
      this.isFetching = false;
    } else {
      this.getAllGames();
    }
  }

  getAllGames() {
    this.http.get<GameInterface>('http://localhost:9000/api/game/all')
      .pipe(
        map(responseData => {
          const gamesArray: GameInterface[] = [];
          for (const key in responseData) {
            gamesArray.push({ ...responseData[key]});
          }
          return gamesArray;
        }))
      .subscribe(games => {
        this.allGames = games;
      })
  }

  getSearchedGame(title: ElementRef) {
    this.http.get<GameInterface>('http://localhost:9000/api/game/find?searchResult=' + title)
      .pipe(
        map(responseData => {
          const gamesArray: GameInterface[] = [];
          for (const key in responseData) {
            gamesArray.push({ ...responseData[key]});
          }
          return gamesArray;
        }))
      .subscribe(games => {
        this.allGames = games;
      })
  }

  onKeyPress() {
    this.isFetching = true;
    this.deleteGamesArray();
    this.getSearchedGame(this.gameNameInput.nativeElement.value);
    this.ngOnInit();
  }

  deleteGamesArray() {
    this.allGames = [];
  }
}
