import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArpItemService } from './../arp-item.service';
import { Router } from '@angular/router';
import { ArpItem } from './../arp-item.model';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'cggov-arp-item-form',
  templateUrl: './arp-item-form.component.html',
  styleUrls: ['./arp-item-form.component.scss']
})
export class ArpItemFormComponent implements OnInit {

  arpItem: ArpItem = {
    id_arp: null,
    nome_arp_item: "",
    num_arp_item: null,
    valor: null,
  }

  arpNovoItem: string = null;

  constructor( private router: Router,
    private itemService: ArpItemService,
    public dialogRef: MatDialogRef<ArpItemFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    if (this.data.idItem) {
      this.itemService.readById(this.data.idItem).subscribe( retorno => {
        this.arpItem = retorno[0]
      })
    } else {
      this.arpNovoItem = this.data.idArp;
    }
  }

  createItem(): void {
    this.arpItem.id_arp = +this.arpNovoItem;
    this.itemService.create(this.arpItem).subscribe(() => {
      this.itemService.showMessage('Item criado.');
      this.dialogRef.close();
    });
  }

  updateItem(): void {
    this.itemService.update(this.arpItem).subscribe(() => {
      this.itemService.showMessage('Item atualizado.');
      this.dialogRef.close();
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
