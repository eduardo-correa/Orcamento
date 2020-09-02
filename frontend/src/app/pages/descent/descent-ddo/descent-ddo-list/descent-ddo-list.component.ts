import { MatTableDataSource } from "@angular/material/table";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DescentDdo } from "../descent-ddo.model";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "cggov-descent-ddo-list",
  templateUrl: "./descent-ddo-list.component.html",
  styleUrls: ["./descent-ddo-list.component.scss"],
})
export class DescentDdoListComponent implements OnInit {
  ddoItens: MatTableDataSource<DescentDdo>;
  searchKey: string;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnInit(): void {}
}
