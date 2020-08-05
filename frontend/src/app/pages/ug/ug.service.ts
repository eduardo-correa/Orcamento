import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ug } from './ug.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UgService {

  baseUrl = "http://localhost:3333/ug";

  constructor(private http: HttpClient) { }
  

  read(): Observable<Ug[]> {
    return this.http.get<Ug[]>(this.baseUrl);
  }

  readById(idUg: string): Observable<Ug> {
    const url = `${this.baseUrl}/${idUg}`
    return this.http.get<Ug>(url)
  }

}
