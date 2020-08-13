import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'cggov-ddo-item-qtd',
  templateUrl: './ddo-item-qtd.component.html',
  styleUrls: ['./ddo-item-qtd.component.scss']
})
export class DdoItemQtdComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DdoItemQtdComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
