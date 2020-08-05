import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Arp } from './arp.model';
import { ArpService } from './arp.service';
import { Router } from '@angular/router';
import { ArpFormComponent } from './arp-form/arp-form.component';

@Component({
  selector: 'cggov-arp',
  templateUrl: './arp.component.html',
  styleUrls: ['./arp.component.scss']
})
export class ArpComponent implements OnInit {

  arps: MatTableDataSource<Arp>;
  displayedColumns = ['num_arp', 'ano_arp', 'nome_ug', 'nome_acao', 'descricao', 'action'];
  @ViewChild (MatSort) sort: MatSort;
  @ViewChild (MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private router: Router,
    private arpService: ArpService,
    private dialogForm: MatDialog) {
  }
  
  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.arpService.read().subscribe( retorno => {
      this.arps = new MatTableDataSource(retorno);
      this.arps.sort = this.sort;
      this.arps.paginator = this.paginator;
    })
  }

  novaArp(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = null;
    const dialogRef = this.dialogForm.open(ArpFormComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( result => {
      this.carregarDados();
    })
  }

  updateArp(id: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {idARP: id};
    const dialogRef = this.dialogForm.open(ArpFormComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( result => {
      this.carregarDados();
    })
  }

  deleteArp(id: string): void {
    if ( confirm( 'Tem certeza que deseja excluir esta ARP? ' )) {
      this.arpService.delete( +id ).subscribe( () => {
        this.arpService.showMessage('ARP excluída.');
        this.carregarDados();
      })
    }
  }

  limparPesquisa(): void {
    this.searchKey = "";
    this.pesquisar();
  }

  pesquisar(): void {
    this.arps.filter = this.searchKey.trim().toLowerCase();
  }

}
