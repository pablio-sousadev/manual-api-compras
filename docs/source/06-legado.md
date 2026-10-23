<div class="top-accessibility-bar" style="display: flex; justify-content: flex-end; align-items: center; gap: 8px; margin: 10px 0;">
  <span style="font-size: 14px; color: #555; font-weight: bold;">Tamanho do texto:</span>
  <button onclick="diminuirFonte()" title="Diminuir texto" style="padding: 6px 12px; font-weight: bold; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; background: #f8f9fa;">A-</button>
  <button onclick="resetarFonte()" title="Tamanho normal" style="padding: 6px 12px; font-weight: bold; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; background: #f8f9fa;">A</button>
  <button onclick="aumentarFonte()" title="Aumentar texto" style="padding: 6px 12px; font-weight: bold; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; background: #f8f9fa;">A+</button>
  
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 6px 16px; border: none; border-radius: 5px; font-size: 14px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2); margin-left: 10px;">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>

<p style="font-weight: bold; color: #d9534f; margin-top: -5px; margin-bottom: 20px;">PÚBLICO-ALVO: DESENVOLVEDORES E INTEGRADORES DE SISTEMAS</p>

# 6. Módulo Legado

Possibilita a obtenção de dados sobre as licitações realizadas pelo Governo Federal de acordo com a Lei 8.666/93 e legislação correlata.

## 6.1. consultarLicitacao

