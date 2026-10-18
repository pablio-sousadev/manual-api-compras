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

# 4. Módulo Catálogo — Material

O Catálogo de Materiais (CATMAT) e o Catálogo de Serviços (CATSER), do Sistema Integrado de Administração e Serviços Gerais – SIASG, são as bases de dados que identificam todos os materiais licitados e adquiridos e todos os serviços licitados contratados pela Administração Pública Federal. Todas as operações realizadas por meio do SIASG/Compras Governamentais utilizam esses catálogos para definir os objetos das respectivas licitações e contratações.

## 4.1. consultarGrupoMaterial

Serviço para obter dados e consultar o endpoint consultarGrupoMaterial.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-material/1_consultarGrupoMaterial`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-material/1_consultarGrupoMaterial' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| codigoGrupo | integer | <span class="badge-opt">⚪ Não</span> | Código do grupo do material/serviço |
| statusGrupo | boolean | <span class="badge-opt">⚪ Não</span> | Status do grupo. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoGrupo | Texto/Número | Código do grupo do material/serviço |
| nomeGrupo | Texto/Número | Nome do grupo do material |
| statusGrupo | Texto/Número | Status do grupo. 0 – False/Inativo; 1 – True/Ativo |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoGrupo": 0,
"nomeGrupo": "string",
"statusGrupo": true,
"dataHoraAtualizacao": "2024-01-15 10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

## 4.2. consultarClasseMaterial

Serviço para obter dados e consultar o endpoint consultarClasseMaterial.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-material/2_consultarClasseMaterial`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-material/2_consultarClasseMaterial' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| codigoGrupo | integer | <span class="badge-opt">⚪ Não</span> | Código do grupo do material/serviço |
| codigoClasse | integer | <span class="badge-opt">⚪ Não</span> | Código da classe do material/serviço |
| statusClasse | boolean | <span class="badge-opt">⚪ Não</span> | Status da classe. 0 – False/Inativo; 1 – True/Ativo |
| bps | boolean | <span class="badge-opt">⚪ Não</span> | Indica se está vinculado ao Banco de Preços em Saúde (BPS). 0 – False/Não; 1 – True/Sim |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoClasse | Texto/Número | Código da classe do material/serviço |
| codigoGrupo | Texto/Número | Código do grupo do material/serviço |
| nomeGrupo | Texto/Número | Nome do grupo do material |
| nomeClasse | Texto/Número | Nome da classe do material |
| statusClasse | Texto/Número | Status da classe. 0 – False/Inativo; 1 – True/Ativo |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoClasse": 0,
"codigoGrupo": 0,
"nomeGrupo": "string",
"nomeClasse": "string",
"statusClasse": true,
"dataHoraAtualizacao": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

## 4.3. consultarPdmMaterial

