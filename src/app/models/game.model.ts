export class Game {
public name: string;
public description: string;
public price: number;
public imagePath: string;

  constructor(name: string, description: string, price: number, imagePath: string) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imagePath = imagePath;
  }

}

export interface GameInterface {
  name: string;
  description: string;
  price: number;
  imagePath: string;
}
