import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

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
  }

  doLogout() {
    console.log('doLogout');

    this.setUserAuthenticated(false, null, null);
  }

  resetPassword(email) {
    console.log('resetPassword');
    console.log(email);

    this.router.navigate(['/login']);
  }

  setUserAuthenticated(status, access_token, userid) {
    if(status) {
      localStorage.setItem('userToken', access_token);
      localStorage.setItem('userid', userid);
    } else {
      if(localStorage.userToken) {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userid');
      }
    }

    this.userAuthenticated = status;

    this.showMenuEmitter.emit(status);
  }

  userIsAuthenticated() {
    return this.userAuthenticated;
  }
  
  getAuthenticatedUser() {
    return parseInt(localStorage.userid);
  }
}
