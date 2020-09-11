--------------------------
-- Carga da tabela PERFIL
--------------------------
INSERT INTO
  perfil (nome, descricao)
VALUES (
    'Administrador',
    'Perfil avançado, possui todas as permissões no sistema.'
  );

INSERT INTO
  perfil (nome, descricao)
VALUES (
    'Servidor',
    'Perfil intermediário, não insere novos usuários ao sistema'
  );

INSERT INTO
  perfil (nome, descricao)
VALUES (
    'Estagiário',
    'Perfil básico, apenas com permissão de consulta'
  );

----------------------------------
-- carga da tabela UNIDADE_GESTORA
----------------------------------
insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080001,
    'TST',
    'Tribunal Superior do Trabalho',
    'DF'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080017,
    'CSJT',
    'Conselho Superior da Justiça do Trabalho',
    'DF'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080009,
    'TRT01',
    'Tribunal Regional do Trabalho da 1ª Região',
    'RJ'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080010,
    'TRT02',
    'Tribunal Regional do Trabalho da 2ª Região',
    'SP'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080008,
    'TRT03',
    'Tribunal Regional do Trabalho da 3ª Região',
    'MG'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080014,
    'TRT04',
    'Tribunal Regional do Trabalho da 4ª Região',
    'RS'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080007,
    'TRT05',
    'Tribunal Regional do Trabalho da 5ª Região',
    'BA'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080006,
    'TRT06',
    'Tribunal Regional do Trabalho da 6ª Região',
    'PE'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080004,
    'TRT07',
    'Tribunal Regional do Trabalho da 7ª Região',
    'CE'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080003,
    'TRT08',
    'Tribunal Regional do Trabalho da 8ª Região',
    'PA'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080012,
    'TRT09',
    'Tribunal Regional do Trabalho da 9ª Região',
    'PR'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080016,
    'TRT10',
    'Tribunal Regional do Trabalho da 10ª Região',
    'DF'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080002,
    'TRT11',
    'Tribunal Regional do Trabalho da 11ª Região',
    'AM'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080013,
    'TRT12',
    'Tribunal Regional do Trabalho da 12ª Região',
    'SC'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080005,
    'TRT13',
    'Tribunal Regional do Trabalho da 13ª Região',
    'PB'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080015,
    'TRT14',
    'Tribunal Regional do Trabalho da 14ª Região',
    'AC'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080011,
    'TRT15',
    'Tribunal Regional do Trabalho da 15ª Região',
    'SP'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080018,
    'TRT16',
    'Tribunal Regional do Trabalho da 16ª Região',
    'MA'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080019,
    'TRT17',
    'Tribunal Regional do Trabalho da 17ª Região',
    'ES'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080020,
    'TRT18',
    'Tribunal Regional do Trabalho da 18ª Região',
    'GO'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080022,
    'TRT19',
    'Tribunal Regional do Trabalho da 19ª Região',
    'AL'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080023,
    'TRT20',
    'Tribunal Regional do Trabalho da 20ª Região',
    'SE'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080021,
    'TRT21',
    'Tribunal Regional do Trabalho da 21ª Região',
    'RN'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080024,
    'TRT22',
    'Tribunal Regional do Trabalho da 22ª Região',
    'PI'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080025,
    'TRT23',
    'Tribunal Regional do Trabalho da 23ª Região',
    'MG'
  );

insert into
  unidade_gestora (id_ug, cod_ug, nome, uf)
VALUES (
    080026,
    'TRT24',
    'Tribunal Regional do Trabalho da 24ª Região',
    'MS'
  );


--------------------------
-- carga da tabela USUARIO
--------------------------
INSERT INTO
  public.usuario (
    id_perfil,
    mat_usuario,
    nome,
    email,
    senha,
    ativo
  )
VALUES (
    1,
    '49075',
    'Eduardo Corrêa',
    'eduardo.correa@tst.jus.br',
    'senha',
    true
  );

INSERT INTO
  public.usuario (
    id_perfil,
    mat_usuario,
    nome,
    email,
    senha,
    ativo
  )
VALUES (
    1,
    '50048',
    'Hugo Machado',
    'hugo.machado@tst.jus.br',
    'senha',
    true
  );

INSERT INTO
  public.usuario (
    id_perfil,
    mat_usuario,
    nome,
    email,
    senha,
    ativo
  )
VALUES (
    2,
    '51021',
    'Mariana Bernardes',
    'mariana.bernardes@tst.jus.br',
    'senha',
    true
  );

