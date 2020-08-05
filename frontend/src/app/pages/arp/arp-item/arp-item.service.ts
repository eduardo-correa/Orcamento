import { ArpItem } from './arp-item.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArpItemService {

  baseUrl = "http://localhost:3333/arp_item";
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

  read(idArp: string): Observable<ArpItem[]> {
    const url = `${this.baseUrl}/${idArp}`
    return this.http.get<ArpItem[]>( url ).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  readById(idItem: number): Observable<ArpItem> {
    const url = `${this.baseUrl}/item/${idItem}`
    return this.http.get<ArpItem>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  readByArp(idArp: number): Observable<ArpItem[]> {
    const url = `${this.baseUrl}/itens/${idArp}`
    return this.http.get<ArpItem>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  create(arpItem: ArpItem): Observable<ArpItem> {
    return this.http.post<ArpItem>(this.baseUrl, arpItem, {headers: this.headers}).pipe(
      map(obj => obj), catchError (e => this.errorHandler(e))
    )
  }

  update(itemUpdate: ArpItem): Observable<ArpItem> {
    const url = `${this.baseUrl}/${itemUpdate.id_arp_item}`;
    return this.http.put<ArpItem>(url, itemUpdate, {headers: this.headers}).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

  delete(idItem: number): Observable<ArpItem> {
    const url = `${this.baseUrl}/${idItem}`
    return this.http.delete<ArpItem>(url).pipe(
      map(obj => obj), catchError( e => this.errorHandler(e))
    );
  }

}
