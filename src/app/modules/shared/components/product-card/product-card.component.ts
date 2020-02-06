import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../../../store/services/product.service';
import { IProduct } from '../../../store/models/product.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() gameElement: IProduct;
  @Input() isLoading = true;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  onClickGame(id: any) {
    this.gameService.clickOnGame(id).subscribe();
  }
}
