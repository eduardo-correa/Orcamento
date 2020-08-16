//import { DdoItemQtdComponent } from './../ddo-item-qtd/ddo-item-qtd.component';
import { DdoItemUpdateComponent } from './../ddo-item-update/ddo-item-update.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DDO } from './../../ddo.model';
import { DdoService } from './../../ddo.service';
import { DdoItemService } from './../ddo-item.service';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DdoItem } from '../ddo-item.model';
import { DdoItemFormComponent } from '../ddo-item-form/ddo-item-form.component';
import { LicitacaoItem } from 'src/app/pages/licitacao/licitacao-item/licitacao-item.model';
import { DdoItemSelectComponent } from '../ddo-item-select/ddo-item-select.component';

@Component({
  selector: 'cggov-ddo-item-list',
  templateUrl: './ddo-item-list.component.html',
  styleUrls: ['./ddo-item-list.component.scss']
})
export class DdoItemListComponent implements OnInit {

  itens: MatTableDataSource<DdoItem>;
  licitacaoItens: LicitacaoItem[];
  searchKey: string;
  @ViewChild (MatSort) sort: MatSort;
  @ViewChild (MatPaginator) paginator: MatPaginator;
  ddo: DDO = {
    id_ddo: null,
    id_ug: null,
    nome_ug: null,
    id_acao: null,
    nome_acao: null,
    novo: null,
    recurso_proprio: null,
    vlr_demandado: null,
    aprc_cgtic_local: null,
    possui_dod: null,
    compr_liquidacao: null,
    cronograma: null,
    ass_presidente: null,
    po_local: null,
  };
  displayedColumns = [
    'identifica_arp',
    'nome_item',
    'valor_item',
    'qtd_demandada',
    'action'
  ]

  constructor (
    private route: ActivatedRoute,
    private ddoItemService: DdoItemService,
    private ddoService: DdoService,
    private dialogForm: MatDialog) { }

  carregarDados(): void {
    const id = this.route.snapshot.paramMap.get('id_ddo');
    this.ddoItemService.read(id).subscribe( retorno => {
      this.itens = new MatTableDataSource( retorno );
      this.itens.sort = this.sort;
      this.itens.paginator = this.paginator;
    })
    this.ddoService.readById(+id).subscribe( ddo => {
      this.ddo = ddo[0];
    })
  }

  ngOnInit(): void {
    this.carregarDados();
  }

  novoItem(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {
      idDdo: this.ddo.id_ddo,
    };
    const dialogRef = this.dialogForm.open(DdoItemSelectComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( retorno => {
      if (retorno) {
        this.completaDados(retorno);
      }
    })
  }

  completaDados(dados: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    // dialogConfig.data = dados;
    dialogConfig.data = {
      itens: dados,
      idDDO: this.ddo.id_ddo
    }
    
    const dialogRef = this.dialogForm.open(DdoItemFormComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( retorno => {
      //this.carregarDados();
      console.log("Dados completos inseridos...");
    })
  }

  updateItem(row: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {
      itemUpdate: row
    };
    const dialogRef = this.dialogForm.open(DdoItemUpdateComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( result => {
      this.carregarDados();
    })
  }

  deleteItem (idItem: string): void {
    if (confirm( 'Tem certeza que deseja excluir este item do DDO?' )) {
      this.ddoItemService.delete( +idItem ).subscribe( () => {
        this.ddoItemService.showMessage('Item do DDO excluído.');
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
