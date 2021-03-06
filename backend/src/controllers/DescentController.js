const connection = require("../database/connection");

module.exports = {
  // Insert
  async create(request, response) {
    const { num_processo, ord_descentralizacao } = request.body;
    const id_usuario = request.headers.authorization;

    const [descentralizacao] = await connection("pae_descentralizacao")
      .returning("id_pae_descentralizacao")
      .insert({
        num_processo: num_processo,
        ord_descentralizacao: ord_descentralizacao,
        id_usuario: id_usuario,
      });

    return response.json({ descentralizacao });
  },

  // List
  async list(request, response) {
    const descents = await connection("descent_dados").select("*");
    return response.json(descents);
  },

  // Find
  async find(request, response) {
    const { id } = request.params;

    const descents = await connection("pae_descentralizacao")
      .where({
        id_pae_descentralizacao: id,
      })
      .select("*");
    return response.json(descents);
  },

  // Delete
  async delete(request, response) {
    const { id } = request.params;
    const id_usuario = request.headers.authorization;

    await connection("pae_descentralizacao")
      .where("id_pae_descentralizacao", id)
      .delete();
    return response.status(204).send();
  },

  // Update
  async update(request, response) {
    const { num_processo, ord_descentralizacao } = request.body;
    const id_usuario = request.headers.authorization;
    const { id } = request.params;

    const [descentralizacao] = await connection("pae_descentralizacao")
      .returning("id_pae_descentralizacao")
      .where({
        id_pae_descentralizacao: id,
      })
      .update({
        num_processo: num_processo,
        ord_descentralizacao: ord_descentralizacao,
        id_usuario: id_usuario,
      });
    return response.json({ descentralizacao });
  },
};
