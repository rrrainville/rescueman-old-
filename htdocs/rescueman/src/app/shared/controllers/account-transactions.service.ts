import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountTransaction } from '../models/account-transaction';

@Injectable({
  providedIn: 'root'
})
export class AccountTransactionsService {

  private apiURL = `${environment.API}/accounttransactions`;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<AccountTransaction>(`${this.apiURL}`);
  }

  get(id) {
    return this.http.get<AccountTransaction>(`${this.apiURL}/${id}`);
  }

  getByAccountId(accountId) {
    return this.http.get<AccountTransaction>(`${this.apiURL}/account/${accountId}`);
  }

  getDebits() {
    return this.http.get<AccountTransaction>(`${this.apiURL}/debits`);
  }

  getCredits() {
    return this.http.get<AccountTransaction>(`${this.apiURL}/credits`);
  }

  getTotalDebits() {
    return this.http.get<AccountTransaction>(`${this.apiURL}/debits/total`);
  }

  getTotalCredits() {
    return this.http.get<AccountTransaction>(`${this.apiURL}/credits/total`);
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
