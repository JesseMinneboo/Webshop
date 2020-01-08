import {Component, OnInit} from '@angular/core';
import {Game, GameInterface} from '../../models/game.model';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  recentlyAdded: Game[] = [];
  mostPopular: Game[] = [];
  freeGames: Game[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getFourNewGames();
    this.getFourPopularGames();
    this.getFourFreeGames();
  }

  getFourNewGames() {
    this.http.get<GameInterface>('http://localhost:9000/api/game/latest')
      .pipe(
        map(responseData => {
        const gamesArray: GameInterface[] = [];
        for (const key in responseData) {
          gamesArray.push({ ...responseData[key]});
        }
        return gamesArray;
      }))
      .subscribe(games => {
        this.recentlyAdded = games;
      })
  }

  getFourPopularGames() {
    this.http.get<GameInterface>('http://localhost:9000/api/game/popular')
      .pipe(
        map(responseData => {
          const gamesArray: GameInterface[] = [];
          for (const key in responseData) {
            gamesArray.push({ ...responseData[key]});
          }
          return gamesArray;
        }))
      .subscribe(games => {
        this.mostPopular = games;
      })
  }

  getFourFreeGames() {
    this.http.get<GameInterface>('http://localhost:9000/api/game/free')
      .pipe(
        map(responseData => {
          const gamesArray: GameInterface[] = [];
          for (const key in responseData) {
            gamesArray.push({ ...responseData[key]});
          }
          return gamesArray;
        }))
      .subscribe(games => {
        this.freeGames = games;
      })
  }

  navigateToStore() {
    this.router.navigateByUrl('/store')
  }
}
