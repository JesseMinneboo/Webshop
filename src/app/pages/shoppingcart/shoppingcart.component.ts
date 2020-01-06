import { Component, OnInit } from '@angular/core';
import {Game} from '../../model/game.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  constructor(private router: Router) { }

  gamesInList: Array<Game> = [
    new Game('A hat in time', 'A Hat in Time is a cute-as-heck 3D platformer featuring a little girl who ' +
      'stitches hats for wicked powers! Freely explore giant worlds and recover Time Pieces to travel to new heights!', 59.99,
      'https://www.hrkgame.com/media/games/.thumbnails/header_VrIOgDm.jpg/header_VrIOgDm-460x215.jpg'),
    new Game('A hat in time', 'A Hat in Time is a cute-as-heck 3D platformer featuring a little girl who ' +
      'stitches hats for wicked powers! Freely explore giant worlds and recover Time Pieces to travel to new heights!', 59.99,
      'https://www.hrkgame.com/media/games/.thumbnails/header_VrIOgDm.jpg/header_VrIOgDm-460x215.jpg'),
    new Game('A hat in time', 'A Hat in Time is a cute-as-heck 3D platformer featuring a little girl who ' +
      'stitches hats for wicked powers! Freely explore giant worlds and recover Time Pieces to travel to new heights!', 59.99,
      'https://www.hrkgame.com/media/games/.thumbnails/header_VrIOgDm.jpg/header_VrIOgDm-460x215.jpg'),
    new Game('A hat in time', 'A Hat in Time is a cute-as-heck 3D platformer featuring a little girl who ' +
      'stitches hats for wicked powers! Freely explore giant worlds and recover Time Pieces to travel to new heights!', 59.99,
      'https://www.hrkgame.com/media/games/.thumbnails/header_VrIOgDm.jpg/header_VrIOgDm-460x215.jpg')
  ];

  ngOnInit() {
  }


  goToHome() {
    this.router.navigateByUrl('/home')
  }
}
