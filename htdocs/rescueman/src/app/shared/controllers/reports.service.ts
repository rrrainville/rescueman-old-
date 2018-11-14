import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Report } from '../models/report';


@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private apiURL = `${environment.API}/reports`;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Report>(`${this.apiURL}`);
  }

  get(id) {
    return this.http.get<Report>(`${this.apiURL}/${id}`);
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
