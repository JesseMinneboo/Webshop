import {Component, OnInit, ViewChild} from '@angular/core';
import {Game} from '../../model/game.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recentlyAdded: Game[] = [
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

  mostPopular: Game[] = [
    new Game('Dead by Daylight', 'Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on ' +
      'the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught ' +
      'and killed.', 59.99, 'https://steamcdn-a.akamaihd.net/steam/apps/381210/header.jpg?t=1575392832'),
    new Game('Dead by Daylight', 'Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on ' +
      'the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught ' +
      'and killed.', 59.99, 'https://steamcdn-a.akamaihd.net/steam/apps/381210/header.jpg?t=1575392832'),
    new Game('Dead by Daylight', 'Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on ' +
      'the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught ' +
      'and killed.', 59.99, 'https://steamcdn-a.akamaihd.net/steam/apps/381210/header.jpg?t=1575392832'),
    new Game('Dead by Daylight', 'Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on ' +
      'the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught ' +
      'and killed.', 59.99, 'https://steamcdn-a.akamaihd.net/steam/apps/381210/header.jpg?t=1575392832')
  ];

  freeGames: Game[] = [
    new Game('Dead by Daylight', 'Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on ' +
      'the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught ' +
      'and killed.', 0.00, 'https://steamcdn-a.akamaihd.net/steam/apps/381210/header.jpg?t=1575392832'),
    new Game('Dead by Daylight', 'Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on ' +
      'the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught ' +
      'and killed.', 0.00, 'https://steamcdn-a.akamaihd.net/steam/apps/381210/header.jpg?t=1575392832'),
    new Game('Dead by Daylight', 'Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on ' +
      'the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught ' +
      'and killed.', 0.00, 'https://steamcdn-a.akamaihd.net/steam/apps/381210/header.jpg?t=1575392832'),
    new Game('Dead by Daylight', 'Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on ' +
      'the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught ' +
      'and killed.', 0.00, 'https://steamcdn-a.akamaihd.net/steam/apps/381210/header.jpg?t=1575392832')
  ];

  constructor() { }

  ngOnInit() {
  }

}
