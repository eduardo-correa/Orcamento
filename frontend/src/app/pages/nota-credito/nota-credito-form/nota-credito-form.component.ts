import { UgService } from './../../ug/ug.service';
import { Ug } from './../../ug/ug.model';
import { NotaCreditoService } from './../nota-credito.service';
import { NC } from './../nota-credito.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cggov-nota-credito-form',
  templateUrl: './nota-credito-form.component.html',
  styleUrls: ['./nota-credito-form.component.scss']
})
export class NotaCreditoFormComponent implements OnInit {

  ntCredito: NC = {
    num_nota_credito: '',
    id_descentralizacao: null,
    valor: null,
    dt_nota_credito: null,
    ug_favorecida: null,
  }

  ugs: Ug[] = null;

  constructor( private ugService: UgService,
    private ncService: NotaCreditoService,
    public dialogRef: MatDialogRef<NotaCreditoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data) {
      this.ncService.readById(+this.data.idNC).subscribe( (retorno) => {
        this.ntCredito = retorno[0];
      })
    }
    this.ugService.read().subscribe( retorno => {
      this.ugs = retorno
    })
  }

  createNC(): void {
    this.ncService.create(this.ntCredito).subscribe(() => {
      this.ncService.showMessage('Nota de Crédito criada.');
      this.dialogRef.close();
    });
  }

  updateNC(id: string): void {
    this.ncService.update(this.ntCredito).subscribe( () => {
      this.ncService.showMessage('Nota de Crédito atualizada.');
      this.dialogRef.close();
    })
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