Serviço para obter dados e consultar o endpoint consultarPdmMaterial.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-material/3_consultarPdmMaterial`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-material/3_consultarPdmMaterial' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| statusPdm | boolean | <span class="badge-opt">⚪ Não</span> | Status do PDM. 0 – False/Inativo; 1 – True/Ativo |
| codigoPdm | integer | <span class="badge-opt">⚪ Não</span> | Código do Produto Descritivo Básico (PDM) |
| codigoGrupo | integer | <span class="badge-opt">⚪ Não</span> | Código do grupo do material/serviço |
| codigoClasse | integer | <span class="badge-opt">⚪ Não</span> | Código da classe do material/serviço |
| bps | boolean | <span class="badge-opt">⚪ Não</span> | Indica se está vinculado ao Banco de Preços em Saúde (BPS). 0 – False/Não; 1 – True/Sim |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoGrupo | Texto/Número | Código do grupo do material/serviço |
| nomeGrupo | Texto/Número | Nome do grupo do material |
| codigoClasse | Texto/Número | Código da classe do material/serviço |
| nomeClasse | Texto/Número | Nome da classe do material |
| codigoPdm | Texto/Número | Código do Produto Descritivo Básico (PDM) |
| nomePdm | Texto/Número | Nome do PDM |
| statusPdm | Texto/Número | Status do PDM. 0 – False/Inativo; 1 – True/Ativo |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoGrupo": 0,
"nomeGrupo": "string",
"codigoClasse": 0,
"nomeClasse": "string",
"codigoPdm": 0,
"nomePdm": "string",
"statusPdm": true,
"dataHoraAtualizacao": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

## 4.4. consultarItemMaterial

Serviço para obter dados e consultar o endpoint consultarItemMaterial.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-material/4_consultarItemMaterial`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-material/4_consultarItemMaterial' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoItem | integer | <span class="badge-opt">⚪ Não</span> | Código do item do material/serviço |
| codigoGrupo | integer | <span class="badge-opt">⚪ Não</span> | Código do grupo do material/serviço |
| codigoClasse | integer | <span class="badge-opt">⚪ Não</span> | Código da classe do material/serviço |
| codigoPdm | integer | <span class="badge-opt">⚪ Não</span> | Código do Produto Descritivo Básico (PDM) |
| descricaoItem | string | <span class="badge-opt">⚪ Não</span> | Descrição do item |
| statusItem | boolean | <span class="badge-opt">⚪ Não</span> | Status do item. 0 – False/Inativo; 1 – True/Ativo |
| bps | boolean | <span class="badge-opt">⚪ Não</span> | Indica se está vinculado ao Banco de Preços em Saúde (BPS). 0 – False/Não; 1 – True/Sim |
| codigo_ncm | string | <span class="badge-opt">⚪ Não</span> | Código NCM – Nomenclatura Comum do Mercosul |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoItem | Texto/Número | Código do item do material/serviço |
| codigoGrupo | Texto/Número | Código do grupo do material/serviço |
| nomeGrupo | Texto/Número | Nome do grupo do material |
| codigoClasse | Texto/Número | Código da classe do material/serviço |
| nomeClasse | Texto/Número | Nome da classe do material |
| codigoPdm | Texto/Número | Código do Produto Descritivo Básico (PDM) |
| nomePdm | Texto/Número | Nome do PDM |
| descricaoItem | Texto/Número | Descrição do item |
| statusItem | Texto/Número | Status do item. 0 – False/Inativo; 1 – True/Ativo |
| itemSustentavel | Texto/Número | Indica se o item é sustentável. 0 – False/Não; 1 – True/Sim |
| codigo_ncm | Texto/Número | Código NCM – Nomenclatura Comum do Mercosul |
| descricao_ncm | Texto/Número | Descrição do NCM |
| aplica_margem_preferencia | Texto/Número | Indica se o item aplica margem de preferência. 0 – False/Não; 1 – True/Sim |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoItem": 0,
"codigoGrupo": 0,
"nomeGrupo": "string",
"codigoClasse": 0,
"nomeClasse": "string",
"codigoPdm": 0,
"nomePdm": "string",
"descricaoItem": "string",
"statusItem": true,
"itemSustentavel": true,
"codigo_ncm": "string",
"descricao_ncm": "string",
"aplica_margem_preferencia": true,
"dataHoraAtualizacao": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

## 4.5. consultarMaterialNaturezaDespesa

