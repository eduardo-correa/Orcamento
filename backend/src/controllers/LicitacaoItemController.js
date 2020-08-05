const connection = require('../database/connection');

module.exports = {
  
  // Insert
  async create(request, response) {
    const {id_licitacao, nome_licitacao_item, num_licitacao_item, valor, dt_registro} = request.body;
    const id_usuario = request.headers.authorization;

    const [item_licitacao] = await connection('licitacao_item')
    .returning("id_licitacao_item")
    .insert({
      id_licitacao: id_licitacao,
      nome_licitacao_item: nome_licitacao_item,
      num_licitacao_item: num_licitacao_item,
      valor: valor,
      dt_registro: dt_registro,
      id_usuario: id_usuario,
    });
    return response.json({ item_licitacao });
  },

  // List
  async list (request, response) {
    const { id_licitacao } = request.params;
    const itens_licitacao = await connection('licitacao_item')
      .where({ id_licitacao: id_licitacao })
      .select('*');
    return response.json(itens_licitacao);
  },

  // Find
  async find (request, response) {
    const { id } = request.params;
    const itens_licitacao = await connection('licitacao_item')
    .where({
      id_licitacao_item: id
    })
    .select('*');
    return response.json(itens_licitacao);
  },

  // Find
  async findBylicitacao (request, response) {
    const { id } = request.params;
    const itens_licitacao = await connection('licitacao_item')
    .where({
      id_licitacao: id
    })
    .select('*');
    return response.json(itens_licitacao);
  },

  // Delete
  async delete (request, response) {
    const { id } = request.params;
    const id_usuario = request.headers.authorization;

    await connection('licitacao_item').where('id_licitacao_item', id).delete();
    return response.status(204).send();

  },

  // Update
  async update(request, response) {
    const {id_licitacao, nome_licitacao_item, num_licitacao_item, valor, dt_registro} = request.body;
    const id_usuario = request.headers.authorization;
    const { id } = request.params;

    const [item_licitacao] = await connection('licitacao_item')
    .where({
      id_licitacao_item: id
    })
    .returning("id_licitacao_item")
    .update({
      id_licitacao: id_licitacao,
      nome_licitacao_item: nome_licitacao_item,
      num_licitacao_item: num_licitacao_item,
      valor: valor,
      dt_registro: dt_registro,
      id_usuario: id_usuario,
    });
    return response.json({ item_licitacao });
  },

};