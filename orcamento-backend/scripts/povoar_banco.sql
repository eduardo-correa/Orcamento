-- Carga da tabela PERFIL
INSERT INTO perfil (nome, descricao) VALUES ('Administrador', 'Perfil avançado, possui todas as permissões no sistema.');
INSERT INTO perfil (nome, descricao) VALUES ('Servidor', 'Perfil intermediário, não insere novos usuários ao sistema');
INSERT INTO perfil (nome, descricao) VALUES ('Estagiário', 'Perfil básico, apenas com permissão de consulta');


-- carga da tabela UNIDADE_GESTORA
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080001, 'TST', 'Tribunal Superior do Trabalho', 'DF');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080017, 'CSJT', 'Conselho Superior da Justiça do Trabalho', 'DF');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080009, 'TRT01', 'Tribunal Regional do Trabalho da 1ª Região', 'RJ');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080010, 'TRT02', 'Tribunal Regional do Trabalho da 2ª Região', 'SP');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080008, 'TRT03', 'Tribunal Regional do Trabalho da 3ª Região', 'MG');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080014, 'TRT04', 'Tribunal Regional do Trabalho da 4ª Região', 'RS');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080007, 'TRT05', 'Tribunal Regional do Trabalho da 5ª Região', 'BA');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080006, 'TRT06', 'Tribunal Regional do Trabalho da 6ª Região', 'PE');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080004, 'TRT07', 'Tribunal Regional do Trabalho da 7ª Região', 'CE');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080003, 'TRT08', 'Tribunal Regional do Trabalho da 8ª Região', 'PA');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080012, 'TRT09', 'Tribunal Regional do Trabalho da 9ª Região', 'PR');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080016, 'TRT10', 'Tribunal Regional do Trabalho da 10ª Região', 'DF');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080002, 'TRT11', 'Tribunal Regional do Trabalho da 11ª Região', 'AM');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080013, 'TRT12', 'Tribunal Regional do Trabalho da 12ª Região', 'SC');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080005, 'TRT13', 'Tribunal Regional do Trabalho da 13ª Região', 'PB');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080015, 'TRT14', 'Tribunal Regional do Trabalho da 14ª Região', 'AC');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080011, 'TRT15', 'Tribunal Regional do Trabalho da 15ª Região', 'SP');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080018, 'TRT16', 'Tribunal Regional do Trabalho da 16ª Região', 'MA');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080019, 'TRT17', 'Tribunal Regional do Trabalho da 17ª Região', 'ES');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080020, 'TRT18', 'Tribunal Regional do Trabalho da 18ª Região', 'GO');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080022, 'TRT19', 'Tribunal Regional do Trabalho da 19ª Região', 'AL');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080023, 'TRT20', 'Tribunal Regional do Trabalho da 20ª Região', 'SE');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080021, 'TRT21', 'Tribunal Regional do Trabalho da 21ª Região', 'RN');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080024, 'TRT22', 'Tribunal Regional do Trabalho da 22ª Região', 'PI');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080025, 'TRT23', 'Tribunal Regional do Trabalho da 23ª Região', 'MG');
insert into unidade_gestora (id_ug, cod_ug, nome, uf) VALUES (080026, 'TRT24', 'Tribunal Regional do Trabalho da 24ª Região', 'MS');


-- carga da tabela USUARIO
INSERT INTO public.usuario (id_perfil, mat_usuario, nome, email, senha, ativo) VALUES (1, '49075', 'Eduardo Corrêa', 'eduardo.correa@tst.jus.br', 'senha', true);
INSERT INTO public.usuario (id_perfil, mat_usuario, nome, email, senha, ativo) VALUES (1, '50048', 'Hugo Machado', 'hugo.machado@tst.jus.br', 'senha', true);
INSERT INTO public.usuario (id_perfil, mat_usuario, nome, email, senha, ativo) VALUES (2, '51021', 'Mariana Bernardes', 'mariana.bernardes@tst.jus.br', 'senha', true);
INSERT INTO public.usuario (id_perfil, mat_usuario, nome, email, senha, ativo) VALUES (2, '48765', 'Daniel Sá', 'daniel.sa@tst.jus.br', 'senha', true);
INSERT INTO public.usuario (id_perfil, mat_usuario, nome, email, senha, ativo) VALUES (3, '35190', 'Paola Cristina', 'paola.cristina@tst.jus.br', 'senha', true);


