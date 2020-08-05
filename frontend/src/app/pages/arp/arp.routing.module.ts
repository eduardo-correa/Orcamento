import { ArpItemListComponent } from './arp-item/arp-item-list/arp-item-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArpComponent } from './arp.component';


const arpRoutes: Routes = [
  {path: "arp", component: ArpComponent},
  {path: "arp/item/:id_arp", component: ArpItemListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(arpRoutes)],
  exports: [RouterModule]
})
export class ArpRoutingModule { }
