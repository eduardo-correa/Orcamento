import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Licitacao } from './../licitacao.model';
import { AcaoService } from './../../acao/acao.service';
import { Acao } from './../../acao/acao.model';
import { UgService } from './../../ug/ug.service';
import { Ug } from './../../ug/ug.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { LicitacaoService } from '../licitacao.service';


@Component({
  selector: 'cggov-licitacao-form',
  templateUrl: './licitacao-form.component.html',
  styleUrls: ['./licitacao-form.component.scss']
})
export class LicitacaoFormComponent implements OnInit {

  licitacao: Licitacao = {
    id_acao: null,
    id_ug: null,
    num_licitacao: "",
    ano_licitacao: null,
    descricao: "",
    procedimento: "",
    dt_vigencia: null,
    ativa: false,
  }

  formulario: FormGroup;

  temDataVigencia: boolean = false;
  ugs: Ug[] = null;
  acoes: Acao[] = null;
  anos = [];
  procedimentos: string[] = [
    "Contrato",
    "Registro de Preço"
  ]

  constructor (
    private formBuilder: FormBuilder,
    private licitacaoService: LicitacaoService,
    private ugService: UgService,
    private acaoService: AcaoService,
    public dialogRef: MatDialogRef<LicitacaoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id_acao: [null],
      id_ug: [null],
      num_licitacao: [null, Validators.required],
      ano_licitacao: [null, Validators.required],
      descricao: [null],
      procedimento: [null, Validators.required],
      dt_vigencia: [null],
      ativa: [true],
    })

    if (this.data) {
      this.licitacaoService.readById(this.data.idLicitacao).subscribe( retorno => {
        this.licitacao = retorno[0]
        this.formulario.setValue({
          id_acao: this.licitacao.id_acao,
          id_ug: this.licitacao.id_ug,
          num_licitacao: this.licitacao.num_licitacao,
          ano_licitacao: this.licitacao.ano_licitacao,
          descricao: this.licitacao.descricao,
          procedimento: this.licitacao.procedimento,
          dt_vigencia: this.licitacao.dt_vigencia,
          ativa: this.licitacao.ativa,
        })
        this.alteraProcedimento();
      })
    }
    this.ugService.read().subscribe( retorno => {
      this.ugs = retorno;
    })
    this.acaoService.read().subscribe( retorno => {
      this.acoes = retorno;
    })
    for (let i = 2015; i < 2051; i++) {
      this.anos.push(i);
    }
  }

  createLicitacao(): void {
    this.popularLicitacao();
    this.licitacaoService.create(this.licitacao).subscribe(() => {
      this.licitacaoService.showMessage('Licitação criada.');
      this.dialogRef.close();
    });
  }

  updateLicitacao(): void {
    this.popularLicitacao();
    this.licitacaoService.update(this.licitacao).subscribe(() => {
      this.licitacaoService.showMessage('Licitação atualizada.');
      this.dialogRef.close();
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  popularLicitacao(): void {
    this.licitacao.id_acao = this.formulario.get("id_acao").value;
    this.licitacao.id_ug = this.formulario.get("id_ug").value;
    this.licitacao.num_licitacao = this.formulario.get("num_licitacao").value;
    this.licitacao.ano_licitacao = this.formulario.get("ano_licitacao").value;
    this.licitacao.descricao = this.formulario.get("descricao").value;
    this.licitacao.procedimento = this.formulario.get("procedimento").value;
    this.licitacao.dt_vigencia = this.formulario.get("dt_vigencia").value;
    this.licitacao.ativa = this.formulario.get("ativa").value;
  }

  alteraProcedimento(): void {
    if (this.formulario.get("procedimento").value === "Registro de Preço") {
      this.temDataVigencia = true;
    } else this.temDataVigencia = false;
  }


}
