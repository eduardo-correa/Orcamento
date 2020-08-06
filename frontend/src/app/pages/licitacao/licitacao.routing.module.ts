import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicitacaoItemListComponent } from './licitacao-item/licitacao-item-list/licitacao-item-list.component';
import { LicitacaoComponent } from './licitacao.component';


const arpRoutes: Routes = [
  {path: "licitacao", component: LicitacaoComponent},
  {path: "licitacao/item/:id_licitacao", component: LicitacaoItemListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(arpRoutes)],
  exports: [RouterModule]
})
export class LicitacaoRoutingModule { }
