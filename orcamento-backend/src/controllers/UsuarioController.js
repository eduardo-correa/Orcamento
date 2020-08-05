const connection = require('../database/connection');

module.exports = {
  
  // Insert
  async create(request, response) {
    const {id_perfil, mat_usuario, nome, email, senha} = request.body;

    const [usuario] = await connection('usuario')
    .returning("id_usuario")
    .insert({
      id_perfil: id_perfil,
      mat_usuario: mat_usuario,
      nome: nome,
      email: email,
      senha: senha,
    });

    return response.json({ usuario });
  },

  // List
  async list (request, response) {
    const usuarios = await connection('usuario').select('*');
    return response.json(usuarios);
  },

  // Find
  async find (request, response) {
    const { id } = request.params;

    const usuarios = await connection('usuario')
    .where({
      id_usuario: id
    })
    .select('*');
    return response.json(usuarios);
  },

  // Delete
  async delete (request, response) {
    const { id } = request.params;
    const id_usuario = request.headers.authorization;

    const usuario = await connection('usuario')
      .where('id_usuario', id)
      .select('*')
      .first();

    return response.status(401).json(usuario);
  },

  // Update
  async update(request, response) {
    const {id_perfil, mat_usuario, nome, email, senha} = request.body;
    const id_usuario = request.headers.authorization;

    const [usuario] = await connection('usuario')
    .returning("id_usuario")
    .where({
      id_usuario: id_usuario
    })
    .update({
      id_perfil: id_perfil,
      mat_usuario: mat_usuario,
      nome: nome,
      email: email,
      senha: senha,
    });

    return response.json({ usuario });
  },

};