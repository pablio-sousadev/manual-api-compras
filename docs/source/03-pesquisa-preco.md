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

# 3. Módulo Pesquisa de Preços

O Módulo Pesquisa de Preço disponibiliza os preços praticados nas contratações públicas federais, permitindo consultar, por material ou serviço, os valores registrados em contratações anteriores. Constitui importante subsídio para a pesquisa de preços e para a estimativa de valores de referência nas contratações.

## 3.1. consultarMaterial

Serviço para obter dados e consultar o endpoint consultarMaterial.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/1_consultarMaterial`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/1_consultarMaterial' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| tipo | string | <span class="badge-req">🔴 Sim</span> | Tipo do item do catálogo a consultar (ex: material ou serviço) |
| codigo | string | <span class="badge-req">🔴 Sim</span> | Código do item no catálogo |
| codigoUasg | string | <span class="badge-opt">⚪ Não</span> | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |
| estado | string | <span class="badge-opt">⚪ Não</span> | Sigla do estado (UF) |
| codigoMunicipio | integer | <span class="badge-opt">⚪ Não</span> | Código do município (IBGE) |
| dataResultado | boolean | <span class="badge-opt">⚪ Não</span> | Data do resultado da compra |
| codigoClasse | integer | <span class="badge-opt">⚪ Não</span> | Código da classe do material/serviço |
| poder | string | <span class="badge-opt">⚪ Não</span> | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| esfera | string | <span class="badge-opt">⚪ Não</span> | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| idCompra | string | <span class="badge-opt">⚪ Não</span> | Código identificador único da compra |
| dataCompraInicio | string | <span class="badge-opt">⚪ Não</span> | Data de início do período da compra (formato: YYYY-MM-DD) |
| dataCompraFim | string | <span class="badge-opt">⚪ Não</span> | Data de fim do período da compra (formato: YYYY-MM-DD) |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| idCompra | Texto/Número | Código identificador único da compra |
| dataCompra | Texto/Número | Data da compra |
| forma | Texto/Número | Forma de aquisição: SISPP (preços praticados) ou SISRP (menor preço) |
| modalidade | Texto/Número | Código da modalidade de licitação |
| dataHoraAtualizacaoCompra | Texto/Número | Data e hora da última atualização da compra |
| idItemCompra | Texto/Número | Código do item da compra |
| numeroItemCompra | Texto/Número | Número do item da compra |
| niFornecedor | Texto/Número | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| codigoItemCatalogo | Texto/Número | Código do item no catálogo de materiais ou serviços |
| quantidade | Texto/Número | Quantidade adquirida |
| precoUnitario | Texto/Número | Valor unitário do item |
| descricaoItem | Texto/Número | Descrição do item |
| siglaUnidadeFornecimento | Texto/Número | Sigla da unidade de fornecimento |
| nomeUnidadeFornecimento | Texto/Número | Nome da unidade de fornecimento |
| capacidadeUnidadeFornecimento | Texto/Número | Capacidade da unidade de fornecimento |
| siglaUnidadeMedida | Texto/Número | Sigla da unidade de medida |
| nomeUnidadeMedida | Texto/Número | Nome da unidade de medida |
| criterioJulgamento | Texto/Número | Código do critério de julgamento |
| percentualMaiorDesconto | Texto/Número | Maior percentual de desconto aplicado |
| nomeFornecedor | Texto/Número | Nome do fornecedor |
| marca | Texto/Número | Marca do produto (caso exista) |
| dataResultado | Texto/Número | Data do resultado da compra |
| dataHoraAtualizacaoItem | Texto/Número | Data e hora da última atualização do item |
| codigoUasg | Texto/Número | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |
| nomeUasg | Texto/Número | Nome da UASG |
| codigoOrgao | Texto/Número | Código do órgão |
| nomeOrgao | Texto/Número | Nome do órgão |
| estado | Texto/Número | Sigla do estado (UF) |
| codigoMunicipio | Texto/Número | Código do município (IBGE) |
| municipio | Texto/Número | Nome do município |
| poder | Texto/Número | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| esfera | Texto/Número | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| dataHoraAtualizacaoUasg | Texto/Número | Data e hora da última atualização da UASG |
| codigoClasse | Texto/Número | Código da classe do material/serviço |
| nomeClasse | Texto/Número | Nome da classe do material |
| idCompraItem | Texto/Número | Identificador único do item da compra |
| objetoCompra | Texto/Número | Descrição do objeto da compra |
| descricaoDetalhadaItem | Texto/Número | Descrição detalhada do item |
| dataAtualizacaoFato | Texto/Número | Data e hora da atualização do fato |
| codigoPdm | Texto/Número | Código do Produto Descritivo Básico (PDM) |
| nomePdm | Texto/Número | Nome do PDM |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"idCompra": 0,
"dataCompra": "2026-07-29",
"forma": "string",
"modalidade": 1073741824,
"dataHoraAtualizacaoCompra": "2024-01-15T10:30:00",
"idItemCompra": 0,
"numeroItemCompra": 0,
"niFornecedor": "string",
"codigoItemCatalogo": 0,
"quantidade": 0,
"precoUnitario": 0,
"descricaoItem": "string",
"siglaUnidadeFornecimento": "string",
"nomeUnidadeFornecimento": "string",
"capacidadeUnidadeFornecimento": 0,
"siglaUnidadeMedida": "string",
"nomeUnidadeMedida": "string",
"criterioJulgamento": "string",
"percentualMaiorDesconto": 0,
"nomeFornecedor": "string",
"marca": "string",
"dataResultado": "2026-07-29",
"dataHoraAtualizacaoItem": "2024-01-15T10:30:00",
"codigoUasg": "string",
"nomeUasg": "string",
"codigoOrgao": 0,
"nomeOrgao": "string",
"estado": "string",
"codigoMunicipio": 0,
"municipio": "string",
"poder": "string",
"esfera": "string",
"dataHoraAtualizacaoUasg": "2024-01-15T10:30:00",
"codigoClasse": 0,
"nomeClasse": "string",
"idCompraItem": "string",
"objetoCompra": "string",
"descricaoDetalhadaItem": "string",
"dataAtualizacaoFato": "2024-01-15T10:30:00",
"codigoPdm": "string",
"nomePdm": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

### 3.1.1. consultarMaterial_CSV

Serviço para obter dados e consultar o endpoint consultarMaterial_CSV.

> Este endpoint possui os mesmos parâmetros e dados de retorno do endpoint anterior, porém a resposta é retornada no formato `.csv` em vez de JSON.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/1.1_consultarMaterial_CSV`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/1.1_consultarMaterial_CSV' \
  -H 'accept: */*'
```

<a href="#">⬆️ Voltar ao topo</a>

## 3.2. consultarMaterialDetalhe

Serviço para obter dados e consultar o endpoint consultarMaterialDetalhe.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/2_consultarMaterialDetalhe`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/2_consultarMaterialDetalhe' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoItemCatalogo | integer | <span class="badge-req">🔴 Sim</span> | Código do item no catálogo de materiais ou serviços |
| dataCompraInicio | string | <span class="badge-opt">⚪ Não</span> | Data de início do período da compra (formato: YYYY-MM-DD) |
| dataCompraFim | string | <span class="badge-opt">⚪ Não</span> | Data de fim do período da compra (formato: YYYY-MM-DD) |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| idCompra | Texto/Número | Código identificador único da compra |
| idItemCompra | Texto/Número | Código do item da compra |
| numeroItemCompra | Texto/Número | Número do item da compra |
| codigoItemCatalogo | Texto/Número | Código do item no catálogo de materiais ou serviços |
| objetoCompra | Texto/Número | Descrição do objeto da compra |
| descricaoDetalhadaItem | Texto/Número | Descrição detalhada do item |
| dataAtualizacaoFato | Texto/Número | Data e hora da atualização do fato |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"idCompra": "string",
"idItemCompra": 0,
"numeroItemCompra": 0,
"codigoItemCatalogo": 0,
"objetoCompra": "string",
"descricaoDetalhadaItem": "string",
"dataAtualizacaoFato": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

### 3.2.1. consultarMaterialDetalhe_CSV

Serviço para obter dados e consultar o endpoint consultarMaterialDetalhe_CSV.

> Este endpoint possui os mesmos parâmetros e dados de retorno do endpoint anterior, porém a resposta é retornada no formato `.csv` em vez de JSON.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/2.1_consultarMaterialDetalhe_CSV`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/2.1_consultarMaterialDetalhe_CSV' \
  -H 'accept: */*'
