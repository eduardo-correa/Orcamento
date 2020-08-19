import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DescentService } from "./descent.service";
import { Router } from "@angular/router";
import { Descent } from "./descent.model";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DescentFormComponent } from "./descent-form/descent-form.component";

@Component({
  selector: "cggov-descent",
  templateUrl: "./descent.component.html",
  styleUrls: ["./descent.component.scss"],
})
export class DescentComponent implements OnInit {
  descents: MatTableDataSource<Descent>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  displayedColumns = [
    "num_processo",
    "nome_acao",
    "reuniao_cgtic",
    "dt_aprov_cgtic",
    "action",
  ];

  constructor(
    private router: Router,
    private descentService: DescentService,
    private dialogForm: MatDialog
  ) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.descentService.read().subscribe((retorno) => {
      this.descents = new MatTableDataSource(retorno);
      this.descents.sort = this.sort;
      this.descents.paginator = this.paginator;
    });
  }

  novaDescent(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = null;
    const dialogRef = this.dialogForm.open(DescentFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      this.carregarDados();
    });
  }

  updateDescent(id: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { idDescent: id };
    const dialogRef = this.dialogForm.open(DescentFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      this.carregarDados();
    });
  }

  deleteDescent(id: string): void {
    if (confirm("Tem certeza que deseja excluir esta Descentralização? ")) {
      this.descentService.delete(+id).subscribe(() => {
        this.descentService.showMessage("Descentralizazção excluída.");
        this.carregarDados();
      });
    }
  }

  pesquisar(): void {
    this.descents.filter = this.searchKey.trim().toLowerCase();
  }

  limparPesquisa(): void {
    this.searchKey = "";
    this.pesquisar();
  }
}
