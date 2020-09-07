import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "cggov-descent-ddo-create",
  templateUrl: "./descent-ddo-create.component.html",
  styleUrls: ["./descent-ddo-create.component.scss"],
})
export class DescentDdoCreateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DescentDdoCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
}
