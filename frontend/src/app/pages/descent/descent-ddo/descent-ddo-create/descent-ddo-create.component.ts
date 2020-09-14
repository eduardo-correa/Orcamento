import { DdoService } from "./../../../ddo/ddo.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DescentDdo } from "./../descent-ddo.model";
import { DescentDdoService } from "./../descent-ddo.service";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "cggov-descent-ddo-create",
  templateUrl: "./descent-ddo-create.component.html",
  styleUrls: ["./descent-ddo-create.component.scss"],
})
export class DescentDdoCreateComponent implements OnInit {
  ddoAcao: any[];
  descentDdo: DescentDdo = {
    id_pae_descentralizacao: null,
    id_ddo: null,
    qtd_aprovada: null,
    vlr_aprovado: null,
    reuniao_cgtic: null,
    dt_aprov_cgtic: null,
  };
  formulario: FormGroup;
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

  constructor(
    private dialogRef: MatDialogRef<DescentDdoCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private descentDdoService: DescentDdoService,
    private ddoService: DdoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      qtd_aprovada: [{ value: null, disabled: true }],
      vlr_aprovado: [{ value: null, disabled: true }],
      reuniao_cgtic: [{ value: null, disabled: true }, Validators.required],
      dt_aprov_cgtic: [{ value: null, disabled: true }, Validators.required],
    });
    this.descentDdoService.readByAcao(this.data.idAcao).subscribe((retorno) => {
      this.ddoAcao = retorno;
    });
  }

  escolheDdo(idDdo: number): void {
    this.descentDdo.id_ddo = idDdo;
    this.formulario.get("qtd_aprovada").enable();
    this.formulario.get("vlr_aprovado").enable();
    this.formulario.get("reuniao_cgtic").enable();
    this.formulario.get("dt_aprov_cgtic").enable();
    this.ddoService.readById(idDdo).subscribe((retorno) => {
      this.formulario.patchValue({
        vlr_aprovado: retorno[0].vlr_demandado,
      });
    });
  }

  preencherItem(): void {
    this.descentDdo.id_pae_descentralizacao = this.data.idPae;
    this.descentDdo.qtd_aprovada = this.formulario.get("qtd_aprovada").value;
    this.descentDdo.vlr_aprovado = this.formulario.get("vlr_aprovado").value;
    this.descentDdo.reuniao_cgtic = this.formulario.get("reuniao_cgtic").value;
    this.descentDdo.dt_aprov_cgtic = this.formulario.get(
      "dt_aprov_cgtic"
    ).value;
  }

  createItem(): void {
    this.preencherItem();
    this.descentDdoService.create(this.descentDdo).subscribe(() => {
      this.descentDdoService.showMessage("DDO adicionado ao PAE");
      this.dialogRef.close();
    });
  }
}
