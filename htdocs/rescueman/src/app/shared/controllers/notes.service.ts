import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private apiURL = `${environment.API}/notes`;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Note>(`${this.apiURL}`);
  }

  get(id) {
    return this.http.get<Note>(`${this.apiURL}/${id}`);
  }

  getAssignedNotes(entity, id) {
    return this.http.get<Note>(`${this.apiURL}/${entity}/${id}`);
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
