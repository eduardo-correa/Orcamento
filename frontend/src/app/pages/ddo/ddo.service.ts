import { DDO } from './ddo.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DdoService {

  baseUrl = "http://localhost:3333/ddo";
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

  create(ddo: DDO): Observable <DDO> {
    return this.http.post<DDO>(this.baseUrl, ddo, {headers: this.headers}).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  read(): Observable<DDO[]> {
    return this.http.get<DDO[]>(this.baseUrl).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  readById(idDdo: number): Observable<DDO> {
    const url = `${this.baseUrl}/${idDdo}`
    return this.http.get<DDO>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  update(ddoUpdate: DDO): Observable<DDO> {
    const url = `${this.baseUrl}/${ddoUpdate.id_ddo}`;
    return this.http.put<DDO>(url, ddoUpdate, {headers: this.headers}).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<DDO> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<DDO>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  errorHandler( e: any): Observable<any> {
    console.log(e);
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
