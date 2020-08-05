import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Arp } from './arp.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArpService {

  baseUrl = "http://localhost:3333/arp";
  headers = new HttpHeaders().set('Authorization', '1');

  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) {
  }
  
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  create(arp: Arp): Observable <Arp> {
    return this.http.post<Arp>(this.baseUrl, arp, {headers: this.headers}).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  read(): Observable<Arp[]> {
    return this.http.get<Arp[]>(this.baseUrl).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  readById(idArp: number): Observable<Arp> {
    const url = `${this.baseUrl}/${idArp}`
    return this.http.get<Arp>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  update(arpUpdate: Arp): Observable<Arp> {
    const url = `${this.baseUrl}/${arpUpdate.id_arp}`;
    return this.http.put<Arp>(url, arpUpdate, {headers: this.headers}).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Arp> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Arp>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  errorHandler( e: any): Observable<any> {
    console.log(e);
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
