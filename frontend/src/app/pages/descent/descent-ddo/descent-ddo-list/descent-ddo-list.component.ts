import { DescentDdoFormComponent } from "./../descent-ddo-form/descent-ddo-form.component";
import { DescentDdoService } from "./../descent-ddo.service";
import { ActivatedRoute } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DescentDdo } from "../descent-ddo.model";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";

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
  descentDdo: DescentDdo = {
    id_ddo_descentralizacao: null,
    id_pae_descentralizacao: null,
    id_ddo: null,
    qtd_aprovada: null,
    vlr_aprovado: null,
    reuniao_cgtic: null,
    dt_aprov_cgtic: null,
    id_usuario: null,
    num_processo: null,
    ord_descentralizacao: null,
    id_acao: null,
    nome_acao: null,
    nome_ug: null,
    identifica_ddo: null,
  };
  displayedColumns = [
    "nome_ug",
    "qtd_aprovada",
    "vlr_aprovado",
    "reuniao_cgtic",
    "dt_aprov_cgtic",
    "action",
  ];

  constructor(
    private route: ActivatedRoute,
    private descentDdoService: DescentDdoService,
    private dialogForm: MatDialog
  ) {}

  carregarDados(): void {
    const id = this.route.snapshot.paramMap.get("id_pae_descentralizacao");
    this.descentDdoService.readByPae(+id).subscribe((retorno) => {
      this.ddoItens = new MatTableDataSource(retorno);
      this.ddoItens.sort = this.sort;
      this.ddoItens.paginator = this.paginator;
      this.descentDdo = retorno[0];
    });
  }

  ngOnInit(): void {
    this.carregarDados();
  }

  novoItem(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {
      idPae: this.descentDdo.id_pae_descentralizacao,
    };
    const dialogRef = this.dialogForm.open(
      DescentDdoFormComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((retorno) => {
      if (retorno) {
        console.log(retorno);
      }
    });
  }

  updateItem(idItem: number): void {}

  deleteItem(idItem: number): void {
    if (
      confirm("Tem certeza que deseja excluir este item da Descentralização?")
    ) {
      this.descentDdoService.delete(idItem).subscribe(() => {
        this.descentDdoService.showMessage("Item excluído da Descentralização");
        this.carregarDados();
      });
    }
  }
}
