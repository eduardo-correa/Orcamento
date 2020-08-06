import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { LicitacaoItem } from '../licitacao-item.model';
import { LicitacaoItemService } from '../licitacao-item.service';

@Component({
  selector: 'cggov-licitacao-item-form',
  templateUrl: './licitacao-item-form.component.html',
  styleUrls: ['./licitacao-item-form.component.scss']
})
export class LicitacaoItemFormComponent implements OnInit {

  licitacaoItem: LicitacaoItem = {
    id_licitacao: null,
    nome_licitacao_item: "",
    num_licitacao_item: null,
    valor: null,
    dt_registro: null
  }

  licitacaoNovoItem: string = null;

  constructor( private router: Router,
    private itemService: LicitacaoItemService,
    public dialogRef: MatDialogRef<LicitacaoItemService>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    if (this.data.idItem) {
      this.itemService.readById(this.data.idItem).subscribe( retorno => {
        this.licitacaoItem = retorno[0]
      })
    } else {
      this.licitacaoNovoItem = this.data.idLicitacao;
    }
  }

  createItem(): void {
    this.licitacaoItem.id_licitacao = +this.licitacaoNovoItem;
    this.itemService.create(this.licitacaoItem).subscribe(() => {
      this.itemService.showMessage('Item criado.');
      this.dialogRef.close();
    });
  }

  updateItem(): void {
    this.itemService.update(this.licitacaoItem).subscribe(() => {
      this.itemService.showMessage('Item atualizado.');
      this.dialogRef.close();
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
