import { Licitacao } from './../../licitacao.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { LicitacaoItemService } from '../licitacao-item.service';
import { LicitacaoItem } from '../licitacao-item.model';
import { LicitacaoService } from '../../licitacao.service';
import { LicitacaoItemFormComponent } from '../licitacao-item-form/licitacao-item-form.component';

@Component({
  selector: 'cggov-licitacao-item-list',
  templateUrl: './licitacao-item-list.component.html',
  styleUrls: ['./licitacao-item-list.component.scss']
})
export class LicitacaoItemListComponent implements OnInit {

  itens: MatTableDataSource<LicitacaoItem>;
  displayedColumns = ['num_licitacao_item', 'nome_licitacao_item', 'valor', 'action'];
  @ViewChild (MatSort) sort: MatSort;
  @ViewChild (MatPaginator) paginator: MatPaginator;
  searchKey: string;
  licitacao: Licitacao = {
    id_licitacao: null,
    id_acao: null,
    id_ug: null,
    num_licitacao: "",
    ano_licitacao: null,
    descricao: "",
    procedimento: "",
    dt_vigencia: null,
  }
  
  constructor (
    private route: ActivatedRoute,
    private licitacaoItemService: LicitacaoItemService,
    private licitacaoService: LicitacaoService,
    private dialogForm: MatDialog) {
    
  }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    const id = this.route.snapshot.paramMap.get('id_licitacao');
    this.licitacaoItemService.read(id).subscribe( retorno => {
      this.itens = new MatTableDataSource(retorno);
      this.itens.sort = this.sort;
      this.itens.paginator = this.paginator;
    });
    this.licitacaoService.readById(+id).subscribe( (licitacao) => {
      this.licitacao = licitacao[0];
    })
  }

  novoItem(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {
      idLicitacao: this.licitacao.id_licitacao,
      idItem: null
    };
    const dialogRef = this.dialogForm.open(LicitacaoItemFormComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( result => {
      this.carregarDados();
    })
  }

  updateItem(id: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {
      idLicitacao: this.licitacao.id_licitacao,
      idItem: id
    };
    const dialogRef = this.dialogForm.open(LicitacaoItemFormComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( result => {
      this.carregarDados();
    })
  }

  deleteItem (idItem: string): void {
    if (confirm( 'Tem certeza que deseja excluir este item da Licitação?' )) {
      this.licitacaoItemService.delete( +idItem ).subscribe( () => {
        this.licitacaoItemService.showMessage('Item da Licitação excluído.');
        this.carregarDados();
      })
    }
  }

  pesquisar(): void {
    this.itens.filter = this.searchKey.trim().toLowerCase();
  }

  limparPesquisa(): void {
    this.searchKey = "";
    this.pesquisar();
  }

}
