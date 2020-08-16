import { MatTableDataSource } from '@angular/material/table';
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

  itens: MatTableDataSource<any>;

  displayedColumns = [
    'nome_licitacao_item',
    'valor',
    'qtd_demandada',
    'elemento_despesa'
  ]

  constructor(
    private dialogRef: MatDialogRef<DdoItemFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.itens = this.data.itens;
  }

  converteItem( itemEnviado: any ): DdoItem {
    let meuItem : DdoItem;
    meuItem.id_ddo = this.data.idDDO;
    meuItem.id_licitacao = itemEnviado.id_licitacao;
    meuItem.id_licitacao_item = itemEnviado.id_licitacao_item;
    meuItem.id_usuario = itemEnviado.id_usuario;
    return(meuItem);
  }
}
