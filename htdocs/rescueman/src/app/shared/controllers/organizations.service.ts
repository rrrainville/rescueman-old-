import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Organization } from '../models/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {

  private apiURL = `${environment.API}/organizations`;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Organization>(`${this.apiURL}`);
  }

  get(id) {
    return this.http.get<Organization>(`${this.apiURL}/${id}`);
  }

  update(item: any) {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(`${this.apiURL}/${item.id}`, item, { headers: reqHeader })
  }

  create(item: any) {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${this.apiURL}`, item, { headers: reqHeader })
  }
}
