import { LicitacaoService } from './licitacao.service';
import { Licitacao } from './licitacao.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LicitacaoFormComponent } from './licitacao-form/licitacao-form.component';

@Component({
  selector: 'cggov-licitacao',
  templateUrl: './licitacao.component.html',
  styleUrls: ['./licitacao.component.scss']
})
export class LicitacaoComponent implements OnInit {

  licitacoes: MatTableDataSource<Licitacao>;
  displayedColumns = ['num_licitacao', 'ano_licitacao', 'nome_ug', 'nome_acao', 'descricao', 'action'];
  @ViewChild (MatSort) sort: MatSort;
  @ViewChild (MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(
    private licitacoeService: LicitacaoService,
    private dialogForm: MatDialog) {
  }
  
  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.licitacoeService.read().subscribe( retorno => {
      this.licitacoes = new MatTableDataSource(retorno);
      this.licitacoes.sort = this.sort;
      this.licitacoes.paginator = this.paginator;
    })
  }

  novaLicitacao(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = null;
    const dialogRef = this.dialogForm.open(LicitacaoFormComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( result => {
      this.carregarDados();
    })
  }

  updateLicitacao(id: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {idLicitacao: id};
    const dialogRef = this.dialogForm.open(LicitacaoFormComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( result => {
      this.carregarDados();
    })
  }

  deleteLicitacao(id: string): void {
    if ( confirm( 'Tem certeza que deseja excluir esta Licitação? ' )) {
      this.licitacoeService.delete( +id ).subscribe( () => {
        this.licitacoeService.showMessage('Licitação excluída.');
        this.carregarDados();
      })
    }
  }

  limparPesquisa(): void {
    this.searchKey = "";
    this.pesquisar();
  }

  pesquisar(): void {
    this.licitacoes.filter = this.searchKey.trim().toLowerCase();
  }

}