Serviço para obter dados e consultar o endpoint consultarLicitacao.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/1_consultarLicitacao`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/1_consultarLicitacao' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| uasg | integer | <span class="badge-opt">⚪ Não</span> | Código numérico de 6 dígitos da UASG responsável |
| numero_aviso | integer | <span class="badge-opt">⚪ Não</span> | Número do aviso da licitação ou contratação direta |
| modalidade | integer | <span class="badge-opt">⚪ Não</span> | Código da modalidade de licitação |
| data_publicacao_inicial | string | <span class="badge-req">🔴 Sim</span> | Data de início da publicação (formato: YYYY-MM-DD) |
| data_publicacao_final | string | <span class="badge-req">🔴 Sim</span> | Data final da publicação, limitado a 365 dias (formato: YYYY-MM-DD) |
| pertence14133 | boolean | <span class="badge-opt">⚪ Não</span> | Indica se pertence ao regime da Lei nº 14.133/2021. 0 – False; 1 – True |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| id_compra | Texto/Número | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| identificador | Texto/Número | Código identificador único do registro na consulta |
| numero_processo | Texto/Número | Número dos autos do processo administrativo da contratação |
| uasg | Texto/Número | Código numérico de 6 dígitos da UASG responsável |
| modalidade | Texto/Número | Código da modalidade de licitação |
| nome_modalidade | Texto/Número | Denominação da modalidade licitatória |
| numero_aviso | Texto/Número | Número do aviso da licitação ou contratação direta |
| situacao_aviso | Texto/Número | Situação de publicação do aviso de licitação |
| tipo_pregao | Texto/Número | Forma de realização do pregão no sistema legado |
| tipo_recurso | Texto/Número | Origem ou tipo de recurso orçamentário utilizado na contratação |
| nome_responsavel | Texto/Número | Nome do agente público responsável pela condução da licitação |
| funcao_responsavel | Texto/Número | Cargo ou função do agente público responsável pela condução da licitação |
| numero_itens | Texto/Número | Quantidade total de itens que compõem a licitação |
| valor_estimado_total | Texto/Número | Soma total dos valores estimados dos itens da contratação |
| valor_homologado_total | Texto/Número | Soma total dos valores homologados na contratação legada |
| informacoes_gerais | Texto/Número | Informações gerais sobre a sessão pública e condições da licitação |
| objeto | Texto/Número | Descrição do objeto da contratação, ata ou contrato |
| endereco_entrega_edital | Texto/Número | Endereço físico ou eletrônico para retirada do edital e entrega de documentação |
| codigo_municipio_uasg | Texto/Número | Código do município de localização da UASG responsável |
| data_abertura_proposta | Texto/Número | Data de abertura das propostas comerciais da licitação |
| data_entrega_edital | Texto/Número | Data a partir da qual o edital da licitação ficou disponível aos interessados |
| data_entrega_proposta | Texto/Número | Data limite para entrega das propostas pelos licitantes |
| data_publicacao | Texto/Número | Data de publicação do aviso de licitação no Diário Oficial da União |
| dt_alteracao | Texto/Número | Data da última alteração registrada no processo ou item |
| pertence14133 | Texto/Número | Indica se pertence ao regime da Lei nº 14.133/2021. 0 – False; 1 – True |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"id_compra": "string",
"identificador": "string",
"numero_processo": "string",
"uasg": 0,
"modalidade": 0,
"nome_modalidade": "string",
"numero_aviso": 0,
"situacao_aviso": "string",
"tipo_pregao": "string",
"tipo_recurso": "string",
"nome_responsavel": "string",
"funcao_responsavel": "string",
"numero_itens": 0,
"valor_estimado_total": 0,
"valor_homologado_total": 0,
"informacoes_gerais": "string",
"objeto": "string",
"endereco_entrega_edital": "string",
"codigo_municipio_uasg": 0,
"data_abertura_proposta": "2024-01-15",
"data_entrega_edital": "2024-01-15",
"data_entrega_proposta": "2024-01-15",
"data_publicacao": "2024-01-15",
"dt_alteracao": "2024-01-15T10:30:00",
"pertence14133": true
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

### 6.1.1. consultarLicitacao_Id

Serviço para obter dados e consultar o endpoint consultarLicitacao_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/1.1_consultarLicitacao_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/1.1_consultarLicitacao_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Data da última alteração registrada no processo ou item |

<a href="#">⬆️ Voltar ao topo</a>

## 6.2. consultarItemLicitacao

Serviço para obter dados e consultar o endpoint consultarItemLicitacao.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/2_consultarItemLicitacao`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/2_consultarItemLicitacao' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| uasg | integer | <span class="badge-opt">⚪ Não</span> | Código numérico de 6 dígitos da UASG responsável |
| numero_aviso | integer | <span class="badge-opt">⚪ Não</span> | Número do aviso da licitação ou contratação direta |
| modalidade | integer | <span class="badge-req">🔴 Sim</span> | Código da modalidade de licitação |
| decreto_7174 | boolean | <span class="badge-opt">⚪ Não</span> | Indica se há aplicação de margem de preferência para bens e serviços de informática (Decreto nº 7.174/2010) |
| codigo_item_material | integer | <span class="badge-opt">⚪ Não</span> | Código do item de material no catálogo CATMAT (legado) |
| codigo_item_servico | integer | <span class="badge-opt">⚪ Não</span> | Código do item de serviço no catálogo CATSER (legado) |
| cnpj_fornecedor | string | <span class="badge-opt">⚪ Não</span> | Número do CNPJ do fornecedor participante ou contratado |
| cpfVencedor | string | <span class="badge-opt">⚪ Não</span> | Número do CPF do licitante vencedor (quando pessoa física) |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| numero_licitacao | Texto/Número | Número identificador do certame licitatório |
| uasg | Texto/Número | Código numérico de 6 dígitos da UASG responsável |
| nome_uasg | Texto/Número | Nome por extenso da Unidade Administrativa de Serviços Gerais (UASG) |
| modalidade | Texto/Número | Código da modalidade de licitação |
| nome_modalidade | Texto/Número | Denominação da modalidade licitatória |
| numero_aviso | Texto/Número | Número do aviso da licitação ou contratação direta |
| numero_item_licitacao | Texto/Número | Número sequencial do item dentro da licitação |
| codigo_item_material | Texto/Número | Código do item de material no catálogo CATMAT (legado) |
| nome_material | Texto/Número | Descrição resumida do material licitado |
| codigo_item_servico | Texto/Número | Código do item de serviço no catálogo CATSER (legado) |
| nome_servico | Texto/Número | Descrição resumida do serviço licitado |
| cnpj_fornecedor | Texto/Número | Número do CNPJ do fornecedor participante ou contratado |
| nome_fornecedor | Texto/Número | Razão social ou nome do fornecedor participante |
| quantidade | Texto/Número | Quantidade adquirida |
| unidade | Texto/Número | Unidade de medida ou fornecimento do item |
| descricao_item | Texto/Número | Descrição do item de material ou serviço constante do processo licitatório |
| beneficio | Texto/Número | Descrição ou tipo de benefício concedido a ME/EPP no item da licitação |
| valor_estimado | Texto/Número | Valor estimado da licitação no sistema legado |
| decreto_7174 | Texto/Número | Indica se há aplicação de margem de preferência para bens e serviços de informática (Decreto nº 7.174/2010) |
| criterio_julgamento | Texto/Número | Critério de julgamento utilizado na avaliação das propostas da licitação |
| cpf_vencedor | Texto/Número | Número do CPF do fornecedor vencedor pessoa física no sistema legado |
| nome_vencedor_pf | Texto/Número | Nome civil do licitante pessoa física vencedor do certame |
| sustentavel | Texto/Número | Indica se o item possui critérios de sustentabilidade ambiental, social ou econômica |
| dt_alteracao | Texto/Número | Data da última alteração registrada no processo ou item |
| id_compra | Texto/Número | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| id_compra_item | Texto/Número | Identificador único do item específico dentro da compra no SIASG |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"numero_licitacao": "string",
"uasg": 0,
"nome_uasg": "string",
"modalidade": 0,
"nome_modalidade": "string",
"numero_aviso": 0,
"numero_item_licitacao": 0,
"codigo_item_material": 0,
"nome_material": "string",
"codigo_item_servico": 0,
"nome_servico": "string",
"cnpj_fornecedor": "string",
"nome_fornecedor": "string",
"quantidade": 0,
"unidade": "string",
"descricao_item": "string",
"beneficio": "string",
"valor_estimado": 0,
"decreto_7174": "string",
"criterio_julgamento": "string",
"cpf_vencedor": "string",
"nome_vencedor_pf": "string",
"sustentavel": 0,
"dt_alteracao": "2024-01-15T10:30:00",
"id_compra": "string",
"id_compra_item": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

