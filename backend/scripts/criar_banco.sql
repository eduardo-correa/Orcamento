DROP TABLE IF EXISTS public.nota_credito CASCADE;
DROP TABLE IF EXISTS public.ddo_descentralizacao CASCADE;
DROP TABLE IF EXISTS public.pae_descentralizacao CASCADE;
DROP TABLE IF EXISTS public.ddo_item CASCADE;
DROP TABLE IF EXISTS public.ddo CASCADE;
DROP TABLE IF EXISTS public.licitacao_item CASCADE;
DROP TABLE IF EXISTS public.licitacao CASCADE;
DROP TABLE IF EXISTS public.unidade_gestora CASCADE;
DROP TABLE IF EXISTS public.acao CASCADE;
DROP TABLE IF EXISTS public.usuario CASCADE;
DROP TABLE IF EXISTS public.perfil CASCADE;
DROP TABLE IF EXISTS public.auditoria CASCADE;



---------------------------
-- public.perfil definition
---------------------------
CREATE TABLE public.perfil (
  id_perfil SMALLSERIAL NOT NULL PRIMARY KEY,
  nome VARCHAR NOT NULL,
  descricao VARCHAR NOT NULL
);
COMMENT ON TABLE perfil IS 'Tabela de perfil dos usuário do sistema';
COMMENT ON COLUMN perfil.id_perfil IS 'Identificação do perfil, criada automaticamente';
COMMENT ON COLUMN perfil.nome IS 'Nome do perfil';
COMMENT ON COLUMN perfil.descricao IS 'Descrição das permissões do perfil';


------------------------------------
-- public.unidade_gestora definition
------------------------------------
CREATE TABLE public.unidade_gestora (
  id_ug INTEGER NOT NULL PRIMARY KEY,
  cod_ug VARCHAR NOT NULL,
  nome VARCHAR NOT NULL,
  uf VARCHAR(2) NOT NULL
);
COMMENT ON TABLE unidade_gestora IS 'Tabela de informações das Unidades Gestoras';
COMMENT ON COLUMN unidade_gestora.id_ug IS 'Identificação da UG, fornecido pela SPPROJ';
COMMENT ON COLUMN unidade_gestora.cod_ug IS 'Código da Unidade Gestora - (TRT01, TRT02, ...)';
COMMENT ON COLUMN unidade_gestora.nome IS 'Nome da Unidade Gestora';
COMMENT ON COLUMN unidade_gestora.uf IS 'UF da Unidade Gestora';


----------------------------
-- public.usuario definition
----------------------------
CREATE TABLE public.usuario (
  id_usuario SERIAL NOT NULL PRIMARY KEY,
  id_perfil INTEGER NOT NULL REFERENCES perfil(id_perfil),
  mat_usuario VARCHAR NOT NULL,
  nome VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  senha VARCHAR NOT NULL,
  ativo BOOLEAN NOT NULL DEFAULT true
);
COMMENT ON TABLE usuario IS 'Tabela de informações dos usuário do sistema';
COMMENT ON COLUMN usuario.id_usuario IS 'Identificação do usuário, criada automaticamente';
COMMENT ON COLUMN usuario.id_perfil IS 'Identificação do perfil do usuário';
COMMENT ON COLUMN usuario.mat_usuario IS 'Matrícula do usuário';
COMMENT ON COLUMN usuario.nome IS 'Nome completo do usuário';
COMMENT ON COLUMN usuario.email IS 'E-mail completo do usuário';
COMMENT ON COLUMN usuario.senha IS 'Senha de login do usuário';
COMMENT ON COLUMN usuario.ativo IS 'Se o usuário do sistema está ativo ou não';


-------------------------
-- public.acao definition
-------------------------
CREATE TABLE public.acao (
  id_acao SERIAL NOT NULL PRIMARY KEY,
  nome VARCHAR NOT NULL,
  descricao VARCHAR NOT NULL,
  id_usuario INTEGER NOT NULL REFERENCES usuario(id_usuario)
);
COMMENT ON TABLE acao IS 'Tabela de informações das ações da Justiça do Trabalho';
COMMENT ON COLUMN acao.id_acao IS 'Identificação da ação, criada automaticamente';
COMMENT ON COLUMN acao.nome IS 'Nome da ação';
COMMENT ON COLUMN acao.descricao IS 'Descrição da ação';
COMMENT ON COLUMN acao.id_usuario IS 'Usuário do sistema responsável pela última alteração';


