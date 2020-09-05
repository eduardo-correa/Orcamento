export interface DescentDdo {
  // Campos da tabela DDO_DESCENTRALIZACAO
  id_ddo_descentralizacao?: number;
  id_pae_descentralizacao: number;
  id_ddo: number;
  qtd_aprovada?: number;
  vlr_aprovado?: number;
  reuniao_cgtic: string;
  dt_aprov_cgtic: Date;
  id_usuario?: number;

  // Campos da view DESCENTDDO_DADOS
  num_processo?: string;
  ord_descentralizacao?: string;
  id_acao?: number;
  nome_acao?: string;
  nome_ug?: string;
  identifica_ddo?: string;
}
