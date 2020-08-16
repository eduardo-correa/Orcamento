import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Licitacao } from './../../../licitacao/licitacao.model';
import { LicitacaoItem } from './../../../licitacao/licitacao-item/licitacao-item.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  
  //para preencher o select
  licitacoes: Licitacao[] = null;

  //itens da licitação que foram selecionados
  licitacaoItens: MatTableDataSource<LicitacaoItem>;

  displayedColumns = [
    'selecionados',
    'num_licitacao_item',
    'nome_licitacao_item',
    'valor',
  ]

  @ViewChild (MatPaginator) paginator: MatPaginator;

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


  addItem(): void {
    if (this.selection.selected.length != 0) {
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