INSERT INTO
  public.usuario (
    id_perfil,
    mat_usuario,
    nome,
    email,
    senha,
    ativo
  )
VALUES (
    2,
    '48765',
    'Daniel Sá',
    'daniel.sa@tst.jus.br',
    'senha',
    true
  );

INSERT INTO
  public.usuario (
    id_perfil,
    mat_usuario,
    nome,
    email,
    senha,
    ativo
  )
VALUES (
    3,
    '35190',
    'Paola Cristina',
    'paola.cristina@tst.jus.br',
    'senha',
    true
  );


-----------------------
-- carga da tabela ACAO
-----------------------
INSERT INTO
  public.acao (nome, descricao, id_usuario)
VALUES (
    'Microcomputadores',
    'Aquisição de microcomputadores',
    1
  );

INSERT INTO
  public.acao (nome, descricao, id_usuario)
VALUES
  ('Monitor', 'Aquisição de monitores', 1);

INSERT INTO
  public.acao (nome, descricao, id_usuario)
VALUES (
    'Sala Cofre',
    'Manutenção de sala cofre nos regionais',
    2
  );

INSERT INTO
  public.acao (nome, descricao, id_usuario)
VALUES (
    'Solução de Backup',
    'Aquisição de itens para backup das informações da JT',
    2
  );

INSERT INTO
  public.acao (nome, descricao, id_usuario)
VALUES (
    'Rede JT',
    'Manutenção da rede de dados da JT',
    3
  );

INSERT INTO
  public.acao (nome, descricao, id_usuario)
VALUES (
    'Servidor de Aplicação',
    'Aquisição de licenças do JBOSS',
    4
  );


----------------------------
-- carga da tabela LICITACAO
----------------------------
INSERT INTO
  public.licitacao (
    id_acao,
    id_ug,
    num_licitacao,
    ano_licitacao,
    descricao,
    procedimento,
    id_usuario
  )
VALUES (
    1,
    080002,
    '04',
    2020,
    'Licitação para aquisição de microcomputadores',
    'Registro de Preço',
    1
  );

  INSERT INTO
  public.licitacao (
    id_acao,
    id_ug,
    num_licitacao,
    ano_licitacao,
    descricao,
    procedimento,
    id_usuario
  )
VALUES (
    1,
    080009,
    '15',
    2020,
    'Aquisição de microcomputadores',
    'Registro de Preço',
    1
  );

INSERT INTO
  public.licitacao (
    id_acao,
    id_ug,
    num_licitacao,
    ano_licitacao,
    descricao,
    procedimento,
    id_usuario
  )
VALUES (
    2,
    080003,
    '07',
    2020,
    'Licitação para aquisição de monitores',
    'Registro de Preço',
    1
  );

INSERT INTO
  public.licitacao (
    id_acao,
    id_ug,
    num_licitacao,
    ano_licitacao,
    descricao,
    procedimento,
    id_usuario
  )
VALUES (
    2,
    080010,
    '11',
    2020,
    'Aquisição de monitores',
    'Contrato',
    1
  );

INSERT INTO
  public.licitacao (
    id_acao,
    id_ug,
    num_licitacao,
    ano_licitacao,
    descricao,
    procedimento,
    id_usuario
  )
VALUES (
    3,
    080004,
    '08',
    2020,
    'Licitação para manutenção de sala cofre',
    'Contrato',
    2
  );

INSERT INTO
  public.licitacao (
    id_acao,
    id_ug,
    num_licitacao,
    ano_licitacao,
    descricao,
    procedimento,
    id_usuario
  )
VALUES (
    3,
    080014,
    '18',
    2020,
    'Manutenção de sala cofre',
    'Registro de Preço',
    2
  );

INSERT INTO
  public.licitacao (
    id_acao,
    id_ug,
    num_licitacao,
    ano_licitacao,
    descricao,
    procedimento,
    id_usuario
  )
VALUES (
    4,
    080005,
    '10',
    2020,
    'Licitação para solução de backup',
    'Registro de Preço',
    2
  );

INSERT INTO
  public.licitacao (
    id_acao,
    id_ug,
    num_licitacao,
    ano_licitacao,
    descricao,
    procedimento,
    id_usuario
  )
VALUES (
    4,
    080015,
    '20',
    2020,
    'Solução de backup',
    'Contrato',
    2
  );

