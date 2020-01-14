export class User {
  id: number;
  email: string;
  name: string;
  surname: string;
  password: string;
  role: number;
  jwt?: string;

  constructor(id: number, email: string, name: string, surname: string, password: string, role: number, jwt: string) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.role = role;
    this.jwt = jwt;
  }
}

export interface IUser {
  email: string;
  name: string;
  surname: string;
  password: string;
}