### 6.2.1. consultarItemLicitacao_Id

Serviço para obter dados e consultar o endpoint consultarItemLicitacao_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/2.1_consultarItemLicitacao_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/2.1_consultarItemLicitacao_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| id_compra_item | string | <span class="badge-opt">⚪ Não</span> | Identificador único do item específico dentro da compra no SIASG |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Data da última alteração registrada no processo ou item |

<a href="#">⬆️ Voltar ao topo</a>

## 6.3. consultarPregoes

Serviço para obter dados e consultar o endpoint consultarPregoes.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/3_consultarPregoes`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/3_consultarPregoes' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| co_uasg | integer | <span class="badge-opt">⚪ Não</span> | Código identificador da Unidade Administrativa de Serviços Gerais (UASG) |
| co_orgao | integer | <span class="badge-opt">⚪ Não</span> | Código identificador do órgão na estrutura organizacional do SIASG |
| numero | integer | <span class="badge-opt">⚪ Não</span> | Número sequencial da licitação ou pregão no ano |
| ds_tipo_pregao_compra | string | <span class="badge-opt">⚪ Não</span> | Classificação do pregão quanto à forma de contratação (tradicional ou registro de preços) |
| dt_data_edital_inicial | string | <span class="badge-req">🔴 Sim</span> | Data inicial do período de disponibilização do edital para filtro |
| dt_data_edital_final | string | <span class="badge-req">🔴 Sim</span> | Data final do período de disponibilização do edital para filtro |
| pertence14133 | boolean | <span class="badge-opt">⚪ Não</span> | Indica se pertence ao regime da Lei nº 14.133/2021. 0 – False; 1 – True |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| id_compra | Texto/Número | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| co_processo | Texto/Número | Número do processo administrativo vinculado à contratação |
| co_portaria | Texto/Número | Número da portaria de designação da comissão ou pregoeiro |
| co_uasg | Texto/Número | Código identificador da Unidade Administrativa de Serviços Gerais (UASG) |
| no_ausg | Texto/Número | Nome da Unidade Administrativa de Serviços Gerais (UASG) responsável pelo certame |
| co_orgao | Texto/Número | Código identificador do órgão na estrutura organizacional do SIASG |
| no_orgao | Texto/Número | Nome oficial do órgão público contratante |
| numero | Texto/Número | Número sequencial da licitação ou pregão no ano |
| ds_situacao_pregao | Texto/Número | Descrição da situação operacional do pregão eletrônico |
| ds_tipo_pregao | Texto/Número | Descrição da forma de realização do pregão (eletrônico ou presencial) |
| ds_tipo_pregao_compra | Texto/Número | Classificação do pregão quanto à forma de contratação (tradicional ou registro de preços) |
| tx_objeto | Texto/Número | Texto descritivo do objeto do pregão ou processo de compra |
| valor_estimado_total | Texto/Número | Soma total dos valores estimados dos itens da contratação |
| valor_homologado_total | Texto/Número | Soma total dos valores homologados na contratação legada |
| dt_portaria | Texto/Número | Data de expedição da portaria de designação do pregoeiro e equipe de apoio |
| dt_data_edital | Texto/Número | Data de disponibilização do edital do pregão |
| dt_inicio_proposta | Texto/Número | Data e hora de início para envio de propostas no pregão |
| dt_fim_proposta | Texto/Número | Data e hora limite para acolhimento de propostas no pregão |
| dt_alteracao | Texto/Número | Data da última alteração registrada no processo ou item |
| dt_encerramento | Texto/Número | Data de encerramento da sessão pública do pregão |
| dt_resultado | Texto/Número | Data de divulgação do resultado final do julgamento |
| pertence14133 | Texto/Número | Indica se pertence ao regime da Lei nº 14.133/2021. 0 – False; 1 – True |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"id_compra": "string",
"co_processo": "string",
"co_portaria": "string",
"co_uasg": 0,
"no_ausg": "string",
"co_orgao": 0,
"no_orgao": "string",
"numero": 0,
"ds_situacao_pregao": "string",
"ds_tipo_pregao": "string",
"ds_tipo_pregao_compra": "string",
"tx_objeto": "string",
"valor_estimado_total": "string",
"valor_homologado_total": "string",
"dt_portaria": "2026-07-29T17:58:39.835Z",
"dt_data_edital": "2026-07-29T17:58:39.835Z",
"dt_inicio_proposta": "2026-07-29T17:58:39.835Z",
"dt_fim_proposta": "2026-07-29T17:58:39.835Z",
"dt_alteracao": "2026-07-29T17:58:39.835Z",
"dt_encerramento": "2026-07-29T17:58:39.835Z",
"dt_resultado": "2026-07-29T17:58:39.835Z",
"pertence14133": true
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

### 6.3.1. consultarPregoes_Id

Serviço para obter dados e consultar o endpoint consultarPregoes_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/3.1_consultarPregoes_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/3.1_consultarPregoes_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Data da última alteração registrada no processo ou item |

<a href="#">⬆️ Voltar ao topo</a>

## 6.4. consultarItensPregoes

Serviço para obter dados e consultar o endpoint consultarItensPregoes.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/4_consultarItensPregoes`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/4_consultarItensPregoes' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| co_uasg | integer | <span class="badge-opt">⚪ Não</span> | Código identificador da Unidade Administrativa de Serviços Gerais (UASG) |
| decreto_7174 | string | <span class="badge-opt">⚪ Não</span> | Indica se há aplicação de margem de preferência para bens e serviços de informática (Decreto nº 7.174/2010) |
| fornecedor_vencedor | string | <span class="badge-opt">⚪ Não</span> | Nome ou razão social do fornecedor declarado vencedor do item |
| dt_hom_inicial | string | <span class="badge-req">🔴 Sim</span> | Data inicial do período de homologação para filtro da consulta |
| dt_hom_final | string | <span class="badge-req">🔴 Sim</span> | Data final do período de homologação para filtro da consulta |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| id_compra | Texto/Número | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| id_compra_item | Texto/Número | Identificador único do item específico dentro da compra no SIASG |
| decreto_7174 | Texto/Número | Indica se há aplicação de margem de preferência para bens e serviços de informática (Decreto nº 7.174/2010) |
| situacao_item | Texto/Número | Situação final do item no certame (Homologado, Cancelado, Deserto etc.) |
| descricao_item | Texto/Número | Descrição do item de material ou serviço constante do processo licitatório |
| descricao_detalhada_item | Texto/Número | Especificação técnica complementar do item licitado |
| margem_preferencial | Texto/Número | Indicador de aplicação de margem de preferência no item do pregão legado |
| tratamento_diferenciado | Texto/Número | Indicador do tipo de tratamento diferenciado conferido a ME/EPP na licitação |
| quantidade_item | Texto/Número | Quantidade demandada do item na licitação |
| unidade_fornecimento | Texto/Número | Unidade física de fornecimento do material ou prestação do serviço |
| valor_estimado_item | Texto/Número | Valor total estimado para o item na licitação legada |
| menor_lance | Texto/Número | Valor do menor lance válido ofertado durante a fase competitiva do item |
| valor_negociado | Texto/Número | Valor final negociado com o fornecedor vencedor no pregão |
| valor_homologado_item | Texto/Número | Valor homologado para o item no certame legado |
| fornecedor_vencedor | Texto/Número | Nome ou razão social do fornecedor declarado vencedor do item |
| no_adjudic | Texto/Número | Nome da autoridade ou pregoeiro responsável pela adjudicação |
| no_hom | Texto/Número | Nome da autoridade competente responsável pela homologação do certame |
| dt_encerramento | Texto/Número | Data de encerramento da sessão pública do pregão |
| dt_adjudic | Texto/Número | Data de adjudicação do objeto ou item do pregão ao licitante vencedor |
| dt_hom | Texto/Número | Data de homologação do resultado do pregão pela autoridade competente |
| dt_alteracao | Texto/Número | Data da última alteração registrada no processo ou item |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"id_compra": "string",
"id_compra_item": "string",
"decreto_7174": "string",
"situacao_item": "string",
"descricao_item": "string",
"descricao_detalhada_item": "string",
"margem_preferencial": "string",
"tratamento_diferenciado": "string",
"quantidade_item": "string",
"unidade_fornecimento": "string",
"valor_estimado_item": "string",
"menor_lance": "string",
"valor_negociado": "string",
"valor_homologado_item": "string",
"fornecedor_vencedor": "string",
"no_adjudic": "string",
"no_hom": "string",
"dt_encerramento": "2026-07-06T19:53:33.156Z",
"dt_adjudic": "2026-07-06T19:53:33.156Z",
"dt_hom": "2026-07-06T19:53:33.156Z",
"dt_alteracao": "2026-07-06T19:53:33.156Z"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

