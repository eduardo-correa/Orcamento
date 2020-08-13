import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Licitacao } from './../../../licitacao/licitacao.model';
import { LicitacaoItem } from './../../../licitacao/licitacao-item/licitacao-item.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DdoItemService } from './../ddo-item.service';
import { DdoItem } from './../ddo-item.model';
import { SelectionModel } from '@angular/cdk/collections';
import { LicitacaoService } from 'src/app/pages/licitacao/licitacao.service';
import { LicitacaoItemService } from 'src/app/pages/licitacao/licitacao-item/licitacao-item.service';
import { DdoItemFormComponent } from '../ddo-item-form/ddo-item-form.component';


@Component({
  selector: 'cggov-ddo-item-select',
  templateUrl: './ddo-item-select.component.html',
  styleUrls: ['./ddo-item-select.component.scss']
})
export class DdoItemSelectComponent implements OnInit {

  alturaDialog: string = "200px";
  isDisabled: boolean = true;
  selection = new SelectionModel<LicitacaoItem>(true, []);
  licitacoes: Licitacao[] = null;
  licitacaoItens: MatTableDataSource<LicitacaoItem>;

  displayedColumns = [
    'selecionados',
    'num_licitacao_item',
    'nome_licitacao_item',
    'valor',
  ]

  @ViewChild (MatPaginator) paginator: MatPaginator;

  ddoItem: DdoItem = {
    id_ddo: null,
    id_licitacao: null,
    id_licitacao_item: null,
    qtd_demandada: 0,
    elemento_despesa: "",
    nome_item: null,
    valor_item: null,
    identifica_licitacao: null,
    id_usuario: 1
  }
  itens: Array<DdoItem> = [];

  constructor(
    private licitacaoService: LicitacaoService,
    private licitacaoItemService: LicitacaoItemService,
    public dialogRef: MatDialogRef<DdoItemFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    this.licitacaoService.read().subscribe( retorno => {
      this.licitacoes = retorno;
    })
  }

  createItem(): void {
    if (this.selection.selected.length != 0) {
      // for (let itemNovo of this.selection.selected) {
      //   this.ddoItem.id_licitacao_item = itemNovo.id_licitacao_item;
      //   this.ddoItem.id_licitacao = itemNovo.id_licitacao;
      //   this.ddoItem.nome_item = itemNovo.nome_licitacao_item;
      //   this.ddoItem.id_ddo = this.data.idDdo;
      //   console.log("DDO Item ======= ")
      //   console.log(this.ddoItem);
      //   console.log("================");
      //   this.itens.push(this.ddoItem);

        // this.itemService.create(this.ddoItem).subscribe( () => {
        //   this.itemService.showMessage('Item criado.');
        // });
      // }
      this.dialogRef.close(this.selection.selected);
    } else {
      this.dialogRef.close();
    }
  }


  buscaItens(idLicitacao: number): void {
    this.licitacaoItemService.readByLicitacao(idLicitacao).subscribe( retorno => {
      this.licitacaoItens = new MatTableDataSource( retorno );
      this.licitacaoItens.paginator = this.paginator;
    })
    this.isDisabled = false;
    this.alturaDialog = "500px";
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    let numRows = 5;
    if (this.licitacaoItens) {
      numRows = this.licitacaoItens.data.length  
    }
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.licitacaoItens.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: LicitacaoItem): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.num_licitacao_item + 1}`;
  }

}
