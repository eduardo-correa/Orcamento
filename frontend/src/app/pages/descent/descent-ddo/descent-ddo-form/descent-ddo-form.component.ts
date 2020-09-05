import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "cggov-descent-ddo-form",
  templateUrl: "./descent-ddo-form.component.html",
  styleUrls: ["./descent-ddo-form.component.scss"],
})
export class DescentDdoFormComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DescentDdoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
}
