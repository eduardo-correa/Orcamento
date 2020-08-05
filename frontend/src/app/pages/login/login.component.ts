import { Usuario } from './../usuario/usuario.model';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cggov-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {
    email: '',
    senha: ''
  };

  constructor( private loginService: LoginService) { }

  ngOnInit(): void {
  
  }

  login(): void {
    this.loginService.login(this.usuario);
  }

}
