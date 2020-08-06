import { Licitacao } from './../licitacao.model';
import { AcaoService } from './../../acao/acao.service';
import { Acao } from './../../acao/acao.model';
import { UgService } from './../../ug/ug.service';
import { Ug } from './../../ug/ug.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
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
    ativa: false,
  }

  ugs: Ug[] = null;
  acoes: Acao[] = null;
  anos = [];

  constructor(private router: Router,
    private licitacaoService: LicitacaoService,
    private ugService: UgService,
    private acaoService: AcaoService,
    public dialogRef: MatDialogRef<LicitacaoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data) {
      this.licitacaoService.readById(this.data.idLicitacao).subscribe( retorno => {
        this.licitacao = retorno[0]
      })
    }
    this.ugService.read().subscribe( retorno => {
      this.ugs = retorno;
    })
    this.acaoService.read().subscribe( retorno => {
      this.acoes = retorno;
    })
    for (let i = 2010; i < 2051; i++) {
      this.anos.push(i);
    }
  }

  createLicitacao(): void {
    this.licitacaoService.create(this.licitacao).subscribe(() => {
      this.licitacaoService.showMessage('Licitação criada.');
      this.dialogRef.close();
    });
  }

  updateLicitacao(): void {
    this.licitacaoService.update(this.licitacao).subscribe(() => {
      this.licitacaoService.showMessage('Licitação atualizada.');
      this.dialogRef.close();
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }


}
