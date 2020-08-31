const connection = require("../database/connection");

module.exports = {
  // List
  async list(request, response) {
    const descents = await connection("descent_dados").select("*");
    return response.json(descents);
  },

  // Find
  async findByAcao(request, response) {
    const { id } = request.params;

    const descents = await connection("descent_dados")
      .select("id_acao", "nome_acao", "num_processo", "ord_descentralizacao")
      .count("*")
      .groupBy("id_acao", "nome_acao", "num_processo", "ord_descentralizacao")
      .orderBy("num_processo")
      .having("id_acao", "=", id);
    return response.json(descents);
  },
};