### 6.4.1. consultarItensPregoes_Id

Serviço para obter dados e consultar o endpoint consultarItensPregoes_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/4.1_consultarItensPregoes_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/4.1_consultarItensPregoes_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| id_compra_item | string | <span class="badge-opt">⚪ Não</span> | Identificador único do item específico dentro da compra no SIASG |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Data da última alteração registrada no processo ou item |

<a href="#">⬆️ Voltar ao topo</a>

## 6.5. consultarComprasSemLicitacao

Serviço para obter dados e consultar o endpoint consultarComprasSemLicitacao.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/5_consultarComprasSemLicitacao`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/5_consultarComprasSemLicitacao' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| dt_ano_aviso | integer | <span class="badge-req">🔴 Sim</span> | Ano de publicação do aviso de contratação direta ou licitação |
| nu_aviso_licitacao | integer | <span class="badge-opt">⚪ Não</span> | Número identificador do aviso de licitação publicado |
| co_modalidade_licitacao | integer | <span class="badge-opt">⚪ Não</span> | Código numérico da modalidade de licitação no sistema legado |
| co_orgao | string | <span class="badge-opt">⚪ Não</span> | Código identificador do órgão na estrutura organizacional do SIASG |
| co_orgao_superior | string | <span class="badge-opt">⚪ Não</span> | Código identificador do órgão superior ao qual a entidade está vinculada |
| co_uasg | integer | <span class="badge-opt">⚪ Não</span> | Código identificador da Unidade Administrativa de Serviços Gerais (UASG) |
| dtDeclaracaoDispensaInicial | string | <span class="badge-opt">⚪ Não</span> | Data inicial do período de declaração de dispensa/inexigibilidade para filtro |
| dtDeclaracaoDispensaFinal | string | <span class="badge-opt">⚪ Não</span> | Data final do período de declaração de dispensa/inexigibilidade para filtro |
| dtRatificacao | string | <span class="badge-opt">⚪ Não</span> | Data de ratificação da dispensa ou inexigibilidade pela autoridade competente |
| dtPublicacao | string | <span class="badge-opt">⚪ Não</span> | Data de publicação do ato de contratação direta na imprensa oficial |
| pertence14133 | boolean | <span class="badge-opt">⚪ Não</span> | Indica se pertence ao regime da Lei nº 14.133/2021. 0 – False; 1 – True |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| id_compra | Texto/Número | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| co_orgao | Texto/Número | Código identificador do órgão na estrutura organizacional do SIASG |
| co_orgao_superior | Texto/Número | Código identificador do órgão superior ao qual a entidade está vinculada |
| co_uasg | Texto/Número | Código identificador da Unidade Administrativa de Serviços Gerais (UASG) |
| no_ausg | Texto/Número | Nome da Unidade Administrativa de Serviços Gerais (UASG) responsável pelo certame |
| co_modalidade_licitacao | Texto/Número | Código numérico da modalidade de licitação no sistema legado |
| ds_lei | Texto/Número | Norma legal de regência aplicável ao procedimento licitatório |
| nu_processo | Texto/Número | Número do processo administrativo no órgão de origem |
| qt_total_item | Texto/Número | Quantidade total de unidades previstas para o item na contratação |
| vr_estimado | Texto/Número | Valor financeiro estimado para a contratação direta ou pregão |
| nu_aviso_licitacao | Texto/Número | Número identificador do aviso de licitação publicado |
| ds_objeto_licitacao | Texto/Número | Descrição do objeto geral do certame licitatório |
| ds_fundamento_legal | Texto/Número | Descrição do fundamento legal que embasa a dispensa ou inexigibilidade de licitação |
| ds_justificativa | Texto/Número | Justificativa administrativa registrada para a contratação direta ou procedimento |
| no_responsavel_decl_disp | Texto/Número | Nome do servidor ou autoridade responsável pela declaração de dispensa/inexigibilidade |
| no_cargo_resp_decl_disp | Texto/Número | Cargo da autoridade responsável pela declaração de dispensa ou inexigibilidade |
| no_responsavel_ratificacao | Texto/Número | Nome da autoridade competente que ratificou a dispensa ou inexigibilidade |
| no_cargo_resp_ratificacao | Texto/Número | Cargo da autoridade superior responsável pela ratificação da contratação direta |
| dt_declaracao_dispensa | Texto/Número | Data da declaração formal da dispensa ou inexigibilidade de licitação |
| dt_ratificacao | Texto/Número | Data de ratificação do procedimento pela autoridade superior |
| dt_publicacao | Texto/Número | Data de publicação oficial do ato ou aviso no Diário Oficial |
| dt_ano_aviso | Texto/Número | Ano de publicação do aviso de contratação direta ou licitação |
| dt_alteracao | Texto/Número | Data da última alteração registrada no processo ou item |
| pertence14133 | Texto/Número | Indica se pertence ao regime da Lei nº 14.133/2021. 0 – False; 1 – True |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"id_compra": "string",
"co_orgao": "string",
"co_orgao_superior": "string",
"co_uasg": 0,
"no_ausg": "string",
"co_modalidade_licitacao": 0,
"ds_lei": "string",
"nu_processo": "string",
"qt_total_item": 0,
"vr_estimado": 0,
"nu_aviso_licitacao": 0,
"ds_objeto_licitacao": "string",
"ds_fundamento_legal": "string",
"ds_justificativa": "string",
"no_responsavel_decl_disp": "string",
"no_cargo_resp_decl_disp": "string",
"no_responsavel_ratificacao": "string",
"no_cargo_resp_ratificacao": "string",
"dt_declaracao_dispensa": "2024-01-15",
"dt_ratificacao": "2024-01-15",
"dt_publicacao": "2024-01-15",
"dt_ano_aviso": 1073741824,
"dt_alteracao": "2024-01-15",
"pertence14133": true
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

### 6.5.1. consultarCompraSemLicitacao_Id

Serviço para obter dados e consultar o endpoint consultarCompraSemLicitacao_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/5.1_consultarCompraSemLicitacao_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/5.1_consultarCompraSemLicitacao_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| idCompra | string | <span class="badge-req">🔴 Sim</span> | Código identificador único da compra |

<a href="#">⬆️ Voltar ao topo</a>

## 6.6. consultarCompraItensSemLicitacao

Serviço para obter dados e consultar o endpoint consultarCompraItensSemLicitacao.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/6_consultarCompraItensSemLicitacao`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/6_consultarCompraItensSemLicitacao' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| co_uasg | integer | <span class="badge-opt">⚪ Não</span> | Código identificador da Unidade Administrativa de Serviços Gerais (UASG) |
| co_orgao | string | <span class="badge-opt">⚪ Não</span> | Código identificador do órgão na estrutura organizacional do SIASG |
| dt_ano_aviso_licitacao | integer | <span class="badge-req">🔴 Sim</span> | Ano de referência do aviso de licitação no sistema legado |
| co_modalidade_licitacao | integer | <span class="badge-opt">⚪ Não</span> | Código numérico da modalidade de licitação no sistema legado |
| co_conjunto_materiais | integer | <span class="badge-opt">⚪ Não</span> | Código identificador do conjunto de materiais no catálogo legado |
| co_servico | integer | <span class="badge-opt">⚪ Não</span> | Código identificador do serviço no catálogo CATSER |
| nu_cpf_cnpj_fornecedor | string | <span class="badge-opt">⚪ Não</span> | Número do CPF ou CNPJ do fornecedor contratado na dispensa/inexigibilidade |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| co_conjunto_materiais | Texto/Número | Código identificador do conjunto de materiais no catálogo legado |
| co_servico | Texto/Número | Código identificador do serviço no catálogo CATSER |
| ds_detalhada | Texto/Número | Detalhamento das especificações do item no pregão ou contratação direta |
| in_tipo_fornecedor_vencedor | Texto/Número | Indicador da natureza do fornecedor vencedor (Pessoa Jurídica, Pessoa Física ou Estrangeiro) |
| no_fornecedor_vencedor | Texto/Número | Nome empresarial ou nome civil do fornecedor vencedor do item |
| no_conjunto_materiais | Texto/Número | Denominação do conjunto ou grupo de materiais no catálogo |
| no_marca_material | Texto/Número | Marca comercial do produto ofertado pelo licitante vencedor |
| no_servico | Texto/Número | Nome descritivo do serviço no catálogo CATSER |
| no_unidade_medida | Texto/Número | Unidade de medida de fornecimento adotada para o item |
| nu_cnpj_vencedor | Texto/Número | Número de inscrição no CNPJ da empresa vencedora do item |
| nu_cpf_vencedor | Texto/Número | Número do CPF da pessoa física vencedora do item |
| qt_material_alt | Texto/Número | Quantidade solicitada na unidade de fornecimento alternativa do material |
| vr_estimado | Texto/Número | Valor financeiro estimado para a contratação direta ou pregão |
| in_material_servico | Texto/Número | Indicador da natureza do item licitado (M para Material ou S para Serviço) |
| dt_publicacao | Texto/Número | Data de publicação oficial do ato ou aviso no Diário Oficial |
| id_compra | Texto/Número | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| id_compra_item | Texto/Número | Identificador único do item específico dentro da compra no SIASG |
| co_uasg | Texto/Número | Código identificador da Unidade Administrativa de Serviços Gerais (UASG) |
| co_modalidade_licitacao | Texto/Número | Código numérico da modalidade de licitação no sistema legado |
| no_modalidade_licitacao | Texto/Número | Denominação da modalidade de licitação no sistema legado |
| nu_aviso_licitacao | Texto/Número | Número identificador do aviso de licitação publicado |
| dt_ano_aviso_licitacao | Texto/Número | Ano de referência do aviso de licitação no sistema legado |
| nu_inciso | Texto/Número | Número do inciso legal que fundamenta a dispensa ou inexigibilidade |
| nu_processo | Texto/Número | Número do processo administrativo no órgão de origem |
| qt_total_item | Texto/Número | Quantidade total de unidades previstas para o item na contratação |
| ds_objeto_licitacao | Texto/Número | Descrição do objeto geral do certame licitatório |
| ds_fundamento_legal | Texto/Número | Descrição do fundamento legal que embasa a dispensa ou inexigibilidade de licitação |
| ds_justificativa | Texto/Número | Justificativa administrativa registrada para a contratação direta ou procedimento |
| nu_cpf_resp_decl_disp | Texto/Número | CPF ou matrícula do responsável pela declaração de dispensa/inexigibilidade |
| nu_cpf_resp_ratificacao | Texto/Número | CPF ou matrícula da autoridade responsável pela ratificação |
| nu_cpf_resp_publicacao | Texto/Número | CPF ou matrícula do servidor responsável pelo envio para publicação |
| no_responsavel_decl_disp | Texto/Número | Nome do servidor ou autoridade responsável pela declaração de dispensa/inexigibilidade |
| no_cargo_resp_decl_disp | Texto/Número | Cargo da autoridade responsável pela declaração de dispensa ou inexigibilidade |
| no_responsavel_ratificacao | Texto/Número | Nome da autoridade competente que ratificou a dispensa ou inexigibilidade |
| no_cargo_resp_ratificacao | Texto/Número | Cargo da autoridade superior responsável pela ratificação da contratação direta |
| nu_item_material | Texto/Número | Número sequencial do item dentro do processo de compra |
| vr_estimado_item | Texto/Número | Valor estimado correspondente ao item específico da contratação |
| ds_fabricante | Texto/Número | Nome ou identificação do fabricante do material ofertado |
| dt_alteracao | Texto/Número | Data da última alteração registrada no processo ou item |
| co_orgao | Texto/Número | Código identificador do órgão na estrutura organizacional do SIASG |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"co_conjunto_materiais": 0,
"co_servico": 0,
"ds_detalhada": "string",
"in_tipo_fornecedor_vencedor": "string",
"no_fornecedor_vencedor": "string",
"no_conjunto_materiais": "string",
"no_marca_material": "string",
"no_servico": "string",
"no_unidade_medida": "string",
"nu_cnpj_vencedor": "string",
"nu_cpf_vencedor": "string",
"qt_material_alt": 0,
"vr_estimado": 0,
"in_material_servico": "string",
"dt_publicacao": "2026-07-30",
"id_compra": "string",
"id_compra_item": "string",
"co_uasg": 0,
"co_modalidade_licitacao": 0,
"no_modalidade_licitacao": "string",
"nu_aviso_licitacao": 0,
"dt_ano_aviso_licitacao": 0,
"nu_inciso": "string",
"nu_processo": "string",
"qt_total_item": 0,
"ds_objeto_licitacao": "string",
"ds_fundamento_legal": "string",
"ds_justificativa": "string",
"nu_cpf_resp_decl_disp": "string",
"nu_cpf_resp_ratificacao": "string",
"nu_cpf_resp_publicacao": "string",
"no_responsavel_decl_disp": "string",
"no_cargo_resp_decl_disp": "string",
"no_responsavel_ratificacao": "string",
"no_cargo_resp_ratificacao": "string",
"nu_item_material": 0,
"vr_estimado_item": 0,
"ds_fabricante": "string",
"dt_alteracao": "2024-01-15T10:30:00",
"co_orgao": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

