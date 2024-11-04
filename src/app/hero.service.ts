import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../types/hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url = "http://localhost:8082/hero"
  
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.url}/`);
  }

  getHero(id: number): Observable<Hero>{
    return this.http.get<Hero>(`${this.url}/${id}`);
  }
}
