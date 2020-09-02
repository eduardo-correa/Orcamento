import { AcaoService } from "./../../acao/acao.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Descent } from "./../descent.model";
import { Component, OnInit, Inject } from "@angular/core";
import { DescentPaeService } from "../descent-pae.service";
import { Acao } from "../../acao/acao.model";

@Component({
  selector: "cggov-descent-form",
  templateUrl: "./descent-form.component.html",
  styleUrls: ["./descent-form.component.scss"],
})
export class DescentFormComponent implements OnInit {
  descent: Descent = {
    id_acao: null,
    num_processo: "",
    ord_descentralizacao: "",
    id_usuario: null,
  };

  // reunioes = [
  //   "FRAD",
  //   "1ª Reunião do CGGTIC",
  //   "2ª Reunião do CGGTIC",
  //   "3ª Reunião do CGGTIC",
  //   "4ª Reunião do CGGTIC",
  //   "5ª Reunião do CGGTIC",
  //   "6ª Reunião do CGGTIC",
  //   "7ª Reunião do CGGTIC",
  //   "8ª Reunião do CGGTIC",
  //   "9ª Reunião do CGGTIC",
  //   "10ª Reunião do CGGTIC",
  // ];

  descentralizacoes = [
    "1ª Descentralização",
    "2ª Descentralização",
    "3ª Descentralização",
    "4ª Descentralização",
    "5ª Descentralização",
  ];
  formulario: FormGroup;
  acoes: Acao[] = null;

  constructor(
    private formBuilder: FormBuilder,
    private acaoService: AcaoService,
    private paeService: DescentPaeService,
    public dialogRef: MatDialogRef<DescentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id_acao: [null, Validators.required],
      num_processo: [null, Validators.required],
      ord_descentralizacao: ["1ª Descentralização", Validators.required],
    });
    this.acaoService.read().subscribe((retorno) => {
      this.acoes = retorno;
    });
    if (this.data) {
      this.paeService.readById(this.data.idPae).subscribe((retorno) => {
        this.descent = retorno[0];
        this.formulario.setValue({
          id_acao: this.descent.id_acao,
          num_processo: this.descent.num_processo,
          ord_descentralizacao: this.descent.ord_descentralizacao,
        });
      });
    }
  }

  createDescent(): void {
    this.preencherPaeDescentralizacao();
    this.paeService.create(this.descent).subscribe((retorno) => {
      this.paeService.showMessage("Descentralização criada.");
      this.dialogRef.close(retorno);
    });
  }

  updateDescent(): void {
    this.preencherPaeDescentralizacao();
    this.paeService.update(this.descent).subscribe((retorno) => {
      this.paeService.showMessage("Descentralização atualizada.");
      this.dialogRef.close(retorno);
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  preencherPaeDescentralizacao(): void {
    this.descent.id_acao = this.formulario.get("id_acao").value;
    this.descent.num_processo = this.formulario.get("num_processo").value;
    this.descent.ord_descentralizacao = this.formulario.get(
      "ord_descentralizacao"
    ).value;
  }
}
