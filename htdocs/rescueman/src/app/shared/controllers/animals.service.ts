import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  private apiURL = `${environment.API}/animals`;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Animal>(`${this.apiURL}`);
  }

  get(id) {
    return this.http.get<Animal>(`${this.apiURL}/${id}`);
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
