import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Veterinary } from '../models/veterinary';

@Injectable({
  providedIn: 'root'
})
export class VeterinariansService {

  private apiURL = `${environment.API}/veterinarians`;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Veterinary>(`${this.apiURL}`);
  }

  get(id) {
    return this.http.get<Veterinary>(`${this.apiURL}/${id}`);
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
