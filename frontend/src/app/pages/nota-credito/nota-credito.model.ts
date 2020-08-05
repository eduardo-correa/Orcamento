export interface NC {
  id_nota_credito?: number
  id_descentralizacao: number
  num_nota_credito: string
	valor: number
	dt_nota_credito: Date
  ug_favorecida: number
  descricao_acao?: string
  nome_acao?: string
  nome_ug?: string
  cod_ug?: string
  id_usuario?: number
}