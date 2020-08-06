import { LicitacaoItem } from './licitacao-item.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LicitacaoItemService {

  baseUrl = "http://localhost:3333/licitacao_item";
  headers = new HttpHeaders().set('Authorization', '1');

  constructor( private http: HttpClient,
    private snackBar: MatSnackBar) { }

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

  read(idArp: string): Observable<LicitacaoItem[]> {
    const url = `${this.baseUrl}/${idArp}`
    return this.http.get<LicitacaoItem[]>( url ).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  readById(idItem: number): Observable<LicitacaoItem> {
    const url = `${this.baseUrl}/item/${idItem}`
    return this.http.get<LicitacaoItem>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  readByArp(idArp: number): Observable<LicitacaoItem[]> {
    const url = `${this.baseUrl}/itens/${idArp}`
    return this.http.get<LicitacaoItem>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  create(licitacaoItem: LicitacaoItem): Observable<LicitacaoItem> {
    return this.http.post<LicitacaoItem>(this.baseUrl, licitacaoItem, {headers: this.headers}).pipe(
      map(obj => obj), catchError (e => this.errorHandler(e))
    )
  }

  update(itemUpdate: LicitacaoItem): Observable<LicitacaoItem> {
    const url = `${this.baseUrl}/${itemUpdate.id_licitacao_item}`;
    return this.http.put<LicitacaoItem>(url, itemUpdate, {headers: this.headers}).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  delete(idItem: number): Observable<LicitacaoItem> {
    const url = `${this.baseUrl}/${idItem}`
    return this.http.delete<LicitacaoItem>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

}
