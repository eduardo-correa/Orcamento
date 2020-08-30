// Tabela DDO_DESCENTRALIZACAO
export interface DdoDescent {
  id_ddo_descentralizacao?: number;
  id_pae_descentralizacao: number;
  id_ddo: number;
  qtd_aprovada?: number;
  vlr_aprovado?: number;
  reuniao_cgtic: string;
  dt_aprov_cgtic: Date;
  id_usuario?: number;
}
