const connection = require('../database/connection');

module.exports = {
  
  // Insert
  // async create(request, response) {
  //   const {cod_ug, uf, num_regional} = request.body;
  //   const cod_usuario = request.headers.authorization;

  //   const [ug] = await connection('unidade_gestora')
  //   .returning("id_ug")
  //   .insert({
  //     cod_ug: cod_ug,
  //     uf: uf,
  //     num_regional: num_regional,
  //     id_usuario: cod_usuario,
  //   });
  //   return response.json({ ug });
  // },

  // List
  async list (request, response) {
    const ug = await connection('unidade_gestora').select('*');
    return response.json(ug);
  },

  // Find
  async find (request, response) {
    const { id } = request.params;

    const ug = await connection('unidade_gestora')
    .where({
      id_ug: id
    })
    .select('*');
    return response.json(ug);
  },

  // Delete
  // async delete (request, response) {
  //   const { id } = request.params;
  //   const cod_usuario = request.headers.authorization;

  //   await connection('unidade_gestora').where('id_ug', id).delete();
  //   return response.status(204).send();
    
  // },

  // Update
  // async update(request, response) {
  //   const {cod_ug, uf, num_regional} = request.body;
  //   const cod_usuario = request.headers.authorization;
  //   const { id } = request.params;

  //   const [ug] = await connection('unidade_gestora')
  //   .returning("id_ug")
  //   .where({
  //     id_ug: id
  //   })
  //   .update({
  //     cod_ug: cod_ug,
  //     uf: uf,
  //     num_regional: num_regional,
  //     id_usuario: cod_usuario,
  //   });
  //   return response.json({ ug });
  // },

};