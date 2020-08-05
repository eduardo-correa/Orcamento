import { DdoItem } from './ddo-item.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DdoItemService {

  baseUrl = "http://localhost:3333/ddo_item";
  headers = new HttpHeaders().set('Authorization', '1');

  constructor( private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  errorHandler( e: any): Observable<any> {
    console.log(e);
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  read(idDdoItem: string): Observable<DdoItem[]> {
    const url = `${this.baseUrl}/${idDdoItem}`
    return this.http.get<DdoItem[]>( url ).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  readById(idItem: number): Observable<DdoItem> {
    const url = `${this.baseUrl}/item/${idItem}`
    return this.http.get<DdoItem>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  create(ddoItem: DdoItem): Observable<DdoItem> {
    return this.http.post<DdoItem>(this.baseUrl, ddoItem, {headers: this.headers}).pipe(
      map(obj => obj), catchError (e => this.errorHandler(e))
    )
  }

  update(itemUpdate: DdoItem): Observable<DdoItem> {
    const url = `${this.baseUrl}/${itemUpdate.id_ddo_item}`;
    return this.http.put<DdoItem>(url, itemUpdate, {headers: this.headers}).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  delete(idItem: number): Observable<DdoItem> {
    const url = `${this.baseUrl}/${idItem}`
    return this.http.delete<DdoItem>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }
}
