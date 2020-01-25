export interface Role {
  id: number;
  userId: number;
  role: string;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  surname: string;
  password: string;
  jwt?: string;
  roles: Role[];
}

export class User {
  id: number;
  email: string;
  name: string;
  surname: string;
  password: string;
  jwt?: string;
  roles: Role[];

  constructor(user: IUser) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.surname = user.surname;
    this.jwt = user.jwt;
    this.roles = user.roles;
  }

  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }

  isAdmin(): boolean {
    if(this.roles.find(x => x.role == "ADMIN")){
      return true;
    } else if(this.roles == null) {
      return false;
    } else {
      return false;
    }
  }
}