```

<a href="#">⬆️ Voltar ao topo</a>

## 3.3. consultarServico

Serviço para obter dados e consultar o endpoint consultarServico.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/3_consultarServico`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/3_consultarServico' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoItemCatalogo | integer | <span class="badge-req">🔴 Sim</span> | Código do item no catálogo de materiais ou serviços |
| codigoUasg | string | <span class="badge-opt">⚪ Não</span> | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |
| estado | string | <span class="badge-opt">⚪ Não</span> | Sigla do estado (UF) |
| codigoMunicipio | integer | <span class="badge-opt">⚪ Não</span> | Código do município (IBGE) |
| dataResultado | boolean | <span class="badge-opt">⚪ Não</span> | Data do resultado da compra |
| poder | string | <span class="badge-opt">⚪ Não</span> | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| esfera | string | <span class="badge-opt">⚪ Não</span> | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| dataCompraInicio | string | <span class="badge-opt">⚪ Não</span> | Data de início do período da compra (formato: YYYY-MM-DD) |
| dataCompraFim | string | <span class="badge-opt">⚪ Não</span> | Data de fim do período da compra (formato: YYYY-MM-DD) |
| idCompra | string | <span class="badge-opt">⚪ Não</span> | Código identificador único da compra |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| idCompra | Texto/Número | Código identificador único da compra |
| idItemCompra | Texto/Número | Código do item da compra |
| forma | Texto/Número | Forma de aquisição: SISPP (preços praticados) ou SISRP (menor preço) |
| modalidade | Texto/Número | Código da modalidade de licitação |
| criterioJulgamento | Texto/Número | Código do critério de julgamento |
| numeroItemCompra | Texto/Número | Número do item da compra |
| descricaoItem | Texto/Número | Descrição do item |
| codigoItemCatalogo | Texto/Número | Código do item no catálogo de materiais ou serviços |
| nomeUnidadeMedida | Texto/Número | Nome da unidade de medida |
| siglaUnidadeMedida | Texto/Número | Sigla da unidade de medida |
| quantidade | Texto/Número | Quantidade adquirida |
| precoUnitario | Texto/Número | Valor unitário do item |
| percentualMaiorDesconto | Texto/Número | Maior percentual de desconto aplicado |
| niFornecedor | Texto/Número | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| nomeFornecedor | Texto/Número | Nome do fornecedor |
| codigoUasg | Texto/Número | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |
| nomeUasg | Texto/Número | Nome da UASG |
| codigoMunicipio | Texto/Número | Código do município (IBGE) |
| municipio | Texto/Número | Nome do município |
| estado | Texto/Número | Sigla do estado (UF) |
| codigoOrgao | Texto/Número | Código do órgão |
| nomeOrgao | Texto/Número | Nome do órgão |
| poder | Texto/Número | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| esfera | Texto/Número | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| dataCompra | Texto/Número | Data da compra |
| dataHoraAtualizacaoCompra | Texto/Número | Data e hora da última atualização da compra |
| dataHoraAtualizacaoItem | Texto/Número | Data e hora da última atualização do item |
| dataResultado | Texto/Número | Data do resultado da compra |
| dataHoraAtualizacaoUasg | Texto/Número | Data e hora da última atualização da UASG |
| objetoCompra | Texto/Número | Descrição do objeto da compra |
| descricaoDetalhadaItem | Texto/Número | Descrição detalhada do item |
| dataAtualizacaoFato | Texto/Número | Data e hora da atualização do fato |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"idCompra": "string",
"idItemCompra": 0,
"forma": "string",
"modalidade": 0,
"criterioJulgamento": "string",
"numeroItemCompra": 0,
"descricaoItem": "string",
"codigoItemCatalogo": 0,
"nomeUnidadeMedida": "string",
"siglaUnidadeMedida": "string",
"quantidade": 0,
"precoUnitario": 0,
"percentualMaiorDesconto": 0,
"niFornecedor": "string",
"nomeFornecedor": "string",
"codigoUasg": "string",
"nomeUasg": "string",
"codigoMunicipio": 0,
"municipio": "string",
"estado": "string",
"codigoOrgao": 0,
"nomeOrgao": "string",
"poder": "string",
"esfera": "string",
"dataCompra": "2024-01-15",
"dataHoraAtualizacaoCompra": "2024-01-15T10:30:00",
"dataHoraAtualizacaoItem": "2024-01-15T10:30:00",
"dataResultado": "2024-01-1",
"dataHoraAtualizacaoUasg": "2024-01-15T10:30:00",
"objetoCompra": "string",
"descricaoDetalhadaItem": "string",
"dataAtualizacaoFato": "2026-07-29T14:28:21.456Z"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

