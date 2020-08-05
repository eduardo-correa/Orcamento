import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DDO } from './ddo.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DdoService } from './ddo.service';
import { DdoFormComponent } from './ddo-form/ddo-form.component';

@Component({
  selector: 'cggov-ddo',
  templateUrl: './ddo.component.html',
  styleUrls: ['./ddo.component.scss']
})
export class DdoComponent implements OnInit {

  ddos: MatTableDataSource<DDO>;
  @ViewChild (MatSort) sort: MatSort;
  @ViewChild (MatPaginator) paginator: MatPaginator;
  searchKey: string;
  displayedColumns = [
    'nome_acao',
    'nome_ug',
    'vlr_demandado',
    'recurso_proprio',
    'novo',
    //'aprc_cgtic_local',
    'possui_dod',
    // 'compr_liquidacao',
    // 'cronograma',
    'ass_presidente',
    // 'po_local',
    'action'
  ];

  constructor(private router: Router,
    private ddoService: DdoService,
    private dialogForm: MatDialog) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.ddoService.read().subscribe( retorno => {
      this.ddos = new MatTableDataSource(retorno);
      this.ddos.sort = this.sort;
      this.ddos.paginator = this.paginator;
    })
  }

  novoDdo(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = null;
    const dialogRef = this.dialogForm.open(DdoFormComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( result => {
      this.carregarDados();
    })
  }

  updateDdo(id: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {idDdo: id};
    const dialogRef = this.dialogForm.open(DdoFormComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( result => {
      this.carregarDados();
    })
  }

  deleteDdo(id: string): void {
    if ( confirm( 'Tem certeza que deseja excluir este DDO? ' )) {
      this.ddoService.delete( +id ).subscribe( () => {
        this.ddoService.showMessage('DDO excluído.');
        this.carregarDados();
      })
    }
  }

  pesquisar(): void {
    this.ddos.filter = this.searchKey.trim().toLowerCase();
  }

  limparPesquisa(): void {
    this.searchKey = "";
    this.pesquisar();
  }

}
