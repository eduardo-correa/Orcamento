import { ArpItemService } from './arp-item/arp-item.service';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArpRoutingModule } from './arp.routing.module';
import { ArpService } from './arp.service';
import { ArpComponent } from './arp.component';
import { ArpFormComponent } from './arp-form/arp-form.component';
import { ArpItemListComponent } from './arp-item/arp-item-list/arp-item-list.component';
import { ArpItemFormComponent } from './arp-item/arp-item-form/arp-item-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArpComponent,
    ArpFormComponent,
    ArpItemListComponent,
    ArpItemFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ArpRoutingModule,
  ],
  providers: [
    ArpService,
    ArpItemService
  ]
})
export class ArpModule { }
