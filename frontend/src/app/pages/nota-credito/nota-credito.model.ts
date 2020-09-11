export interface NC {
  // campos da tabela
  id_nota_credito?: number;
  gnd: number;
  num_nota_credito: string;
  id_ddo_descentralizacao: number;
  valor: number;
  dt_nota_credito: Date;
  id_usuario?: number;

  // campos da view
  descricao_acao?: string;
  nome_acao?: string;
  nome_ug?: string;
}
