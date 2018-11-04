import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticated: boolean = false;  // false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  doLogin(user: User) {
    console.log(user);

    //if (user.name === 'user@gmail.com' &&
    //  user.password === '123456') {

    if (user.name === '1' &&
      user.password === '1') {
        this.userAuthenticated = true;

        this.showMenuEmitter.emit(true);

        this.router.navigate(['/']);
    } else {
      this.userAuthenticated = false;

      this.showMenuEmitter.emit(false);
    }
  }

  doLogout() {
    console.log('doLogout');

    this.userAuthenticated = false;

    this.showMenuEmitter.emit(false);

    this.router.navigate(['/login']);
  }

  resetPassword(user: User) {
    console.log('resetPassword');
    console.log(user);

    this.router.navigate(['/login']);
  }

  doSignUp(user: User) {
    console.log('doSignUp');
    console.log(user);

    this.router.navigate(['/login']);
  }

  userIsAuthenticated() {
    return this.userAuthenticated;
  }
}
