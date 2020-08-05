const connection = require('../database/connection');

module.exports = {
  
  // Insert
  async create(request, response) {
    const {nome, descricao} = request.body;
    const cod_usuario = request.headers.authorization;

    const [acao] = await connection('acao')
    .returning("id_acao")
    .insert({
      nome: nome,
      descricao: descricao,
      id_usuario: cod_usuario,
    });
    return response.json({ acao });
  },

  // List
  async list (request, response) {
    const acoes = await connection('acao').select('*');
    return response.json(acoes);
  },

  // Find
  async find (request, response) {
    const { id } = request.params;

    const acoes = await connection('acao')
    .where({
      id_acao: id
    })
    .select('*');
    return response.json(acoes);
  },

  // Delete
  async delete (request, response) {
    const { id } = request.params;
    const cod_usuario = request.headers.authorization;

    await connection('acao').where('id_acao', id).delete();
    return response.status(204).send();

  },

  // update
  async update(request, response) {
    const {nome, descricao} = request.body;
    const cod_usuario = request.headers.authorization;
    const { id } = request.params;

    const [acao] = await connection('acao')
    .returning("id_acao")
    .where({
      id_acao: id
    })
    .update({
      nome: nome,
      descricao: descricao,
      id_usuario: cod_usuario,
    });
    return response.json({ acao });
  },

};