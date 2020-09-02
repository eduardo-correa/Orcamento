const connection = require("../database/connection");

module.exports = {
  // Insert
  async create(request, response) {
    const {
      id_pae_descentralizacao,
      id_ddo,
      qtd_aprovada,
      vlr_aprovado,
      reuniao_cgtic,
      dt_aprov_cgtic,
    } = request.body;
    const id_usuario = request.headers.authorization;

    const [DescentDdo] = await connection("ddo_descentralizacao")
      .returning("id_ddo_descentralizacao")
      .insert({
        id_pae_descentralizacao: id_pae_descentralizacao,
        id_ddo: id_ddo,
        qtd_aprovada: qtd_aprovada,
        vlr_aprovado: vlr_aprovado,
        reuniao_cgtic: reuniao_cgtic,
        dt_aprov_cgtic: dt_aprov_cgtic,
        id_usuario: id_usuario,
      });

    return response.json({ DescentDdo });
  },

  // List
  async list(request, response) {
    const DescentDdo = await connection("descentddo_dados").select("*");
    return response.json(DescentDdo);
  },

  // Find
  async find(request, response) {
    const { id } = request.params;

    const DdoDescent = await connection("descentddo_dados")
      .where({
        id_ddo_descentralizacao: id,
      })
      .select("*");
    return response.json(DdoDescent);
  },

  // Delete
  async delete(request, response) {
    const { id } = request.params;
    const id_usuario = request.headers.authorization;

    await connection("ddo_descentralizacao")
      .where("id_ddo_descentralizacao", id)
      .delete();
    return response.status(204).send();
  },

  // Update
  async update(request, response) {
    const {
      id_pae_descentralizacao,
      id_ddo,
      qtd_aprovada,
      vlr_aprovado,
      reuniao_cgtic,
      dt_aprov_cgtic,
    } = request.body;
    const id_usuario = request.headers.authorization;
    const { id } = request.params;

    const [DescentDdo] = await connection("ddo_descentralizacao")
      .returning("id_ddo_descentralizacao")
      .where({
        id_ddo_descentralizacao: id,
      })
      .update({
        id_pae_descentralizacao: id_pae_descentralizacao,
        id_ddo: id_ddo,
        qtd_aprovada: qtd_aprovada,
        vlr_aprovado: vlr_aprovado,
        reuniao_cgtic: reuniao_cgtic,
        dt_aprov_cgtic: dt_aprov_cgtic,
        id_usuario: id_usuario,
      });
    return response.json({ DescentDdo });
  },
};