------------------------------
-- public.licitacao definition
------------------------------
CREATE TABLE public.licitacao (
  id_licitacao SERIAL NOT NULL PRIMARY KEY,
  id_acao INTEGER NOT NULL REFERENCES acao(id_acao) ON DELETE CASCADE,
  id_ug INTEGER NOT NULL REFERENCES unidade_gestora(id_ug) ON DELETE CASCADE,
  num_licitacao VARCHAR NOT NULL,
  ano_licitacao INTEGER NOT NULL,
  descricao VARCHAR,
  procedimento VARCHAR NOT NULL,
  dt_vigencia DATE,
  ativa BOOLEAN NOT NULL DEFAULT true,
  id_usuario INTEGER NOT NULL REFERENCES usuario(id_usuario)
);
COMMENT ON TABLE licitacao IS 'Tabela de informações das Licitações da JT';
COMMENT ON COLUMN licitacao.id_licitacao IS 'Identificação da Licitação, criada automaticamente';
COMMENT ON COLUMN licitacao.id_acao IS 'Identificação da ação a qual a Licitação referencia';
COMMENT ON COLUMN licitacao.id_ug IS 'Identificação da UG responsável pela Licitação';
COMMENT ON COLUMN licitacao.num_licitacao IS 'Número oficial da Licitação';
COMMENT ON COLUMN licitacao.ano_licitacao IS 'Ano da Licitação';
COMMENT ON COLUMN licitacao.descricao IS 'Descrição da Licitação';
COMMENT ON COLUMN licitacao.procedimento IS 'Procedimento da Licitação (Registro de Preço ou Contrato)';
COMMENT ON COLUMN licitacao.dt_vigencia IS 'Data de validade da Licitação caso seja do tipo ARP';
COMMENT ON COLUMN licitacao.ativa IS 'Se a Licitação está valida ou não';
COMMENT ON COLUMN licitacao.id_usuario IS 'Usuário do sistema responsável pela última alteração';


-----------------------------------
-- public.licitacao_item definition
-----------------------------------
CREATE TABLE public.licitacao_item (
  id_licitacao_item SERIAL NOT NULL PRIMARY KEY,
  id_licitacao INTEGER NOT NULL REFERENCES licitacao(id_licitacao) ON DELETE CASCADE,
  nome_licitacao_item VARCHAR NOT NULL,
  num_licitacao_item INTEGER NULL,
  valor DECIMAL(12,2) NULL,
  dt_registro TIMESTAMP DEFAULT LOCALTIMESTAMP,
  id_usuario INTEGER NOT NULL REFERENCES usuario(id_usuario)
);
COMMENT ON TABLE licitacao_item IS 'Tabela de informações dos itens de uma Licitação';
COMMENT ON COLUMN licitacao_item.id_licitacao_item IS 'Identificação do item da Licitação, criada automaticamente';
COMMENT ON COLUMN licitacao_item.id_licitacao IS 'Identificação da Licitação a qual o item faz parte';
COMMENT ON COLUMN licitacao_item.nome_licitacao_item IS 'Nome do item';
COMMENT ON COLUMN licitacao_item.num_licitacao_item IS 'Número do item na Licitação';
COMMENT ON COLUMN licitacao_item.valor IS 'Valor unitário do item';
COMMENT ON COLUMN licitacao_item.dt_registro IS 'Data da última alteração no valor do item, caso haja alguma majoração.';
COMMENT ON COLUMN licitacao_item.id_usuario IS 'Usuário do sistema responsável pela última alteração';


