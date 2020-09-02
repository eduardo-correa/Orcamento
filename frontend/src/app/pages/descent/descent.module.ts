import { DescentPaeService } from "./descent-pae.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./../../shared/material/material.module";
import { DescentService } from "./descent.service";
import { DescentRoutingModule } from "./descent.routing.module";
import { DescentComponent } from "./descent.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DescentFormComponent } from "./descent-form/descent-form.component";
import { DescentFormUpdateComponent } from "./descent-form-update/descent-form-update.component";

@NgModule({
  declarations: [
    DescentComponent,
    DescentFormComponent,
    DescentFormUpdateComponent,
  ],
  imports: [
    CommonModule,
    DescentRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DescentService, DescentPaeService],
})
export class DescentModule {}
