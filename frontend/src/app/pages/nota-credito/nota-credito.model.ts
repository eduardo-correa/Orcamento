export interface NC {
  // campos da tabela
  id_nota_credito?: number;
  num_nota_credito: string;
  gnd: number;
  id_acao: number;
  id_ug: number;
  valor: number;
  dt_nota_credito: Date;
  id_usuario?: number;

  // campos da view
  nome_acao?: string;
  nome_ug?: string;
}
