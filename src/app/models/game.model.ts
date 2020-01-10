export class Game {
public id: number;
public name: string;
public description: string;
public price: number;
public imagePath: string;

  // constructor(id: number, name: string, description: string, price: number, imagePath: string) {
  //   this.id = id;
  //   this.name = name;
  //   this.description = description;
  //   this.price = price;
  //   this.imagePath = imagePath;
  // }

}

export interface GameInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  imagePath: string;
}