------------------------
-- public.ddo definition
------------------------
CREATE TABLE public.ddo (
  id_ddo SERIAL NOT NULL PRIMARY KEY,
  id_ug INTEGER NOT NULL REFERENCES unidade_gestora(id_ug) ON DELETE CASCADE,
  id_acao INTEGER NOT NULL REFERENCES acao(id_acao) ON DELETE CASCADE,
  novo BOOL NOT NULL,
  recurso_proprio DECIMAL(12,2) NULL,
  vlr_demandado DECIMAL(12,2) NOT NULL,
  aprc_cgtic_local BOOL NOT NULL,
  possui_dod BOOL NOT NULL,
  compr_liquidacao BOOL NOT NULL,
  cronograma BOOL NULL,
  ass_presidente BOOL NOT NULL,
  po_local BOOL NOT NULL,
  id_usuario INTEGER NOT NULL REFERENCES usuario(id_usuario)
);
COMMENT ON TABLE ddo IS 'Tabela de informações dos Documentos de Oficialização de Demanda Orçamentária';
COMMENT ON COLUMN ddo.id_ddo IS 'Identificação do DDO, criada automaticamente';
COMMENT ON COLUMN ddo.id_ug IS 'Identificação da UG que enviou o DDO';
COMMENT ON COLUMN ddo.id_acao IS 'Identificação da Ação a qual o DDO referencia';
COMMENT ON COLUMN ddo.novo IS 'Se o DDO é sobre uma ação nova, caso não seja, caracteriza uma demanda continuada';
COMMENT ON COLUMN ddo.recurso_proprio IS 'Se a UG possui recursos próprios para a demanda';
COMMENT ON COLUMN ddo.vlr_demandado IS 'O valor total demandado pelo DDO';
COMMENT ON COLUMN ddo.aprc_cgtic_local IS 'Se o DDO foi aprovado pelo CGTIC local';
COMMENT ON COLUMN ddo.possui_dod IS 'Se o DDO possui DOD (Documento de Oficialização de Demanda';
COMMENT ON COLUMN ddo.compr_liquidacao IS 'Se a UG se compromete a executar o valor descentralizado no corrente exercício';
COMMENT ON COLUMN ddo.cronograma IS 'Se a UG possui cronograma de execução';
COMMENT ON COLUMN ddo.ass_presidente IS 'Se o DDO possui a assinatura do Presidente da UG';
COMMENT ON COLUMN ddo.po_local IS 'Se o DDO está incluído no Plano Orçamentário da UG';
COMMENT ON COLUMN ddo.id_usuario IS 'Usuário do sistema responsável pela última alteração';


-----------------------------
-- public.ddo_item definition
-----------------------------
CREATE TABLE public.ddo_item (
  id_ddo_item SERIAL NOT NULL PRIMARY KEY,
  id_ddo INTEGER NOT NULL REFERENCES ddo(id_ddo) ON DELETE CASCADE,
  id_licitacao INTEGER NOT NULL REFERENCES licitacao(id_licitacao) ON DELETE CASCADE,
  id_licitacao_item INTEGER NOT NULL REFERENCES licitacao_item(id_licitacao_item) ON DELETE CASCADE,
  qtd_demandada INTEGER NOT NULL,
  elemento_despesa VARCHAR NULL,
  id_usuario INTEGER NOT NULL REFERENCES usuario(id_usuario)
);
COMMENT ON TABLE ddo_item IS 'Tabela de informações dos itemns de um DDO';
COMMENT ON COLUMN ddo_item.id_ddo_item IS 'Identificação do item do DDO, criada automaticamente';
COMMENT ON COLUMN ddo_item.id_ddo IS 'Identificação do DDO a qual o item faz parte';
COMMENT ON COLUMN ddo_item.id_licitacao IS 'Identificação da Licitação a qual o item faz parte';
COMMENT ON COLUMN ddo_item.id_licitacao_item IS 'Identificação do item da Licitação a qual o item faz referência';
COMMENT ON COLUMN ddo_item.qtd_demandada IS 'Quantidade demandada do item';
COMMENT ON COLUMN ddo_item.elemento_despesa IS 'Número doelemento de despesa que o item pertence';
COMMENT ON COLUMN ddo_item.id_usuario IS 'Usuário do sistema responsável pela última alteração';


-------------------------------------
-- public.pae_descentralizacao definition
-------------------------------------
CREATE TABLE public.pae_descentralizacao (
  id_pae_descentralizacao SERIAL NOT NULL PRIMARY KEY,
  id_acao INTEGER NOT NULL REFERENCES acao(id_acao) ON DELETE CASCADE,
  num_processo VARCHAR NOT NULL,
  ord_descentralizacao VARCHAR NOT NULL,
  id_usuario INTEGER NOT NULL REFERENCES usuario(id_usuario)
);
COMMENT ON TABLE pae_descentralizacao IS 'Tabela de informações das descentralizações cadastradas em um PAE';
COMMENT ON COLUMN pae_descentralizacao.id_pae_descentralizacao IS 'Identificação da descentralização, criada automaticamente';
COMMENT ON COLUMN pae_descentralizacao.id_acao IS 'Identificação da Ação a qual a Descentralização pertence';
COMMENT ON COLUMN pae_descentralizacao.num_processo IS 'Identificação do Processo Administrativo que trata a descentralização';
COMMENT ON COLUMN pae_descentralizacao.ord_descentralizacao IS 'Quando existe mais de uma descentralização por PAE, este campo define a ordem das descentralizações';
COMMENT ON COLUMN pae_descentralizacao.id_usuario IS 'Usuário do sistema responsável pela última alteração';


