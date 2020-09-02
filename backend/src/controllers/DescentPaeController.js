const connection = require("../database/connection");

module.exports = {
  // List
  async list(request, response) {
    const descents = await connection("descentpae_dados").select("*");
    return response.json(descents);
  },

  // Find By Ação
  async findByAcao(request, response) {
    const { id } = request.params;

    const descents = await connection("descentpae_dados")
      .select(
        "id_pae_descentralizacao",
        "id_acao",
        "nome_acao",
        "num_processo",
        "ord_descentralizacao"
      )
      .count("*")
      .groupBy(
        "id_acao",
        "nome_acao",
        "num_processo",
        "ord_descentralizacao",
        "id_pae_descentralizacao"
      )
      .orderBy("num_processo")
      .having("id_acao", "=", id);
    return response.json(descents);
  },

  // Find
  async find(request, response) {
    const { id } = request.params;

    const descents = await connection("descentpae_dados")
      .where({
        id_pae_descentralizacao: id,
      })
      .select("*");
    return response.json(descents);
  },

  // Insert
  async create(request, response) {
    const { id_acao, num_processo, ord_descentralizacao } = request.body;
    const id_usuario = request.headers.authorization;

    const [descent] = await connection("pae_descentralizacao")
      .returning("id_pae_descentralizacao")
      .insert({
        id_acao: id_acao,
        num_processo: num_processo,
        ord_descentralizacao: ord_descentralizacao,
        id_usuario: id_usuario,
      });
    return response.json({ descent });
  },

  // update
  async update(request, response) {
    const { id_acao, num_processo, ord_descentralizacao } = request.body;
    const id_usuario = request.headers.authorization;
    const { id } = request.params;

    const [descent] = await connection("pae_descentralizacao")
      .returning("id_pae_descentralizacao")
      .where({
        id_pae_descentralizacao: id,
      })
      .update({
        id_acao: id_acao,
        num_processo: num_processo,
        ord_descentralizacao: ord_descentralizacao,
        id_usuario: id_usuario,
      });
    return response.json({ descent });
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
};
