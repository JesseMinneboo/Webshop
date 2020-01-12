export class User {
  id: number;
  username: string;
  name: string;
  surname: string;
  password: string;

  constructor(id: number, username: string, name: string, surname: string, password: string) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.surname = surname;
    this.password = password;
  }
}

export interface IUser {
  email: string;
  name: string;
  surname: string;
  password: string;
}
