import { Injectable } from '@angular/core';
import { Item } from '../types/item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private url = "http://localhost:8082/item"

  constructor(private http: HttpClient) { }

  getByType(type: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}/${type}`)
  }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}/`)
  }
}
