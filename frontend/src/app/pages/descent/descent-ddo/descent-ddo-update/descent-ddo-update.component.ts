import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DescentDdo } from "./../descent-ddo.model";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DescentDdoService } from "./../descent-ddo.service";
import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "cggov-descent-ddo-update",
  templateUrl: "./descent-ddo-update.component.html",
  styleUrls: ["./descent-ddo-update.component.scss"],
})
export class DescentDdoUpdateComponent implements OnInit {
  descentDdo: DescentDdo = {
    id_ddo_descentralizacao: null,
    id_pae_descentralizacao: null,
    id_ddo: null,
    qtd_aprovada: null,
    vlr_aprovado: null,
    reuniao_cgtic: null,
    dt_aprov_cgtic: null,
    ord_descentralizacao: null,
    identifica_ddo: null,
  };
  reunioes = [
    "FRAD",
    "1ª Reunião do CGGTIC",
    "2ª Reunião do CGGTIC",
    "3ª Reunião do CGGTIC",
    "4ª Reunião do CGGTIC",
    "5ª Reunião do CGGTIC",
    "6ª Reunião do CGGTIC",
    "7ª Reunião do CGGTIC",
    "8ª Reunião do CGGTIC",
    "9ª Reunião do CGGTIC",
    "10ª Reunião do CGGTIC",
  ];
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private descenDdoService: DescentDdoService,
    public dialogRef: MatDialogRef<DescentDdoUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      identifica_ddo: [{ value: null, disabled: true }],
      ord_descentralizacao: [{ value: null, disabled: true }],
      qtd_aprovada: [null, Validators.required],
      vlr_aprovado: [null, Validators.required],
      reuniao_cgtic: [null, Validators.required],
      dt_aprov_cgtic: [null, Validators.required],
    });
    this.descenDdoService
      .readById(this.data.itemUpdate)
      .subscribe((retorno) => {
        this.descentDdo = retorno[0];
        this.formulario.setValue({
          identifica_ddo: this.descentDdo.identifica_ddo,
          ord_descentralizacao: this.descentDdo.ord_descentralizacao,
          qtd_aprovada: this.descentDdo.qtd_aprovada,
          vlr_aprovado: this.descentDdo.vlr_aprovado,
          reuniao_cgtic: this.descentDdo.reuniao_cgtic,
          dt_aprov_cgtic: this.descentDdo.dt_aprov_cgtic,
        });
      });
  }

  preencherItem(): void {
    this.descentDdo.qtd_aprovada = this.formulario.get("qtd_aprovada").value;
    this.descentDdo.vlr_aprovado = this.formulario.get("vlr_aprovado").value;
    this.descentDdo.reuniao_cgtic = this.formulario.get("reuniao_cgtic").value;
    this.descentDdo.dt_aprov_cgtic = this.formulario.get(
      "dt_aprov_cgtic"
    ).value;
  }

  updateItem(): void {
    this.preencherItem();
    this.descenDdoService.update(this.descentDdo).subscribe(() => {
      this.descenDdoService.showMessage("DDO do PAE atualizado.");
      this.dialogRef.close();
    });
  }
}
