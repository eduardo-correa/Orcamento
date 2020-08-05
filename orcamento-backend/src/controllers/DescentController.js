const connection = require('../database/connection');

module.exports = {
  
  // Insert
  async create(request, response) {
    const {id_ddo, vlr_total_aprovado, num_processo, ord_descentralizacao} = request.body;
    const id_usuario = request.headers.authorization;

    const [descentralizacao] = await connection('descentralizacao')
    .returning("id_descentralizacao")
    .insert({
      id_ddo: id_ddo,
      vlr_total_aprovado: vlr_total_aprovado,
      num_processo: num_processo,
      ord_descentralizacao: ord_descentralizacao,
      id_usuario: id_usuario,
    });

    return response.json({ descentralizacao });
  },

  // List
  async list (request, response) {
    const descents = await connection('descent_dados').select('*');
    return response.json(descents);
  },

  // Find
  async find (request, response) {
    const { id } = request.params;

    const descents = await connection('descentralizacao')
    .where({
      id_descentralizacao: id
    })
    .select('*');
    return response.json(descents);
  },

  // Delete
  async delete (request, response) {
    const { id } = request.params;
    const id_usuario = request.headers.authorization;

    await connection('descentralizacao').where('id_descentralizacao', id).delete();
    return response.status(204).send();

  },

  // Update
  async update(request, response) {
    const {id_ddo, vlr_total_aprovado, num_processo, ord_descentralizacao} = request.body;
    const id_usuario = request.headers.authorization;
    const { id } = request.params;

    const [descentralizacao] = await connection('descentralizacao')
    .returning("id_descentralizacao")
    .where({
      id_descentralizacao: id
    })
    .update({
      id_ddo: id_ddo,
      vlr_total_aprovado: vlr_total_aprovado,
      num_processo: num_processo,
      ord_descentralizacao: ord_descentralizacao,
      id_usuario: id_usuario,
    });
    return response.json({ descentralizacao });
  },

};