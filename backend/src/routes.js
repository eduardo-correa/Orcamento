const express = require("express");
const SessionController = require("./controllers/SessionController");
const UsuarioController = require("./controllers/UsuarioController");
const AcaoController = require("./controllers/AcaoController");
const UGController = require("./controllers/UGController");
const LicitacaoController = require("./controllers/LicitacaoConroller");
const LicitacaoItemController = require("./controllers/LicitacaoItemController");
const DDOController = require("./controllers/DDOController");
const DDOItemController = require("./controllers/DDOItemController");
const DescentController = require("./controllers/DescentController");
const DescentPaeController = require("./controllers/DescentPaeController");
const DescentDdoController = require("./controllers/DescentDdoController");
const NtCreditoController = require("./controllers/NotaCreditoController");

const routes = express.Router();

// Sessão
routes.post("/sessions", SessionController.create);

// Usuários
routes.get("/usuarios", UsuarioController.list);
routes.get("/usuarios/:id", UsuarioController.find);
routes.post("/usuarios", UsuarioController.create);
routes.delete("/usuarios/:id", UsuarioController.delete);
routes.put("/usuarios/:id", UsuarioController.update);

// Ações
routes.get("/acoes", AcaoController.list);
routes.get("/acoes/:id", AcaoController.find);
routes.post("/acoes", AcaoController.create);
routes.delete("/acoes/:id", AcaoController.delete);
routes.put("/acoes/:id", AcaoController.update);

// Unidade Gestora
routes.get("/ug", UGController.list);
routes.get("/ug/:id", UGController.find);
// routes.post('/ug', UGController.create);
// routes.delete('/ug/:id', UGController.delete);
// routes.put('/ug/:id', UGController.update);

// Licitação
routes.get("/licitacao/", LicitacaoController.list);
routes.get("/licitacao/:id", LicitacaoController.find);
routes.post("/licitacao", LicitacaoController.create);
routes.delete("/licitacao/:id", LicitacaoController.delete);
routes.put("/licitacao/:id", LicitacaoController.update);

// Licitação Item
routes.get("/licitacao_item/:id_licitacao", LicitacaoItemController.list);
routes.get("/licitacao_item/item/:id", LicitacaoItemController.find);
routes.get(
  "/licitacao_item/itens/:id",
  LicitacaoItemController.findBylicitacao
);
routes.post("/licitacao_item", LicitacaoItemController.create);
routes.delete("/licitacao_item/:id", LicitacaoItemController.delete);
routes.put("/licitacao_item/:id", LicitacaoItemController.update);

// DDO
routes.get("/ddo", DDOController.list);
routes.get("/ddo/:id", DDOController.find);
routes.post("/ddo", DDOController.create);
routes.delete("/ddo/:id", DDOController.delete);
routes.put("/ddo/:id", DDOController.update);

// DDO Item
routes.get("/ddo_item/:id_ddo", DDOItemController.list);
routes.get("/ddo_item/item/:id", DDOItemController.find);
routes.post("/ddo_item", DDOItemController.create);
routes.delete("/ddo_item/:id", DDOItemController.delete);
routes.put("/ddo_item/:id", DDOItemController.update);

// Descentralização
routes.get("/descentralizacao", DescentController.list);
routes.get("/descentralizacao/:id", DescentController.find);
routes.post("/descentralizacao", DescentController.create);
routes.delete("/descentralizacao/:id", DescentController.delete);
routes.put("/descentralizacao/:id", DescentController.update);

// DDO Descentralização
routes.get("/descentddo", DescentDdoController.list);
routes.get("/descentddo/:id", DescentDdoController.find);
routes.post("/descentddo", DescentDdoController.create);
routes.delete("/descentddo/:id", DescentDdoController.delete);
routes.put("/descentddo/:id", DescentDdoController.update);

// PAE Descentralização
routes.get("/descentpae", DescentPaeController.list);
routes.get("/descentpae/acao/:id", DescentPaeController.findByAcao);
routes.get("/descentpae/:id", DescentPaeController.find);
routes.post("/descentpae", DescentPaeController.create);
routes.delete("/descentpae/:id", DescentPaeController.delete);
routes.put("/descentpae/:id", DescentPaeController.update);

// Nota de crédito
routes.get("/nt_credito", NtCreditoController.list);
routes.get("/nt_credito/:id", NtCreditoController.find);
routes.post("/nt_credito", NtCreditoController.create);
routes.delete("/nt_credito/:id", NtCreditoController.delete);
routes.put("/nt_credito/:id", NtCreditoController.update);

module.exports = routes;
