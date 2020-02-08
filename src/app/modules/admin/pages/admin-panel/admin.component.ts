import { Component, OnInit } from '@angular/core';
import { GameService } from "../../../store/services/product.service";
import { GameType } from "../../../store/types/product.enum";
import { IProduct } from "../../../store/models/product.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  headElements = ['Name', 'Price', 'Image path', 'Edit', "Remove"];
  elements: IProduct[] = [];

  constructor(private gameService: GameService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.gameService.fetchGamesByType(GameType.ALL).subscribe(response => {
      this.elements = response;
    });
  }

  removeGameById(id: number) {
    this.gameService.deleteGameById(id).subscribe(() => {
      this.toastr.success("Game has been deleted");
      this.ngOnInit();
    });
  }


}
