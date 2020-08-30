import { DescentService } from "./../descent.service";
import { Descent } from "./../descent.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "cggov-descent-form-update",
  templateUrl: "./descent-form-update.component.html",
  styleUrls: ["./descent-form-update.component.scss"],
})
export class DescentFormUpdateComponent implements OnInit {
  formulario: FormGroup;
  ordens = [
    "1ª Descentralização",
    "2ª Descentralização",
    "3ª Descentralização",
    "4ª Descentralização",
    "5ª Descentralização",
  ];
  paeDescentralizado: Descent = {
    num_processo: "",
    ord_descentralizacao: null,
    id_usuario: null,
  };

  constructor(
    private formBuilder: FormBuilder,
    private descentService: DescentService,
    public dialogRef: MatDialogRef<DescentFormUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      num_processo: [null, Validators.required],
      ord_descentralizacao: [null, Validators.required],
    });
    this.descentService.readById(this.data.idDescent).subscribe((retorno) => {
      this.paeDescentralizado = retorno[0];
      this.formulario.setValue({
        num_processo: this.paeDescentralizado.num_processo,
        ord_descentralizacao: this.paeDescentralizado.ord_descentralizacao,
      });
    });
  }

  update(): void {}
}
