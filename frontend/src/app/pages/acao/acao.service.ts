import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Acao } from './acao.model';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcaoService {

  baseUrl = "http://localhost:3333/acoes";
  headers = new HttpHeaders().set('Authorization', '1');

  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) { }
  
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  create(acao: Acao): Observable <Acao> {
    return this.http.post<Acao>(this.baseUrl, acao, {headers: this.headers}).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  
  read(): Observable<Acao[]> {
    return this.http.get<Acao[]>(this.baseUrl).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Acao> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Acao>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  update(acaoUpdate: Acao): Observable<Acao> {
    const url = `${this.baseUrl}/${acaoUpdate.id_acao}`;
    return this.http.put<Acao>(url, acaoUpdate, {headers: this.headers}).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Acao> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Acao>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  errorHandler( e: any): Observable<any> {
    console.log(e);
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
