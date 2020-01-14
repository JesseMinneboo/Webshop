export class User {
  id: number;
  email: string;
  name: string;
  surname: string;
  password: string;
  role: number;

  constructor(id: number, email: string, name: string, surname: string, password: string, role: number) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.role = role;
  }
}

export interface IUser {
  email: string;
  name: string;
  surname: string;
  password: string;
}
