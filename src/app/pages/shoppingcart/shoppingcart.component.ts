import { Component, OnInit } from '@angular/core';
import {Game} from '../../model/game.model';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  constructor() { }

  editField: string;
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

  // updateList(id: number, property: string, event: any) {
  //   const editField = event.target.textContent;
  //   this.personList[id][property] = editField;
  // }

  // remove(id: any) {
  //   this.personList.splice(id, 1);
  // }

  // add() {
  //   if (this.awaitingPersonList.length > 0) {
  //     const person = this.awaitingPersonList[0];
  //     this.personList.push(person);
  //     this.awaitingPersonList.splice(0, 1);
  //   }
  // }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