----------------------------------------
-- public.ddo_descentralizacao definition
----------------------------------------
CREATE TABLE public.ddo_descentralizacao (
  id_ddo_descentralizacao SERIAL NOT NULL PRIMARY KEY,
  id_pae_descentralizacao INTEGER NOT NULL REFERENCES pae_descentralizacao(id_pae_descentralizacao) ON DELETE CASCADE,
  id_ddo INTEGER NOT NULL REFERENCES ddo(id_ddo) ON DELETE CASCADE,
  qtd_aprovada INTEGER NOT NULL,
  vlr_aprovado DECIMAL(12,2) NOT NULL,
  reuniao_cgtic VARCHAR NULL,
  dt_aprov_cgtic DATE NULL,
  id_usuario INTEGER NOT NULL REFERENCES usuario(id_usuario)
);
COMMENT ON TABLE ddo_descentralizacao IS 'Tabela de informações das descentralizações por UG (TRT)';
COMMENT ON COLUMN ddo_descentralizacao.id_ddo_descentralizacao IS 'Identificação da descentralização dentro de um PAE, criada automaticamente';
COMMENT ON COLUMN ddo_descentralizacao.id_pae_descentralizacao IS 'Identificação da Descentralização referenciada dentro do PAE.';
COMMENT ON COLUMN ddo_descentralizacao.id_ddo IS 'Identificação do DDO a qual a descentralização faz referência';
COMMENT ON COLUMN ddo_descentralizacao.qtd_aprovada IS 'Quantidade aprovada para esta descentralização';
COMMENT ON COLUMN ddo_descentralizacao.vlr_aprovado IS 'Valor aprovado para esta descentralização';
COMMENT ON COLUMN ddo_descentralizacao.reuniao_cgtic IS 'Identificação da reunião do CGTIC onde foi aprovada a descentralização';
COMMENT ON COLUMN ddo_descentralizacao.dt_aprov_cgtic IS 'Data da reunião do CGTIC onde foi aprovada a descentralização';
COMMENT ON COLUMN ddo_descentralizacao.id_usuario IS 'Usuário do sistema responsável pela última alteração';


---------------------------------
-- public.nota_credito definition
---------------------------------
CREATE TABLE public.nota_credito (
  id_nota_credito SERIAL NOT NULL PRIMARY KEY,
  num_nota_credito VARCHAR NOT NULL,
  gnd SMALLINT NOT NULL,
  id_acao INTEGER NOT NULL REFERENCES acao(id_acao) ON DELETE CASCADE,
  id_ug INTEGER NOT NULL REFERENCES unidade_gestora(id_ug) ON DELETE CASCADE,
  valor DECIMAL(12,2) NOT NULL,
  dt_nota_credito DATE NOT NULL,
  id_usuario INTEGER NOT NULL REFERENCES usuario(id_usuario)
);
COMMENT ON TABLE nota_credito IS 'Tabela de informações das Notas de Crédito';
COMMENT ON COLUMN nota_credito.id_nota_credito IS 'Identificação da Nota de Crédito, criada automaticamente';
COMMENT ON COLUMN nota_credito.num_nota_credito IS 'Número da Nota de Crédito';
COMMENT ON COLUMN nota_credito.gnd IS 'Qual a GND desta Nota de Crédito';
COMMENT ON COLUMN nota_credito.id_acao IS 'Identificação da Ação da JT a qual a Nota de Crédito faz referência';
COMMENT ON COLUMN nota_credito.id_ug IS 'Identificação da Unidade Gestora a qual a Nota de Crédito faz referência';
COMMENT ON COLUMN nota_credito.valor IS 'Valor da Nota de Crédito';
COMMENT ON COLUMN nota_credito.dt_nota_credito IS 'Data da Nota de Crédito';
COMMENT ON COLUMN nota_credito.id_usuario IS 'Usuário do sistema responsável pela última alteração';


