import { MatTableDataSource } from "@angular/material/table";
import { Acao } from "./../acao/acao.model";
import { Descent } from "./descent.model";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DescentPaeService } from "./descent-pae.service";
import { AcaoService } from "../acao/acao.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DescentFormComponent } from "./descent-form/descent-form.component";

@Component({
  selector: "cggov-descent",
  templateUrl: "./descent.component.html",
  styleUrls: ["./descent.component.scss"],
})
export class DescentComponent implements OnInit {
  acoes: Acao[];
  dados: MatTableDataSource<Descent>;
  displayedColumns = [
    "nome_acao",
    "num_processo",
    "ord_descentralizacao",
    "action",
  ];
  searchKey: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private acaoService: AcaoService,
    private paeService: DescentPaeService,
    private dialogForm: MatDialog
  ) {}

  ngOnInit(): void {
    this.acaoService.read().subscribe((retorno) => {
      this.acoes = retorno;
    });
  }

  buscaDescents(idAcao: number): void {
    this.paeService.readByAcao(idAcao).subscribe((retorno) => {
      this.dados = new MatTableDataSource(retorno);
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
      this.atualizarPesquisa(result.descent);
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
      this.atualizarPesquisa(result.descent);
    });
  }

  deleteDescent(id: number): void {
    if (confirm("Tem certeza que deseja excluir este PAE? ")) {
      this.paeService.delete(id).subscribe(() => {
        this.paeService.showMessage("Pae da descentralização excluído.");
      });
      this.limparPesquisa();
    }
  }

  limparPesquisa(): void {
    this.searchKey = null;
    this.buscaDescents(0);
  }

  atualizarPesquisa(idDescent: number): void {
    this.paeService.readById(idDescent).subscribe((retorno) => {
      this.buscaDescents(retorno[0].id_acao);
    });
  }

  // descents: MatTableDataSource<Descent>;
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // searchKey: string;
  // displayedColumns = [
  //   "num_processo",
  //   "nome_acao",
  //   "ord_descentralizacao",
  //   "dt_aprov_cgtic",
  //   "action",
  // ];

  // constructor(
  //   private descentService: DescentService,
  //   private dialogForm: MatDialog
  // ) {}

  // ngOnInit(): void {
  //   this.carregarDados();
  // }

  // carregarDados() {
  //   this.descentService.read().subscribe((retorno) => {
  //     this.descents = new MatTableDataSource(retorno);
  //     this.descents.sort = this.sort;
  //     this.descents.paginator = this.paginator;
  //   });
  // }

  // novaDescent(): void {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = "50%";
  //   dialogConfig.data = null;
  //   const dialogRef = this.dialogForm.open(
  //     DescentFormCreateComponent,
  //     dialogConfig
  //   );
  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.carregarDados();
  //   });
  // }

  // updateDescent(id: string): void {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = "50%";
  //   dialogConfig.data = { idDescent: id };
  //   const dialogRef = this.dialogForm.open(
  //     DescentFormUpdateComponent,
  //     dialogConfig
  //   );
  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.carregarDados();
  //   });
  // }

  // deleteDescent(id: string): void {
  //   if (confirm("Tem certeza que deseja excluir esta Descentralização? ")) {
  //     this.descentService.delete(+id).subscribe(() => {
  //       this.descentService.showMessage("Descentralizazção excluída.");
  //       this.carregarDados();
  //     });
  //   }
  // }

  // pesquisar(): void {
  //   this.descents.filter = this.searchKey.trim().toLowerCase();
  // }

  // limparPesquisa(): void {
  //   this.searchKey = "";
  //   this.pesquisar();
  // }
}
