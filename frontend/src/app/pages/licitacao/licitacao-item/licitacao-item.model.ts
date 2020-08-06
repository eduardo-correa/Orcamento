export interface LicitacaoItem {
  id_licitacao_item?: number
  id_licitacao?: number
  nome_licitacao_item: string
  num_licitacao_item: number
  valor: number
  dt_registro: Date
  id_usuario?: number
}