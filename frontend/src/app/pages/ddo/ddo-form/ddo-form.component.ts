import { AcaoService } from './../../acao/acao.service';
import { UgService } from './../../ug/ug.service';
import { Acao } from './../../acao/acao.model';
import { Ug } from './../../ug/ug.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DdoService } from './../ddo.service';
import { Router } from '@angular/router';
import { DDO } from './../ddo.model';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'cggov-ddo-form',
  templateUrl: './ddo-form.component.html',
  styleUrls: ['./ddo-form.component.scss']
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
  }

  ugs: Ug[] = null;
  acoes: Acao[] = null;

  constructor( private router: Router,
    private ddoService: DdoService,
    private ugService: UgService,
    private acaoService: AcaoService,
    public dialogRef: MatDialogRef<DdoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data) {
      this.ddoService.readById(this.data.idDdo).subscribe( retorno => {
        this.ddo = retorno[0]
      })
    }
    this.ugService.read().subscribe( retorno => {
      this.ugs = retorno;
    })
    this.acaoService.read().subscribe( retorno => {
      this.acoes = retorno;
    })
  }

  createDdo(): void {
    this.ddoService.create(this.ddo).subscribe( () => {
      this.ddoService.showMessage('DDO criado.');
      this.dialogRef.close();
    });
  }

  updateDdo(): void {
    this.ddoService.update(this.ddo).subscribe( () => {
      this.ddoService.showMessage('DDO atualizado.');
      this.dialogRef.close();
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
