import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { DescentService } from './descent.service';
import { DescentRoutingModule } from './descent.routing.module';
import { DescentComponent } from './descent.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescentFormComponent } from './descent-form/descent-form.component';



@NgModule({
  declarations: [
    DescentComponent,
    DescentFormComponent,
  ],
  imports: [
    CommonModule,
    DescentRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    DescentService
  ]
})
export class DescentModule { }
