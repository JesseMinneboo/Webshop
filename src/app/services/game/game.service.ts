import { ElementRef, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGame } from './game.model';
import { map } from 'rxjs/operators';
import { GameType } from './gametype.enum';

@Injectable({providedIn: 'root'})
export class GameService {

  //todo: fetch all games one time not in multiple classes -> less api calls

  constructor(private http: HttpClient) {}

  getFourGames(gameType: GameType){
    switch (gameType) {
      case GameType.ALL:
        return this.findGamesByGameType('all');
      case GameType.FREE:
        return this.findGamesByGameType('free');
      case GameType.NEW:
        return this.findGamesByGameType('new');
      case GameType.POPULAR:
        return this.findGamesByGameType('popular')
    }
  }

  findGamesByGameType(type: string) {
   return this.http.get<IGame>('http://localhost:9000/api/game/' + type)
      .pipe(
        map(responseData => {
          const gamesArray: IGame[] = [];
          for (const key in responseData) {
            gamesArray.push({ ...responseData[key]});
          }
          return gamesArray;
        }));
  }

  findGamesByTitle(searchString: ElementRef) {
    return this.http.get<IGame>('http://localhost:9000/api/game/find?searchString=' + searchString)
      .pipe(
        map(responseData => {
          const gamesArray: IGame[] = [];
          for (const key in responseData) {
            gamesArray.push({ ...responseData[key]});
          }
          return gamesArray;
        }));
  }

  findAllGames() {
    return this.http.get<IGame>('http://localhost:9000/api/game/all')
      .pipe(
        map(responseData => {
          const gamesArray: IGame[] = [];
          for (const key in responseData) {
            gamesArray.push({ ...responseData[key]});
          }
          return gamesArray;
        }));
  }

  deleteGameById(id: number) {
    return this.http.delete('http://localhost:9000/api/game/'+ id +'/delete');
  }

  getGameById(id: number) {
    return this.http.get<IGame>('http://localhost:9000/api/game/find/' + id);
  }

  clickOnGame(id: number) {
    return this.http.put('http://localhost:9000/api/game/' + id + '/seen/add', {});
  }

}
