import { Component, OnInit, Inject } from '@angular/core';
import { Acao } from '../acao.model';
import { AcaoService } from '../acao.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cggov-acao-form',
  templateUrl: './acao-form.component.html',
  styleUrls: ['./acao-form.component.scss']
})
export class AcaoFormComponent implements OnInit {

  formulario: FormGroup;
  acao: Acao = {
    nome: "",
    descricao: ""
  };

  constructor(
    private formBuilder: FormBuilder,
    private acaoService: AcaoService,
    public dialogRef: MatDialogRef<AcaoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  
    ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        nome: [null, Validators.required],
        descricao: [null, Validators.required]
      });

      if (this.data) {
        this.acaoService.readById(this.data.idAcao).subscribe( retorno => {
          this.acao = retorno[0]
          this.formulario.setValue({
            nome: this.acao.nome,
            descricao: this.acao.descricao
          });
        })
      }
  }

  createAcao(): void {
    this.popularAcao();
    this.acaoService.create(this.acao).subscribe(() => {
      this.acaoService.showMessage('Ação criada.');
      this.dialogRef.close();
    });
  }

  updateAcao(): void {
    this.popularAcao();
    this.acaoService.update(this.acao).subscribe( () => {
      this.acaoService.showMessage('Ação atualizada.');
      this.dialogRef.close();
    })
  }

  popularAcao(): void {
    this.acao.nome = this.formulario.get('nome').value;
    this.acao.descricao = this.formulario.get('descricao').value;
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
