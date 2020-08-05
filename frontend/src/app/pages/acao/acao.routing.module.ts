import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcaoComponent } from './acao.component';


const acaoRoutes: Routes = [
  {path: "acao", component: AcaoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(acaoRoutes)],
  exports: [RouterModule]
})
export class AcaoRoutingModule { }
