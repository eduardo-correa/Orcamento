import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Component, OnInit, Inject } from "@angular/core";
import { LicitacaoItem } from "../licitacao-item.model";
import { LicitacaoItemService } from "../licitacao-item.service";

@Component({
  selector: "cggov-licitacao-item-form",
  templateUrl: "./licitacao-item-form.component.html",
  styleUrls: ["./licitacao-item-form.component.scss"],
})
export class LicitacaoItemFormComponent implements OnInit {
  licitacaoItem: LicitacaoItem = {
    id_licitacao: null,
    nome_licitacao_item: "",
    num_licitacao_item: null,
    valor: null,
    dt_registro: null,
  };

  formulario: FormGroup;

  licitacaoNovoItem: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private itemService: LicitacaoItemService,
    public dialogRef: MatDialogRef<LicitacaoItemService>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      num_licitacao_item: [null, Validators.required],
      nome_licitacao_item: [null, Validators.required],
      valor: [null, Validators.required],
    });
    if (this.data.idItem) {
      this.itemService.readById(this.data.idItem).subscribe((retorno) => {
        this.licitacaoItem = retorno[0];
        this.formulario.setValue({
          num_licitacao_item: this.licitacaoItem.num_licitacao_item,
          nome_licitacao_item: this.licitacaoItem.nome_licitacao_item,
          valor: this.licitacaoItem.valor,
        });
      });
    } else {
      this.licitacaoNovoItem = this.data.idLicitacao;
    }
  }

  createItem(): void {
    this.preencherItem();
    this.licitacaoItem.id_licitacao = +this.licitacaoNovoItem;
    this.itemService.create(this.licitacaoItem).subscribe(() => {
      this.itemService.showMessage("Item criado.");
      this.dialogRef.close();
    });
  }

  updateItem(): void {
    this.preencherItem();
    this.itemService.update(this.licitacaoItem).subscribe(() => {
      this.itemService.showMessage("Item atualizado.");
      this.dialogRef.close();
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  preencherItem(): void {
    this.licitacaoItem.num_licitacao_item = this.formulario.get(
      "num_licitacao_item"
    ).value;
    this.licitacaoItem.nome_licitacao_item = this.formulario.get(
      "nome_licitacao_item"
    ).value;
    this.licitacaoItem.valor = this.formulario.get("valor").value;
  }
}
