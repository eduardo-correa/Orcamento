import { Licitacao } from './licitacao.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LicitacaoService {

  baseUrl = "http://localhost:3333/licitacao";
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

  create(licitacao: Licitacao): Observable <Licitacao> {
    return this.http.post<Licitacao>(this.baseUrl, licitacao, {headers: this.headers}).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  read(): Observable<Licitacao[]> {
    return this.http.get<Licitacao[]>(this.baseUrl).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  readById(idLicita: number): Observable<Licitacao> {
    const url = `${this.baseUrl}/${idLicita}`
    return this.http.get<Licitacao>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  update(licitaUpdate: Licitacao): Observable<Licitacao> {
    const url = `${this.baseUrl}/${licitaUpdate.id_licitacao}`;
    return this.http.put<Licitacao>(url, licitaUpdate, {headers: this.headers}).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Licitacao> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Licitacao>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  errorHandler( e: any): Observable<any> {
    console.log(e);
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
