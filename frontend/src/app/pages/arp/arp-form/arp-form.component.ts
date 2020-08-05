import { AcaoService } from './../../acao/acao.service';
import { Acao } from './../../acao/acao.model';
import { UgService } from './../../ug/ug.service';
import { Ug } from './../../ug/ug.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Arp } from '../arp.model';
import { Router } from '@angular/router';
import { ArpService } from '../arp.service';

@Component({
  selector: 'cggov-arp-form',
  templateUrl: './arp-form.component.html',
  styleUrls: ['./arp-form.component.scss']
})
export class ArpFormComponent implements OnInit {

  arp: Arp = {
    id_acao: null,
    id_ug: null,
    num_arp: "",
    ano_arp: null,
    descricao: "",
    ativa: false,
  }

  ugs: Ug[] = null;
  acoes: Acao[] = null;
  anos = [];

  constructor(private router: Router,
    private arpService: ArpService,
    private ugService: UgService,
    private acaoService: AcaoService,
    public dialogRef: MatDialogRef<ArpFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data) {
      this.arpService.readById(this.data.idARP).subscribe( retorno => {
        this.arp = retorno[0]
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

  createArp(): void {
    this.arpService.create(this.arp).subscribe(() => {
      this.arpService.showMessage('ARP criada.');
      this.dialogRef.close();
    });
  }

  updateArp(): void {
    this.arpService.update(this.arp).subscribe(() => {
      this.arpService.showMessage('ARP atualizada.');
      this.dialogRef.close();
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }


}
