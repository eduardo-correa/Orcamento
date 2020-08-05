const connection = require('../database/connection');

module.exports = {
  
  // Insert
  async create(request, response) {
    const {id_acao, id_ug, num_licitacao, ano_licitacao, descricao, modalidade, ativa} = request.body;
    const id_usuario = request.headers.authorization;

    const [licitacao] = await connection('licitacao')
    .returning("id_licitacao")
    .insert({
      id_acao: id_acao,
      id_ug: id_ug,
      num_licitacao: num_licitacao,
      ano_licitacao: ano_licitacao,
      descricao: descricao,
      modalidade: modalidade,
      ativa: ativa,
      id_usuario: id_usuario,
    });
    return response.json({ licitacao });
  },

  // List
  async list (request, response) {
    const licitacoes = await connection('licitacao_dados').select('*');
    return response.json(licitacoes);
  },

  // Find
  async find (request, response) {
    const { id } = request.params;

    const licitacoes = await connection('licitacao')
    .where({
      id_licitacao: id
    })
    .select('*');
    return response.json( licitacoes );
  },

  // Delete
  async delete (request, response) {
    const { id } = request.params;
    const id_usuario = request.headers.authorization;

    await connection('licitacao').where('id_licitacao', id).delete();
    return response.status(204).send();
  },

  // Update
  async update(request, response) {
    const {id_acao, id_ug, num_licitacao, ano_licitacao, descricao, modalidade, ativa} = request.body;
    const id_usuario = request.headers.authorization;
    const { id } = request.params;

    const [licitacao] = await connection('licitacao')
    .returning("id_licitacao")
    .where({
      id_licitacao: id
    })
    .update({
      id_acao: id_acao,
      id_ug: id_ug,
      num_licitacao: num_licitacao,
      ano_licitacao: ano_licitacao,
      descricao: descricao,
      ativa: ativa,
      modalidade: modalidade,
      id_usuario: id_usuario,
    });
    return response.json({ licitacao });
  },

};