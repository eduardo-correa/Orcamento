import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UgService } from "./../../ug/ug.service";
import { Ug } from "./../../ug/ug.model";
import { NotaCreditoService } from "./../nota-credito.service";
import { NC } from "./../nota-credito.model";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Acao } from "../../acao/acao.model";
import { AcaoService } from "../../acao/acao.service";

@Component({
  selector: "cggov-nota-credito-form",
  templateUrl: "./nota-credito-form.component.html",
  styleUrls: ["./nota-credito-form.component.scss"],
})
export class NotaCreditoFormComponent implements OnInit {
  formulario: FormGroup;
  ntCredito: NC = {
    num_nota_credito: null,
    gnd: null,
    id_acao: null,
    id_ug: null,
    valor: null,
    dt_nota_credito: null,
    nome_acao: null,
    nome_ug: null,
  };

  ugs: Ug[] = null;
  acoes: Acao[] = null;
  gnds: number[] = [3, 4];

  constructor(
    private formBuilder: FormBuilder,
    private ugService: UgService,
    private acaoService: AcaoService,
    private ncService: NotaCreditoService,
    public dialogRef: MatDialogRef<NotaCreditoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      num_nota_credito: [null, Validators.required],
      gnd: [null, Validators.required],
      id_acao: [null, Validators.required],
      id_ug: [null, Validators.required],
      valor: [null, Validators.required],
      dt_nota_credito: [null, Validators.required],
    });

    if (this.data) {
      this.ncService.readById(+this.data.idNC).subscribe((retorno) => {
        this.ntCredito = retorno[0];
        this.formulario.setValue({
          num_nota_credito: this.ntCredito.num_nota_credito,
          gnd: this.ntCredito.gnd,
          id_acao: this.ntCredito.id_acao,
          id_ug: this.ntCredito.id_ug,
          valor: this.ntCredito.valor,
          dt_nota_credito: this.ntCredito.dt_nota_credito,
        });
      });
    }
    this.ugService.read().subscribe((retorno) => {
      this.ugs = retorno;
    });
    this.acaoService.read().subscribe((retorno) => {
      this.acoes = retorno;
    });
  }

  createNC(): void {
    this.popularNC();
    this.ncService.create(this.ntCredito).subscribe(() => {
      this.ncService.showMessage("Nota de Crédito criada.");
      this.dialogRef.close();
    });
  }

  updateNC(): void {
    this.popularNC();
    this.ncService.update(this.ntCredito).subscribe(() => {
      this.ncService.showMessage("Nota de Crédito atualizada.");
      this.dialogRef.close();
    });
  }

  popularNC(): void {
    this.ntCredito.num_nota_credito = this.formulario.get(
      "num_nota_credito"
    ).value;
    this.ntCredito.gnd = this.formulario.get("gnd").value;
    this.ntCredito.id_acao = this.formulario.get("id_acao").value;
    this.ntCredito.id_ug = this.formulario.get("id_ug").value;
    this.ntCredito.valor = this.formulario.get("valor").value;
    this.ntCredito.dt_nota_credito = this.formulario.get(
      "dt_nota_credito"
    ).value;
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
