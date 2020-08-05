const connection = require('../database/connection');

module.exports = {
  
  // Criar sessão
  async create(request, response) {
    const { email, senha } = request.body;

    const usuario = await connection('usuario')
    .returning("id_usuario")
    .where({
      email: email,
      senha: senha,
    })
    .select('id_usuario')
    .first();

    if (!usuario) {
      return response.status(400).json({ error: 'Nenhum usuário encontrado.'});
    }

    return response.json(usuario);
  },

};