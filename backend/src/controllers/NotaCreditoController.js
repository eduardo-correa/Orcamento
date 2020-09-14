const connection = require("../database/connection");

module.exports = {
  // Insert
  async create(request, response) {
    const {
      num_nota_credito,
      gnd,
      id_acao,
      id_ug,
      valor,
      dt_nota_credito,
    } = request.body;
    const id_usuario = request.headers.authorization;

    const [nt_credito] = await connection("nota_credito")
      .returning("id_nota_credito")
      .insert({
        num_nota_credito: num_nota_credito,
        gnd: gnd,
        id_acao: id_acao,
        id_ug: id_ug,
        valor: valor,
        dt_nota_credito: dt_nota_credito,
        id_usuario: id_usuario,
      });

    return response.json({ nt_credito });
  },

  // List
  async list(request, response) {
    const nt_credito = await connection("notacredito_dados").select("*");
    return response.json(nt_credito);
  },

  // Find
  async find(request, response) {
    const { id } = request.params;

    const nt_credito = await connection("notacredito_dados")
      .where({
        id_nota_credito: id,
      })
      .select("*");
    return response.json(nt_credito);
  },

  // Delete
  async delete(request, response) {
    const { id } = request.params;
    const id_usuario = request.headers.authorization;

    await connection("nota_credito").where("id_nota_credito", id).delete();
    return response.status(204).send();
  },

  // Update
  async update(request, response) {
    const {
      num_nota_credito,
      gnd,
      id_acao,
      id_ug,
      valor,
      dt_nota_credito,
    } = request.body;
    const id_usuario = request.headers.authorization;
    const { id } = request.params;

    const [nt_credito] = await connection("nota_credito")
      .returning("id_nota_credito")
      .where({
        id_nota_credito: id,
      })
      .update({
        num_nota_credito: num_nota_credito,
        gnd: gnd,
        id_acao: id_acao,
        id_ug: id_ug,
        valor: valor,
        dt_nota_credito: dt_nota_credito,
        id_usuario: id_usuario,
      });

    return response.json({ nt_credito });
  },
};
