export interface Licitacao {
  id_licitacao?: number
  id_acao: number
  id_ug: number
  num_licitacao: string
  ano_licitacao: number
  descricao: string
  ativa?: boolean
  nome_ug?: string
  nome_acao?: string
  id_usuario?: number
}