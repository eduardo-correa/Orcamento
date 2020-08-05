import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArpItemService } from './../../../arp/arp-item/arp-item.service';
import { ArpItem } from './../../../arp/arp-item/arp-item.model';
import { ArpService } from './../../../arp/arp.service';
import { Arp } from './../../../arp/arp.model';
import { DdoItemService } from './../ddo-item.service';
import { DdoItem } from './../ddo-item.model';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'cggov-ddo-item-form',
  templateUrl: './ddo-item-form.component.html',
  styleUrls: ['./ddo-item-form.component.scss']
})
export class DdoItemFormComponent implements OnInit {

  alturaDialog: string = "200px";
  isDisabled: boolean = true;
  selection = new SelectionModel<ArpItem>(true, []);
  arps: Arp[] = null;
  arpItens: MatTableDataSource<ArpItem>;
  displayedColumns = [
    'selecionados',
    'num_arp_item',
    'nome_arp_item',
    'valor',
  ]
  @ViewChild (MatPaginator) paginator: MatPaginator;

  ddoItem: DdoItem = {
    // id_ddo_item: null,
    id_ddo: null,
    id_arp: null,
    id_arp_item: null,
    qtd_demandada: 0,
    qtd_aprovada: 0,
    elemento_despesa: "",
    nome_item: null,
    valor_item: null,
    identifica_arp: null,
  }

  constructor( private itemService: DdoItemService,
    private arpService: ArpService,
    private arpItemService: ArpItemService,
    public dialogRef: MatDialogRef<DdoItemFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
     this.arpService.read().subscribe( retorno => {
      this.arps = retorno;
    })
  }


  createItem(): void {
    if (this.selection.selected.length != 0) {
      for (const itemNovo of this.selection.selected) {
        // console.log(itemNovo)
        this.ddoItem.id_arp_item = itemNovo.id_arp_item;
        this.ddoItem.id_arp = itemNovo.id_arp;
        this.ddoItem.id_ddo = this.data.idDdo;
        // console.log(this.ddoItem)
        this.itemService.create(this.ddoItem).subscribe( () => {
          this.itemService.showMessage('Item criado.');
        });
      }
      this.dialogRef.close();
    } else {
      // console.log("Nenhum item selecionado");
      this.dialogRef.close();
    }
  }


  // adicionarItem(): void {
  //   this.dialogRef.close(this.selection.selected);
  // }


  buscaItens(idArp: number): void {
    this.arpItemService.readByArp(idArp).subscribe( retorno => {
      this.arpItens = new MatTableDataSource( retorno );
      this.arpItens.paginator = this.paginator;
    })
    this.isDisabled = false;
    this.alturaDialog = "500px";
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    let numRows = 5;
    if (this.arpItens) {
      numRows = this.arpItens.data.length  
    }
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.arpItens.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ArpItem): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.num_arp_item + 1}`;
  }


}
