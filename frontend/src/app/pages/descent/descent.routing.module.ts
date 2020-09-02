import { DescentDdoListComponent } from "./descent-ddo/descent-ddo-list/descent-ddo-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DescentComponent } from "../descent/descent.component";

const descentRoutes: Routes = [
  { path: "descentralizacao", component: DescentComponent },
  {
    path: "descentralizacao/:id_pae_descentralizacao",
    component: DescentDdoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(descentRoutes)],
  exports: [RouterModule],
})
export class DescentRoutingModule {}
