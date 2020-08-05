import { LoginService } from './pages/login/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'cggov-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'orcamento-frontend-angular';

  exibirMenu: boolean = false;

  constructor( private loginService: LoginService) {

  }

  ngOnInit() {
    this.loginService.exibirMenuEmitter.subscribe (
      exibir => this.exibirMenu = exibir
    )
  }
}
