const connection = require('../database/connection');

module.exports = {
  
  // Insert
  async create(request, response) {
    const {id_ug, id_acao, novo, recurso_proprio, vlr_demandado, aprc_cgtic_local, possui_dod, compr_liquidacao, cronograma, ass_presidente, po_local} = request.body;
    const id_usuario = request.headers.authorization;

    const [ddo] = await connection('ddo')
    .returning("id_ddo")
    .insert({
      id_ug: id_ug,
      id_acao: id_acao,
      novo: novo,
      recurso_proprio: recurso_proprio,
      vlr_demandado: vlr_demandado,
      aprc_cgtic_local: aprc_cgtic_local,
      possui_dod: possui_dod,
      compr_liquidacao: compr_liquidacao,
      cronograma: cronograma,
      ass_presidente: ass_presidente,
      po_local: po_local,
      id_usuario: id_usuario,
    });

    return response.json({ ddo });
  },

  // List
  async list (request, response) {
    const ddos = await connection('ddo_dados').select('*');
    return response.json(ddos);
  },

  // Find
  async find (request, response) {
    const { id } = request.params;

    const ddos = await connection('ddo_dados')
    .where({
      id_ddo: id
    })
    .select('*');
    return response.json(ddos);
  },

  // Delete
  async delete (request, response) {
    const { id } = request.params;
    const id_usuario = request.headers.authorization;

    await connection('ddo').where('id_ddo', id).delete();
    return response.status(204).send();

  },

  // Update
  async update(request, response) {
    const {id_ug, id_acao, novo, recurso_proprio, vlr_demandado, aprc_cgtic_local, possui_dod, compr_liquidacao, cronograma, ass_presidente, po_local} = request.body;
    const id_usuario = request.headers.authorization;
    const { id } = request.params;

    const [ddo] = await connection('ddo')
    .returning("id_ddo")
    .where({
      id_ddo: id
    })
    .update({
      id_ug: id_ug,
      id_acao: id_acao,
      novo: novo,
      recurso_proprio: recurso_proprio,
      vlr_demandado: vlr_demandado,
      aprc_cgtic_local: aprc_cgtic_local,
      possui_dod: possui_dod,
      compr_liquidacao: compr_liquidacao,
      cronograma: cronograma,
      ass_presidente: ass_presidente,
      po_local: po_local,
      id_usuario: id_usuario,
    });

    return response.json({ ddo });
  },

};