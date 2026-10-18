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
| uasg | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Uasg |
| numero_aviso | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Numero aviso |
| modalidade | integer | <span class="badge-opt">⚪ Não</span> | Código da modalidade de licitação |
| data_publicacao_inicial | string | <span class="badge-req">🔴 Sim</span> | Data de início da publicação (formato: YYYY-MM-DD) |
| data_publicacao_final | string | <span class="badge-req">🔴 Sim</span> | Data final da publicação, limitado a 365 dias (formato: YYYY-MM-DD) |
| pertence14133 | boolean | <span class="badge-opt">⚪ Não</span> | Indica se pertence ao regime da Lei nº 14.133/2021. 0 – False; 1 – True |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| id_compra | Texto/Número | Valor do campo Id compra |
| identificador | Texto/Número | Valor do campo Identificador |
| numero_processo | Texto/Número | Valor do campo Numero processo |
| uasg | Texto/Número | Valor do campo Uasg |
| modalidade | Texto/Número | Código da modalidade de licitação |
| nome_modalidade | Texto/Número | Valor do campo Nome modalidade |
| numero_aviso | Texto/Número | Valor do campo Numero aviso |
| situacao_aviso | Texto/Número | Valor do campo Situacao aviso |
| tipo_pregao | Texto/Número | Valor do campo Tipo pregao |
| tipo_recurso | Texto/Número | Valor do campo Tipo recurso |
| nome_responsavel | Texto/Número | Valor do campo Nome responsavel |
| funcao_responsavel | Texto/Número | Valor do campo Funcao responsavel |
| numero_itens | Texto/Número | Valor do campo Numero itens |
| valor_estimado_total | Texto/Número | Valor do campo Valor estimado total |
| valor_homologado_total | Texto/Número | Valor do campo Valor homologado total |
| informacoes_gerais | Texto/Número | Valor do campo Informacoes gerais |
| objeto | Texto/Número | Valor do campo Objeto |
| endereco_entrega_edital | Texto/Número | Valor do campo Endereco entrega edital |
| codigo_municipio_uasg | Texto/Número | Código do registro associado |
| data_abertura_proposta | Texto/Número | Data correspondente ao registro |
| data_entrega_edital | Texto/Número | Data correspondente ao registro |
| data_entrega_proposta | Texto/Número | Data correspondente ao registro |
| data_publicacao | Texto/Número | Data correspondente ao registro |
| dt_alteracao | Texto/Número | Valor do campo Dt alteracao |
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
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Id compra |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Dt alteracao |

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
| uasg | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Uasg |
| numero_aviso | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Numero aviso |
| modalidade | integer | <span class="badge-req">🔴 Sim</span> | Código da modalidade de licitação |
| decreto_7174 | boolean | <span class="badge-opt">⚪ Não</span> | Valor do campo Decreto 7174 |
| codigo_item_material | integer | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| codigo_item_servico | integer | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| cnpj_fornecedor | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Cnpj fornecedor |
| cpfVencedor | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Cpf vencedor |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| numero_licitacao | Texto/Número | Valor do campo Numero licitacao |
| uasg | Texto/Número | Valor do campo Uasg |
| nome_uasg | Texto/Número | Valor do campo Nome uasg |
| modalidade | Texto/Número | Código da modalidade de licitação |
| nome_modalidade | Texto/Número | Valor do campo Nome modalidade |
| numero_aviso | Texto/Número | Valor do campo Numero aviso |
| numero_item_licitacao | Texto/Número | Valor do campo Numero item licitacao |
| codigo_item_material | Texto/Número | Código do registro associado |
| nome_material | Texto/Número | Valor do campo Nome material |
| codigo_item_servico | Texto/Número | Código do registro associado |
| nome_servico | Texto/Número | Valor do campo Nome servico |
| cnpj_fornecedor | Texto/Número | Valor do campo Cnpj fornecedor |
| nome_fornecedor | Texto/Número | Valor do campo Nome fornecedor |
| quantidade | Texto/Número | Quantidade adquirida |
| unidade | Texto/Número | Valor do campo Unidade |
| descricao_item | Texto/Número | Valor do campo Descricao item |
| beneficio | Texto/Número | Valor do campo Beneficio |
| valor_estimado | Texto/Número | Valor do campo Valor estimado |
| decreto_7174 | Texto/Número | Valor do campo Decreto 7174 |
| criterio_julgamento | Texto/Número | Valor do campo Criterio julgamento |
| cpf_vencedor | Texto/Número | Valor do campo Cpf vencedor |
| nome_vencedor_pf | Texto/Número | Valor do campo Nome vencedor pf |
| sustentavel | Texto/Número | Valor do campo Sustentavel |
| dt_alteracao | Texto/Número | Valor do campo Dt alteracao |
| id_compra | Texto/Número | Valor do campo Id compra |
| id_compra_item | Texto/Número | Valor do campo Id compra item |
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
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Id compra |
| id_compra_item | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Id compra item |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Dt alteracao |

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
| co_uasg | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Co uasg |
| co_orgao | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Co orgao |
| numero | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Numero |
| ds_tipo_pregao_compra | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Ds tipo pregao compra |
| dt_data_edital_inicial | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Dt data edital inicial |
| dt_data_edital_final | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Dt data edital final |
| pertence14133 | boolean | <span class="badge-opt">⚪ Não</span> | Indica se pertence ao regime da Lei nº 14.133/2021. 0 – False; 1 – True |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| id_compra | Texto/Número | Valor do campo Id compra |
| co_processo | Texto/Número | Valor do campo Co processo |
| co_portaria | Texto/Número | Valor do campo Co portaria |
| co_uasg | Texto/Número | Valor do campo Co uasg |
| no_ausg | Texto/Número | Valor do campo No ausg |
| co_orgao | Texto/Número | Valor do campo Co orgao |
| no_orgao | Texto/Número | Valor do campo No orgao |
| numero | Texto/Número | Valor do campo Numero |
| ds_situacao_pregao | Texto/Número | Valor do campo Ds situacao pregao |
| ds_tipo_pregao | Texto/Número | Valor do campo Ds tipo pregao |
| ds_tipo_pregao_compra | Texto/Número | Valor do campo Ds tipo pregao compra |
| tx_objeto | Texto/Número | Valor do campo Tx objeto |
| valor_estimado_total | Texto/Número | Valor do campo Valor estimado total |
| valor_homologado_total | Texto/Número | Valor do campo Valor homologado total |
| dt_portaria | Texto/Número | Valor do campo Dt portaria |
| dt_data_edital | Texto/Número | Valor do campo Dt data edital |
| dt_inicio_proposta | Texto/Número | Valor do campo Dt inicio proposta |
| dt_fim_proposta | Texto/Número | Valor do campo Dt fim proposta |
| dt_alteracao | Texto/Número | Valor do campo Dt alteracao |
| dt_encerramento | Texto/Número | Valor do campo Dt encerramento |
| dt_resultado | Texto/Número | Valor do campo Dt resultado |
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
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Id compra |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Dt alteracao |

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
| co_uasg | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Co uasg |
| decreto_7174 | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Decreto 7174 |
| fornecedor_vencedor | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Fornecedor vencedor |
| dt_hom_inicial | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Dt hom inicial |
| dt_hom_final | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Dt hom final |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| id_compra | Texto/Número | Valor do campo Id compra |
| id_compra_item | Texto/Número | Valor do campo Id compra item |
| decreto_7174 | Texto/Número | Valor do campo Decreto 7174 |
| situacao_item | Texto/Número | Valor do campo Situacao item |
| descricao_item | Texto/Número | Valor do campo Descricao item |
| descricao_detalhada_item | Texto/Número | Valor do campo Descricao detalhada item |
| margem_preferencial | Texto/Número | Valor do campo Margem preferencial |
| tratamento_diferenciado | Texto/Número | Valor do campo Tratamento diferenciado |
| quantidade_item | Texto/Número | Valor do campo Quantidade item |
| unidade_fornecimento | Texto/Número | Valor do campo Unidade fornecimento |
| valor_estimado_item | Texto/Número | Valor do campo Valor estimado item |
| menor_lance | Texto/Número | Valor do campo Menor lance |
| valor_negociado | Texto/Número | Valor do campo Valor negociado |
| valor_homologado_item | Texto/Número | Valor do campo Valor homologado item |
| fornecedor_vencedor | Texto/Número | Valor do campo Fornecedor vencedor |
| no_adjudic | Texto/Número | Valor do campo No adjudic |
| no_hom | Texto/Número | Valor do campo No hom |
| dt_encerramento | Texto/Número | Valor do campo Dt encerramento |
| dt_adjudic | Texto/Número | Valor do campo Dt adjudic |
| dt_hom | Texto/Número | Valor do campo Dt hom |
| dt_alteracao | Texto/Número | Valor do campo Dt alteracao |
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
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Id compra |
| id_compra_item | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Id compra item |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Dt alteracao |

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
| dt_ano_aviso | integer | <span class="badge-req">🔴 Sim</span> | Valor do campo Dt ano aviso |
| nu_aviso_licitacao | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Nu aviso licitacao |
| co_modalidade_licitacao | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Co modalidade licitacao |
| co_orgao | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Co orgao |
| co_orgao_superior | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Co orgao superior |
| co_uasg | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Co uasg |
| dtDeclaracaoDispensaInicial | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Dt declaracao dispensa inicial |
| dtDeclaracaoDispensaFinal | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Dt declaracao dispensa final |
| dtRatificacao | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Dt ratificacao |
| dtPublicacao | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Dt publicacao |
| pertence14133 | boolean | <span class="badge-opt">⚪ Não</span> | Indica se pertence ao regime da Lei nº 14.133/2021. 0 – False; 1 – True |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| id_compra | Texto/Número | Valor do campo Id compra |
| co_orgao | Texto/Número | Valor do campo Co orgao |
| co_orgao_superior | Texto/Número | Valor do campo Co orgao superior |
| co_uasg | Texto/Número | Valor do campo Co uasg |
| no_ausg | Texto/Número | Valor do campo No ausg |
| co_modalidade_licitacao | Texto/Número | Valor do campo Co modalidade licitacao |
| ds_lei | Texto/Número | Valor do campo Ds lei |
| nu_processo | Texto/Número | Valor do campo Nu processo |
| qt_total_item | Texto/Número | Valor do campo Qt total item |
| vr_estimado | Texto/Número | Valor do campo Vr estimado |
| nu_aviso_licitacao | Texto/Número | Valor do campo Nu aviso licitacao |
| ds_objeto_licitacao | Texto/Número | Valor do campo Ds objeto licitacao |
| ds_fundamento_legal | Texto/Número | Valor do campo Ds fundamento legal |
| ds_justificativa | Texto/Número | Valor do campo Ds justificativa |
| no_responsavel_decl_disp | Texto/Número | Valor do campo No responsavel decl disp |
| no_cargo_resp_decl_disp | Texto/Número | Valor do campo No cargo resp decl disp |
| no_responsavel_ratificacao | Texto/Número | Valor do campo No responsavel ratificacao |
| no_cargo_resp_ratificacao | Texto/Número | Valor do campo No cargo resp ratificacao |
| dt_declaracao_dispensa | Texto/Número | Valor do campo Dt declaracao dispensa |
| dt_ratificacao | Texto/Número | Valor do campo Dt ratificacao |
| dt_publicacao | Texto/Número | Valor do campo Dt publicacao |
| dt_ano_aviso | Texto/Número | Valor do campo Dt ano aviso |
| dt_alteracao | Texto/Número | Valor do campo Dt alteracao |
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
| co_uasg | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Co uasg |
| co_orgao | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Co orgao |
| dt_ano_aviso_licitacao | integer | <span class="badge-req">🔴 Sim</span> | Valor do campo Dt ano aviso licitacao |
| co_modalidade_licitacao | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Co modalidade licitacao |
| co_conjunto_materiais | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Co conjunto materiais |
| co_servico | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Co servico |
| nu_cpf_cnpj_fornecedor | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Nu cpf cnpj fornecedor |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| co_conjunto_materiais | Texto/Número | Valor do campo Co conjunto materiais |
| co_servico | Texto/Número | Valor do campo Co servico |
| ds_detalhada | Texto/Número | Valor do campo Ds detalhada |
| in_tipo_fornecedor_vencedor | Texto/Número | Valor do campo In tipo fornecedor vencedor |
| no_fornecedor_vencedor | Texto/Número | Valor do campo No fornecedor vencedor |
| no_conjunto_materiais | Texto/Número | Valor do campo No conjunto materiais |
| no_marca_material | Texto/Número | Valor do campo No marca material |
| no_servico | Texto/Número | Valor do campo No servico |
| no_unidade_medida | Texto/Número | Valor do campo No unidade medida |
| nu_cnpj_vencedor | Texto/Número | Valor do campo Nu cnpj vencedor |
| nu_cpf_vencedor | Texto/Número | Valor do campo Nu cpf vencedor |
| qt_material_alt | Texto/Número | Valor do campo Qt material alt |
| vr_estimado | Texto/Número | Valor do campo Vr estimado |
| in_material_servico | Texto/Número | Valor do campo In material servico |
| dt_publicacao | Texto/Número | Valor do campo Dt publicacao |
| id_compra | Texto/Número | Valor do campo Id compra |
| id_compra_item | Texto/Número | Valor do campo Id compra item |
| co_uasg | Texto/Número | Valor do campo Co uasg |
| co_modalidade_licitacao | Texto/Número | Valor do campo Co modalidade licitacao |
| no_modalidade_licitacao | Texto/Número | Valor do campo No modalidade licitacao |
| nu_aviso_licitacao | Texto/Número | Valor do campo Nu aviso licitacao |
| dt_ano_aviso_licitacao | Texto/Número | Valor do campo Dt ano aviso licitacao |
| nu_inciso | Texto/Número | Valor do campo Nu inciso |
| nu_processo | Texto/Número | Valor do campo Nu processo |
| qt_total_item | Texto/Número | Valor do campo Qt total item |
| ds_objeto_licitacao | Texto/Número | Valor do campo Ds objeto licitacao |
| ds_fundamento_legal | Texto/Número | Valor do campo Ds fundamento legal |
| ds_justificativa | Texto/Número | Valor do campo Ds justificativa |
| nu_cpf_resp_decl_disp | Texto/Número | Valor do campo Nu cpf resp decl disp |
| nu_cpf_resp_ratificacao | Texto/Número | Valor do campo Nu cpf resp ratificacao |
| nu_cpf_resp_publicacao | Texto/Número | Valor do campo Nu cpf resp publicacao |
| no_responsavel_decl_disp | Texto/Número | Valor do campo No responsavel decl disp |
| no_cargo_resp_decl_disp | Texto/Número | Valor do campo No cargo resp decl disp |
| no_responsavel_ratificacao | Texto/Número | Valor do campo No responsavel ratificacao |
| no_cargo_resp_ratificacao | Texto/Número | Valor do campo No cargo resp ratificacao |
| nu_item_material | Texto/Número | Valor do campo Nu item material |
| vr_estimado_item | Texto/Número | Valor do campo Vr estimado item |
| ds_fabricante | Texto/Número | Valor do campo Ds fabricante |
| dt_alteracao | Texto/Número | Valor do campo Dt alteracao |
| co_orgao | Texto/Número | Valor do campo Co orgao |
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
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Id compra |
| id_compra_item | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Id compra item |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Dt alteracao |

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
| data_publicacao_min | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| data_publicacao_max | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| endereco_entrega_edital | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Endereco entrega edital |
| forma_de_realizacao | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Forma de realizacao |
| funcao_responsavel | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Funcao responsavel |
| modalidade | integer | <span class="badge-opt">⚪ Não</span> | Código da modalidade de licitação |
| nome_responsavel | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Nome responsavel |
| numero_aviso | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Numero aviso |
| objeto | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Objeto |
| orgao | integer | <span class="badge-opt">⚪ Não</span> | CNPJ do órgão (sem máscara) |
| situacao_aviso | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Situacao aviso |
| uasg | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Uasg |
| uf_uasg | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Uf uasg |
| valor_estimado_total_max | number | <span class="badge-opt">⚪ Não</span> | Valor do campo Valor estimado total max |
| valor_estimado_total_min | number | <span class="badge-opt">⚪ Não</span> | Valor do campo Valor estimado total min |
| valor_homologado_total_max | number | <span class="badge-opt">⚪ Não</span> | Valor do campo Valor homologado total max |
| valor_homologado_total_min | number | <span class="badge-opt">⚪ Não</span> | Valor do campo Valor homologado total min |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| data_abertura_proposta | Texto/Número | Data correspondente ao registro |
| data_entrega_edital | Texto/Número | Data correspondente ao registro |
| data_entrega_proposta | Texto/Número | Data correspondente ao registro |
| data_publicacao | Texto/Número | Data correspondente ao registro |
| endereco_entrega_edital | Texto/Número | Valor do campo Endereco entrega edital |
| forma_de_realizacao_licitacao | Texto/Número | Valor do campo Forma de realizacao licitacao |
| funcao_responsavel | Texto/Número | Valor do campo Funcao responsavel |
| identificador | Texto/Número | Valor do campo Identificador |
| informacoes_gerais | Texto/Número | Valor do campo Informacoes gerais |
| modalidade | Texto/Número | Código da modalidade de licitação |
| nome_responsavel | Texto/Número | Valor do campo Nome responsavel |
| numero_aviso | Texto/Número | Valor do campo Numero aviso |
| numero_itens | Texto/Número | Valor do campo Numero itens |
| numero_processo | Texto/Número | Valor do campo Numero processo |
| objeto | Texto/Número | Valor do campo Objeto |
| situacao_aviso | Texto/Número | Valor do campo Situacao aviso |
| tipo_recurso | Texto/Número | Valor do campo Tipo recurso |
| uasg | Texto/Número | Valor do campo Uasg |
| orgao_uasg | Texto/Número | Valor do campo Orgao uasg |
| uf_uasg | Texto/Número | Valor do campo Uf uasg |
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
