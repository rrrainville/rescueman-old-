import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from './../../environments/environment';

import { User } from './user';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = `${environment.API}/auth/login`;

  private userAuthenticated: boolean = false;  // false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router) { }

  userAuthentication(username, password) {
    console.log(username, password);

    const data = { 'email': username, 'password': password };
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiURL, data, { headers: reqHeader });

    /*
    //if (user.name === 'user@gmail.com' &&
    //  user.password === '123456') {

    if (username === '1' &&
      password === '1') {
        this.userAuthenticated = true;

        this.showMenuEmitter.emit(true);

        this.router.navigate(['/']);
    } else {
      this.userAuthenticated = false;

      this.showMenuEmitter.emit(false);
    }
    */
  }

  doLogout() {
    console.log('doLogout');

    this.setUserAuthenticated(false, null);

    // this.userAuthenticated = false;

    // this.showMenuEmitter.emit(false);

    // debugger;

    // if(localStorage.userToken)
    //   localStorage.removeItem('userToken');

    //this.router.navigate(['/login']);
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

  setUserAuthenticated(status, access_token) {
    if(status) {
      localStorage.setItem('userToken', access_token);
    } else {
      if(localStorage.userToken) {
        localStorage.removeItem('userToken');
      }
    }

    this.userAuthenticated = status;

    this.showMenuEmitter.emit(status);
  }

  userIsAuthenticated() {
    return this.userAuthenticated;
  }
}
