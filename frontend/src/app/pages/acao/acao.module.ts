import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcaoComponent } from './acao.component';
import { AcaoService } from './acao.service';
import { AcaoRoutingModule } from './acao.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcaoFormComponent } from './acao-form/acao-form.component';


@NgModule({
  declarations: [
    AcaoComponent,
    AcaoFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AcaoRoutingModule
  ],
  providers: [
    AcaoService
  ]
})
export class AcaoModule { }