------------------------------
-- public.auditoria definition
------------------------------
CREATE TABLE public.auditoria (
  id_operacao SERIAL NOT NULL PRIMARY KEY,
  dt_operacao TIMESTAMP DEFAULT LOCALTIMESTAMP,
  id_usuario INTEGER NOT NULL,
  operacao CHAR(1) NOT NULL,
  nome_tabela VARCHAR NOT NULL,
  dados JSONB NOT NULL
);
COMMENT ON TABLE auditoria IS 'Tabela de informações de auditoria do sistema';
COMMENT ON COLUMN auditoria.id_operacao IS 'Identificação da operacao realizada, criada automaticamente';
COMMENT ON COLUMN auditoria.dt_operacao IS 'Data de realização da operação no sistema';
COMMENT ON COLUMN auditoria.id_usuario IS 'Identificação do usuário que efetuou a operação';
COMMENT ON COLUMN auditoria.operacao IS 'Tipo da operação realizada: INSERÇÃO(I), ALTERAÇÃO(U) ou DELEÇÃO(D)';
COMMENT ON COLUMN auditoria.nome_tabela IS 'Nome da tabela onde a operação foi realizada';
COMMENT ON COLUMN auditoria.dados IS 'Informação da operação realizada: nome da tabela, coluna e dados alterados';


---------------------------
-- Function GERAR_AUDITORIA
---------------------------
CREATE OR REPLACE FUNCTION public.gerar_auditoria()
RETURNS trigger AS $$
BEGIN
  IF (TG_OP = 'INSERT') THEN
    INSERT INTO public.auditoria (id_usuario, operacao, nome_tabela, dados)
      VALUES (NEW.id_usuario, 'I', TG_TABLE_NAME, to_json(NEW));
  ELSIF (TG_OP = 'UPDATE') THEN
    INSERT INTO public.auditoria (id_usuario, operacao, nome_tabela, dados)
      VALUES (NEW.id_usuario, 'U', TG_TABLE_NAME, to_json(NEW));
  ELSIF (TG_OP = 'DELETE') THEN
    INSERT INTO public.auditoria (id_usuario, operacao, nome_tabela, dados)
      VALUES (OLD.id_usuario, 'D', TG_TABLE_NAME, to_json(OLD));
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;


-------------------------------------
-- Triggers para realizar a auditoria
-------------------------------------
CREATE TRIGGER audit_operacao AFTER INSERT OR UPDATE OR DELETE ON
  public.usuario FOR EACH ROW EXECUTE FUNCTION gerar_auditoria();
CREATE TRIGGER audit_operacao AFTER INSERT OR UPDATE OR DELETE ON
  public.acao FOR EACH ROW EXECUTE FUNCTION gerar_auditoria();
CREATE TRIGGER audit_operacao AFTER INSERT OR UPDATE OR DELETE ON
  public.licitacao FOR EACH ROW EXECUTE FUNCTION gerar_auditoria();
CREATE TRIGGER audit_operacao AFTER INSERT OR UPDATE OR DELETE ON
  public.licitacao_item FOR EACH ROW EXECUTE FUNCTION gerar_auditoria();
CREATE TRIGGER audit_operacao AFTER INSERT OR UPDATE OR DELETE ON
  public.ddo FOR EACH ROW EXECUTE FUNCTION gerar_auditoria();
CREATE TRIGGER audit_operacao AFTER INSERT OR UPDATE OR DELETE ON
  public.ddo_item FOR EACH ROW EXECUTE FUNCTION gerar_auditoria();
CREATE TRIGGER audit_operacao AFTER INSERT OR UPDATE OR DELETE ON
  public.pae_descentralizacao FOR EACH ROW EXECUTE FUNCTION gerar_auditoria();
CREATE TRIGGER audit_operacao AFTER INSERT OR UPDATE OR DELETE ON
  public.ddo_descentralizacao FOR EACH ROW EXECUTE FUNCTION gerar_auditoria();
CREATE TRIGGER audit_operacao AFTER INSERT OR UPDATE OR DELETE ON
  public.nota_credito FOR EACH ROW EXECUTE FUNCTION gerar_auditoria();


-----------------------------------
-- View para exibir os dados do DDO
-----------------------------------
CREATE VIEW ddo_dados AS
SELECT
  ddo.id_ddo,
	ddo.id_ug,
	ug.cod_ug as nome_ug,
	ddo.id_acao,
	acao.nome as nome_acao,
	ddo.novo,
	ddo.recurso_proprio,
	ddo.vlr_demandado,
	ddo.aprc_cgtic_local,
	ddo.possui_dod,
	ddo.compr_liquidacao,
	ddo.cronograma,
	ddo.ass_presidente,
	ddo.po_local,
  concat_ws('-', ug.cod_ug, acao.nome) as identifica_ddo,
	ddo.id_usuario
