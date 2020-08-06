import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicitacaoRoutingModule } from './licitacao.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LicitacaoComponent } from './licitacao.component';
import { LicitacaoFormComponent } from './licitacao-form/licitacao-form.component';
import { LicitacaoItemListComponent } from './licitacao-item/licitacao-item-list/licitacao-item-list.component';
import { LicitacaoItemFormComponent } from './licitacao-item/licitacao-item-form/licitacao-item-form.component';
import { LicitacaoService } from './licitacao.service';
import { LicitacaoItemService } from './licitacao-item/licitacao-item.service';


@NgModule({
  declarations: [
    LicitacaoComponent,
    LicitacaoFormComponent,
    LicitacaoItemListComponent,
    LicitacaoItemFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LicitacaoRoutingModule,
  ],
  providers: [
    LicitacaoService,
    LicitacaoItemService
  ]
})
export class LicitacaoModule { }