INSERT INTO
  public.licitacao (
    id_acao,
    id_ug,
    num_licitacao,
    ano_licitacao,
    descricao,
    procedimento,
    id_usuario
    )
VALUES (
    5,
    080006,
    '12',
    2020,
    'Licitação para manutenção da rede de dados da JT',
    'Registro de Preço',
    3
  );

INSERT INTO
  public.licitacao (
    id_acao,
    id_ug,
    num_licitacao,
    ano_licitacao,
    descricao,
    procedimento,
    id_usuario
  )
VALUES (
    5,
    080016,
    '22',
    2020,
    'Manutenção da rede de dados da JT',
    'Registro de Preço',
    3
  );

INSERT INTO
  public.licitacao (
    id_acao,
    id_ug,
    num_licitacao,
    ano_licitacao,
    descricao,
    procedimento,
    id_usuario
  )
VALUES (
    6,
    080007,
    '07',
    2020,
    'Licitação para aquisição de licenças do JBOSS',
    'Registro de Preço',
    4
  );

INSERT INTO
  public.licitacao (
    id_acao,
    id_ug,
    num_licitacao,
    ano_licitacao,
    descricao,
    procedimento,
    id_usuario
  )
VALUES (
    6,
    080017,
    '17',
    2020,
    'Aquisição de licenças do JBOSS',
    'Registro de Preço',
    4
  );