### 3.3.1. consultarServico_CSV

Serviço para obter dados e consultar o endpoint consultarServico_CSV.

> Este endpoint possui os mesmos parâmetros e dados de retorno do endpoint anterior, porém a resposta é retornada no formato `.csv` em vez de JSON.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/3.1_consultarServico_CSV`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/3.1_consultarServico_CSV' \
  -H 'accept: */*'
```

<a href="#">⬆️ Voltar ao topo</a>

## 3.4. consultarServicoDetalhe

Serviço para obter dados e consultar o endpoint consultarServicoDetalhe.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/4_consultarServicoDetalhe`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/4_consultarServicoDetalhe' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoItemCatalogo | integer | <span class="badge-req">🔴 Sim</span> | Código do item no catálogo de materiais ou serviços |
| dataCompraInicio | string | <span class="badge-opt">⚪ Não</span> | Data de início do período da compra (formato: YYYY-MM-DD) |
| dataCompraFim | string | <span class="badge-opt">⚪ Não</span> | Data de fim do período da compra (formato: YYYY-MM-DD) |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| idCompra | Texto/Número | Código identificador único da compra |
| idItemCompra | Texto/Número | Código do item da compra |
| numeroItemCompra | Texto/Número | Número do item da compra |
| codigoItemCatalogo | Texto/Número | Código do item no catálogo de materiais ou serviços |
| objetoCompra | Texto/Número | Descrição do objeto da compra |
| descricaoDetalhadaItem | Texto/Número | Descrição detalhada do item |
| dataAtualizacaoFato | Texto/Número | Data e hora da atualização do fato |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"idCompra": "string",
"idItemCompra": 0,
"numeroItemCompra": 0,
"codigoItemCatalogo": 0,
"objetoCompra": "string",
"descricaoDetalhadaItem": "string",
"dataAtualizacaoFato": "2026-07-29T14:34:37.824Z"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

### 3.4.1. consultarServicoDetalhe_CSV

Serviço para obter dados e consultar o endpoint consultarServicoDetalhe_CSV.

> Este endpoint possui os mesmos parâmetros e dados de retorno do endpoint anterior, porém a resposta é retornada no formato `.csv` em vez de JSON.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/4.1_consultarServicoDetalhe_CSV`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/4.1_consultarServicoDetalhe_CSV' \
  -H 'accept: */*'
```

<a href="#">⬆️ Voltar ao topo</a>

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>