FROM public.ddo, public.acao, public.unidade_gestora ug
WHERE
	ddo.id_acao = acao.id_acao AND
	ddo.id_ug = ug.id_ug;


---------------------------------------------
-- View para exibir os dados dos itens do DDO
---------------------------------------------
CREATE VIEW ddo_itens_dados AS
SELECT
  ddo_item.id_ddo_item,
  ddo_item.id_ddo,
  ddo_item.id_licitacao,
  ddo_item.id_licitacao_item,
  ddo_item.qtd_demandada,
  ddo_item.elemento_despesa,
  licitacao_item.num_licitacao_item,
  licitacao_item.nome_licitacao_item as nome_item,
  licitacao_item.valor as valor_item,
  concat_ws('/', licitacao.num_licitacao, licitacao.ano_licitacao) as identifica_licitacao
FROM public.ddo_item, public.licitacao_item, public.licitacao
WHERE
	ddo_item.id_licitacao_item = licitacao_item.id_licitacao_item AND
	ddo_item.id_licitacao = licitacao.id_licitacao;


-----------------------------------------
-- View para exibir os dados da Licitação
-----------------------------------------
CREATE VIEW licitacao_dados AS
SELECT
	licitacao.id_licitacao,
	licitacao.id_acao,
	acao.nome AS nome_acao,
	licitacao.id_ug,
	ug.cod_ug AS nome_ug,
	licitacao.num_licitacao,
	licitacao.ano_licitacao,
	licitacao.descricao,
	licitacao.dt_vigencia,
  licitacao.ativa,
  licitacao.procedimento,
	licitacao.id_usuario
FROM public.licitacao, public.acao, public.unidade_gestora ug
WHERE
	licitacao.id_acao = acao.id_acao AND
	licitacao.id_ug = ug.id_ug AND
  licitacao.ativa;


----------------------------------------------------
-- View para exibir os dados de PAE-Descentralização
----------------------------------------------------
CREATE VIEW descentpae_dados AS
SELECT
  pae.id_pae_descentralizacao,
  pae.num_processo,
  pae.ord_descentralizacao,
  acao.id_acao,
  acao.nome AS nome_acao
FROM
  public.pae_descentralizacao pae,
  public.acao
WHERE
  pae.id_acao = acao.id_acao;


----------------------------------------------------
-- View para exibir os dados de DDO-Descentralização
----------------------------------------------------
CREATE VIEW descentddo_dados AS
SELECT
  pae.id_pae_descentralizacao,
  d_ddo.id_ddo_descentralizacao,
  pae.num_processo,
  pae.ord_descentralizacao,
  acao.id_acao,
  acao.nome AS nome_acao,
  ug.cod_ug AS nome_ug,
  d_ddo.reuniao_cgtic,
  d_ddo.dt_aprov_cgtic,
  d_ddo.qtd_aprovada,
  d_ddo.id_ddo,
  d_ddo.vlr_aprovado,
  concat_ws(' - ', ug.cod_ug, acao.nome) as identifica_ddo
FROM
  public.pae_descentralizacao pae,
  public.ddo,
  public.unidade_gestora ug,
  public.acao,
  public.ddo_descentralizacao d_ddo
WHERE
  d_ddo.id_ddo = ddo.id_ddo AND
  ddo.id_ug = ug.id_ug AND
  ddo.id_acao = acao.id_acao AND
  pae.id_pae_descentralizacao = d_ddo.id_pae_descentralizacao;


------------------------------------
-- View para exibir os DDOs por Ação
------------------------------------
CREATE VIEW ddo_acoes AS
SELECT
  concat_ws(' - ', ug.cod_ug, acao.nome) AS identifica_ddo,
  ddo.id_ddo,
  acao.id_acao
FROM
  ddo, unidade_gestora ug, acao
WHERE
  ddo.id_acao = acao.id_acao AND ddo.id_ug = ug.id_ug
ORDER BY acao.id_acao;



-----------------------------------------------
-- View para exibir os dados da Nota de Crédito
-----------------------------------------------
CREATE VIEW notaCredito_dados AS
SELECT
  nc.id_nota_credito,
  nc.gnd,
  nc.num_nota_credito,
  nc.valor,
  nc.dt_nota_credito,
  nc.id_acao,
  acao.nome as nome_acao,
  nc.id_ug,
  ug.cod_ug as nome_ug
FROM
  public.nota_credito nc,
  public.acao acao,
  public.unidade_gestora ug
WHERE
  nc.id_ug = ug.id_ug AND
  nc.id_acao = acao.id_acao
;
