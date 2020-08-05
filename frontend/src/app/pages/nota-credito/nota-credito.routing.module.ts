import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotaCreditoComponent } from './nota-credito.component';

const notaCreditoRoutes: Routes = [
  {path: "notacredito", component: NotaCreditoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(notaCreditoRoutes)],
  exports: [RouterModule]
})
export class NotaCreditoRoutingModule { }
