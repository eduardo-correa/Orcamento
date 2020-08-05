import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UgService } from './../ug/ug.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotaCreditoService } from './nota-credito.service';
import { NC } from './nota-credito.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NotaCreditoFormComponent } from './nota-credito-form/nota-credito-form.component';

@Component({
  selector: 'cggov-nota-credito',
  templateUrl: './nota-credito.component.html',
  styleUrls: ['./nota-credito.component.scss']
})
export class NotaCreditoComponent implements OnInit {

  ntCreditos: MatTableDataSource<NC>;
  @ViewChild (MatSort) sort: MatSort;
  @ViewChild (MatPaginator) paginator: MatPaginator;
  searchKey: string;
  displayedColumns = [
    'num_nota_credito',
    'cod_ug',
    'valor',
    'dt_nota_credito',
    'action'
  ];

  constructor(private ugService: UgService,
    private ncService: NotaCreditoService,
    private dialogCreate: MatDialog) {
  }


  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.ncService.read().subscribe( retorno => {
      this.ntCreditos = new MatTableDataSource( retorno );
      this.ntCreditos.sort = this.sort;
      this.ntCreditos.paginator = this.paginator;
    })
  }

  novaNC(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = null;
    const dialogRef = this.dialogCreate.open(NotaCreditoFormComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( result => {
      this.carregarDados();
    })
  }

  updateNC(id: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {idNC: id};
    const dialogRef = this.dialogCreate.open(NotaCreditoFormComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( result => {
      this.carregarDados();
    })
  }

  deleteNC(id: string): void {
    if ( confirm( 'Tem certeza que deseja excluir esta Nota de Crédito? ' )) {
      this.ncService.delete( +id ).subscribe( () => {
        this.ncService.showMessage('Nota de Crédito excluída.');
        this.carregarDados();
      })
    }
  }

  pesquisar(): void {
    this.ntCreditos.filter = this.searchKey.trim().toLowerCase();
  }

  limparPesquisa(): void {
    this.searchKey = "";
    this.pesquisar();
  }

}
