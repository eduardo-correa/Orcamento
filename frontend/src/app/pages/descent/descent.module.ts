import { DescentPaeService } from "./descent-pae.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./../../shared/material/material.module";
import { DescentRoutingModule } from "./descent.routing.module";
import { DescentComponent } from "./descent.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DescentFormComponent } from "./descent-form/descent-form.component";
import { DescentDdoListComponent } from "./descent-ddo/descent-ddo-list/descent-ddo-list.component";
import { DescentDdoService } from "./descent-ddo/descent-ddo.service";

@NgModule({
  declarations: [
    DescentComponent,
    DescentFormComponent,
    DescentDdoListComponent,
  ],
  imports: [
    CommonModule,
    DescentRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DescentDdoService, DescentPaeService],
})
export class DescentModule {}
