import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DdoComponent } from './ddo.component';
import { DdoItemListComponent } from './ddo-item/ddo-item-list/ddo-item-list.component';


const ddoRoutes: Routes = [
  {path: "ddo", component: DdoComponent},
  {path: "ddo/item/:id_ddo", component: DdoItemListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(ddoRoutes)],
  exports: [RouterModule]
})
export class DdoRoutingModule { }
