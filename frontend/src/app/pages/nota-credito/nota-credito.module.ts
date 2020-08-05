import { NotaCreditoFormComponent } from './nota-credito-form/nota-credito-form.component';
import { NotaCreditoService } from './nota-credito.service';
import { NotaCreditoRoutingModule } from './nota-credito.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotaCreditoComponent } from './nota-credito.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NotaCreditoComponent,
    NotaCreditoFormComponent,
  ],
  imports: [
    CommonModule,
    NotaCreditoRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    NotaCreditoService
  ]
})
export class NotaCreditoModule { }
