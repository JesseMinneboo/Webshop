import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LocalStorageService {

  constructor() {
  }

  setLocal(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  getLocal(key) {
    return localStorage.getItem(key);

  }

  removeLocal(key) {
    return localStorage.removeItem(key);
  }
}