Serviço para obter dados e consultar o endpoint consultarMaterialNaturezaDespesa.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-material/5_consultarMaterialNaturezaDespesa`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-material/5_consultarMaterialNaturezaDespesa' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoPdm | integer | <span class="badge-opt">⚪ Não</span> | Código do Produto Descritivo Básico (PDM) |
| codigoNaturezaDespesa | string | <span class="badge-opt">⚪ Não</span> | Código da natureza de despesa |
| statusNaturezaDespesa | boolean | <span class="badge-opt">⚪ Não</span> | Status da natureza de despesa. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoPdm | Texto/Número | Código do Produto Descritivo Básico (PDM) |
| codigoNaturezaDespesa | Texto/Número | Código da natureza de despesa |
| nomeNaturezaDespesa | Texto/Número | Descrição da natureza de despesa |
| statusNaturezaDespesa | Texto/Número | Status da natureza de despesa. 0 – False/Inativo; 1 – True/Ativo |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoPdm": 0,
"codigoNaturezaDespesa": "string",
"nomeNaturezaDespesa": "string",
"statusNaturezaDespesa": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

## 4.6. consultarMaterialUnidadeFornecimento

Serviço para obter dados e consultar o endpoint consultarMaterialUnidadeFornecimento.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-material/6_consultarMaterialUnidadeFornecimento`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-material/6_consultarMaterialUnidadeFornecimento' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoPdm | integer | <span class="badge-opt">⚪ Não</span> | Código do Produto Descritivo Básico (PDM) |
| statusUnidadeFornecimentoPdm | boolean | <span class="badge-opt">⚪ Não</span> | Status da unidade de fornecimento do PDM. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoPdm | Texto/Número | Código do Produto Descritivo Básico (PDM) |
| siglaUnidadeFornecimento | Texto/Número | Sigla da unidade de fornecimento |
| nomeUnidadeFornecimento | Texto/Número | Nome da unidade de fornecimento |
| descricaoUnidadeFornecimento | Texto/Número | Descrição da unidade de fornecimento |
| siglaUnidadeMedida | Texto/Número | Sigla da unidade de medida |
| capacidadeUnidadeFornecimento | Texto/Número | Capacidade da unidade de fornecimento |
| numeroSequencialUnidadeFornecimento | Texto/Número | Número sequencial da unidade de fornecimento |
| statusUnidadeFornecimentoPdm | Texto/Número | Status da unidade de fornecimento do PDM. 0 – False/Inativo; 1 – True/Ativo |
| statusUnidadeFornecimento | Texto/Número | Status da unidade de fornecimento. 0 – False/Inativo; 1 – True/Ativo |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoPdm": 0,
"siglaUnidadeFornecimento": "string",
"nomeUnidadeFornecimento": "string",
"descricaoUnidadeFornecimento": "string",
"siglaUnidadeMedida": "string",
"capacidadeUnidadeFornecimento": 0,
"numeroSequencialUnidadeFornecimento": 0,
"statusUnidadeFornecimentoPdm": true,
"statusUnidadeFornecimento": true,
"dataHoraAtualizacao": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#">⬆️ Voltar ao topo</a>

## 4.7. consultarMaterialCaracteristicas

Serviço para obter dados e consultar o endpoint consultarMaterialCaracteristicas.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-material/7_consultarMaterialCaracteristicas`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-material/7_consultarMaterialCaracteristicas' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoItem | integer | <span class="badge-opt">⚪ Não</span> | Código do item do material/serviço |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoItem | Texto/Número | Código do item do material/serviço |
| itemSustentavel | Texto/Número | Indica se o item é sustentável. 0 – False/Não; 1 – True/Sim |
| statusItem | Texto/Número | Status do item. 0 – False/Inativo; 1 – True/Ativo |
| codigoCaracteristica | Texto/Número | Código da característica |
| nomeCaracteristica | Texto/Número | Nome da característica |
| statusCaracteristica | Texto/Número | Status da característica. 0 – False/Inativo; 1 – True/Ativo |
| codigoValorCaracteristica | Texto/Número | Código do valor da característica |
| nomeValorCaracteristica | Texto/Número | Nome do valor da característica |
| statusValorCaracteristica | Texto/Número | Status do valor da característica. 0 – False/Inativo; 1 – True/Ativo |
| numeroCaracteristica | Texto/Número | Número sequencial da característica |
| siglaUnidadeMedida | Texto/Número | Sigla da unidade de medida |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoItem": 0,
"itemSustentavel": true,
"statusItem": true,
"codigoCaracteristica": "string",
"nomeCaracteristica": "string",
"statusCaracteristica": true,
"codigoValorCaracteristica": "string",
"nomeValorCaracteristica": "string",
"statusValorCaracteristica": true,
"numeroCaracteristica": 0,
"siglaUnidadeMedida": "string",
"dataHoraAtualizacao": "2022-01-01T00:00:00"
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
