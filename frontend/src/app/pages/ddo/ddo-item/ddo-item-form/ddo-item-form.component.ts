import { DdoItem } from './../ddo-item.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'cggov-ddo-item-form',
  templateUrl: './ddo-item-form.component.html',
  styleUrls: ['./ddo-item-form.component.scss']
})
export class DdoItemFormComponent implements OnInit {

  ddoItens: Array<DdoItem> = [];
  item: DdoItem = {
    id_ddo: 0,
    id_licitacao: 0,
    id_licitacao_item: 0,
    qtd_demandada: 0,
    elemento_despesa: "",
    id_usuario: 0
  };

  displayedColumns = [
    'nome_licitacao_item',
    'valor'
  ]

  constructor(
    private dialogRef: MatDialogRef<DdoItemFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data)

    for (let itemNovo of this.data.itens) {
      console.log(itemNovo)
    }

    // for (let  i = 0; i < this.data.itens.length; i++) {
    //   // console.log(this.data.itens[i]);
    //   this.item.id_ddo = this.data.idDDO;
    //   this.item.id_licitacao = this.data.itens[i].id_licitacao;
    //   this.item.id_licitacao_item = this.data.itens[i].id_licitacao_item;
    //   this.item.qtd_demandada = 0;
    //   this.item.elemento_despesa = "";
    //   this.item.id_usuario = this.data.itens[i].id_usuario;
    //   this.ddoItens.push(this.item);
    //   console.log(this.ddoItens[i]);
    // } 
  }
}
