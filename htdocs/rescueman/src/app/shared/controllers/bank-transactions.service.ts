import { Injectable } from '@angular/core';
import { BankTransaction } from '../models/bank-transaction';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BankTransactionsService {

  private apiURL = `${environment.API}/banktransactions`;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<BankTransaction>(`${this.apiURL}`);
  }

  get(id) {
    return this.http.get<BankTransaction>(`${this.apiURL}/${id}`);
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
