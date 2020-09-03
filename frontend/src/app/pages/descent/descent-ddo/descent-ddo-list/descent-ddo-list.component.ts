import { DescentDdoService } from "./../descent-ddo.service";
import { ActivatedRoute } from "@angular/router";
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
    identifica_ddo: null,
  };
  displayedColumns = [
    "identifica_ddo",
    "qtd_aprovada",
    "vlr_aprovado",
    "reuniao_cgtic",
    "dt_aprov_cgtic",
    "action",
  ];

  constructor(
    private route: ActivatedRoute,
    private descentDdoService: DescentDdoService
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

  deleteItem(idItem: number): void {}

  updateItem(idItem: number): void {}

  novoItem(): void {}
}