-- carga da tabela ACAO
INSERT INTO public.acao (nome, descricao, id_usuario) VALUES('Microcomputadores', 'Aquisição de microcomputadores', 1);
INSERT INTO public.acao (nome, descricao, id_usuario) VALUES('Monitor', 'Aquisição de monitores', 1);
INSERT INTO public.acao (nome, descricao, id_usuario) VALUES('Sala Cofre', 'Manutenção de sala cofre nos regionais', 2);
INSERT INTO public.acao (nome, descricao, id_usuario) VALUES('Solução de Backup', 'Aquisição de itens para backup das informações da JT', 2);
INSERT INTO public.acao (nome, descricao, id_usuario) VALUES('Rede JT', 'Manutenção da rede de dados da JT', 3);
INSERT INTO public.acao (nome, descricao, id_usuario) VALUES('Servidor de Aplicação', 'Aquisição de licenças do JBOSS', 4);


-- carga da tabela LICITACAO
INSERT INTO public.licitacao (id_acao, id_ug, num_licitacao, ano_licitacao, descricao, modalidade, id_usuario) VALUES (1, 080002, '04', 2020, 'Licitação para aquisição de microcomputadores', 'ARP', 1);
INSERT INTO public.licitacao (id_acao, id_ug, num_licitacao, ano_licitacao, descricao, modalidade, id_usuario) VALUES (2, 080003, '07', 2020, 'Licitação para aquisição de monitores', 'ARP', 1);
INSERT INTO public.licitacao (id_acao, id_ug, num_licitacao, ano_licitacao, descricao, modalidade, id_usuario) VALUES (3, 080004, '08', 2020, 'Licitação para manutenção de sala cofre', 'Contrato', 2);
INSERT INTO public.licitacao (id_acao, id_ug, num_licitacao, ano_licitacao, descricao, modalidade, id_usuario) VALUES (4, 080005, '10', 2020, 'Licitação para solução de backup', 'Concurso', 2);
INSERT INTO public.licitacao (id_acao, id_ug, num_licitacao, ano_licitacao, descricao, modalidade, id_usuario) VALUES (5, 080006, '12', 2020, 'Licitação para manutenção da rede de dados da JT', 'Convite', 3);
INSERT INTO public.licitacao (id_acao, id_ug, num_licitacao, ano_licitacao, descricao, modalidade, id_usuario) VALUES (6, 080007, '17', 2020, 'Licitação para aquisição de licenças do JBOSS', 'PE', 4);


-- carga da tabela LICITACAO_ITEM
-- LICITACAO 1
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (1, 'Microcomputador DELL', 1, 3500, 1);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (1, 'Microcomputador Lenovo', 2, 2200, 1);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (1, 'Microcomputador Samsung', 3, 2500, 1);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (1, 'Microcomputador Itautec', 4, 2000, 1);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (1, 'Microcomputador Positivo', 5, 1500, 1);
-- LICITACAO 2
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (2, 'Monitor LG', 1, 750.50, 1);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (2, 'Monitor Dell', 2, 745.80, 1);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (2, 'Monitor Samsung', 3, 780.00, 1);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (2, 'Monitor Itautec', 4, 680.75, 1);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (2, 'Monitor Positivo', 5, 630.25, 1);
-- LICITACAO 3
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (3, 'Extintor de Incêndio Químico', 1, 189.67, 2);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (3, 'Extintor de Incêndio em Pó', 2, 137.50, 2);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (3, 'Central de Ar-condicionado', 3, 5500.00, 2);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (3, 'Portas corta-fogo', 4, 278.80, 2);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (3, 'Alarme de incêndio', 5, 84.32, 2);
-- LICITACAO 4
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (4, 'Fita de backup', 1, 35.50, 2);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (4, 'Armazenamento tipo SSD', 2, 180.50, 2);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (4, 'Armazenamento tipo HDD', 3, 130.00, 2);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (4, 'Software de Gerenciamento', 4, 49.99, 2);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (4, 'Robô de backup', 5, 3578.65, 2);
-- LICITACAO 5
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (5, 'Switch camada 3', 1, 1600, 3);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (5, 'Switch camada 5', 2, 1900, 3);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (5, 'Roteador', 3, 2600, 3);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (5, 'Serviço de Cabeamento', 4, 60, 3);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (5, 'Firewall', 5, 3500, 3);
-- LICITACAO 6
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (6, 'Licenças de REDHAT', 1, 6500, 4);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (6, 'Licenças de JBOSS', 2, 7500, 4);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (6, 'Treinamento REDHAT', 3, 1500, 4);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (6, 'Treinamento JBOSS', 4, 1500, 4);
INSERT INTO public.licitacao_item (id_licitacao, nome_licitacao_item, num_licitacao_item, valor, id_usuario) VALUES (6, 'Instalação', 5, 75, 4);



