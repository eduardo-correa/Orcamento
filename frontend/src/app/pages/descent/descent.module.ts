import { DescentPaeService } from "./descent-pae.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./../../shared/material/material.module";
import { DescentService } from "./descent.service";
import { DescentRoutingModule } from "./descent.routing.module";
import { DescentComponent } from "./descent.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DescentFormComponent } from "./descent-form/descent-form.component";
import { DescentDdoListComponent } from './descent-ddo/descent-ddo-list/descent-ddo-list.component';

@NgModule({
  declarations: [DescentComponent, DescentFormComponent, DescentDdoListComponent],
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
