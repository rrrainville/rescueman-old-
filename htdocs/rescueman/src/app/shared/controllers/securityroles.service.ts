import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SecurityRole } from '../models/securityrole';

@Injectable({
  providedIn: 'root'
})
export class SecurityRolesService {

  private apiURL = `${environment.API}/securityroles`;

  constructor(
    private http: HttpClient
  ) { }

  // doSignUp(user: User) {
  //   console.log('doSignUp');
  //   console.log(user);

  //   //this.router.navigate(['/login']);
  // }

  getAll() {
    return this.http.get<SecurityRole>(`${this.apiURL}`);
  }

  get(id) {
    return this.http.get<SecurityRole>(`${this.apiURL}/${id}`);
  }

  getUsers(id) {
    return this.http.get<SecurityRole>(`${this.apiURL}/${id}/users`);
  }

  update(securityrole: any) {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(`${this.apiURL}/${securityrole.id}`, securityrole, { headers: reqHeader })
  }

  create(securityrole: any) {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${this.apiURL}`, securityrole, { headers: reqHeader })
  }
}
