export interface Descent {
  // Campos da tabela PAE_DESCENTRALIZACAO
  id_pae_descentralizacao?: number;
  num_processo: string;
  ord_descentralizacao: number;
  id_usuario?: number;

  // Campos da view DESCENT_DADOS
  nome_acao?: string;
  nome_ug?: string;
  reuniao_cgtic?: string;
  dt_aprov_cgtic?: Date;
  id_ddo?: number;
  vlr_aprovado?: number;
  identifica_ddo?: string;
}