### 6.6.1. consultarItensComprasSemLicitacao_Id

Serviço para obter dados e consultar o endpoint consultarItensComprasSemLicitacao_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/6.1_consultarItensComprasSemLicitacao_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/6.1_consultarItensComprasSemLicitacao_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| id_compra_item | string | <span class="badge-opt">⚪ Não</span> | Identificador único do item específico dentro da compra no SIASG |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Data da última alteração registrada no processo ou item |

<a href="#">⬆️ Voltar ao topo</a>

## 6.7. consultarRdc

Serviço para obter dados e consultar o endpoint consultarRdc.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/7_consultarRdc`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/7_consultarRdc' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| data_publicacao_min | string | <span class="badge-req">🔴 Sim</span> | Data inicial do período de publicação para filtro da consulta |
| data_publicacao_max | string | <span class="badge-req">🔴 Sim</span> | Data final do período de publicação para filtro da consulta |
| endereco_entrega_edital | string | <span class="badge-opt">⚪ Não</span> | Endereço físico ou eletrônico para retirada do edital e entrega de documentação |
| forma_de_realizacao | string | <span class="badge-opt">⚪ Não</span> | Forma de condução da licitação (presencial ou eletrônica) |
| funcao_responsavel | string | <span class="badge-opt">⚪ Não</span> | Cargo ou função do agente público responsável pela condução da licitação |
| modalidade | integer | <span class="badge-opt">⚪ Não</span> | Código da modalidade de licitação |
| nome_responsavel | string | <span class="badge-opt">⚪ Não</span> | Nome do agente público responsável pela condução da licitação |
| numero_aviso | integer | <span class="badge-opt">⚪ Não</span> | Número do aviso da licitação ou contratação direta |
| objeto | string | <span class="badge-opt">⚪ Não</span> | Descrição do objeto da contratação, ata ou contrato |
| orgao | integer | <span class="badge-opt">⚪ Não</span> | CNPJ do órgão (sem máscara) |
| situacao_aviso | string | <span class="badge-opt">⚪ Não</span> | Situação de publicação do aviso de licitação |
| uasg | integer | <span class="badge-opt">⚪ Não</span> | Código numérico de 6 dígitos da UASG responsável |
| uf_uasg | string | <span class="badge-opt">⚪ Não</span> | Sigla da Unidade da Federação (UF) de localização da UASG |
| valor_estimado_total_max | number | <span class="badge-opt">⚪ Não</span> | Limite máximo do valor total estimado para filtro |
| valor_estimado_total_min | number | <span class="badge-opt">⚪ Não</span> | Limite mínimo do valor total estimado para filtro |
| valor_homologado_total_max | number | <span class="badge-opt">⚪ Não</span> | Limite máximo do valor total homologado para filtro |
| valor_homologado_total_min | number | <span class="badge-opt">⚪ Não</span> | Limite mínimo do valor total homologado para filtro |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| data_abertura_proposta | Texto/Número | Data de abertura das propostas comerciais da licitação |
| data_entrega_edital | Texto/Número | Data a partir da qual o edital da licitação ficou disponível aos interessados |
| data_entrega_proposta | Texto/Número | Data limite para entrega das propostas pelos licitantes |
| data_publicacao | Texto/Número | Data de publicação do aviso de licitação no Diário Oficial da União |
| endereco_entrega_edital | Texto/Número | Endereço físico ou eletrônico para retirada do edital e entrega de documentação |
| forma_de_realizacao_licitacao | Texto/Número | Modalidade operacional de realização do certame (eletrônico ou presencial) |
| funcao_responsavel | Texto/Número | Cargo ou função do agente público responsável pela condução da licitação |
| identificador | Texto/Número | Código identificador único do registro na consulta |
| informacoes_gerais | Texto/Número | Informações gerais sobre a sessão pública e condições da licitação |
| modalidade | Texto/Número | Código da modalidade de licitação |
| nome_responsavel | Texto/Número | Nome do agente público responsável pela condução da licitação |
| numero_aviso | Texto/Número | Número do aviso da licitação ou contratação direta |
| numero_itens | Texto/Número | Quantidade total de itens que compõem a licitação |
| numero_processo | Texto/Número | Número dos autos do processo administrativo da contratação |
| objeto | Texto/Número | Descrição do objeto da contratação, ata ou contrato |
| situacao_aviso | Texto/Número | Situação de publicação do aviso de licitação |
| tipo_recurso | Texto/Número | Origem ou tipo de recurso orçamentário utilizado na contratação |
| uasg | Texto/Número | Código numérico de 6 dígitos da UASG responsável |
| orgao_uasg | Texto/Número | Código do órgão ao qual a UASG está subordinada |
| uf_uasg | Texto/Número | Sigla da Unidade da Federação (UF) de localização da UASG |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"data_abertura_proposta": "2024-01-15",
"data_entrega_edital": "2024-01-15",
"data_entrega_proposta": "2024-01-15",
"data_publicacao": "2024-01-15",
"endereco_entrega_edital": "string",
"forma_de_realizacao_licitacao": "string",
"funcao_responsavel": "string",
"identificador": "string",
"informacoes_gerais": "string",
"modalidade": 0,
"nome_responsavel": "0",
"numero_aviso": 0,
"numero_itens": 0,
"numero_processo": "string",
"objeto": "string",
"situacao_aviso": "string",
"tipo_recurso": "string",
"uasg": 0,
"orgao_uasg": 0,
"uf_uasg": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>