-- carga da tabela DDO
INSERT INTO public.ddo
(id_ug, id_acao, novo, recurso_proprio, vlr_demandado, aprc_cgtic_local, possui_dod, compr_liquidacao, cronograma, ass_presidente, po_local, id_usuario)
VALUES (080002, 1, true, 5000, 35000, true, true, true, true, true, true, 1);
INSERT INTO public.ddo
(id_ug, id_acao, novo, recurso_proprio, vlr_demandado, aprc_cgtic_local, possui_dod, compr_liquidacao, cronograma, ass_presidente, po_local, id_usuario)
VALUES (080003, 2, true, 0, 15000, true, true, true, true, true, true, 1);
INSERT INTO public.ddo
(id_ug, id_acao, novo, recurso_proprio, vlr_demandado, aprc_cgtic_local, possui_dod, compr_liquidacao, cronograma, ass_presidente, po_local, id_usuario)
VALUES (080004, 3, true, 0, 5000, true, true, true, true, true, true, 2);
INSERT INTO public.ddo
(id_ug, id_acao, novo, recurso_proprio, vlr_demandado, aprc_cgtic_local, possui_dod, compr_liquidacao, cronograma, ass_presidente, po_local, id_usuario)
VALUES (080005, 4, false, 0, 2500, true, true, true, true, true, true, 3);
INSERT INTO public.ddo
(id_ug, id_acao, novo, recurso_proprio, vlr_demandado, aprc_cgtic_local, possui_dod, compr_liquidacao, cronograma, ass_presidente, po_local, id_usuario)
VALUES (080006, 5, false, 1500, 8350, true, true, true, true, false, true, 4);


-- carga da tabela DDO_ITEM
-- DDO 1
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (1, 1, 1, 180, '3.3.90.40.12', 1);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (1, 1, 2, 150, '3.3.90.40.12', 1);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (1, 1, 3, 50, '3.3.90.40.12', 1);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (1, 1, 4, 30, '3.3.90.40.12', 1);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (1, 1, 5, 500, '3.3.90.40.12', 1);
-- DDO 2
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (2, 2, 6, 180, '3.3.90.40.12', 1);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (2, 2, 7, 150, '3.3.90.40.12', 1);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (2, 2, 8, 50, '3.3.90.40.12', 1);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (2, 2, 9, 30, '3.3.90.40.12', 1);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (2, 2, 10, 500, '3.3.90.40.12', 1);
-- DDO 3
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (3, 3, 11, 180, '3.3.90.40.12', 2);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (3, 3, 12, 150, '3.3.90.40.12', 2);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (3, 3, 13, 50, '3.3.90.40.12', 2);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (3, 3, 14, 30, '3.3.90.40.12', 2);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (3, 3, 15, 500, '3.3.90.40.12', 2);
-- DDO 4
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (4, 4, 16, 180, '3.3.90.40.12', 3);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (4, 4, 17, 150, '3.3.90.40.12', 3);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (4, 4, 18, 50, '3.3.90.40.12', 3);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (4, 4, 19, 30, '3.3.90.40.12', 3);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (4, 4, 20, 500, '3.3.90.40.12', 3);
-- DDO 5
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (5, 5, 21, 180, '3.3.90.40.12', 4);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (5, 5, 22, 150, '3.3.90.40.12', 4);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (5, 5, 23, 50, '3.3.90.40.12', 4);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (5, 5, 24, 30, '3.3.90.40.12', 4);
INSERT INTO public.ddo_item (id_ddo, id_licitacao, id_licitacao_item, qtd_demandada, elemento_despesa, id_usuario) VALUES (5, 5, 25, 500, '3.3.90.40.12', 4);


