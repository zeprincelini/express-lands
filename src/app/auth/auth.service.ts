import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  public isAuthenticated(): Boolean {
    const user = localStorage.getItem('user');
    if (user !== null) {
      return true;
    } else {
      return false;
    }
  }
}
