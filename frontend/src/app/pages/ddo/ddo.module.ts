import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./../../shared/material/material.module";
import { DdoRoutingModule } from "./ddo.routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DdoComponent } from "./ddo.component";
import { DdoFormComponent } from "./ddo-form/ddo-form.component";
import { DdoService } from "./ddo.service";
import { DdoItemListComponent } from "./ddo-item/ddo-item-list/ddo-item-list.component";
import { DdoItemFormComponent } from "./ddo-item/ddo-item-form/ddo-item-form.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { DdoItemUpdateComponent } from "./ddo-item/ddo-item-update/ddo-item-update.component";
import { DdoItemSelectComponent } from "./ddo-item/ddo-item-select/ddo-item-select.component";

@NgModule({
  declarations: [
    DdoComponent,
    DdoFormComponent,
    DdoItemFormComponent,
    DdoItemListComponent,
    DdoItemUpdateComponent,
    DdoItemSelectComponent,
  ],
  imports: [
    DragDropModule,
    CommonModule,
    DdoRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DdoService],
})
export class DdoModule {}
