import { Descent } from "./descent.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DescentService {
  baseUrl = "http://localhost:3333/descentralizacao";
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

  create(descent: Descent): Observable<Descent> {
    return this.http
      .post<Descent>(this.baseUrl, descent, { headers: this.headers })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
  }

  read(): Observable<Descent[]> {
    return this.http.get<Descent[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(idDescent: number): Observable<Descent> {
    const url = `${this.baseUrl}/${idDescent}`;
    return this.http.get<Descent>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(descentUpdate: Descent): Observable<Descent> {
    const url = `${this.baseUrl}/${descentUpdate.id_pae_descentralizacao}`;
    return this.http
      .put<Descent>(url, descentUpdate, { headers: this.headers })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
  }

  delete(id: number): Observable<Descent> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Descent>(url).pipe(
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
