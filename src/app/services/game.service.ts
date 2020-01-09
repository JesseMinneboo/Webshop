import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameInterface } from '../models/game.model';
import { map } from 'rxjs/operators';
import { GameType } from './enums/gametype.enum';

@Injectable({providedIn: 'root'})
export class GameService {

  constructor(private http: HttpClient) {}

  getFourGames(gameType: GameType){
    switch (gameType) {
      case GameType.ALL:
        return this.fetchGames('all');
      case GameType.FREE:
        return this.fetchGames('free');
      case GameType.NEW:
        return this.fetchGames('latest');
      case GameType.POPULAR:
        return this.fetchGames('popular')
    }
  }

  fetchGames(type: string) {
   return this.http.get<GameInterface>('http://localhost:9000/api/game/' + type)
      .pipe(
        map(responseData => {
          const gamesArray: GameInterface[] = [];
          for (const key in responseData) {
            gamesArray.push({ ...responseData[key]});
          }
          return gamesArray;
        }));
  }

  deleteGameById(id: number){
    return this.http.delete('http://localhost:9000/api/game/'+ id +'/delete');
  }


}
