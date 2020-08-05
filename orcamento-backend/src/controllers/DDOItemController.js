const connection = require('../database/connection');

module.exports = {
  
  // Insert
  async create(request, response) {
    const {id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa} = request.body;
    const id_usuario = request.headers.authorization;

    const [ddo_item] = await connection('ddo_item')
    .returning("id_ddo_item")
    .insert({
      id_ddo: id_ddo,
      id_licitacao: id_licitacao,
      id_licitacao_item: id_licitacao_item,
      qtd_demandada: qtd_demandada,
      elemento_despesa: elemento_despesa,
      id_usuario: id_usuario,
    });

    return response.json({ ddo_item });
  },

  // List
  async list (request, response) {
    const { id_ddo } = request.params;
    const ddo_itens = await connection('ddo_itens_dados')
      .where( {id_ddo: id_ddo} )
      .select('*');
    return response.json(ddo_itens);
  },

  // Find
  async find (request, response) {
    const { id } = request.params;
    const ddo_itens = await connection('ddo_item')
    .where({
      id_ddo_item: id
    })
    .select('*');
    return response.json(ddo_itens);
  },

  // Delete
  async delete (request, response) {
    const { id } = request.params;
    const id_usuario = request.headers.authorization;

    await connection('ddo_item').where('id_ddo_item', id).delete();
    return response.status(204).send();

  },

  // Update
  async update(request, response) {
    const {id_ddo, id_licitacao_item, qtd_demandada, elemento_despesa} = request.body;
    const cod_usuario = request.headers.authorization;
    const { id } = request.params;

    const [ddo_item] = await connection('ddo_item')
    .returning("id_ddo_item")
    .where({
      id_ddo_item: id
    })
    .update({
      id_ddo: id_ddo,
      id_licitacao_item: id_licitacao_item,
      qtd_demandada: qtd_demandada,
      elemento_despesa: elemento_despesa,
      id_usuario: cod_usuario,
    });

    return response.json({ ddo_item });
  },

};