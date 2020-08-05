import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DescentService } from './../descent.service';
import { Router } from '@angular/router';
import { Descent } from './../descent.model';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'cggov-descent-form',
  templateUrl: './descent-form.component.html',
  styleUrls: ['./descent-form.component.scss']
})
export class DescentFormComponent implements OnInit {

  descent: Descent = {
    id_ddo: null,
    vlr_total_aprovado: null,
    num_processo: '',
    reuniao_cgtic: '',
    dt_aprov_cgtic: null,
  }

  reunioes = [
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
  ]

  constructor( private router: Router,
    private descentService: DescentService,
    public dialogRef: MatDialogRef<DescentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.descentService.readById(this.data.idDescent).subscribe( retorno => {
      this.descent = retorno[0]
    })
  }

  createDescent(): void {
    this.descentService.create(this.descent).subscribe( () => {
      this.descentService.showMessage('Descentralização criada.');
      this.dialogRef.close();
    });
  }

  updateDescent(): void {
    this.descentService.update(this.descent).subscribe( () => {
      this.descentService.showMessage('Descentralização atualizada.');
      this.dialogRef.close();
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
