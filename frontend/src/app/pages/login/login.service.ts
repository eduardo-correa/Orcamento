import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioAutenticado: boolean = false;
  exibirMenuEmitter = new EventEmitter<boolean>();

  constructor( private router: Router) { }

  login( usuario: Usuario ) {
    if (usuario.email === 'admin' && usuario.senha === 'admin') {
      this.usuarioAutenticado = true;
      this.exibirMenuEmitter.emit(true);
      this.router.navigate(['home']);
    } else {
      this.usuarioAutenticado = false;
      this.exibirMenuEmitter.emit(false);
      alert ("Informações de login incorretas!");
    }
  }
}
