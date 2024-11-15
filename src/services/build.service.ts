import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Build } from '../types/build';
import { BuildNameDescriptionDTO } from '../types/BuildNameDescriptionDTO';

@Injectable({
  providedIn: 'root'
})
export class BuildService {
  private url = "http://localhost:8082/build"

  constructor(private http: HttpClient) { }

  createNew(build: Build): Observable<any> {
    build.createdAt = new Date();
    return this.http.post(`${this.url}/`, build)
  }

  getAll(): Observable<Build[]> {
    return this.http.get<Build[]>(`${this.url}/`)
  }

  getById(id: number): Observable<Build> {
    return this.http.get<Build>(`${this.url}/${id}`)
  }

  getNamesAndDescriptionByHeroId(heroId: number): Observable<BuildNameDescriptionDTO[]> {
    return this.http.get<BuildNameDescriptionDTO[]>(`${this.url}/hero/name-description/${heroId}`)
  }
}
