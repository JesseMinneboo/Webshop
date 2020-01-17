import { ElementRef, Injectable } from '@angular/core';
import {HttpParams} from '@angular/common/http';
import { IGame } from '../../../models/game.model';
import { map } from 'rxjs/operators';
import { GameType } from '../types/gametype.enum';
import {ApiService} from "../../shared/services/api.service";

@Injectable({providedIn: 'root'})
export class GameService {
  private readonly PREFIX = '/product';

  constructor(private api: ApiService) {}

  getFourGames(gameType: GameType){
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
      auth: false,
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
      auth: false,
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
      auth: false,
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
      auth: false,
      endpoint: this.PREFIX + '/find/' + id
    })
  }

  clickOnGame(id: number){
    return this.api.put({
      auth: false,
      endpoint: this.PREFIX + '/' + id + '/seen/add'
    })
  }

  deleteGameById(id: number) {
    return this.api.delete({
      auth: true,
      endpoint: this.PREFIX + '/' + id + '/delete'
    })
  }

  addGame(name: string, description: string, price: string, imagePath: string) {
      return this.api.post({
        auth: true,
        body: new HttpParams()
          .set('name', name)
          .set('description', description)
          .set('price', price)
          .set('image_path', imagePath),
        endpoint: this.PREFIX + '/add'
      })
  }
}
