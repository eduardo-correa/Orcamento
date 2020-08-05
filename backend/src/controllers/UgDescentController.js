const connection = require('../database/connection');

module.exports = {
  
  // Insert
  async create(request, response) {
    const {id_ug, id_descentralizacao, id_ddo, qtd_aprovada, vlr_aprovado, dt_descentralizacao} = request.body;
    const id_usuario = request.headers.authorization;

    const [UGdescentralizacao] = await connection('ug_descentralizacao')
    .returning("id_ug_descentralizacao")
    .insert({
      id_ug: id_ug,
      id_descentralizacao: id_descentralizacao,
      id_ddo: id_ddo,
      qtd_aprovada: qtd_aprovada,
      vlr_aprovado: vlr_aprovado,
      dt_descentralizacao: dt_descentralizacao,
      id_usuario: id_usuario,
    });

    return response.json({ UGdescentralizacao });
  },

  // List
  async list (request, response) {
    const UGdescents = await connection('ug_descentralizacao').select('*');
    return response.json( UGdescents );
  },

  // Find
  async find (request, response) {
    const { id } = request.params;

    const UGdescents = await connection('ug_descentralizacao')
    .where({
      id_ug_descentralizacao: id
    })
    .select('*');
    return response.json( UGdescents );
  },

  // Delete
  async delete (request, response) {
    const { id } = request.params;
    const id_usuario = request.headers.authorization;

    await connection('ug_descentralizacao').where('id_ug_descentralizacao', id).delete();
    return response.status(204).send();

  },

  // Update
  async update(request, response) {
    const {id_ug, id_descentralizacao, id_ddo, qtd_aprovada, vlr_aprovado, dt_descentralizacao} = request.body;
    const id_usuario = request.headers.authorization;
    const { id } = request.params;

    const [UGdescentralizacao] = await connection('ug_descentralizacao')
    .returning("id_ug_descentralizacao")
    .where({
      id_ug_descentralizacao: id
    })
    .update({
      id_ug: id_ug,
      id_descentralizacao: id_descentralizacao,
      id_ddo: id_ddo,
      qtd_aprovada: qtd_aprovada,
      vlr_aprovado: vlr_aprovado,
      dt_descentralizacao: dt_descentralizacao,
      id_usuario: id_usuario,
    });
    return response.json({ UGdescentralizacao });
  },

};