import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ArpService } from './../../arp.service';
import { ArpItem } from './../arp-item.model';
import { ArpItemService } from './../arp-item.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Arp } from '../../arp.model';
import { ArpItemFormComponent } from '../arp-item-form/arp-item-form.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'cggov-arp-item-list',
  templateUrl: './arp-item-list.component.html',
  styleUrls: ['./arp-item-list.component.scss']
})
export class ArpItemListComponent implements OnInit {

  itens: MatTableDataSource<ArpItem>;
  displayedColumns = ['num_arp_item', 'nome_arp_item', 'valor', 'action'];
  @ViewChild (MatSort) sort: MatSort;
  @ViewChild (MatPaginator) paginator: MatPaginator;
  searchKey: string;
  arp: Arp = {
    id_arp: null,
    id_acao: null,
    id_ug: null,
    num_arp: "",
    ano_arp: null,
    descricao: "",
  }
  
  constructor( private route: ActivatedRoute,
    private arpItemServide: ArpItemService,
    private arpService: ArpService,
    private dialogForm: MatDialog) {
    
  }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    const id = this.route.snapshot.paramMap.get('id_arp');
    this.arpItemServide.read(id).subscribe( retorno => {
      this.itens = new MatTableDataSource(retorno);
      this.itens.sort = this.sort;
      this.itens.paginator = this.paginator;
    });
    this.arpService.readById(+id).subscribe( (arp) => {
      this.arp = arp[0];
    })
  }

  novoItem(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {
      idArp: this.arp.id_arp,
      idItem: null
    };
    const dialogRef = this.dialogForm.open(ArpItemFormComponent, dialogConfig)
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
      idArp: this.arp.id_arp,
      idItem: id
    };
    const dialogRef = this.dialogForm.open(ArpItemFormComponent, dialogConfig)
    dialogRef.afterClosed().subscribe ( result => {
      this.carregarDados();
    })
  }

  deleteItem (idItem: string): void {
    if (confirm( 'Tem certeza que deseja excluir este item da ARP?' )) {
      this.arpItemServide.delete( +idItem ).subscribe( () => {
        this.arpItemServide.showMessage('Item da ARP excluído.');
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
