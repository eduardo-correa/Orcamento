import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DdoItemService } from './../ddo-item.service';
import { DdoItem } from './../ddo-item.model';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'cggov-ddo-item-update',
  templateUrl: './ddo-item-update.component.html',
  styleUrls: ['./ddo-item-update.component.scss']
})
export class DdoItemUpdateComponent implements OnInit {

  ddoItem: DdoItem = {
    id_ddo: null,
    id_arp: null,
    id_arp_item: null,
    qtd_demandada: null,
    qtd_aprovada: null,
    elemento_despesa: null,
    nome_item: null,
    valor_item: null,
    identifica_arp: null,
  }
  nomeItem: string = null;
  valorItem: string = null;
  identificaARP: string = null;

  constructor( private itemService: DdoItemService,
    private dialogRef: MatDialogRef<DdoItemUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.itemService.readById(this.data.itemUpdate.id_ddo_item).subscribe( retorno => {
      this.ddoItem = retorno[0]
    })
    this.nomeItem = this.data.itemUpdate.nome_item;
    this.valorItem = this.data.itemUpdate.valor_item;
    this.identificaARP = this.data.itemUpdate.identifica_arp;
  }

  updateItem(): void {
    this.itemService.update(this.ddoItem).subscribe( () => {
      this.itemService.showMessage('Item atualizado.');
      this.dialogRef.close();
    })
  }

}