---------------------------------
-- carga da tabela LICITACAO_ITEM
---------------------------------
-- LICITACAO 1
INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (1, 'Microcomputador DELL', 1, 3500, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (1, 'Microcomputador Lenovo', 2, 2200, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (1, 'Microcomputador Samsung', 3, 2500, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (1, 'Microcomputador Itautec', 4, 2000, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (1, 'Microcomputador Positivo', 5, 1500, 1);


-- LICITACAO 2
INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (2, 'Microcomputador DELL', 1, 3700, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (2, 'Microcomputador Lenovo', 2, 2000, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (2, 'Microcomputador Samsung', 3, 2300, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (2, 'Microcomputador Itautec', 4, 2200, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (2, 'Microcomputador Positivo', 5, 1300, 1);



-- LICITACAO 3
INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (3, 'Monitor LG', 1, 750.50, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (3, 'Monitor Dell', 2, 745.80, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (3, 'Monitor Samsung', 3, 780.00, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (3, 'Monitor Itautec', 4, 680.75, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (3, 'Monitor Positivo', 5, 630.25, 1);


-- LICITACAO 4
INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (4, 'Monitor LG', 1, 770.50, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (4, 'Monitor Dell', 2, 680.00, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (4, 'Monitor Samsung', 3, 750.00, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (4, 'Monitor Itautec', 4, 780.75, 1);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (4, 'Monitor Positivo', 5, 635.75, 1);


-- LICITACAO 5
INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (5, 'Extintor de Incêndio Químico', 1, 189.67, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (5, 'Extintor de Incêndio em Pó', 2, 137.50, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (5, 'Central de Ar-condicionado', 3, 5500.00, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (5, 'Portas corta-fogo', 4, 278.80, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (5, 'Alarme de incêndio', 5, 84.32, 2);


-- LICITACAO 6
INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (6, 'Extintor de Incêndio Químico', 1, 200.00, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (6, 'Extintor de Incêndio em Pó', 2, 150.00, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (6, 'Central de Ar-condicionado', 3, 5000.00, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (6, 'Portas corta-fogo', 4, 350.80, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (6, 'Alarme de incêndio', 5, 100.50, 2);


-- LICITACAO 7
INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (7, 'Fita de backup', 1, 35.50, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (7, 'Armazenamento tipo SSD', 2, 180.50, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (7, 'Armazenamento tipo HDD', 3, 130.00, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (7, 'Software de Gerenciamento', 4, 49.99, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (7, 'Robô de backup', 5, 3578.65, 2);


-- LICITACAO 8
INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (8, 'Fita de backup', 1, 30.00, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (8, 'Armazenamento tipo SSD', 2, 200.50, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (8, 'Armazenamento tipo HDD', 3, 120.50, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (8, 'Software de Gerenciamento', 4, 50.00, 2);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (8, 'Robô de backup', 5, 3300.00, 2);



-- LICITACAO 9
INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (9, 'Switch camada 3', 1, 1600, 3);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (9, 'Switch camada 5', 2, 1900, 3);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (9, 'Roteador', 3, 2600, 3);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (9, 'Serviço de Cabeamento', 4, 60, 3);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (9, 'Firewall', 5, 3500, 3);


-- LICITACAO 10
INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (10, 'Switch camada 3', 1, 1500, 3);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (10, 'Switch camada 5', 2, 1800, 3);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (10, 'Roteador', 3, 2700, 3);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (10, 'Serviço de Cabeamento', 4, 55, 3);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (10, 'Firewall', 5, 3400, 3);


-- LICITACAO 11
INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (11, 'Licenças de REDHAT', 1, 6500, 4);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (11, 'Licenças de JBOSS', 2, 7500, 4);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (11, 'Treinamento REDHAT', 3, 1500, 4);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (11, 'Treinamento JBOSS', 4, 1500, 4);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (11, 'Instalação', 5, 75, 4);


-- LICITACAO 12
INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (12, 'Licenças de REDHAT', 1, 6300, 4);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (12, 'Licenças de JBOSS', 2, 7800, 4);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (12, 'Treinamento REDHAT', 3, 1750, 4);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (12, 'Treinamento JBOSS', 4, 1670, 4);

INSERT INTO
  public.licitacao_item (
    id_licitacao,
    nome_licitacao_item,
    num_licitacao_item,
    valor,
    id_usuario
  )
VALUES
  (12, 'Instalação', 5, 50, 4);



----------------------
-- carga da tabela DDO
----------------------
-- DDO 1
INSERT INTO
  public.ddo (
    id_ug,
    id_acao,
    novo,
    recurso_proprio,
    vlr_demandado,
    aprc_cgtic_local,
    possui_dod,
    compr_liquidacao,
    cronograma,
    ass_presidente,
    po_local,
    id_usuario
  )
VALUES (
    080002,
    1,
    true,
    5000,
    35000,
    true,
    true,
    true,
    true,
    true,
    true,
    1
  );

--DDO 2
INSERT INTO
  public.ddo (
    id_ug,
    id_acao,
    novo,
    recurso_proprio,
    vlr_demandado,
    aprc_cgtic_local,
    possui_dod,
    compr_liquidacao,
    cronograma,
    ass_presidente,
    po_local,
    id_usuario
  )
VALUES (
    080003,
    1,
    true,
    4000,
    45000,
    true,
    true,
    true,
    true,
    true,
    true,
    1
  );

-- DDO 3
INSERT INTO
  public.ddo (
    id_ug,
    id_acao,
    novo,
    recurso_proprio,
    vlr_demandado,
    aprc_cgtic_local,
    possui_dod,
    compr_liquidacao,
    cronograma,
    ass_presidente,
    po_local,
    id_usuario
  )
VALUES (
    080004,
    2,
    true,
    0,
    15000,
    true,
    true,
    true,
    true,
    true,
    true,
    1
  );

-- DDO 4
INSERT INTO
  public.ddo (
    id_ug,
    id_acao,
    novo,
    recurso_proprio,
    vlr_demandado,
    aprc_cgtic_local,
    possui_dod,
    compr_liquidacao,
    cronograma,
    ass_presidente,
    po_local,
    id_usuario
  )
VALUES (
    080005,
    2,
    true,
    0,
    25000,
    true,
    true,
    true,
    true,
    true,
    true,
    1
  );

-- DDO 5
INSERT INTO
  public.ddo (
    id_ug,
    id_acao,
    novo,
    recurso_proprio,
    vlr_demandado,
    aprc_cgtic_local,
    possui_dod,
    compr_liquidacao,
    cronograma,
    ass_presidente,
    po_local,
    id_usuario
  )
VALUES (
    080006,
    3,
    true,
    0,
    5000,
    true,
    true,
    true,
    true,
    true,
    true,
    2
  );

-- DDO 6
INSERT INTO
  public.ddo (
    id_ug,
    id_acao,
    novo,
    recurso_proprio,
    vlr_demandado,
    aprc_cgtic_local,
    possui_dod,
    compr_liquidacao,
    cronograma,
    ass_presidente,
    po_local,
    id_usuario
  )
VALUES (
    080007,
    3,
    true,
    1000,
    8000,
    true,
    true,
    true,
    true,
    true,
    true,
    2
  );

-- DDO 7
INSERT INTO
  public.ddo (
    id_ug,
    id_acao,
    novo,
    recurso_proprio,
    vlr_demandado,
    aprc_cgtic_local,
    possui_dod,
    compr_liquidacao,
    cronograma,
    ass_presidente,
    po_local,
    id_usuario
  )
VALUES (
    080008,
    4,
    false,
    0,
    2500,
    true,
    true,
    true,
    true,
    true,
    true,
    3
  );

-- DDO 8
INSERT INTO
  public.ddo (
    id_ug,
    id_acao,
    novo,
    recurso_proprio,
    vlr_demandado,
    aprc_cgtic_local,
    possui_dod,
    compr_liquidacao,
    cronograma,
    ass_presidente,
    po_local,
    id_usuario
  )
VALUES (
    080009,
    4,
    false,
    0,
    2500,
    true,
    true,
    true,
    true,
    true,
    true,
    3
  );

-- DDO 9
INSERT INTO
  public.ddo (
    id_ug,
    id_acao,
    novo,
    recurso_proprio,
    vlr_demandado,
    aprc_cgtic_local,
    possui_dod,
    compr_liquidacao,
    cronograma,
    ass_presidente,
    po_local,
    id_usuario
  )
VALUES (
    080010,
    5,
    false,
    1500,
    8350,
    true,
    true,
    true,
    true,
    false,
    true,
    4
  );

-- DDO 10
INSERT INTO
  public.ddo (
    id_ug,
    id_acao,
    novo,
    recurso_proprio,
    vlr_demandado,
    aprc_cgtic_local,
    possui_dod,
    compr_liquidacao,
    cronograma,
    ass_presidente,
    po_local,
    id_usuario
  )
VALUES (
    080011,
    5,
    false,
    1000,
    8350,
    true,
    true,
    true,
    true,
    false,
    true,
    4
  );

-- DDO 11
INSERT INTO
  public.ddo (
    id_ug,
    id_acao,
    novo,
    recurso_proprio,
    vlr_demandado,
    aprc_cgtic_local,
    possui_dod,
    compr_liquidacao,
    cronograma,
    ass_presidente,
    po_local,
    id_usuario
  )
VALUES (
    080012,
    6,
    false,
    0,
    8500,
    true,
    true,
    true,
    true,
    false,
    true,
    4
  );

-- DDO 12
INSERT INTO
  public.ddo (
    id_ug,
    id_acao,
    novo,
    recurso_proprio,
    vlr_demandado,
    aprc_cgtic_local,
    possui_dod,
    compr_liquidacao,
    cronograma,
    ass_presidente,
    po_local,
    id_usuario
  )
VALUES (
    080013,
    6,
    false,
    1500,
    7350,
    true,
    true,
    true,
    true,
    false,
    true,
    4
  );

-- DDO 13
INSERT INTO
  public.ddo (
    id_ug,
    id_acao,
    novo,
    recurso_proprio,
    vlr_demandado,
    aprc_cgtic_local,
    possui_dod,
    compr_liquidacao,
    cronograma,
    ass_presidente,
    po_local,
    id_usuario
  )
VALUES (
    080014,
    3,
    false,
    1500,
    7350,
    true,
    true,
    true,
    true,
    false,
    true,
    4
  );

-- DDO 14
INSERT INTO
  public.ddo (
    id_ug,
    id_acao,
    novo,
    recurso_proprio,
    vlr_demandado,
    aprc_cgtic_local,
    possui_dod,
    compr_liquidacao,
    cronograma,
    ass_presidente,
    po_local,
    id_usuario
  )
VALUES (
    080015,
    3,
    false,
    1500,
    7350,
    true,
    true,
    true,
    true,
    false,
    true,
    4
  );



---------------------------
-- carga da tabela DDO_ITEM
---------------------------
-- DDO 1
INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES ( 1, 1, 1, 180, '3.3.90.40.12', 1 );

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (1, 1, 2, 150, '3.3.90.40.12', 1);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (1, 1, 3, 50, '3.3.90.40.12', 1);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (1, 1, 4, 30, '3.3.90.40.12', 1);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (1, 1, 5, 500, '3.3.90.40.12', 1);


-- DDO 2
INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES ( 2, 2, 6, 180, '3.3.90.40.12', 1 );

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (2, 2, 7, 150, '3.3.90.40.12', 1);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (2, 2, 8, 50, '3.3.90.40.12', 1);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (2, 2, 9, 30, '3.3.90.40.12', 1);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (2, 2, 10, 500, '3.3.90.40.12', 1);


-- DDO 3
INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES ( 3, 3, 11, 180, '3.3.90.40.12', 2 );

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (3, 3, 12, 150, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (3, 3, 13, 50, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (3, 3, 14, 30, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (3, 3, 15, 500, '3.3.90.40.12', 2);


-- DDO 4
INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES ( 4, 4, 16, 180, '3.3.90.40.12', 2 );

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (4, 4, 17, 150, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (4, 4, 18, 50, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (4, 4, 19, 30, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (4, 4, 20, 500, '3.3.90.40.12', 2);


-- DDO 5
INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (5, 5, 21, 180, '3.3.90.40.12', 2 );

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (5, 5, 22, 150, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (5, 5, 23, 50, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (5, 5, 24, 30, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (5, 5, 25, 500, '3.3.90.40.12', 2);

-- DDO 6
INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (6, 6, 26, 180, '3.3.90.40.12', 2 );

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (6, 6, 27, 150, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (6, 6, 28, 50, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (6, 6, 29, 30, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (6, 6, 30, 500, '3.3.90.40.12', 2);

-- DDO 7
INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (7, 7, 31, 180, '3.3.90.40.12', 2 );

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (7, 7, 32, 150, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (7, 7, 33, 50, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (7, 7, 34, 30, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (7, 7, 35, 500, '3.3.90.40.12', 2);

-- DDO 8
INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (8, 8, 36, 180, '3.3.90.40.12', 2 );

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (8, 8, 37, 150, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (8, 8, 38, 50, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (8, 8, 39, 30, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (8, 8, 40, 500, '3.3.90.40.12', 2);

-- DDO 9
INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (9, 9, 41, 180, '3.3.90.40.12', 2 );

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (9, 9, 42, 150, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (9, 9, 43, 50, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (9, 9, 44, 30, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (9, 9, 45, 500, '3.3.90.40.12', 2);

-- DDO 10
INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (10, 10, 46, 180, '3.3.90.40.12', 2 );

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (10, 10, 47, 150, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (10, 10, 48, 50, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (10, 10, 49, 30, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (10, 10, 50, 500, '3.3.90.40.12', 2);

-- DDO 11
INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (11, 11, 51, 180, '3.3.90.40.12', 2 );

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (11, 11, 52, 150, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (11, 11, 53, 50, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (11, 11, 54, 30, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (11, 11, 55, 500, '3.3.90.40.12', 2);

-- DDO 12
INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (12, 12, 56, 180, '3.3.90.40.12', 2 );

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (12, 12, 57, 150, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (12, 12, 58, 50, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (12, 12, 59, 30, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (12, 12, 60, 500, '3.3.90.40.12', 2);

-- DDO 13
INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (13, 5, 21, 180, '3.3.90.40.12', 2 );

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (13, 5, 22, 150, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (13, 5, 23, 50, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (13, 5, 24, 30, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (13, 5, 25, 500, '3.3.90.40.12', 2);

-- DDO 14
INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (14, 6, 26, 180, '3.3.90.40.12', 2 );

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (14, 6, 27, 150, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (14, 6, 28, 50, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (14, 6, 29, 30, '3.3.90.40.12', 2);

INSERT INTO public.ddo_item
  (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario)
VALUES (14, 6, 30, 500, '3.3.90.40.12', 2);


---------------------------------------
-- carga da tabela PAE_DESCENTRALIZACAO
---------------------------------------
INSERT INTO public.pae_descentralizacao (
    id_acao, num_processo, ord_descentralizacao, id_usuario
  )
VALUES (1, '500.250/2020-5', '1ª Descentralização', 1);

INSERT INTO public.pae_descentralizacao (
    id_acao, num_processo, ord_descentralizacao, id_usuario
  )
VALUES
  (2, '501.254/2020-4', '1ª Descentralização', 1);

INSERT INTO public.pae_descentralizacao (
    id_acao, num_processo, ord_descentralizacao, id_usuario
  )
VALUES
  (3, '502.255/2020-3', '1ª Descentralização', 2);

INSERT INTO public.pae_descentralizacao (
    id_acao, num_processo, ord_descentralizacao, id_usuario
  )
VALUES
  (3, '502.255/2020-3', '2ª Descentralização', 2);

INSERT INTO public.pae_descentralizacao (
    id_acao, num_processo, ord_descentralizacao, id_usuario
  )
VALUES
  (4, '503.256/2020-2', '1ª Descentralização', 3);

INSERT INTO public.pae_descentralizacao (
    id_acao, num_processo, ord_descentralizacao, id_usuario
  )
VALUES
  (5, '504.257/2020-1', '1ª Descentralização', 4);

INSERT INTO public.pae_descentralizacao (
    id_acao, num_processo, ord_descentralizacao, id_usuario
  )
VALUES
  (6, '505.260/2020-0', '1ª Descentralização', 3);

INSERT INTO public.pae_descentralizacao (
    id_acao, num_processo, ord_descentralizacao, id_usuario
  )
VALUES
  (6, '505.260/2020-0', '2ª Descentralização', 3);


----------------------------------------
-- carga da tabela DDO_DESCENTRALIZACAO
----------------------------------------
-- PAE-Descentralização 1
INSERT INTO
  public.ddo_descentralizacao (
    id_pae_descentralizacao,
    id_ddo,
    qtd_aprovada,
    vlr_aprovado,
    reuniao_cgtic,
    dt_aprov_cgtic,
    id_usuario
  )
VALUES (
    1,
    1,
    100,
    25000,
    '1ª Reunião do CGGTIC',
    CURRENT_DATE,
    1
  );

-- PAE-Descentralização 1
INSERT INTO
  public.ddo_descentralizacao (
    id_pae_descentralizacao,
    id_ddo,
    qtd_aprovada,
    vlr_aprovado,
    reuniao_cgtic,
    dt_aprov_cgtic,
    id_usuario
  )
VALUES (
    1,
    2,
    100,
    25000,
    '1ª Reunião do CGGTIC',
    CURRENT_DATE,
    1
  );

-- PAE-Descentralização 2
INSERT INTO
  public.ddo_descentralizacao (
    id_pae_descentralizacao,
    id_ddo,
    qtd_aprovada,
    vlr_aprovado,
    reuniao_cgtic,
    dt_aprov_cgtic,
    id_usuario
  )
VALUES (
    2,
    3,
    100,
    25000,
    '1ª Reunião do CGGTIC',
    CURRENT_DATE,
    2
  );

-- PAE-Descentralização 2
INSERT INTO
  public.ddo_descentralizacao (
    id_pae_descentralizacao,
    id_ddo,
    qtd_aprovada,
    vlr_aprovado,
    reuniao_cgtic,
    dt_aprov_cgtic,
    id_usuario
  )
VALUES (
    2,
    4,
    100,
    25000,
    '1ª Reunião do CGGTIC',
    CURRENT_DATE,
    2
  );

-- PAE-Descentralização 3A
INSERT INTO
  public.ddo_descentralizacao (
    id_pae_descentralizacao,
    id_ddo,
    qtd_aprovada,
    vlr_aprovado,
    reuniao_cgtic,
    dt_aprov_cgtic,
    id_usuario
  )
VALUES (
    3,
    5,
    100,
    25000,
    '1ª Reunião do CGGTIC',
    CURRENT_DATE,
    1
  );

-- PAE-Descentralização 3B
INSERT INTO
  public.ddo_descentralizacao (
    id_pae_descentralizacao,
    id_ddo,
    qtd_aprovada,
    vlr_aprovado,
    reuniao_cgtic,
    dt_aprov_cgtic,
    id_usuario
  )
VALUES (
    3,
    13,
    100,
    25000,
    '1ª Reunião do CGGTIC',
    CURRENT_DATE,
    1
  );

-- PAE-Descentralização 4A
INSERT INTO
  public.ddo_descentralizacao (
    id_pae_descentralizacao,
    id_ddo,
    qtd_aprovada,
    vlr_aprovado,
    reuniao_cgtic,
    dt_aprov_cgtic,
    id_usuario
  )
VALUES (
    4,
    6,
    100,
    25000,
    '2ª Reunião do CGGTIC',
    CURRENT_DATE,
    1
  );

-- PAE-Descentralização 4B
INSERT INTO
  public.ddo_descentralizacao (
    id_pae_descentralizacao,
    id_ddo,
    qtd_aprovada,
    vlr_aprovado,
    reuniao_cgtic,
    dt_aprov_cgtic,
    id_usuario
  )
VALUES (
    4,
    14,
    100,
    25000,
    '2ª Reunião do CGGTIC',
    CURRENT_DATE,
    1
  );


-- PAE-Descentralização 5
INSERT INTO
  public.ddo_descentralizacao (
    id_pae_descentralizacao,
    id_ddo,
    qtd_aprovada,
    vlr_aprovado,
    reuniao_cgtic,
    dt_aprov_cgtic,
    id_usuario
  )
VALUES (
    5,
    7,
    100,
    25000,
    '1ª Reunião do CGGTIC',
    CURRENT_DATE,
    1
  );

-- PAE-Descentralização 5
INSERT INTO
  public.ddo_descentralizacao (
    id_pae_descentralizacao,
    id_ddo,
    qtd_aprovada,
    vlr_aprovado,
    reuniao_cgtic,
    dt_aprov_cgtic,
    id_usuario
  )
VALUES (
    5,
    8,
    100,
    25000,
    '1ª Reunião do CGGTIC',
    CURRENT_DATE,
    1
  );

-- PAE-Descentralização 6
INSERT INTO
  public.ddo_descentralizacao (
    id_pae_descentralizacao,
    id_ddo,
    qtd_aprovada,
    vlr_aprovado,
    reuniao_cgtic,
    dt_aprov_cgtic,
    id_usuario
  )
VALUES (
    6,
    9,
    100,
    25000,
    '1ª Reunião do CGGTIC',
    CURRENT_DATE,
    1
  );

-- PAE-Descentralização 6
INSERT INTO
  public.ddo_descentralizacao (
    id_pae_descentralizacao,
    id_ddo,
    qtd_aprovada,
    vlr_aprovado,
    reuniao_cgtic,
    dt_aprov_cgtic,
    id_usuario
  )
VALUES (
    6,
    10,
    100,
    25000,
    '1ª Reunião do CGGTIC',
    CURRENT_DATE,
    1
  );

-- PAE-Descentralização 7
INSERT INTO
  public.ddo_descentralizacao (
    id_pae_descentralizacao,
    id_ddo,
    qtd_aprovada,
    vlr_aprovado,
    reuniao_cgtic,
    dt_aprov_cgtic,
    id_usuario
  )
VALUES (
    7,
    11,
    100,
    25000,
    '1ª Reunião do CGGTIC',
    CURRENT_DATE,
    1
  );

-- PAE-Descentralização 8
INSERT INTO
  public.ddo_descentralizacao (
    id_pae_descentralizacao,
    id_ddo,
    qtd_aprovada,
    vlr_aprovado,
    reuniao_cgtic,
    dt_aprov_cgtic,
    id_usuario
  )
VALUES (
    8,
    12,
    100,
    25000,
    '2ª Reunião do CGGTIC',
    CURRENT_DATE,
    1
  );


-------------------------------
-- carga da tabela NOTA_CREDITO
-------------------------------
INSERT INTO
  public.nota_credito (
    gnd, num_nota_credito, id_acao, id_ug, valor, dt_nota_credito, id_usuario
  )
VALUES
  (3, '2020NC000824', 1, 080001, 600, CURRENT_DATE, 1);

INSERT INTO
  public.nota_credito (
    gnd, num_nota_credito, id_acao, id_ug, valor, dt_nota_credito, id_usuario
  )
VALUES
  (3, '2020NC000830', 2, 080002, 500, CURRENT_DATE, 1);

INSERT INTO
  public.nota_credito (
    gnd, num_nota_credito, id_acao, id_ug, valor, dt_nota_credito, id_usuario
  )
VALUES
  (4, '2020NC000833', 3, 080003, 400, CURRENT_DATE, 2);

INSERT INTO
  public.nota_credito (
    gnd, num_nota_credito, id_acao, id_ug, valor, dt_nota_credito, id_usuario
  )
VALUES
  (3, '2020NC000841', 4, 080004, 300, CURRENT_DATE, 3);

INSERT INTO
  public.nota_credito (
    gnd, num_nota_credito, id_acao, id_ug, valor, dt_nota_credito, id_usuario
  )
VALUES
  (4, '2020NC000859', 5, 080005, 200, CURRENT_DATE, 4);

INSERT INTO
  public.nota_credito (
    gnd, num_nota_credito, id_acao, id_ug, valor, dt_nota_credito, id_usuario
  )
VALUES
  (4, '2020NC000775', 2, 080006, 350, CURRENT_DATE, 4);

INSERT INTO
  public.nota_credito (
    gnd, num_nota_credito, id_acao, id_ug, valor, dt_nota_credito, id_usuario
  )
VALUES
  (3, '2020NC000662', 3, 080007, 2000, CURRENT_DATE, 2);

INSERT INTO
  public.nota_credito (
    gnd, num_nota_credito, id_acao, id_ug, valor, dt_nota_credito, id_usuario
  )
VALUES
  (3, '2020NC000987', 1, 080007, 2300, CURRENT_DATE, 3);