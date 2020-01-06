import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';

import { GameInterface } from "../../../model/game.model";

@Injectable({ providedIn: 'root' })
export class GameService {

  constructor(private http: HttpClient) {
  }

  createAndStoreGame(postData: GameInterface){
    let searchParams = new HttpParams();
    searchParams = searchParams.append('product_name', postData.title);
    searchParams = searchParams.append('product_description', postData.description);
    searchParams = searchParams.append('product_price', String(postData.price));
    searchParams = searchParams.append('product_image_path', postData.imagePath);
    this.http.post<GameInterface>('http://localhost:9000/api/game/add',
      {
        params: searchParams
      })
  }

}
