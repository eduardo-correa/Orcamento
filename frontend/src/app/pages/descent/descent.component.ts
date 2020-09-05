import { MatTableDataSource } from "@angular/material/table";
import { Descent } from "./descent.model";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DescentPaeService } from "./descent-pae.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DescentFormComponent } from "./descent-form/descent-form.component";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "cggov-descent",
  templateUrl: "./descent.component.html",
  styleUrls: ["./descent.component.scss"],
})
export class DescentComponent implements OnInit {
  dados: MatTableDataSource<Descent>;
  displayedColumns = [
    "nome_acao",
    "num_processo",
    "ord_descentralizacao",
    "action",
  ];
  searchKey: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private paeService: DescentPaeService,
    private dialogForm: MatDialog
  ) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.paeService.read().subscribe((retorno) => {
      this.dados = new MatTableDataSource(retorno);
      this.dados.sort = this.sort;
      this.dados.paginator = this.paginator;
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

  updateDescent(id: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { idPae: id };
    const dialogRef = this.dialogForm.open(DescentFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      this.carregarDados();
    });
  }

  deleteDescent(id: number): void {
    if (confirm("Tem certeza que deseja excluir este PAE? ")) {
      this.paeService.delete(id).subscribe(() => {
        this.paeService.showMessage("Pae da descentralização excluído.");
        this.carregarDados();
      });
    }
  }

  pesquisar(): void {
    this.dados.filter = this.searchKey.trim().toLowerCase();
  }

  limparPesquisa(): void {
    this.searchKey = "";
    this.pesquisar();
  }
}
