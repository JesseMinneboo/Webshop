import { ElementRef, Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { IGame } from '../models/game.model';
import { catchError, map, retry } from 'rxjs/operators';
import { GameType } from '../types/gametype.enum';
import { ApiService } from "../../shared/services/api.service";
import { of } from "rxjs";

@Injectable({providedIn: 'root'})
export class GameService {
  private readonly PREFIX = '/product';

  constructor(private api: ApiService) {}

  fetchGamesByType(gameType: GameType){
    switch (gameType) {
      case GameType.ALL:
        return this.getGamesByType('all');
      case GameType.FREE:
        return this.getGamesByType('free');
      case GameType.NEW:
        return this.getGamesByType('new');
      case GameType.POPULAR:
        return this.getGamesByType('popular')
    }
  }

  getGamesByType(type: string) {
    return this.api.get({
      endpoint: this.PREFIX + '/' + type
    }).pipe(
      map(responseData => {
        const gamesArray: IGame[] = [];
        for (const key in responseData) {
          gamesArray.push({...responseData[key]});
        }
        return gamesArray;
      }));
  }

  getAllGames() {
    return this.api.get({
      endpoint: this.PREFIX + '/all'
    }).pipe(
      map(responseData => {
        const gamesArray: IGame [] = [];
        for (const key in responseData) {
          gamesArray.push({ ...responseData[key]});
        }
        return gamesArray;
      }));
  }

  getGamesByTitle(searchString: ElementRef) {
    return this.api.get({
      endpoint: this.PREFIX + '/find?searchString=' + searchString
    }).pipe(
      map(responseData => {
        const gamesArray: IGame[] = [];
        for (const key in responseData) {
          gamesArray.push({ ...responseData[key]});
        }
        return gamesArray;
      }));
  }

  getGameById(id: number) {
    return this.api.get({
      endpoint: this.PREFIX + '/find/' + id
    })
  }

  clickOnGame(id: number){
    return this.api.put({
      endpoint: this.PREFIX + '/' + id + '/seen/add'
    })
  }

  deleteGameById(id: number) {
    return this.api.delete({
      endpoint: this.PREFIX + '/' + id + '/delete'
    })
  }

  addGame(name: string, description: string, price: string, imagePath: string) {
    return new Promise((resolve => {
      this.api.post({
        body: new HttpParams()
            .set('name', name)
            .set('description', description)
            .set('price', price)
            .set('image_path', imagePath),
        endpoint: this.PREFIX + '/add'
      })
        .pipe(
          retry(1),
          catchError((error) => of(console.log("ERROR:" + error.message)))
        ).subscribe((game: IGame) => {
          console.log(game);
          resolve();
      })
    }))
  }

  async editGame(id: number, name: string, description: string, price: string, imagePath: string ) {
    console.log("FROM GAME SERVICE: " + id);
    return new Promise((resolve => {
      this.api.put({
        body: new HttpParams()
          .set('name', name)
          .set('description', description)
          .set('price', price)
          .set('image_path', imagePath),
        endpoint: this.PREFIX + '/' + id + '/edit'
      })
        .pipe(
          retry(1),
          catchError((error) => of(console.log("ERROR:" + error.message)))
        ).subscribe((game: IGame) => {
        console.log(game);
        resolve();
      })
    }))
  }
}
