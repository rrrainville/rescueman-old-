import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURL = `${environment.API}/users`;

  constructor(
    private http: HttpClient
  ) { }

  // doSignUp(user: User) {
  //   console.log('doSignUp');
  //   console.log(user);

  //   //this.router.navigate(['/login']);
  // }

  getAll() {
    return this.http.get<User>(`${this.apiURL}`);
  }

  get(id) {
    return this.http.get<User>(`${this.apiURL}/${id}`);
  }

  update(user: any) {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(`${this.apiURL}/${user.id}`, user, { headers: reqHeader })
  }

  create(user: any) {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${this.apiURL}`, user, { headers: reqHeader })
  }
}
