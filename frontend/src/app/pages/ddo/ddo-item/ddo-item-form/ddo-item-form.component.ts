import { DdoItemService } from './../ddo-item.service';
import { map } from 'rxjs/operators';
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
  ddoItem: DdoItem = {
    id_ddo: 0,
    id_licitacao: 0,
    id_licitacao_item: 0,
    qtd_demandada: 0,
    elemento_despesa: "",
    id_usuario: 0
  };

  // itens: MatTableDataSource<any>;
  itens: MatTableDataSource<any>;

  displayedColumns = [
    'nome_licitacao_item',
    'valor',
    'qtd_demandada',
    'elemento_despesa'
  ]

  constructor(
    private itemService: DdoItemService,
    private dialogRef: MatDialogRef<DdoItemFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.itens = this.data.itens;
  }

  adicionarDados(): void {
    this.ddoItens = this.data.itens.map((elemento) => {
      return {
        id_licitacao: elemento.id_licitacao,
        id_licitacao_item: elemento.id_licitacao_item,
        nome_item: elemento.nome_licitacao_item,
        valor_item: elemento.valor,
        id_usuario: elemento.id_usuario,
        qtd_demandada: +elemento.qtd_demandada,
        elemento_despesa: elemento.elemento_despesa
      }
    })
    this.ddoItens.forEach( item => {
      item.id_ddo = this.data.idDDO
      this.itemService.create(item).subscribe( () => {
        this.itemService.showMessage('Itens inseridos no DDO');
        this.dialogRef.close();
      })
    })
    // console.log(this.itens);
    // console.log(this.ddoItens);
    // this.dialogRef.close();
  }

}
