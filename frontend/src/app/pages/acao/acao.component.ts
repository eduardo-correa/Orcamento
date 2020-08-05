import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Acao } from './acao.model';
import { Router } from '@angular/router';
import { AcaoService } from './acao.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AcaoFormComponent } from './acao-form/acao-form.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'cggov-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.scss']
})
export class AcaoComponent implements OnInit {

  acoes: MatTableDataSource<Acao>;
  displayedColumns = ['nome', 'descricao', 'action'];
  @ViewChild( MatSort) sort: MatSort;
  @ViewChild( MatPaginator ) paginator: MatPaginator;
  searchKey: string;

  constructor(private router: Router,
    private acaoService: AcaoService,
    private dialogForm: MatDialog) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.acaoService.read().subscribe( retorno => {
      this.acoes = new MatTableDataSource(retorno);
      this.acoes.sort = this.sort;
      this.acoes.paginator = this.paginator;
    })
  }

  novaAcao(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = null;
    const dialogRef = this.dialogForm.open(AcaoFormComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( result => {
      this.carregarDados();
    })
  }

  updateAcao(id: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {idAcao: id};
    const dialogRef = this.dialogForm.open(AcaoFormComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( result => {
      this.carregarDados();
    })
  }

  deleteAcao(id: string): void {
    if ( confirm( 'Tem certeza que deseja excluir esta Ação? ' )) {
      this.acaoService.delete( +id ).subscribe( () => {
        this.acaoService.showMessage('Ação excluída.');
        this.carregarDados();
      })
    }
  }

  limparPesquisa(): void {
    this.searchKey = "";
    this.pesquisar();
  }

  pesquisar(): void {
    this.acoes.filter = this.searchKey.trim().toLowerCase();
  }

}
