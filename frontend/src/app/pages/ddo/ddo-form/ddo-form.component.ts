import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { AcaoService } from "./../../acao/acao.service";
import { UgService } from "./../../ug/ug.service";
import { Acao } from "./../../acao/acao.model";
import { Ug } from "./../../ug/ug.model";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DdoService } from "./../ddo.service";
import { DDO } from "./../ddo.model";
import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "cggov-ddo-form",
  templateUrl: "./ddo-form.component.html",
  styleUrls: ["./ddo-form.component.scss"],
})
export class DdoFormComponent implements OnInit {
  ddo: DDO = {
    id_ug: null,
    id_acao: null,
    novo: false,
    recurso_proprio: null,
    vlr_demandado: null,
    aprc_cgtic_local: false,
    possui_dod: false,
    compr_liquidacao: false,
    cronograma: false,
    ass_presidente: false,
    po_local: false,
  };

  formulario: FormGroup;
  ugs: Ug[] = null;
  acoes: Acao[] = null;

  constructor(
    private formBuilder: FormBuilder,
    private ddoService: DdoService,
    private ugService: UgService,
    private acaoService: AcaoService,
    public dialogRef: MatDialogRef<DdoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id_ug: [null, Validators.required],
      id_acao: [null, Validators.required],
      novo: [false, Validators.required],
      recurso_proprio: [null, Validators.required],
      vlr_demandado: [null, Validators.required],
      aprc_cgtic_local: [false, Validators.required],
      possui_dod: [false, Validators.required],
      compr_liquidacao: [false, Validators.required],
      cronograma: [false, Validators.required],
      ass_presidente: [false, Validators.required],
      po_local: [false, Validators.required],
    });
    if (this.data) {
      this.ddoService.readById(this.data.idDdo).subscribe((retorno) => {
        this.ddo = retorno[0];
        this.formulario.setValue({
          id_ug: this.ddo.id_ug,
          id_acao: this.ddo.id_acao,
          novo: this.ddo.novo,
          recurso_proprio: this.ddo.recurso_proprio,
          vlr_demandado: this.ddo.vlr_demandado,
          aprc_cgtic_local: this.ddo.aprc_cgtic_local,
          possui_dod: this.ddo.possui_dod,
          compr_liquidacao: this.ddo.compr_liquidacao,
          cronograma: this.ddo.cronograma,
          ass_presidente: this.ddo.ass_presidente,
          po_local: this.ddo.po_local,
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

  createDdo(): void {
    this.preencherDDO();
    this.ddoService.create(this.ddo).subscribe(() => {
      this.ddoService.showMessage("DDO criado.");
      this.dialogRef.close();
    });
  }

  updateDdo(): void {
    this.preencherDDO();
    this.ddoService.update(this.ddo).subscribe(() => {
      this.ddoService.showMessage("DDO atualizado.");
      this.dialogRef.close();
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  preencherDDO(): void {
    this.ddo.id_ug = this.formulario.get("id_ug").value;
    this.ddo.id_acao = this.formulario.get("id_acao").value;
    this.ddo.novo = this.formulario.get("novo").value;
    this.ddo.recurso_proprio = this.formulario.get("recurso_proprio").value;
    this.ddo.vlr_demandado = this.formulario.get("vlr_demandado").value;
    this.ddo.aprc_cgtic_local = this.formulario.get("aprc_cgtic_local").value;
    this.ddo.possui_dod = this.formulario.get("possui_dod").value;
    this.ddo.compr_liquidacao = this.formulario.get("compr_liquidacao").value;
    this.ddo.cronograma = this.formulario.get("cronograma").value;
    this.ddo.ass_presidente = this.formulario.get("ass_presidente").value;
    this.ddo.po_local = this.formulario.get("po_local").value;
  }
}
