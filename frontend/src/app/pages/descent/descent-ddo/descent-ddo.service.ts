import { DescentDdo } from "./descent-ddo.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DescentDdoService {
  baseUrl = "http://localhost:3333/descentddo";
  headers = new HttpHeaders().set("Authorization", "1");

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-sucess"],
    });
  }

  create(descentDdo: DescentDdo): Observable<DescentDdo> {
    return this.http
      .post<DescentDdo>(this.baseUrl, descentDdo, { headers: this.headers })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
  }

  read(): Observable<DescentDdo[]> {
    return this.http.get<DescentDdo[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(idDescentDdo: number): Observable<DescentDdo> {
    const url = `${this.baseUrl}/${idDescentDdo}`;
    return this.http.get<DescentDdo>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readByPae(idPae: number): Observable<DescentDdo[]> {
    const url = `${this.baseUrl}/pae/${idPae}`;
    return this.http.get<DescentDdo[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readByAcao(idAcao: number): Observable<any[]> {
    const url = `${this.baseUrl}/acao/${idAcao}`;
    return this.http.get<any[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(descentUpdate: DescentDdo): Observable<DescentDdo> {
    const url = `${this.baseUrl}/${descentUpdate.id_ddo_descentralizacao}`;
    return this.http
      .put<DescentDdo>(url, descentUpdate, { headers: this.headers })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
  }

  delete(id: number): Observable<DescentDdo> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<DescentDdo>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
