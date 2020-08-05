import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescentComponent } from '../descent/descent.component';


const descentRoutes: Routes = [
  {path: "descentralizacao", component: DescentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(descentRoutes)],
  exports: [RouterModule]
})
export class DescentRoutingModule { }