-- carga da tabela DESCENTRALIZACAO
INSERT INTO public.descentralizacao (id_ddo, vlr_total_aprovado, num_processo, ord_descentralizacao, id_usuario)
VALUES (1, 30000, '500.250/2020-5', 1, 1);
INSERT INTO public.descentralizacao (id_ddo, vlr_total_aprovado, num_processo, ord_descentralizacao, id_usuario)
VALUES (2, 15000, '501.254/2020-4', 1, 1);
INSERT INTO public.descentralizacao (id_ddo, vlr_total_aprovado, num_processo, ord_descentralizacao, id_usuario)
VALUES (3, 5000, '502.255/2020-3', 1, 2);
INSERT INTO public.descentralizacao (id_ddo, vlr_total_aprovado, num_processo, ord_descentralizacao, id_usuario)
VALUES (4, 2000, '503.256/2020-2', 1, 3);
INSERT INTO public.descentralizacao (id_ddo, vlr_total_aprovado, num_processo, ord_descentralizacao, id_usuario)
VALUES (5, 7500, '504.257/2020-1', 1, 4);


-- carga da tabela UG_DESCENTRALIZACAO
INSERT INTO public.ug_descentralizacao (id_ug, id_descentralizacao, id_ddo, qtd_aprovada, vlr_aprovado, dt_descentralizacao, id_usuario)
VALUES (080001, 1, 1, 100, 25000, CURRENT_DATE, 1);
INSERT INTO public.ug_descentralizacao (id_ug, id_descentralizacao, id_ddo, qtd_aprovada, vlr_aprovado, dt_descentralizacao, id_usuario)
VALUES (080017, 2, 2, 200, 14000, CURRENT_DATE, 1);
INSERT INTO public.ug_descentralizacao (id_ug, id_descentralizacao, id_ddo, qtd_aprovada, vlr_aprovado, dt_descentralizacao, id_usuario)
VALUES (080009, 3, 3, 300, 5000, CURRENT_DATE, 2);
INSERT INTO public.ug_descentralizacao (id_ug, id_descentralizacao, id_ddo, qtd_aprovada, vlr_aprovado, dt_descentralizacao, id_usuario)
VALUES (080010, 4, 4, 400, 2000, CURRENT_DATE, 3);
INSERT INTO public.ug_descentralizacao (id_ug, id_descentralizacao, id_ddo, qtd_aprovada, vlr_aprovado, dt_descentralizacao, id_usuario)
VALUES (080008, 5, 5, 500, 7000, CURRENT_DATE, 4);



-- carga da tabela NOTA_CREDITO
INSERT INTO public.nota_credito (num_nota_credito, id_descentralizacao, valor, dt_nota_credito, ug_favorecida, id_usuario)
VALUES ('2020NC000824', 1, 600, CURRENT_DATE, 080002, 1);
INSERT INTO public.nota_credito (num_nota_credito, id_descentralizacao, valor, dt_nota_credito, ug_favorecida, id_usuario)
VALUES ('2020NC000830', 2, 500, CURRENT_DATE, 080003, 1);
INSERT INTO public.nota_credito (num_nota_credito, id_descentralizacao, valor, dt_nota_credito, ug_favorecida, id_usuario)
VALUES ('2020NC000833', 3, 400, CURRENT_DATE, 080004, 2);
INSERT INTO public.nota_credito (num_nota_credito, id_descentralizacao, valor, dt_nota_credito, ug_favorecida, id_usuario)
VALUES ('2020NC000841', 4, 300, CURRENT_DATE, 080005, 3);
INSERT INTO public.nota_credito (num_nota_credito, id_descentralizacao, valor, dt_nota_credito, ug_favorecida, id_usuario)
VALUES ('2020NC000859', 5, 200, CURRENT_DATE, 080006, 4);

