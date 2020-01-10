import {Component, OnInit} from '@angular/core';
import {Game} from '../../models/game.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {GameService} from '../../services/game.service';
import {GameType} from '../../services/enums/gametype.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  recentlyAdded: Game[] = [];
  mostPopular: Game[] = [];
  freeGames: Game[] = [];

  constructor(private http: HttpClient,
              private router: Router,
              private gameService: GameService) { }

  ngOnInit() {
    this.getFourNewGames();
    this.getFourPopularGames();
    this.getFourFreeGames();
  }

  getFourNewGames() {
    this.gameService.getFourGames(GameType.NEW).subscribe(response => {
      this.recentlyAdded = response;
    });
  }

  getFourPopularGames() {
   this.gameService.getFourGames(GameType.POPULAR).subscribe(response => {
     this.mostPopular = response;
   })
  }

  getFourFreeGames() {
    this.gameService.getFourGames(GameType.FREE).subscribe(response => {
      this.freeGames = response;
    })
  }

  navigateToStore() {
    this.router.navigateByUrl('/store');
  }

  goToGameDetails(name: string) {
    this.router.navigateByUrl('/store/' + name );
  }
}
