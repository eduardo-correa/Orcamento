import { DescentDadosService } from "./descent-dados.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./../../shared/material/material.module";
import { DescentService } from "./descent.service";
import { DescentRoutingModule } from "./descent.routing.module";
import { DescentComponent } from "./descent.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DescentFormCreateComponent } from "./descent-form-create/descent-form-create.component";
import { DescentFormUpdateComponent } from "./descent-form-update/descent-form-update.component";

@NgModule({
  declarations: [
    DescentComponent,
    DescentFormCreateComponent,
    DescentFormUpdateComponent,
  ],
  imports: [
    CommonModule,
    DescentRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DescentService, DescentDadosService],
})
export class DescentModule {}
