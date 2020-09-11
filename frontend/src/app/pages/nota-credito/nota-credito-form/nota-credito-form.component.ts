import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UgService } from "./../../ug/ug.service";
import { Ug } from "./../../ug/ug.model";
import { NotaCreditoService } from "./../nota-credito.service";
import { NC } from "./../nota-credito.model";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "cggov-nota-credito-form",
  templateUrl: "./nota-credito-form.component.html",
  styleUrls: ["./nota-credito-form.component.scss"],
})
export class NotaCreditoFormComponent implements OnInit {
  formulario: FormGroup;
  ntCredito: NC = {
    num_nota_credito: "",
    id_ddo_descentralizacao: null,
    valor: null,
    dt_nota_credito: null,
  };

  ugs: Ug[] = null;

  constructor(
    private formBuilder: FormBuilder,
    private ugService: UgService,
    private ncService: NotaCreditoService,
    public dialogRef: MatDialogRef<NotaCreditoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      num_nota_credito: [null, Validators.required],
      id_descentralizacao: [null, Validators.required],
      valor: [null, Validators.required],
      dt_nota_credito: [null, Validators.required],
      ug_favorecida: [null, Validators.required],
    });

    if (this.data) {
      this.ncService.readById(+this.data.idNC).subscribe((retorno) => {
        this.ntCredito = retorno[0];
        this.formulario.setValue({
          num_nota_credito: this.ntCredito.num_nota_credito,
          id_descentralizacao: this.ntCredito.id_descentralizacao,
          valor: this.ntCredito.valor,
          dt_nota_credito: this.ntCredito.dt_nota_credito,
          ug_favorecida: this.ntCredito.ug_favorecida,
        });
      });
    }
    this.ugService.read().subscribe((retorno) => {
      this.ugs = retorno;
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
    this.ntCredito.id_descentralizacao = this.formulario.get(
      "id_descentralizacao"
    ).value;
    this.ntCredito.valor = this.formulario.get("valor").value;
    this.ntCredito.dt_nota_credito = this.formulario.get(
      "dt_nota_credito"
    ).value;
    this.ntCredito.ug_favorecida = this.formulario.get("ug_favorecida").value;
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
