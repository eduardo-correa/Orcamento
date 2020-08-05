import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuarioCreateComponent } from './pages/usuario/usuario-create/usuario-create.component';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "usuario", component: UsuarioComponent},
  {path: "usuario/novo", component: UsuarioCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
