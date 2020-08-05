import { NC } from './nota-credito.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotaCreditoService {

  baseUrl = "http://localhost:3333/nt_credito";
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

  create(ntCredito: NC): Observable <NC> {
    console.log(ntCredito);
    return this.http.post<NC>(this.baseUrl, ntCredito, {headers: this.headers}).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  read(): Observable<NC[]> {
    return this.http.get<NC[]>(this.baseUrl).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  readById(idNCredito: number): Observable<NC> {
    const url = `${this.baseUrl}/${idNCredito}`;
    return this.http.get<NC>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  update(ntCreditoUpdate: NC): Observable<NC> {
    const url = `${this.baseUrl}/${ntCreditoUpdate.id_nota_credito}`;
    return this.http.put<NC>(url, ntCreditoUpdate).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<NC> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<NC>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  errorHandler( e: any): Observable<any> {
    console.log(e);
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
