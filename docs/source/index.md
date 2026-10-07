<h1 class="main-doc-title">Manual do Usuário – API do Compras.gov.br</h1>

> **Tipo:** Manual
> **Público-alvo:** Desenvolvedores e integradores de sistemas
> **Objetivo:** Consultar a referência técnica dos endpoints, parâmetros e dados de retorno da API de Compras Governamentais.

**VERSÃO 3.0 – Ago/26**

Ministério da Gestão e da Inovação em Serviços Públicos – MGI

## Sumário
- [1. Introdução](#1-introdução)
- [2. Objetivos](#2-objetivos)
- [3. Outros tópicos relevantes](#3-outros-tópicos-relevantes)
- [4. Módulo Catálogo — Material](#4-módulo-catálogo--material)
- [5. Módulo Catálogo — Serviço](#5-módulo-catálogo--serviço)
- [6. Módulo Pesquisa de Preço — Preços Praticados](#6-módulo-pesquisa-de-preço--preços-praticados)
- [7. Módulo PGC — Planejamento e Gerenciamento de Contratações](#7-módulo-pgc--planejamento-e-gerenciamento-de-contratações)
- [8. Módulo UASG](#8-módulo-uasg)
- [9. Módulo Legado](#9-módulo-legado)
- [10. Módulo Contratações](#10-módulo-contratações)
- [11. Módulo ARP — Ata de Registro de Preços](#11-módulo-arp--ata-de-registro-de-preços)
- [12. Módulo Contratos](#12-módulo-contratos)
- [13. Módulo Fornecedor](#13-módulo-fornecedor)
- [14. Módulo OCDS](#14-módulo-ocds)
- [15. Histórico de Revisões](#15-histórico-de-revisões)

# 1. Introdução

O Sistema Integrado de Administração de Serviços Gerais – Siasg, instituído pelo art. 7º do Decreto nº 1.094, de 23 de março de 1994, é o sistema informatizado de apoio às atividades operacionais do Sistema de Serviços Gerais – Sisg. A finalidade do Siasg é integrar os órgãos da Administração Pública Federal direta, autárquica e fundacional. Após a reestruturação do Sisg (nova releitura), o SIASG passa a receber o sistema de contratações do governo federal, Compras.gov.br.

O Compras.gov.br atua nas três grandes fases do ciclo de contratação pública — Planejamento da Contratação, Seleção do Fornecedor e Gestão e Fiscalização do Contrato —, integrando diversas ferramentas e sistemas que compõem a área de trabalho do gestor público.

# 2. Objetivos

A transparência desempenha um papel fundamental na gestão pública.

# 3. Outros tópicos relevantes

O acesso aos dados é feito através de URLs, o protocolo de comunicação utilizado é o REST - Representational State Transfer/ HTTP 1.1 e os dados trafegados utilizam a notação JSON - JavaScript Object Notation.

Em cada consulta é possível especificar uma série de parâmetros de filtro, que devem compor a URL. Você (ser humano ou máquina) pode navegar através de todos os recursos apenas utilizando os links disponíveis. O acesso à API é realizado através do seguinte endereço: Swagger UI - Dados Abertos Compras

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

[Voltar ao sumário](#sumário)

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

[Voltar ao sumário](#sumário)

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

[Voltar ao sumário](#sumário)

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

[Voltar ao sumário](#sumário)

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

[Voltar ao sumário](#sumário)

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

[Voltar ao sumário](#sumário)

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

[Voltar ao sumário](#sumário)

---

# 5. Módulo Catálogo — Serviço

O Catálogo de Materiais (CATMAT) e o Catálogo de Serviços (CATSER), do Sistema Integrado de Administração e Serviços Gerais – SIASG, são as bases de dados que identificam todos os materiais licitados e adquiridos e todos os serviços licitados contratados pela Administração Pública Federal.

## 5.1. consultarSecaoServico

Serviço para obter dados e consultar o endpoint consultarSecaoServico.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-servico/1_consultarSecaoServico`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-servico/1_consultarSecaoServico' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| codigoSecao | integer | <span class="badge-opt">⚪ Não</span> | Código da seção do serviço |
| statusSecao | boolean | <span class="badge-opt">⚪ Não</span> | Status da seção. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoSecao | Texto/Número | Código da seção do serviço |
| nomeSecao | Texto/Número | Nome da seção |
| statusSecao | Texto/Número | Status da seção. 0 – False/Inativo; 1 – True/Ativo |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoSecao": 0,
"nomeSecao": "string",
"statusSecao": true,
"dataHoraAtualizacao": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

## 5.2. consultarDivisaoServico

Serviço para obter dados e consultar o endpoint consultarDivisaoServico.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-servico/2_consultarDivisaoServico`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-servico/2_consultarDivisaoServico' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| codigoSecao | integer | <span class="badge-opt">⚪ Não</span> | Código da seção do serviço |
| codigoDivisao | integer | <span class="badge-opt">⚪ Não</span> | Código da divisão do serviço |
| statusDivisao | boolean | <span class="badge-opt">⚪ Não</span> | Status da divisão. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoSecao | Texto/Número | Código da seção do serviço |
| nomeSecao | Texto/Número | Nome da seção |
| codigoDivisao | Texto/Número | Código da divisão do serviço |
| nomeDivisao | Texto/Número | Nome da divisão |
| statusDivisao | Texto/Número | Status da divisão. 0 – False/Inativo; 1 – True/Ativo |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoSecao": 0,
"nomeSecao": "string",
"codigoDivisao": 0,
"nomeDivisao": "string",
"statusDivisao": true,
"dataHoraAtualizacao": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

## 5.3. consultarGrupoServico

Serviço para obter dados e consultar o endpoint consultarGrupoServico.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-servico/3_consultarGrupoServico`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-servico/3_consultarGrupoServico' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| codigoDivisao | integer | <span class="badge-opt">⚪ Não</span> | Código da divisão do serviço |
| codigoGrupo | integer | <span class="badge-opt">⚪ Não</span> | Código do grupo do material/serviço |
| statusGrupo | boolean | <span class="badge-opt">⚪ Não</span> | Status do grupo. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| nomeSecao | Texto/Número | Nome da seção |
| codigoDivisao | Texto/Número | Código da divisão do serviço |
| nomeDivisao | Texto/Número | Nome da divisão |
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
"nomeSecao": "string",
"codigoDivisao": 0,
"nomeDivisao": "string",
"codigoGrupo": 0,
"nomeGrupo": "string",
"statusGrupo": true,
"dataHoraAtualizacao": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

## 5.4. consultarClasseServico

Serviço para obter dados e consultar o endpoint consultarClasseServico.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-servico/4_consultarClasseServico`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-servico/4_consultarClasseServico' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| codigoGrupo | integer | <span class="badge-opt">⚪ Não</span> | Código do grupo do material/serviço |
| codigoClasse | integer | <span class="badge-opt">⚪ Não</span> | Código da classe do material/serviço |
| statusGrupo | boolean | <span class="badge-opt">⚪ Não</span> | Status do grupo. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoGrupo | Texto/Número | Código do grupo do material/serviço |
| nomeGrupo | Texto/Número | Nome do grupo do material |
| codigoClasse | Texto/Número | Código da classe do material/serviço |
| nomeClasse | Texto/Número | Nome da classe do material |
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
"codigoClasse": 0,
"nomeClasse": "string",
"statusGrupo": true,
"dataHoraAtualizacao": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

## 5.5. consultarSubClasseServico

Serviço para obter dados e consultar o endpoint consultarSubClasseServico.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-servico/5_consultarSubClasseServico`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-servico/5_consultarSubClasseServico' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| codigoClasse | integer | <span class="badge-opt">⚪ Não</span> | Código da classe do material/serviço |
| codigoSubclasse | integer | <span class="badge-opt">⚪ Não</span> | Código da subclasse do serviço |
| statusSubclasse | boolean | <span class="badge-opt">⚪ Não</span> | Status da subclasse. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoClasse | Texto/Número | Código da classe do material/serviço |
| nomeClasse | Texto/Número | Nome da classe do material |
| codigoSubclasse | Texto/Número | Código da subclasse do serviço |
| nomeSubclasse | Texto/Número | Nome da subclasse |
| statusSubclasse | Texto/Número | Status da subclasse. 0 – False/Inativo; 1 – True/Ativo |
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
"nomeClasse": "string",
"codigoSubclasse": 0,
"nomeSubclasse": "string",
"statusSubclasse": true,
"dataHoraAtualizacao": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

## 5.6. consultarItemServico

Serviço para obter dados e consultar o endpoint consultarItemServico.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-servico/6_consultarItemServico`  
**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-servico/6_consultarItemServico' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoSecao | integer | <span class="badge-opt">⚪ Não</span> | Código da seção do serviço |
| codigoDivisao | integer | <span class="badge-opt">⚪ Não</span> | Código da divisão do serviço |
| codigoGrupo | integer | <span class="badge-opt">⚪ Não</span> | Código do grupo do material/serviço |
| codigoClasse | integer | <span class="badge-opt">⚪ Não</span> | Código da classe do material/serviço |
| codigoSubclasse | integer | <span class="badge-opt">⚪ Não</span> | Código da subclasse do serviço |
| codigoCpc | integer | <span class="badge-opt">⚪ Não</span> | Código CPC do serviço |
| codigoServico | integer | <span class="badge-opt">⚪ Não</span> | Código do item de serviço |
| exclusivoCentralCompras | boolean | <span class="badge-opt">⚪ Não</span> | Indica se é exclusivo da Central de Compras. 0 – False/Não; 1 – True/Sim |
| statusServico | boolean | <span class="badge-opt">⚪ Não</span> | Status do serviço. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoSecao | Texto/Número | Código da seção do serviço |
| nomeSecao | Texto/Número | Nome da seção |
| codigoDivisao | Texto/Número | Código da divisão do serviço |
| nomeDivisao | Texto/Número | Nome da divisão |
| codigoGrupo | Texto/Número | Código do grupo do material/serviço |
| nomeGrupo | Texto/Número | Nome do grupo do material |
| codigoClasse | Texto/Número | Código da classe do material/serviço |
| nomeClasse | Texto/Número | Nome da classe do material |
| codigoSubclasse | Texto/Número | Código da subclasse do serviço |
| nomeSubclasse | Texto/Número | Nome da subclasse |
| codigoServico | Texto/Número | Código do item de serviço |
| nomeServico | Texto/Número | Nome do serviço |
| codigoCpc | Texto/Número | Código CPC do serviço |
| exclusivoCentralCompras | Texto/Número | Indica se é exclusivo da Central de Compras. 0 – False/Não; 1 – True/Sim |
| statusServico | Texto/Número | Status do serviço. 0 – False/Inativo; 1 – True/Ativo |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoSecao": 0,
"nomeSecao": "string",
"codigoDivisao": 0,
"nomeDivisao": "string",
"codigoGrupo": 0,
"nomeGrupo": "string",
"codigoClasse": 0,
"nomeClasse": "string",
"codigoSubclasse": 0,
"nomeSubclasse": "string",
"codigoServico": 0,
"nomeServico": "string",
"codigoCpc": 0,
"exclusivoCentralCompras": true,
"statusServico": true,
"dataHoraAtualizacao": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

## 5.7. consultarUndMedidaServico

Serviço para obter dados e consultar o endpoint consultarUndMedidaServico.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-servico/7_consultarUndMedidaServico`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-servico/7_consultarUndMedidaServico' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| codigoServico | integer | <span class="badge-opt">⚪ Não</span> | Código do item de serviço |
| statusUnidadeMedida | boolean | <span class="badge-opt">⚪ Não</span> | Status da unidade de medida. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoServico | Texto/Número | Código do item de serviço |
| siglaUnidadeMedida | Texto/Número | Sigla da unidade de medida |
| nomeUnidadeMedida | Texto/Número | Nome da unidade de medida |
| statusUnidadeMedida | Texto/Número | Status da unidade de medida. 0 – False/Inativo; 1 – True/Ativo |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoServico": 0,
"siglaUnidadeMedida": "string",
"nomeUnidadeMedida": "string",
"statusUnidadeMedida": true
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

## 5.8. consultarNaturezaDespesaServico

Serviço para obter dados e consultar o endpoint consultarNaturezaDespesaServico.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-servico/8_consultarNaturezaDespesaServico`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-servico/8_consultarNaturezaDespesaServico' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| codigoServico | integer | <span class="badge-opt">⚪ Não</span> | Código do item de serviço |
| codigoNaturezaDespesa | string | <span class="badge-opt">⚪ Não</span> | Código da natureza de despesa |
| statusNaturezaDespesa | boolean | <span class="badge-opt">⚪ Não</span> | Status da natureza de despesa. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoServico | Texto/Número | Código do item de serviço |
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
"codigoServico": 0,
"codigoNaturezaDespesa": "string",
"nomeNaturezaDespesa": "string",
"statusNaturezaDespesa": true
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

---

# 6. Módulo Pesquisa de Preço — Preços Praticados

Módulo responsável por consultar os preços praticados na administração pública.

## 6.1. consultarMaterial

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
| resultado | Texto/Número | Valor do campo Resultado |
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

[Voltar ao sumário](#sumário)

### 6.1.1. consultarMaterial_CSV

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


[Voltar ao sumário](#sumário)

## 6.2. consultarMaterialDetalhe

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
| resultado | Texto/Número | Valor do campo Resultado |
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

[Voltar ao sumário](#sumário)

### 6.2.1. consultarMaterialDetalhe_CSV

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


[Voltar ao sumário](#sumário)

## 6.3. consultarServico

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
| resultado | Texto/Número | Valor do campo Resultado |
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

[Voltar ao sumário](#sumário)

### 6.3.1. consultarServico_CSV

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


[Voltar ao sumário](#sumário)

## 6.4. consultarServicoDetalhe

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
| resultado | Texto/Número | Valor do campo Resultado |
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

[Voltar ao sumário](#sumário)

### 6.4.1. consultarServicoDetalhe_CSV

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


[Voltar ao sumário](#sumário)

---

# 7. Módulo PGC — Planejamento e Gerenciamento de Contratações

O PGC, no contexto da administração pública brasileira, visa organizar e planejar as contratações.

## 7.1. consultarPgcDetalhe

Serviço para obter dados e consultar o endpoint consultarPgcDetalhe.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pgc/1_consultarPgcDetalhe`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pgc/1_consultarPgcDetalhe' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| orgao | string | <span class="badge-req">🔴 Sim</span> | CNPJ do órgão (sem máscara) |
| anoPcaProjetoCompra | integer | <span class="badge-req">🔴 Sim</span> | Ano do projeto de compra no PCA |
| codigoUasg | string | <span class="badge-opt">⚪ Não</span> | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoUasg | Texto/Número | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |
| nomeUasg | Texto/Número | Nome da UASG |
| orgao | Texto/Número | CNPJ do órgão (sem máscara) |
| numeroArtefato | Texto/Número | Valor do campo Numero artefato |
| anoArtefato | Texto/Número | Valor do campo Ano artefato |
| codigoEstadoArtefato | Texto/Número | Código do registro associado |
| codigoCategoriaArtefato | Texto/Número | Código do registro associado |
| descricaoArtefato | Texto/Número | Valor do campo Descricao artefato |
| codigoTipoArtefato | Texto/Número | Código do registro associado |
| ordemDfd | Texto/Número | Valor do campo Ordem dfd |
| descricaoObjetoDfd | Texto/Número | Valor do campo Descricao objeto dfd |
| nivelPrioridadeDfd | Texto/Número | Valor do campo Nivel prioridade dfd |
| dataPrevistaFormalizacaoDemanda | Texto/Número | Data correspondente ao registro |
| codigoAreaDfd | Texto/Número | Código do registro associado |
| tipoItem | Texto/Número | Valor do campo Tipo item |
| itemSustentavel | Texto/Número | Indica se o item é sustentável. 0 – False/Não; 1 – True/Sim |
| codigoGrupoMaterial | Texto/Número | Código do registro associado |
| nomeGrupoMaterial | Texto/Número | Valor do campo Nome grupo material |
| codigoClasseMaterial | Texto/Número | Código do registro associado |
| nomeClasseMaterial | Texto/Número | Valor do campo Nome classe material |
| codigoPdmMaterial | Texto/Número | Código do registro associado |
| nomePdmMaterial | Texto/Número | Valor do campo Nome pdm material |
| codigoSecaoServico | Texto/Número | Código do registro associado |
| nomeSecaoServico | Texto/Número | Valor do campo Nome secao servico |
| codigoDivisaoServico | Texto/Número | Código do registro associado |
| nomeDivisaoServico | Texto/Número | Valor do campo Nome divisao servico |
| codigoGrupoServico | Texto/Número | Código do registro associado |
| nomeGrupoServico | Texto/Número | Valor do campo Nome grupo servico |
| codigoClasseServico | Texto/Número | Código do registro associado |
| nomeClasseServico | Texto/Número | Valor do campo Nome classe servico |
| codigoSubclasseServico | Texto/Número | Código do registro associado |
| nomeSubclasseServico | Texto/Número | Valor do campo Nome subclasse servico |
| codigoItemCatalogo | Texto/Número | Código do item no catálogo de materiais ou serviços |
| descricaoItemCatalogo | Texto/Número | Valor do campo Descricao item catalogo |
| siglaUnidadeFornecimento | Texto/Número | Sigla da unidade de fornecimento |
| nomeUnidadeFornecimento | Texto/Número | Nome da unidade de fornecimento |
| quantidadeItem | Texto/Número | Valor do campo Quantidade item |
| valorUnitarioItem | Texto/Número | Valor do campo Valor unitario item |
| valorTotalItem | Texto/Número | Valor do campo Valor total item |
| tituloProjetoCompra | Texto/Número | Valor do campo Titulo projeto compra |
| descricaoProjetoCompra | Texto/Número | Valor do campo Descricao projeto compra |
| anoPcaProjetoCompra | Texto/Número | Ano do projeto de compra no PCA |
| dataInicioProcessoCompra | Texto/Número | Data correspondente ao registro |
| dataFimProcessoCompra | Texto/Número | Data correspondente ao registro |
| duracaoProcessoCompra | Texto/Número | Valor do campo Duracao processo compra |
| numeroItemPncp | Texto/Número | Valor do campo Numero item pncp |
| statusContratacaoExecucao | Texto/Número | Status do registro. 0 – False/Inativo; 1 – True/Ativo |
| dataHoraPublicacaoPncp | Texto/Número | Data correspondente ao registro |
| dataHoraAtualizacaoArtefato | Texto/Número | Data correspondente ao registro |
| dataHoraAtualizacaoProjetoCompra | Texto/Número | Data correspondente ao registro |
| dataHoraAtualizacaoDfd | Texto/Número | Data correspondente ao registro |
| dataHoraAtualizacaoItem | Texto/Número | Data e hora da última atualização do item |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoUasg": "string",
"nomeUasg": "string",
"orgao": "string",
"numeroArtefato": 0,
"anoArtefato": 0,
"codigoEstadoArtefato": 0,
"codigoCategoriaArtefato": 0,
"descricaoArtefato": "string",
"codigoTipoArtefato": 0,
"ordemDfd": 0,
"descricaoObjetoDfd": "string",
"nivelPrioridadeDfd": 0,
"dataPrevistaFormalizacaoDemanda": "2024-01-15T10:30:00",
"codigoAreaDfd": "string",
"tipoItem": "string",
"itemSustentavel": true,
"codigoGrupoMaterial": 0,
"nomeGrupoMaterial": "string",
"codigoClasseMaterial": 0,
"nomeClasseMaterial": "string",
"codigoPdmMaterial": 0,
"nomePdmMaterial": "string",
"codigoSecaoServico": 0,
"nomeSecaoServico": "string",
"codigoDivisaoServico": 0,
"nomeDivisaoServico": "string",
"codigoGrupoServico": 0,
"nomeGrupoServico": "string",
"codigoClasseServico": 0,
"nomeClasseServico": "string",
"codigoSubclasseServico": 0,
"nomeSubclasseServico": "string",
"codigoItemCatalogo": "string",
"descricaoItemCatalogo": "string",
"siglaUnidadeFornecimento": "string",
"nomeUnidadeFornecimento": "string",
"quantidadeItem": 0,
"valorUnitarioItem": 0,
"valorTotalItem": 0,
"tituloProjetoCompra": "string",
"descricaoProjetoCompra": "string",
"anoPcaProjetoCompra": 0,
"dataInicioProcessoCompra": "2024-01-15T10:30:00",
"dataFimProcessoCompra": "2024-01-15T10:30:00",
"duracaoProcessoCompra": 0,
"numeroItemPncp": 0,
"statusContratacaoExecucao": 0,
"dataHoraPublicacaoPncp": "2024-01-15T10:30:00",
"dataHoraAtualizacaoArtefato": "2024-01-15T10:30:00",
"dataHoraAtualizacaoProjetoCompra": "2024-01-15T10:30:00",
"dataHoraAtualizacaoDfd": "2024-01-15T10:30:00",
"dataHoraAtualizacaoItem": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

### 7.1.1. consultarPgcDetalhe_CSV

Serviço para obter dados e consultar o endpoint consultarPgcDetalhe_CSV.

> Este endpoint possui os mesmos parâmetros e dados de retorno do endpoint anterior, porém a resposta é retornada no formato `.csv` em vez de JSON.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pgc/1.1_consultarPgcDetalhe_CSV`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pgc/1.1_consultarPgcDetalhe_CSV' \
  -H 'accept: */*'
```


[Voltar ao sumário](#sumário)

## 7.2. consultarPgcDetalheCatalogo

Serviço para obter dados e consultar o endpoint consultarPgcDetalheCatalogo.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pgc/2_consultarPgcDetalheCatalogo`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pgc/2_consultarPgcDetalheCatalogo' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| anoPcaProjetoCompra | integer | <span class="badge-req">🔴 Sim</span> | Ano do projeto de compra no PCA |
| tipo | string | <span class="badge-req">🔴 Sim</span> | Tipo do item do catálogo a consultar (ex: material ou serviço) |
| codigo | integer | <span class="badge-req">🔴 Sim</span> | Código do item no catálogo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoUasg | Texto/Número | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |
| nomeUasg | Texto/Número | Nome da UASG |
| orgao | Texto/Número | CNPJ do órgão (sem máscara) |
| numeroArtefato | Texto/Número | Valor do campo Numero artefato |
| anoArtefato | Texto/Número | Valor do campo Ano artefato |
| codigoEstadoArtefato | Texto/Número | Código do registro associado |
| codigoCategoriaArtefato | Texto/Número | Código do registro associado |
| descricaoArtefato | Texto/Número | Valor do campo Descricao artefato |
| codigoTipoArtefato | Texto/Número | Código do registro associado |
| ordemDfd | Texto/Número | Valor do campo Ordem dfd |
| descricaoObjetoDfd | Texto/Número | Valor do campo Descricao objeto dfd |
| nivelPrioridadeDfd | Texto/Número | Valor do campo Nivel prioridade dfd |
| dataPrevistaFormalizacaoDemanda | Texto/Número | Data correspondente ao registro |
| codigoAreaDfd | Texto/Número | Código do registro associado |
| tipoItem | Texto/Número | Valor do campo Tipo item |
| itemSustentavel | Texto/Número | Indica se o item é sustentável. 0 – False/Não; 1 – True/Sim |
| codigoGrupoMaterial | Texto/Número | Código do registro associado |
| nomeGrupoMaterial | Texto/Número | Valor do campo Nome grupo material |
| codigoClasseMaterial | Texto/Número | Código do registro associado |
| nomeClasseMaterial | Texto/Número | Valor do campo Nome classe material |
| codigoPdmMaterial | Texto/Número | Código do registro associado |
| nomePdmMaterial | Texto/Número | Valor do campo Nome pdm material |
| codigoSecaoServico | Texto/Número | Código do registro associado |
| nomeSecaoServico | Texto/Número | Valor do campo Nome secao servico |
| codigoDivisaoServico | Texto/Número | Código do registro associado |
| nomeDivisaoServico | Texto/Número | Valor do campo Nome divisao servico |
| codigoGrupoServico | Texto/Número | Código do registro associado |
| nomeGrupoServico | Texto/Número | Valor do campo Nome grupo servico |
| codigoClasseServico | Texto/Número | Código do registro associado |
| nomeClasseServico | Texto/Número | Valor do campo Nome classe servico |
| codigoSubclasseServico | Texto/Número | Código do registro associado |
| nomeSubclasseServico | Texto/Número | Valor do campo Nome subclasse servico |
| codigoItemCatalogo | Texto/Número | Código do item no catálogo de materiais ou serviços |
| descricaoItemCatalogo | Texto/Número | Valor do campo Descricao item catalogo |
| siglaUnidadeFornecimento | Texto/Número | Sigla da unidade de fornecimento |
| nomeUnidadeFornecimento | Texto/Número | Nome da unidade de fornecimento |
| quantidadeItem | Texto/Número | Valor do campo Quantidade item |
| valorUnitarioItem | Texto/Número | Valor do campo Valor unitario item |
| valorTotalItem | Texto/Número | Valor do campo Valor total item |
| tituloProjetoCompra | Texto/Número | Valor do campo Titulo projeto compra |
| descricaoProjetoCompra | Texto/Número | Valor do campo Descricao projeto compra |
| anoPcaProjetoCompra | Texto/Número | Ano do projeto de compra no PCA |
| dataInicioProcessoCompra | Texto/Número | Data correspondente ao registro |
| dataFimProcessoCompra | Texto/Número | Data correspondente ao registro |
| duracaoProcessoCompra | Texto/Número | Valor do campo Duracao processo compra |
| numeroItemPncp | Texto/Número | Valor do campo Numero item pncp |
| statusContratacaoExecucao | Texto/Número | Status do registro. 0 – False/Inativo; 1 – True/Ativo |
| dataHoraPublicacaoPncp | Texto/Número | Data correspondente ao registro |
| dataHoraAtualizacaoArtefato | Texto/Número | Data correspondente ao registro |
| dataHoraAtualizacaoProjetoCompra | Texto/Número | Data correspondente ao registro |
| dataHoraAtualizacaoDfd | Texto/Número | Data correspondente ao registro |
| dataHoraAtualizacaoItem | Texto/Número | Data e hora da última atualização do item |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoUasg": "string",
"nomeUasg": "string",
"orgao": "string",
"numeroArtefato": 0,
"anoArtefato": 0,
"codigoEstadoArtefato": 0,
"codigoCategoriaArtefato": 0,
"descricaoArtefato": "string",
"codigoTipoArtefato": 0,
"ordemDfd": 0,
"descricaoObjetoDfd": "string",
"nivelPrioridadeDfd": 0,
"dataPrevistaFormalizacaoDemanda": "2024-01-15T10:30:00",
"codigoAreaDfd": "string",
"tipoItem": "string",
"itemSustentavel": true,
"codigoGrupoMaterial": 0,
"nomeGrupoMaterial": "string",
"codigoClasseMaterial": 0,
"nomeClasseMaterial": "string",
"codigoPdmMaterial": 0,
"nomePdmMaterial": "string",
"codigoSecaoServico": 0,
"nomeSecaoServico": "string",
"codigoDivisaoServico": 0,
"nomeDivisaoServico": "string",
"codigoGrupoServico": 0,
"nomeGrupoServico": "string",
"codigoClasseServico": 0,
"nomeClasseServico": "string",
"codigoSubclasseServico": 0,
"nomeSubclasseServico": "string",
"codigoItemCatalogo": "string",
"descricaoItemCatalogo": "string",
"siglaUnidadeFornecimento": "string",
"nomeUnidadeFornecimento": "string",
"quantidadeItem": 0,
"valorUnitarioItem": 0,
"valorTotalItem": 0,
"tituloProjetoCompra": "string",
"descricaoProjetoCompra": "string",
"anoPcaProjetoCompra": 0,
"dataInicioProcessoCompra": "2024-01-15T10:30:00",
"dataFimProcessoCompra": "2024-01-15T10:30:00",
"duracaoProcessoCompra": 0,
"numeroItemPncp": 0,
"statusContratacaoExecucao": 0,
"dataHoraPublicacaoPncp": "2024-01-15T10:30:00",
"dataHoraAtualizacaoArtefato": "2024-01-15T10:30:00",
"dataHoraAtualizacaoProjetoCompra": "2024-01-15T10:30:00",
"dataHoraAtualizacaoDfd": "2024-01-15T10:30:00",
"dataHoraAtualizacaoItem": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

### 7.2.1. consultarPgcDetalheCatalogo_CSV

Serviço para obter dados e consultar o endpoint consultarPgcDetalheCatalogo_CSV.

> Este endpoint possui os mesmos parâmetros e dados de retorno do endpoint anterior, porém a resposta é retornada no formato `.csv` em vez de JSON.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pgc/2.1_consultarPgcDetalheCatalogo_CSV`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pgc/2.1_consultarPgcDetalheCatalogo_CSV' \
  -H 'accept: */*'
```


[Voltar ao sumário](#sumário)

## 7.3. consultarPgcAgregacao

Serviço para obter dados e consultar o endpoint consultarPgcAgregacao.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pgc/3_consultarPgcAgregacao`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pgc/3_consultarPgcAgregacao' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| orgao | string | <span class="badge-req">🔴 Sim</span> | CNPJ do órgão (sem máscara) |
| ano | integer | <span class="badge-req">🔴 Sim</span> | Valor do campo Ano |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| orgao | Texto/Número | CNPJ do órgão (sem máscara) |
| ano | Texto/Número | Valor do campo Ano |
| poder | Texto/Número | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| esfera | Texto/Número | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| dataHoraPublicacaoPncp | Texto/Número | Data correspondente ao registro |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| quantidadeTotalItens | Texto/Número | Valor do campo Quantidade total itens |
| valorTotalEstimado | Texto/Número | Valor do campo Valor total estimado |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"orgao": "string",
"ano": 0,
"poder": "string",
"esfera": "string",
"dataHoraPublicacaoPncp": "2024-01-15T10:30:00",
"dataHoraAtualizacao": "2024-01-15T10:30:00",
"quantidadeTotalItens": 0,
"valorTotalEstimado": 0
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

### 7.3.1. consultarPgcAgregacao_CSV

Serviço para obter dados e consultar o endpoint consultarPgcAgregacao_CSV.

> Este endpoint possui os mesmos parâmetros e dados de retorno do endpoint anterior, porém a resposta é retornada no formato `.csv` em vez de JSON.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pgc/3.1_consultarPgcAgregacao_CSV`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pgc/3.1_consultarPgcAgregacao_CSV' \
  -H 'accept: */*'
```


[Voltar ao sumário](#sumário)

---

# 8. Módulo UASG

Módulo para consulta de informações sobre as Unidades Administrativas de Serviços Gerais (UASG).

## 8.1. consultarUasg

Serviço para obter dados e consultar o endpoint consultarUasg.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-uasg/1_consultarUasg`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-uasg/1_consultarUasg' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| codigoUasg | string | <span class="badge-opt">⚪ Não</span> | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |
| usoSisg | boolean | <span class="badge-opt">⚪ Não</span> | Indica se a UASG usa o SISG. 0 – False/Não; 1 – True/Sim |
| cnpjCpfOrgao | string | <span class="badge-opt">⚪ Não</span> | CNPJ ou CPF do órgão |
| cnpjCpfOrgaoVinculado | string | <span class="badge-opt">⚪ Não</span> | CNPJ ou CPF do órgão vinculado |
| cnpjCpfOrgaoSuperior | string | <span class="badge-opt">⚪ Não</span> | CNPJ ou CPF do órgão superior |
| siglaUf | string | <span class="badge-opt">⚪ Não</span> | Sigla da unidade federativa (UF) |
| statusUasg | boolean | <span class="badge-req">🔴 Sim</span> | Status da UASG. 0 – False/Inativo; 1 – True/Ativo (Obrigatório) |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoUasg | Texto/Número | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |
| nomeUasg | Texto/Número | Nome da UASG |
| usoSisg | Texto/Número | Indica se a UASG usa o SISG. 0 – False/Não; 1 – True/Sim |
| adesaoSiasg | Texto/Número | Valor do campo Adesao siasg |
| siglaUf | Texto/Número | Sigla da unidade federativa (UF) |
| codigoMunicipio | Texto/Número | Código do município (IBGE) |
| codigoMunicipioIbge | Texto/Número | Código do registro associado |
| nomeMunicipioIbge | Texto/Número | Valor do campo Nome municipio ibge |
| codigoUnidadePolo | Texto/Número | Código do registro associado |
| nomeUnidadePolo | Texto/Número | Valor do campo Nome unidade polo |
| codigoUnidadeEspelho | Texto/Número | Código do registro associado |
| nomeUnidadeEspelho | Texto/Número | Valor do campo Nome unidade espelho |
| uasgCadastradora | Texto/Número | Valor do campo Uasg cadastradora |
| cnpjCpfUasg | Texto/Número | Valor do campo Cnpj cpf uasg |
| codigoOrgao | Texto/Número | Código do órgão |
| cnpjCpfOrgao | Texto/Número | CNPJ ou CPF do órgão |
| cnpjCpfOrgaoVinculado | Texto/Número | CNPJ ou CPF do órgão vinculado |
| cnpjCpfOrgaoSuperior | Texto/Número | CNPJ ou CPF do órgão superior |
| codigoSiorg | Texto/Número | Código do registro associado |
| statusUasg | Texto/Número | Status da UASG. 0 – False/Inativo; 1 – True/Ativo (Obrigatório) |
| dataImplantacaoSidec | Texto/Número | Data correspondente ao registro |
| dataHoraMovimento | Texto/Número | Data correspondente ao registro |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoUasg": "string",
"nomeUasg": "string",
"usoSisg": true,
"adesaoSiasg": true,
"siglaUf": "string",
"codigoMunicipio": 0,
"codigoMunicipioIbge": 0,
"nomeMunicipioIbge": "string",
"codigoUnidadePolo": 0,
"nomeUnidadePolo": "string",
"codigoUnidadeEspelho": 0,
"nomeUnidadeEspelho": "string",
"uasgCadastradora": true,
"cnpjCpfUasg": "string",
"codigoOrgao": 0,
"cnpjCpfOrgao": "string",
"cnpjCpfOrgaoVinculado": "string",
"cnpjCpfOrgaoSuperior": "string",
"codigoSiorg": "string",
"statusUasg": true,
"dataImplantacaoSidec": "2026-07-29T17:36:15.093Z",
"dataHoraMovimento": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

### 8.1.1. consultarUasg_CSV

Serviço para obter dados e consultar o endpoint consultarUasg_CSV.

> Este endpoint possui os mesmos parâmetros e dados de retorno do endpoint anterior, porém a resposta é retornada no formato `.csv` em vez de JSON.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-uasg/1.1_consultarUasg_CSV`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-uasg/1.1_consultarUasg_CSV' \
  -H 'accept: */*'
```


[Voltar ao sumário](#sumário)

## 8.2. consultarOrgao

Serviço para obter dados e consultar o endpoint consultarOrgao.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-uasg/2_consultarOrgao`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-uasg/2_consultarOrgao' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| cnpjCpfOrgao | string | <span class="badge-opt">⚪ Não</span> | CNPJ ou CPF do órgão |
| cnpjCpfOrgaoVinculado | string | <span class="badge-opt">⚪ Não</span> | CNPJ ou CPF do órgão vinculado |
| cnpjCpfOrgaoSuperior | string | <span class="badge-opt">⚪ Não</span> | CNPJ ou CPF do órgão superior |
| codigoOrgao | integer | <span class="badge-opt">⚪ Não</span> | Código do órgão |
| statusOrgao | boolean | <span class="badge-req">🔴 Sim</span> | Status do órgão. 0 – False/Inativo; 1 – True/Ativo (Obrigatório) |
| usoSisg | boolean | <span class="badge-opt">⚪ Não</span> | Indica se a UASG usa o SISG. 0 – False/Não; 1 – True/Sim |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoOrgao | Texto/Número | Código do órgão |
| nomeOrgao | Texto/Número | Nome do órgão |
| nomeMnemonicoOrgao | Texto/Número | Valor do campo Nome mnemonico orgao |
| cnpjCpfOrgao | Texto/Número | CNPJ ou CPF do órgão |
| codigoOrgaoVinculado | Texto/Número | Código do registro associado |
| cnpjCpfOrgaoVinculado | Texto/Número | CNPJ ou CPF do órgão vinculado |
| nomeOrgaoVinculado | Texto/Número | Valor do campo Nome orgao vinculado |
| codigoOrgaoSuperior | Texto/Número | Código do registro associado |
| cnpjCpfOrgaoSuperior | Texto/Número | CNPJ ou CPF do órgão superior |
| nomeOrgaoSuperior | Texto/Número | Valor do campo Nome orgao superior |
| codigoTipoAdministracao | Texto/Número | Código do registro associado |
| nomeTipoAdministracao | Texto/Número | Valor do campo Nome tipo administracao |
| poder | Texto/Número | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| esfera | Texto/Número | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| usoSisg | Texto/Número | Indica se a UASG usa o SISG. 0 – False/Não; 1 – True/Sim |
| statusOrgao | Texto/Número | Status do órgão. 0 – False/Inativo; 1 – True/Ativo (Obrigatório) |
| dataHoraMovimento | Texto/Número | Data correspondente ao registro |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoOrgao": 0,
"nomeOrgao": "string",
"nomeMnemonicoOrgao": "string",
"cnpjCpfOrgao": "string",
"codigoOrgaoVinculado": 0,
"cnpjCpfOrgaoVinculado": "string",
"nomeOrgaoVinculado": "string",
"codigoOrgaoSuperior": 0,
"cnpjCpfOrgaoSuperior": "string",
"nomeOrgaoSuperior": "string",
"codigoTipoAdministracao": 0,
"nomeTipoAdministracao": "string",
"poder": "string",
"esfera": "string",
"usoSisg": true,
"statusOrgao": true,
"dataHoraMovimento": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

### 8.2.1. consultarOrgao_CSV

Serviço para obter dados e consultar o endpoint consultarOrgao_CSV.

> Este endpoint possui os mesmos parâmetros e dados de retorno do endpoint anterior, porém a resposta é retornada no formato `.csv` em vez de JSON.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-uasg/2.1_consultarOrgao_CSV`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-uasg/2.1_consultarOrgao_CSV' \
  -H 'accept: */*'
```


[Voltar ao sumário](#sumário)

---

# 9. Módulo Legado

Possibilita a obtenção de dados sobre as licitações realizadas pelo Governo Federal de acordo com a Lei 8.666/93 e legislação correlata.

## 9.1. consultarLicitacao

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

[Voltar ao sumário](#sumário)

### 9.1.1. consultarLicitacao_Id

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


[Voltar ao sumário](#sumário)

## 9.2. consultarItemLicitacao

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

[Voltar ao sumário](#sumário)

### 9.2.1. consultarItemLicitacao_Id

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


[Voltar ao sumário](#sumário)

## 9.3. consultarPregoes

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
| numero | integer | <span class="badge-req">🔴 Sim</span> | Valor do campo Numero |
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

[Voltar ao sumário](#sumário)

### 9.3.1. consultarPregoes_Id

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


[Voltar ao sumário](#sumário)

## 9.4. consultarItensPregoes

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
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Id compra |
| id_compra_item | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Id compra item |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Dt alteracao |

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

[Voltar ao sumário](#sumário)

## 9.5. consultarComprasSemLicitacao

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

[Voltar ao sumário](#sumário)

### 9.5.1. consultarCompraSemLicitacao_Id

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
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Id compra |


[Voltar ao sumário](#sumário)

## 9.6. consultarCompraItensSemLicitacao

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

[Voltar ao sumário](#sumário)

### 9.6.1. consultarItensComprasSemLicitacao_Id

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


[Voltar ao sumário](#sumário)

## 9.7. consultarRdc

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
| situacao_aviso | strinng | <span class="badge-opt">⚪ Não</span> | Valor do campo Situacao aviso |
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

[Voltar ao sumário](#sumário)

---

# 10. Módulo Contratações

O Módulo Contratações oferece acesso a informações detalhadas sobre os procedimentos de contratação.

## 10.1. Indicadores de Modalidade
(Descrição dos indicadores de modalidade)

## 10.2. Modos de Disputa
(Descrição dos modos de disputa)

## 10.3. Critérios de Julgamento
(Descrição dos critérios de julgamento)

## 10.4. Amparos Legais
(Descrição dos amparos legais)

## 10.5. consultarContratacoes_PNCP_14133

Serviço para obter dados e consultar o endpoint consultarContratacoes_PNCP_14133.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-contratacoes/1_consultarContratacoes_PNCP_14133`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-contratacoes/1_consultarContratacoes_PNCP_14133' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| unidadeOrgaoCodigoUnidade | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Unidade orgao codigo unidade |
| codigoOrgao | integer | <span class="badge-opt">⚪ Não</span> | Código do órgão |
| orgaoEntidadeCnpj | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Orgao entidade cnpj |
| dataPublicacaoPncpInicial | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| dataPublicacaoPncpFinal | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| codigoModalidade | integer | <span class="badge-req">🔴 Sim</span> | Código do registro associado |
| unidadeOrgaoCodigoIbge | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Unidade orgao codigo ibge |
| unidadeOrgaoUfSigla | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Unidade orgao uf sigla |
| dataAualizacaoPncp | string | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro |
| amparoLegalCodigoPncp | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Amparo legal codigo pncp |
| contratacaoExcluida | boolean | <span class="badge-opt">⚪ Não</span> | Valor do campo Contratacao excluida |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| idCompra | Texto/Número | Código identificador único da compra |
| numeroControlePNCP | Texto/Número | Valor do campo Numero controle p n c p |
| anoCompraPncp | Texto/Número | Valor do campo Ano compra pncp |
| sequencialCompraPncp | Texto/Número | Valor do campo Sequencial compra pncp |
| orgaoEntidadeCnpj | Texto/Número | Valor do campo Orgao entidade cnpj |
| orgaoSubrogadoCnpj | Texto/Número | Valor do campo Orgao subrogado cnpj |
| codigoOrgao | Texto/Número | Código do órgão |
| orgaoEntidadeRazaoSocial | Texto/Número | Valor do campo Orgao entidade razao social |
| orgaoSubrogadoRazaoSocial | Texto/Número | Valor do campo Orgao subrogado razao social |
| orgaoEntidadeEsferaId | Texto/Número | Valor do campo Orgao entidade esfera id |
| orgaoSubrogadoEsferaId | Texto/Número | Valor do campo Orgao subrogado esfera id |
| orgaoEntidadePoderId | Texto/Número | Valor do campo Orgao entidade poder id |
| orgaoSubrogadoPoderId | Texto/Número | Valor do campo Orgao subrogado poder id |
| unidadeOrgaoCodigoUnidade | Texto/Número | Valor do campo Unidade orgao codigo unidade |
| unidadeSubrogadaCodigoUnidade | Texto/Número | Valor do campo Unidade subrogada codigo unidade |
| unidadeOrgaoNomeUnidade | Texto/Número | Valor do campo Unidade orgao nome unidade |
| unidadeSubrogadaNomeUnidade | Texto/Número | Valor do campo Unidade subrogada nome unidade |
| unidadeOrgaoUfSigla | Texto/Número | Valor do campo Unidade orgao uf sigla |
| unidadeSubrogadaUfSigla | Texto/Número | Valor do campo Unidade subrogada uf sigla |
| unidadeOrgaoMunicipioNome | Texto/Número | Valor do campo Unidade orgao municipio nome |
| unidadeSubrogadaMunicipioNome | Texto/Número | Valor do campo Unidade subrogada municipio nome |
| unidadeOrgaoCodigoIbge | Texto/Número | Valor do campo Unidade orgao codigo ibge |
| unidadeSubrogadaCodigoIbge | Texto/Número | Valor do campo Unidade subrogada codigo ibge |
| numeroCompra | Texto/Número | Valor do campo Numero compra |
| modalidadeIdPncp | Texto/Número | Valor do campo Modalidade id pncp |
| codigoModalidade | Texto/Número | Código do registro associado |
| modalidadeNome | Texto/Número | Valor do campo Modalidade nome |
| srp | Texto/Número | Valor do campo Srp |
| modoDisputaIdPncp | Texto/Número | Valor do campo Modo disputa id pncp |
| codigoModoDisputa | Texto/Número | Código do registro associado |
| amparoLegalCodigoPncp | Texto/Número | Valor do campo Amparo legal codigo pncp |
| amparoLegalNome | Texto/Número | Valor do campo Amparo legal nome |
| amparoLegalDescricao | Texto/Número | Valor do campo Amparo legal descricao |
| informacaoComplementar | Texto/Número | Valor do campo Informacao complementar |
| processo | Texto/Número | Valor do campo Processo |
| objetoCompra | Texto/Número | Descrição do objeto da compra |
| existeResultado | Texto/Número | Valor do campo Existe resultado |
| orcamentoSigilosoCodigo | Texto/Número | Valor do campo Orcamento sigiloso codigo |
| orcamentoSigilosoDescricao | Texto/Número | Valor do campo Orcamento sigiloso descricao |
| situacaoCompraIdPncp | Texto/Número | Valor do campo Situacao compra id pncp |
| situacaoCompraNomePncp | Texto/Número | Valor do campo Situacao compra nome pncp |
| tipoInstrumentoConvocatorioCodigoPncp | Texto/Número | Valor do campo Tipo instrumento convocatorio codigo pncp |
| tipoInstrumentoConvocatorioNome | Texto/Número | Valor do campo Tipo instrumento convocatorio nome |
| modoDisputaNomePncp | Texto/Número | Valor do campo Modo disputa nome pncp |
| valorTotalEstimado | Texto/Número | Valor do campo Valor total estimado |
| valorTotalHomologado | Texto/Número | Valor do campo Valor total homologado |
| dataInclusaoPncp | Texto/Número | Data correspondente ao registro |
| dataAtualizacaoPncp | Texto/Número | Data correspondente ao registro |
| dataPublicacaoPncp | Texto/Número | Data correspondente ao registro |
| dataAberturaPropostaPncp | Texto/Número | Data correspondente ao registro |
| dataEncerramentoPropostaPncp | Texto/Número | Data correspondente ao registro |
| contratacaoExcluida | Texto/Número | Valor do campo Contratacao excluida |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"idCompra": "string",
"numeroControlePNCP": "string",
"anoCompraPncp": 0,
"sequencialCompraPncp": 0,
"orgaoEntidadeCnpj": "string",
"orgaoSubrogadoCnpj": "string",
"codigoOrgao": 0,
"orgaoEntidadeRazaoSocial": "string",
"orgaoSubrogadoRazaoSocial": "string",
"orgaoEntidadeEsferaId": "string",
"orgaoSubrogadoEsferaId": "string",
"orgaoEntidadePoderId": "string",
"orgaoSubrogadoPoderId": "string",
"unidadeOrgaoCodigoUnidade": "string",
"unidadeSubrogadaCodigoUnidade": "string",
"unidadeOrgaoNomeUnidade": "string",
"unidadeSubrogadaNomeUnidade": "string",
"unidadeOrgaoUfSigla": "string",
"unidadeSubrogadaUfSigla": "string",
"unidadeOrgaoMunicipioNome": "string",
"unidadeSubrogadaMunicipioNome": "string",
"unidadeOrgaoCodigoIbge": 0,
"unidadeSubrogadaCodigoIbge": 0,
"numeroCompra": "string",
"modalidadeIdPncp": 0,
"codigoModalidade": 0,
"modalidadeNome": "string",
"srp": 0,
"modoDisputaIdPncp": 0,
"codigoModoDisputa": 0,
"amparoLegalCodigoPncp": 0,
"amparoLegalNome": "string",
"amparoLegalDescricao": "string",
"informacaoComplementar": "string",
"processo": "string",
"objetoCompra": "string",
"existeResultado": 0,
"orcamentoSigilosoCodigo": 0,
"orcamentoSigilosoDescricao": "string",
"situacaoCompraIdPncp": 0,
"situacaoCompraNomePncp": "string",
"tipoInstrumentoConvocatorioCodigoPncp": 0,
"tipoInstrumentoConvocatorioNome": "string",
"modoDisputaNomePncp": "string",
"valorTotalEstimado": 0,
"valorTotalHomologado": 0,
"dataInclusaoPncp": "2024-01-15 10:30:00",
"dataAtualizacaoPncp": "2024-01-15 10:30:00",
"dataPublicacaoPncp": "2024-01-15 10:30:00",
"dataAberturaPropostaPncp": "2024-01-15 10:30:00",
"dataEncerramentoPropostaPncp": "2024-01-15 10:30:00",
"contratacaoExcluida": 0
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

### 10.5.1. consultarContratacoes_PNCP_14133_Id

Serviço para obter dados e consultar o endpoint consultarContratacoes_PNCP_14133_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-contratacoes/1.1_consultarContratacoes_PNCP_14133_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-contratacoes/1.1_consultarContratacoes_PNCP_14133_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| tipo | string | <span class="badge-req">🔴 Sim</span> | Tipo do item do catálogo a consultar (ex: material ou serviço) |
| codigo | string | <span class="badge-req">🔴 Sim</span> | Código do item no catálogo |
| dataAtualizacaoPncp | string | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro |


[Voltar ao sumário](#sumário)

## 10.6. consultarItensContratacoes_PNCP_14133

Serviço para obter dados e consultar o endpoint consultarItensContratacoes_PNCP_14133.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-contratacoes/2_consultarItensContratacoes_PNCP_14133`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-contratacoes/2_consultarItensContratacoes_PNCP_14133' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| unidadeOrgaoCodigoUnidade | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Unidade orgao codigo unidade |
| orgaoEntidadeCnpj | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Orgao entidade cnpj |
| situacaoCompraItem | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Situacao compra item |
| materialOuServico | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Material ou servico |
| codigoClasse | integer | <span class="badge-opt">⚪ Não</span> | Código da classe do material/serviço |
| codigoGrupo | integer | <span class="badge-opt">⚪ Não</span> | Código do grupo do material/serviço |
| codItemCatalogo | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Cod item catalogo |
| temResultado | boolean | <span class="badge-opt">⚪ Não</span> | Valor do campo Tem resultado |
| codFornecedor | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Cod fornecedor |
| dataInclusaoPncpInicial | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| dataInclusaoPncpFinal | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| dataAtualizacaoPncp | string | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro |
| bps | boolean | <span class="badge-opt">⚪ Não</span> | Indica se está vinculado ao Banco de Preços em Saúde (BPS). 0 – False/Não; 1 – True/Sim |
| margemPreferenciaNormal | boolean | <span class="badge-opt">⚪ Não</span> | Valor do campo Margem preferencia normal |
| codigoNCM | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| codigoPdm | string | <span class="badge-opt">⚪ Não</span> | Código do Produto Descritivo Básico (PDM) |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| idCompra | Texto/Número | Código identificador único da compra |
| idCompraItem | Texto/Número | Identificador único do item da compra |
| idContratacaoPNCP | Texto/Número | Valor do campo Id contratacao p n c p |
| unidadeOrgaoCodigoUnidade | Texto/Número | Valor do campo Unidade orgao codigo unidade |
| orgaoEntidadeCnpj | Texto/Número | Valor do campo Orgao entidade cnpj |
| numeroItemPncp | Texto/Número | Valor do campo Numero item pncp |
| numeroItemCompra | Texto/Número | Número do item da compra |
| numeroGrupo | Texto/Número | Valor do campo Numero grupo |
| descricaoResumida | Texto/Número | Valor do campo Descricao resumida |
| materialOuServico | Texto/Número | Valor do campo Material ou servico |
| materialOuServicoNome | Texto/Número | Valor do campo Material ou servico nome |
| codigoClasse | Texto/Número | Código da classe do material/serviço |
| codigoGrupo | Texto/Número | Código do grupo do material/serviço |
| codItemCatalogo | Texto/Número | Valor do campo Cod item catalogo |
| descricaodetalhada | Texto/Número | Valor do campo Descricaodetalhada |
| unidadeMedida | Texto/Número | Valor do campo Unidade medida |
| orcamentoSigiloso | Texto/Número | Valor do campo Orcamento sigiloso |
| itemCategoriaIdPncp | Texto/Número | Valor do campo Item categoria id pncp |
| itemCategoriaNome | Texto/Número | Valor do campo Item categoria nome |
| criterioJulgamentoIdPncp | Texto/Número | Valor do campo Criterio julgamento id pncp |
| criterioJulgamentoNome | Texto/Número | Valor do campo Criterio julgamento nome |
| situacaoCompraItem | Texto/Número | Valor do campo Situacao compra item |
| situacaoCompraItemNome | Texto/Número | Valor do campo Situacao compra item nome |
| tipoBeneficio | Texto/Número | Valor do campo Tipo beneficio |
| tipoBeneficioNome | Texto/Número | Valor do campo Tipo beneficio nome |
| incentivoProdutivoBasico | Texto/Número | Valor do campo Incentivo produtivo basico |
| quantidade | Texto/Número | Quantidade adquirida |
| valorUnitarioEstimado | Texto/Número | Valor do campo Valor unitario estimado |
| valorTotal | Texto/Número | Valor do campo Valor total |
| temResultado | Texto/Número | Valor do campo Tem resultado |
| codFornecedor | Texto/Número | Valor do campo Cod fornecedor |
| nomeFornecedor | Texto/Número | Nome do fornecedor |
| quantidadeResultado | Texto/Número | Valor do campo Quantidade resultado |
| valorUnitarioResultado | Texto/Número | Valor do campo Valor unitario resultado |
| valorTotalResultado | Texto/Número | Valor do campo Valor total resultado |
| dataInclusaoPncp | Texto/Número | Data correspondente ao registro |
| dataAtualizacaoPncp | Texto/Número | Data correspondente ao registro |
| dataResultado | Texto/Número | Data do resultado da compra |
| margemPreferenciaNormal | Texto/Número | Valor do campo Margem preferencia normal |
| percentualMargemPreferenciaNormal | Texto/Número | Valor do campo Percentual margem preferencia normal |
| margemPreferenciaAdicional | Texto/Número | Valor do campo Margem preferencia adicional |
| percentualMargemPreferenciaAdicional | Texto/Número | Valor do campo Percentual margem preferencia adicional |
| codigoNCM | Texto/Número | Código do registro associado |
| descricaoNCM | Texto/Número | Valor do campo Descricao n c m |
| numeroControlePNCPCompra | Texto/Número | Valor do campo Numero controle p n c p compra |
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
"idCompra": "string",
"idCompraItem": "string",
"idContratacaoPNCP": "string",
"unidadeOrgaoCodigoUnidade": "string",
"orgaoEntidadeCnpj": "string",
"numeroItemPncp": 0,
"numeroItemCompra": 0,
"numeroGrupo": 0,
"descricaoResumida": "string",
"materialOuServico": "string",
"materialOuServicoNome": "string",
"codigoClasse": 0,
"codigoGrupo": 0,
"codItemCatalogo": 0,
"descricaodetalhada": "string",
"unidadeMedida": "string",
"orcamentoSigiloso": true,
"itemCategoriaIdPncp": 0,
"itemCategoriaNome": "string",
"criterioJulgamentoIdPncp": 0,
"criterioJulgamentoNome": "string",
"situacaoCompraItem": "string",
"situacaoCompraItemNome": "string",
"tipoBeneficio": "string",
"tipoBeneficioNome": "string",
"incentivoProdutivoBasico": true,
"quantidade": 0,
"valorUnitarioEstimado": 0,
"valorTotal": 0,
"temResultado": true,
"codFornecedor": "string",
"nomeFornecedor": "string",
"quantidadeResultado": 0,
"valorUnitarioResultado": 0,
"valorTotalResultado": 0,
"dataInclusaoPncp": "2024-01-15 10:30:00",
"dataAtualizacaoPncp": "2024-01-15 10:30:00",
"dataResultado": "string",
"margemPreferenciaNormal": true,
"percentualMargemPreferenciaNormal": 0,
"margemPreferenciaAdicional": true,
"percentualMargemPreferenciaAdicional": 0,
"codigoNCM": "string",
"descricaoNCM": "string",
"numeroControlePNCPCompra": "string",
"codigoPdm": "string",
"nomePdm": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

### 10.6.1. consultarItensContratacoes_PNCP_14133_Id

Serviço para obter dados e consultar o endpoint consultarItensContratacoes_PNCP_14133_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-contratacoes/2.1_consultarItensContratacoes_PNCP_14133_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-contratacoes/2.1_consultarItensContratacoes_PNCP_14133_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| tipo | string | <span class="badge-req">🔴 Sim</span> | Tipo do item do catálogo a consultar (ex: material ou serviço) |
| codigo | string | <span class="badge-req">🔴 Sim</span> | Código do item no catálogo |
| idCompraItem | string | <span class="badge-opt">⚪ Não</span> | Identificador único do item da compra |
| dataAtualizacaoPncp | string | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro |


[Voltar ao sumário](#sumário)

## 10.7. consultarResultadoItensContratacoes_PNCP_14133

Serviço para obter dados e consultar o endpoint consultarResultadoItensContratacoes_PNCP_14133.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-contratacoes/3_consultarResultadoItensContratacoes_PNCP_14133`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-contratacoes/3_consultarResultadoItensContratacoes_PNCP_14133' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| unidadeOrgaoCodigoUnidade | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Unidade orgao codigo unidade |
| orgaoEntidadeCnpj | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Orgao entidade cnpj |
| niFornecedor | string | <span class="badge-opt">⚪ Não</span> | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| codigoPais | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| porteFornecedorId | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Porte fornecedor id |
| naturezaJuridicaId | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Natureza juridica id |
| situacaoCompraItemResultadoId | integer | <span class="badge-opt">⚪ Não</span> | Valor do campo Situacao compra item resultado id |
| valorUnitarioHomologadoInicial | number | <span class="badge-opt">⚪ Não</span> | Valor do campo Valor unitario homologado inicial |
| valorUnitarioHomologadoFinal | number | <span class="badge-opt">⚪ Não</span> | Valor do campo Valor unitario homologado final |
| valorTotalHomologadoInicial | number | <span class="badge-opt">⚪ Não</span> | Valor do campo Valor total homologado inicial |
| valorTotalHomologadoFinal | number | <span class="badge-opt">⚪ Não</span> | Valor do campo Valor total homologado final |
| dataResultadoPncpInicial | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| dataResultadoPncpFinal | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| aplicacaoMargemPreferencia | boolean | <span class="badge-opt">⚪ Não</span> | Valor do campo Aplicacao margem preferencia |
| aplicacaoBeneficioMeepp | boolean | <span class="badge-opt">⚪ Não</span> | Valor do campo Aplicacao beneficio meepp |
| aplicacaoCriterioDesempate | boolean | <span class="badge-opt">⚪ Não</span> | Valor do campo Aplicacao criterio desempate |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| idCompraItem | Texto/Número | Identificador único do item da compra |
| idCompra | Texto/Número | Código identificador único da compra |
| idContratacaoPNCP | Texto/Número | Valor do campo Id contratacao p n c p |
| unidadeOrgaoCodigoUnidade | Texto/Número | Valor do campo Unidade orgao codigo unidade |
| unidadeOrgaoUfSigla | Texto/Número | Valor do campo Unidade orgao uf sigla |
| numeroItemPncp | Texto/Número | Valor do campo Numero item pncp |
| sequencialResultado | Texto/Número | Valor do campo Sequencial resultado |
| niFornecedor | Texto/Número | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| tipoPessoa | Texto/Número | Valor do campo Tipo pessoa |
| nomeRazaoSocialFornecedor | Texto/Número | Valor do campo Nome razao social fornecedor |
| codigoPais | Texto/Número | Código do registro associado |
| indicadorSubcontratacao | Texto/Número | Valor do campo Indicador subcontratacao |
| ordemClassificacaoSrp | Texto/Número | Valor do campo Ordem classificacao srp |
| quantidadeHomologada | Texto/Número | Valor do campo Quantidade homologada |
| valorUnitarioHomologado | Texto/Número | Valor do campo Valor unitario homologado |
| valorTotalHomologado | Texto/Número | Valor do campo Valor total homologado |
| percentualDesconto | Texto/Número | Valor do campo Percentual desconto |
| situacaoCompraItemResultadoId | Texto/Número | Valor do campo Situacao compra item resultado id |
| situacaoCompraItemResultadoNome | Texto/Número | Valor do campo Situacao compra item resultado nome |
| motivoCancelamento | Texto/Número | Valor do campo Motivo cancelamento |
| porteFornecedorId | Texto/Número | Valor do campo Porte fornecedor id |
| porteFornecedorNome | Texto/Número | Valor do campo Porte fornecedor nome |
| naturezaJuridicaNome | Texto/Número | Valor do campo Natureza juridica nome |
| naturezaJuridicaId | Texto/Número | Valor do campo Natureza juridica id |
| dataInclusaoPncp | Texto/Número | Data correspondente ao registro |
| dataAtualizacaoPncp | Texto/Número | Data correspondente ao registro |
| dataCancelamentoPncp | Texto/Número | Data correspondente ao registro |
| dataResultadoPncp | Texto/Número | Data correspondente ao registro |
| numeroControlePNCPCompra | Texto/Número | Valor do campo Numero controle p n c p compra |
| orgaoEntidadeCnpj | Texto/Número | Valor do campo Orgao entidade cnpj |
| aplicacaoMargemPreferencia | Texto/Número | Valor do campo Aplicacao margem preferencia |
| amparoLegalMargemPreferenciaId | Texto/Número | Valor do campo Amparo legal margem preferencia id |
| amparoLegalMargemPreferenciaNome | Texto/Número | Valor do campo Amparo legal margem preferencia nome |
| aplicacaoBeneficioMeepp | Texto/Número | Valor do campo Aplicacao beneficio meepp |
| aplicacaoCriterioDesempate | Texto/Número | Valor do campo Aplicacao criterio desempate |
| amparoLegalCriterioDesempateId | Texto/Número | Valor do campo Amparo legal criterio desempate id |
| amparoLegalCriterioDesempateNome | Texto/Número | Valor do campo Amparo legal criterio desempate nome |
| moedaEstrangeiraId | Texto/Número | Valor do campo Moeda estrangeira id |
| dataCotacaoMoedaEstrangeira | Texto/Número | Data correspondente ao registro |
| valorNominalMoedaEstrangeira | Texto/Número | Valor do campo Valor nominal moeda estrangeira |
| paisOrigemProdutoServicoId | Texto/Número | Valor do campo Pais origem produto servico id |
| timezoneCotacaoMoedaEstrangeira | Texto/Número | Valor do campo Timezone cotacao moeda estrangeira |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"idCompraItem": "string",
"idCompra": "string",
"idContratacaoPNCP": "string",
"unidadeOrgaoCodigoUnidade": "string",
"unidadeOrgaoUfSigla": "string",
"numeroItemPncp": 0,
"sequencialResultado": 0,
"niFornecedor": "string",
"tipoPessoa": "string",
"nomeRazaoSocialFornecedor": "string",
"codigoPais": "string",
"indicadorSubcontratacao": true,
"ordemClassificacaoSrp": 0,
"quantidadeHomologada": 0,
"valorUnitarioHomologado": 0,
"valorTotalHomologado": 0,
"percentualDesconto": 0,
"situacaoCompraItemResultadoId": 0,
"situacaoCompraItemResultadoNome": "string",
"motivoCancelamento": "string",
"porteFornecedorId": 0,
"porteFornecedorNome": "string",
"naturezaJuridicaNome": "string",
"naturezaJuridicaId": "string",
"dataInclusaoPncp": "2024-01-15 10:30:00",
"dataAtualizacaoPncp": "2024-01-15 10:30:00",
"dataCancelamentoPncp": "2024-01-15 10:30:00",
"dataResultadoPncp": "2024-01-15 10:30:00",
"numeroControlePNCPCompra": "string",
"orgaoEntidadeCnpj": "string",
"aplicacaoMargemPreferencia": true,
"amparoLegalMargemPreferenciaId": 0,
"amparoLegalMargemPreferenciaNome": "string",
"aplicacaoBeneficioMeepp": true,
"aplicacaoCriterioDesempate": true,
"amparoLegalCriterioDesempateId": 0,
"amparoLegalCriterioDesempateNome": "string",
"moedaEstrangeiraId": 0,
"dataCotacaoMoedaEstrangeira": "2024-01-15 10:30:00",
"valorNominalMoedaEstrangeira": 0,
"paisOrigemProdutoServicoId": "string",
"timezoneCotacaoMoedaEstrangeira": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

### 10.7.1. consultarResultadoItensContratacoes_PNCP_14133_Id

Serviço para obter dados e consultar o endpoint consultarResultadoItensContratacoes_PNCP_14133_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-contratacoes/3.1_consultarResultadoItensContratacoes_PNCP_14133_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-contratacoes/3.1_consultarResultadoItensContratacoes_PNCP_14133_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| tipo | string | <span class="badge-req">🔴 Sim</span> | Tipo do item do catálogo a consultar (ex: material ou serviço) |
| codigo | string | <span class="badge-req">🔴 Sim</span> | Código do item no catálogo |
| idCompraItem | string | <span class="badge-opt">⚪ Não</span> | Identificador único do item da compra |
| dataAtualizacaoPncp | string | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro |


[Voltar ao sumário](#sumário)

---

# 11. Módulo ARP — Ata de Registro de Preços

O Módulo ARP (Ata de Registro de Preços) permite consultar atas vigentes, itens, quantitativos e histórico de adesões.

## 11.1. consultarARP

Serviço para obter dados e consultar o endpoint consultarARP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-arp/1_consultarARP`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-arp/1_consultarARP' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo                     | Tipo    | Obrigatório | Descrição                                                                                                     |
| ------------------------- | ------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| pagina                    | integer | <span class="badge-opt">⚪ Não</span>         | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina             | integer | <span class="badge-opt">⚪ Não</span>         | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10)            |
| codigoUnidadeGerenciadora | string  | <span class="badge-opt">⚪ Não</span>         | Código do registro associado                                                                                  |
| codigoModalidadeCompra    | string  | <span class="badge-opt">⚪ Não</span>         | Código do registro associado                                                                                  |
| numeroAtaRegistroPreco    | string  | <span class="badge-opt">⚪ Não</span>         | Valor do campo Numero ata registro preco                                                                      |
| dataVigenciaInicialMin    | string  | <span class="badge-req">🔴 Sim</span>         | Data correspondente ao registro                                                                               |
| dataVigenciaInicialMax    | string  | <span class="badge-req">🔴 Sim</span>         | Data correspondente ao registro                                                                               |
| dataAssinaturaInicial     | string  | <span class="badge-opt">⚪ Não</span>         | Data correspondente ao registro                                                                               |
| dataAssinaturaFinal       | string  | <span class="badge-opt">⚪ Não</span>         | Data correspondente ao registro                                                                               |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| numeroAtaRegistroPreco | Texto/Número | Valor do campo Numero ata registro preco |
| codigoUnidadeGerenciadora | Texto/Número | Código do registro associado |
| nomeUnidadeGerenciadora | Texto/Número | Valor do campo Nome unidade gerenciadora |
| codigoOrgao | Texto/Número | Código do órgão |
| nomeOrgao | Texto/Número | Nome do órgão |
| linkAtaPNCP | Texto/Número | Valor do campo Link ata p n c p |
| linkCompraPNCP | Texto/Número | Valor do campo Link compra p n c p |
| numeroCompra | Texto/Número | Valor do campo Numero compra |
| anoCompra | Texto/Número | Valor do campo Ano compra |
| codigoModalidadeCompra | Texto/Número | Código do registro associado |
| nomeModalidadeCompra | Texto/Número | Valor do campo Nome modalidade compra |
| dataAssinatura | Texto/Número | Data correspondente ao registro |
| dataVigenciaInicial | Texto/Número | Data correspondente ao registro |
| dataVigenciaFinal | Texto/Número | Data correspondente ao registro |
| valorTotal | Texto/Número | Valor do campo Valor total |
| statusAta | Texto/Número | Status do registro. 0 – False/Inativo; 1 – True/Ativo |
| objeto | Texto/Número | Valor do campo Objeto |
| quantidadeItens | Texto/Número | Valor do campo Quantidade itens |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| dataHoraInclusao | Texto/Número | Data correspondente ao registro |
| dataHoraExclusao | Texto/Número | Data correspondente ao registro |
| ataExcluido | Texto/Número | Valor do campo Ata excluido |
| numeroControlePncpAta | Texto/Número | Valor do campo Numero controle pncp ata |
| numeroControlePncpCompra | Texto/Número | Valor do campo Numero controle pncp compra |
| idCompra | Texto/Número | Código identificador único da compra |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"numeroAtaRegistroPreco": "string",
"codigoUnidadeGerenciadora": "string",
"nomeUnidadeGerenciadora": "string",
"codigoOrgao": 1073741824,
"nomeOrgao": "string",
"linkAtaPNCP": "string",
"linkCompraPNCP": "string",
"numeroCompra": "string",
"anoCompra": "string",
"codigoModalidadeCompra": "string",
"nomeModalidadeCompra": "string",
"dataAssinatura": "2024-01-15",
"dataVigenciaInicial": "2024-01-15",
"dataVigenciaFinal": "2024-01-15",
"valorTotal": 0,
"statusAta": "string",
"objeto": "string",
"quantidadeItens": 0,
"dataHoraAtualizacao": "2024-01-15 10:30:00",
"dataHoraInclusao": "2024-01-15 10:30:00",
"dataHoraExclusao": "2024-01-15 10:30:00",
"ataExcluido": true,
"numeroControlePncpAta": "string",
"numeroControlePncpCompra": "string",
"idCompra": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

### 11.1.1. consultarARP_Id

Serviço para obter dados e consultar o endpoint consultarARP_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-arp/1.1_consultarARP_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-arp/1.1_consultarARP_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| numeroControlePncpAta | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Numero controle pncp ata |
| dataAtualizacao | string | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro |


[Voltar ao sumário](#sumário)

### 11.1.2. consultarARP_FimVigencia

Serviço para obter dados e consultar o endpoint consultarARP_FimVigencia.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-arp/1.2_consultarARP_FimVigencia`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-arp/1.2_consultarARP_FimVigencia' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoUnidadeGerenciadora | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| codigoModalidadeCompra | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| numeroAtaRegistroPreco | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Numero ata registro preco |
| dataVigenciaFinalMin | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| dataVigenciaFinalMax | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| dataAssinaturaInicial | string | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro |
| dataAssinaturaFinal | string | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| numeroAtaRegistroPreco | Texto/Número | Valor do campo Numero ata registro preco |
| codigoUnidadeGerenciadora | Texto/Número | Código do registro associado |
| nomeUnidadeGerenciadora | Texto/Número | Valor do campo Nome unidade gerenciadora |
| codigoOrgao | Texto/Número | Código do órgão |
| nomeOrgao | Texto/Número | Nome do órgão |
| linkAtaPNCP | Texto/Número | Valor do campo Link ata p n c p |
| linkCompraPNCP | Texto/Número | Valor do campo Link compra p n c p |
| numeroCompra | Texto/Número | Valor do campo Numero compra |
| anoCompra | Texto/Número | Valor do campo Ano compra |
| codigoModalidadeCompra | Texto/Número | Código do registro associado |
| nomeModalidadeCompra | Texto/Número | Valor do campo Nome modalidade compra |
| dataAssinatura | Texto/Número | Data correspondente ao registro |
| dataVigenciaInicial | Texto/Número | Data correspondente ao registro |
| dataVigenciaFinal | Texto/Número | Data correspondente ao registro |
| valorTotal | Texto/Número | Valor do campo Valor total |
| statusAta | Texto/Número | Status do registro. 0 – False/Inativo; 1 – True/Ativo |
| objeto | Texto/Número | Valor do campo Objeto |
| quantidadeItens | Texto/Número | Valor do campo Quantidade itens |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| dataHoraInclusao | Texto/Número | Data correspondente ao registro |
| dataHoraExclusao | Texto/Número | Data correspondente ao registro |
| ataExcluido | Texto/Número | Valor do campo Ata excluido |
| numeroControlePncpAta | Texto/Número | Valor do campo Numero controle pncp ata |
| numeroControlePncpCompra | Texto/Número | Valor do campo Numero controle pncp compra |
| idCompra | Texto/Número | Código identificador único da compra |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"numeroAtaRegistroPreco": "string",
"codigoUnidadeGerenciadora": "string",
"nomeUnidadeGerenciadora": "string",
"codigoOrgao": 1073741824,
"nomeOrgao": "string",
"linkAtaPNCP": "string",
"linkCompraPNCP": "string",
"numeroCompra": "string",
"anoCompra": "string",
"codigoModalidadeCompra": "string",
"nomeModalidadeCompra": "string",
"dataAssinatura": "2024-01-15",
"dataVigenciaInicial": "2024-01-15",
"dataVigenciaFinal": "2024-01-15",
"valorTotal": 0,
"statusAta": "string",
"objeto": "string",
"quantidadeItens": 0,
"dataHoraAtualizacao": "2024-01-15 10:30:00",
"dataHoraInclusao": "2024-01-15 10:30:00",
"dataHoraExclusao": "2024-01-15 10:30:00",
"ataExcluido": true,
"numeroControlePncpAta": "string",
"numeroControlePncpCompra": "string",
"idCompra": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

## 11.2. consultarARPItem

Serviço para obter dados e consultar o endpoint consultarARPItem.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-arp/2_consultarARPItem`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-arp/2_consultarARPItem' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoUnidadeGerenciadora | integer | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| codigoModalidadeCompra | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| dataVigenciaInicialMin | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| dataVigenciaInicialMax | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| dataAssinaturaInicial | string | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro |
| dataAssinaturaFinal | string | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro |
| numeroItem | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Numero item |
| codigoItem | integer | <span class="badge-opt">⚪ Não</span> | Código do item do material/serviço |
| tipoItem | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Tipo item |
| niFornecedor | string | <span class="badge-opt">⚪ Não</span> | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| codigoPdm | integer | <span class="badge-opt">⚪ Não</span> | Código do Produto Descritivo Básico (PDM) |
| numeroCompra | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Numero compra |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| numeroAtaRegistroPreco | Texto/Número | Valor do campo Numero ata registro preco |
| codigoUnidadeGerenciadora | Texto/Número | Código do registro associado |
| numeroCompra | Texto/Número | Valor do campo Numero compra |
| anoCompra | Texto/Número | Valor do campo Ano compra |
| codigoModalidadeCompra | Texto/Número | Código do registro associado |
| dataAssinatura | Texto/Número | Data correspondente ao registro |
| dataVigenciaInicial | Texto/Número | Data correspondente ao registro |
| dataVigenciaFinal | Texto/Número | Data correspondente ao registro |
| numeroItem | Texto/Número | Valor do campo Numero item |
| codigoItem | Texto/Número | Código do item do material/serviço |
| descricaoItem | Texto/Número | Descrição do item |
| tipoItem | Texto/Número | Valor do campo Tipo item |
| quantidadeHomologadaItem | Texto/Número | Valor do campo Quantidade homologada item |
| classificacaoFornecedor | Texto/Número | Valor do campo Classificacao fornecedor |
| niFornecedor | Texto/Número | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| nomeRazaoSocialFornecedor | Texto/Número | Valor do campo Nome razao social fornecedor |
| quantidadeHomologadaVencedor | Texto/Número | Valor do campo Quantidade homologada vencedor |
| valorUnitario | Texto/Número | Valor do campo Valor unitario |
| valorTotal | Texto/Número | Valor do campo Valor total |
| maximoAdesao | Texto/Número | Valor do campo Maximo adesao |
| nomeUnidadeGerenciadora | Texto/Número | Valor do campo Nome unidade gerenciadora |
| nomeModalidadeCompra | Texto/Número | Valor do campo Nome modalidade compra |
| idCompra | Texto/Número | Código identificador único da compra |
| numeroControlePncpCompra | Texto/Número | Valor do campo Numero controle pncp compra |
| dataHoraInclusao | Texto/Número | Data correspondente ao registro |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| quantidadeEmpenhada | Texto/Número | Valor do campo Quantidade empenhada |
| percentualMaiorDesconto | Texto/Número | Maior percentual de desconto aplicado |
| situacaoSicaf | Texto/Número | Valor do campo Situacao sicaf |
| dataHoraExclusao | Texto/Número | Data correspondente ao registro |
| itemExcluido | Texto/Número | Valor do campo Item excluido |
| numeroControlePncpAta | Texto/Número | Valor do campo Numero controle pncp ata |
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
"numeroAtaRegistroPreco": "string",
"codigoUnidadeGerenciadora": "string",
"numeroCompra": "string",
"anoCompra": "string",
"codigoModalidadeCompra": "string",
"dataAssinatura": "2024-01-15 10:30:00",
"dataVigenciaInicial": "2026-08-10",
"dataVigenciaFinal": "2026-08-10",
"numeroItem": "string",
"codigoItem": 0,
"descricaoItem": "string",
"tipoItem": "string",
"quantidadeHomologadaItem": 0,
"classificacaoFornecedor": "string",
"niFornecedor": "string",
"nomeRazaoSocialFornecedor": "string",
"quantidadeHomologadaVencedor": 0,
"valorUnitario": 0,
"valorTotal": 0,
"maximoAdesao": 0,
"nomeUnidadeGerenciadora": "string",
"nomeModalidadeCompra": "string",
"idCompra": "string",
"numeroControlePncpCompra": "string",
"dataHoraInclusao": "2024-01-15 10:30:00",
"dataHoraAtualizacao": "2024-01-15 10:30:00",
"quantidadeEmpenhada": 0,
"percentualMaiorDesconto": 0,
"situacaoSicaf": "string",
"dataHoraExclusao": "2024-01-15 10:30:00",
"itemExcluido": true,
"numeroControlePncpAta": "string",
"codigoPdm": 0,
"nomePdm": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

### 11.2.1. consultarARPItem_Id

Serviço para obter dados e consultar o endpoint consultarARPItem_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-arp/2.1_consultarARPItem_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-arp/2.1_consultarARPItem_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| numeroControlePncpAta | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Numero controle pncp ata |
| dataAtualizacao | string | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro |


[Voltar ao sumário](#sumário)

## 11.3. consultarUnidadesItem

Serviço para obter dados e consultar o endpoint consultarUnidadesItem.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-arp/3_consultarUnidadesItem`

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-arp/3_consultarUnidadesItem' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| numeroAta | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Numero ata |
| unidadeGerenciadora | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Unidade gerenciadora |
| numeroItem | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Numero item |
| dataAtualizacao | string | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| numeroAta | Texto/Número | Valor do campo Numero ata |
| unidadeGerenciadora | Texto/Número | Valor do campo Unidade gerenciadora |
| numeroItem | Texto/Número | Valor do campo Numero item |
| codigoPdm | Texto/Número | Código do Produto Descritivo Básico (PDM) |
| descricaoItem | Texto/Número | Descrição do item |
| fornecedor | Texto/Número | Valor do campo Fornecedor |
| quantidadeRegistrada | Texto/Número | Valor do campo Quantidade registrada |
| saldoAdesoes | Texto/Número | Valor do campo Saldo adesoes |
| saldoRemanejamentoEmpenho | Texto/Número | Valor do campo Saldo remanejamento empenho |
| qtdLimiteAdesao | Texto/Número | Valor do campo Qtd limite adesao |
| qtdLimiteInformadoCompra | Texto/Número | Valor do campo Qtd limite informado compra |
| aceitaAdesao | Texto/Número | Valor do campo Aceita adesao |
| dataHoraInclusao | Texto/Número | Data correspondente ao registro |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| dataHoraExclusao | Texto/Número | Data correspondente ao registro |
| codigoUnidade | Texto/Número | Código do registro associado |
| nomeUnidade | Texto/Número | Valor do campo Nome unidade |
| tipoUnidade | Texto/Número | Valor do campo Tipo unidade |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"numeroAta": "string",
"unidadeGerenciadora": "string",
"numeroItem": "string",
"codigoPdm": "string",
"descricaoItem": "string",
"fornecedor": "string",
"quantidadeRegistrada": 0,
"saldoAdesoes": 0,
"saldoRemanejamentoEmpenho": 0,
"qtdLimiteAdesao": 0,
"qtdLimiteInformadoCompra": 0,
"aceitaAdesao": true,
"dataHoraInclusao": "2024-01-15 10:30:00",
"dataHoraAtualizacao": "2024-01-15 10:30:00",
"dataHoraExclusao": "2024-01-15 10:30:00",
"codigoUnidade": "string",
"nomeUnidade": "string",
"tipoUnidade": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

## 11.4. consultarEmpenhosSaldoItem

Serviço para obter dados e consultar o endpoint consultarEmpenhosSaldoItem.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-arp/4_consultarEmpenhosSaldoItem`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-arp/4_consultarEmpenhosSaldoItem' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| numeroAta | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Numero ata |
| unidadeGerenciadora | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Unidade gerenciadora |
| dataAtualizacao | string | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| numeroItem | Texto/Número | Valor do campo Numero item |
| unidade | Texto/Número | Valor do campo Unidade |
| tipo | Texto/Número | Tipo do item do catálogo a consultar (ex: material ou serviço) |
| quantidadeRegistrada | Texto/Número | Valor do campo Quantidade registrada |
| quantidadeEmpenhada | Texto/Número | Valor do campo Quantidade empenhada |
| saldoEmpenho | Texto/Número | Valor do campo Saldo empenho |
| dataHoraInclusao | Texto/Número | Data correspondente ao registro |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"numeroItem": "string",
"unidade": "string",
"tipo": "string",
"quantidadeRegistrada": 0,
"quantidadeEmpenhada": 0,
"saldoEmpenho": 0,
"dataHoraInclusao": "2024-01-15 10:30:00",
"dataHoraAtualizacao": "2024-01-15 10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

## 11.5. consultarAdesoesItem

Serviço para obter dados e consultar o endpoint consultarAdesoesItem.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-arp/5_consultarAdesoesItem` 

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-arp/5_consultarAdesoesItem' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| numeroAta | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Numero ata |
| unidadeGerenciadora | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Unidade gerenciadora |
| numeroItem | string | <span class="badge-req">🔴 Sim</span> | Valor do campo Numero item |
| unidade | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Unidade |
| dataAtualizacao | string | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| numeroAta | Texto/Número | Valor do campo Numero ata |
| unidadeGerenciadora | Texto/Número | Valor do campo Unidade gerenciadora |
| unidadeNaoParticipante | Texto/Número | Valor do campo Unidade nao participante |
| dataAprovacaoAnalise | Texto/Número | Data correspondente ao registro |
| quantidadeAprovadaAdesao | Texto/Número | Valor do campo Quantidade aprovada adesao |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"numeroAta": "string",
"unidadeGerenciadora": "string",
"unidadeNaoParticipante": "string",
"dataAprovacaoAnalise": "2024-01-15 10:30:00",
"quantidadeAprovadaAdesao": 0
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

---

# 12. Módulo Contratos

O Módulo Contratos permite acesso às informações sobre contratos firmados pela Administração Pública.

## 12.1. consultarContratos

Serviço para obter dados e consultar o endpoint consultarContratos.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-contratos/1_consultarContratos`  
**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-contratos/1_consultarContratos' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoOrgao | string | <span class="badge-req">🔴 Sim</span> | Código do órgão |
| codigoUnidadeGestora | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| codigoUnidadeGestoraOrigemContrato | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| codigoUnidadeRealizadoraCompra | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| numeroContrato | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Numero contrato |
| codigoModalidadeCompra | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| codigoTipo | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| codigoCategoria | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| niFornecedor | string | <span class="badge-opt">⚪ Não</span> | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| dataVigenciaInicialMin | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| dataVigenciaInicialMax | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoOrgao | Texto/Número | Código do órgão |
| nomeOrgao | Texto/Número | Nome do órgão |
| codigoUnidadeGestora | Texto/Número | Código do registro associado |
| nomeUnidadeGestora | Texto/Número | Valor do campo Nome unidade gestora |
| codigoUnidadeGestoraOrigemContrato | Texto/Número | Código do registro associado |
| nomeUnidadeGestoraOrigemContrato | Texto/Número | Valor do campo Nome unidade gestora origem contrato |
| receitaDespesa | Texto/Número | Valor do campo Receita despesa |
| numeroContrato | Texto/Número | Valor do campo Numero contrato |
| codigoUnidadeRealizadoraCompra | Texto/Número | Código do registro associado |
| nomeUnidadeRealizadoraCompra | Texto/Número | Valor do campo Nome unidade realizadora compra |
| numeroCompra | Texto/Número | Valor do campo Numero compra |
| codigoModalidadeCompra | Texto/Número | Código do registro associado |
| nomeModalidadeCompra | Texto/Número | Valor do campo Nome modalidade compra |
| codigoTipo | Texto/Número | Código do registro associado |
| nomeTipo | Texto/Número | Valor do campo Nome tipo |
| codigoCategoria | Texto/Número | Código do registro associado |
| nomeCategoria | Texto/Número | Valor do campo Nome categoria |
| codigoSubcategoria | Texto/Número | Código do registro associado |
| nomeSubcategoria | Texto/Número | Valor do campo Nome subcategoria |
| niFornecedor | Texto/Número | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| nomeRazaoSocialFornecedor | Texto/Número | Valor do campo Nome razao social fornecedor |
| processo | Texto/Número | Valor do campo Processo |
| objeto | Texto/Número | Valor do campo Objeto |
| informacoesComplementares | Texto/Número | Valor do campo Informacoes complementares |
| dataVigenciaInicial | Texto/Número | Data correspondente ao registro |
| dataVigenciaFinal | Texto/Número | Data correspondente ao registro |
| valorGlobal | Texto/Número | Valor do campo Valor global |
| numeroParcelas | Texto/Número | Valor do campo Numero parcelas |
| valorParcela | Texto/Número | Valor do campo Valor parcela |
| valorAcumulado | Texto/Número | Valor do campo Valor acumulado |
| totalDespesasAcessorias | Texto/Número | Valor do campo Total despesas acessorias |
| dataHoraInclusao | Texto/Número | Data correspondente ao registro |
| numeroControlePncpContrato | Texto/Número | Valor do campo Numero controle pncp contrato |
| numeroControlePncpCompra | Texto/Número | Valor do campo Numero controle pncp compra |
| idCompra | Texto/Número | Código identificador único da compra |
| dataHoraExclusao | Texto/Número | Data correspondente ao registro |
| contratoExcluido | Texto/Número | Valor do campo Contrato excluido |
| unidadesRequisitantes | Texto/Número | Valor do campo Unidades requisitantes |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoOrgao": "string",
"nomeOrgao": "string",
"codigoUnidadeGestora": "string",
"nomeUnidadeGestora": "string",
"codigoUnidadeGestoraOrigemContrato": "string",
"nomeUnidadeGestoraOrigemContrato": "string",
"receitaDespesa": "string",
"numeroContrato": "string",
"codigoUnidadeRealizadoraCompra": "string",
"nomeUnidadeRealizadoraCompra": "string",
"numeroCompra": "string",
"codigoModalidadeCompra": "string",
"nomeModalidadeCompra": "string",
"codigoTipo": "string",
"nomeTipo": "string",
"codigoCategoria": "string",
"nomeCategoria": "string",
"codigoSubcategoria": "string",
"nomeSubcategoria": "string",
"niFornecedor": "string",
"nomeRazaoSocialFornecedor": "string",
"processo": "string",
"objeto": "string",
"informacoesComplementares": "string",
"dataVigenciaInicial": "2024-01-15 10:30:00",
"dataVigenciaFinal": "2024-01-15 10:30:00",
"valorGlobal": 0,
"numeroParcelas": 0,
"valorParcela": 0,
"valorAcumulado": 0,
"totalDespesasAcessorias": 0,
"dataHoraInclusao": "2024-01-15 10:30:00",
"numeroControlePncpContrato": "string",
"numeroControlePncpCompra": "string",
"idCompra": "string",
"dataHoraExclusao": "2024-01-15 10:30:00",
"contratoExcluido": true,
"unidadesRequisitantes": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

### 12.1.1. consultarContratos_Id

Serviço para obter dados e consultar o endpoint consultarContratos_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-contratos/1.1_consultarContratos_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-contratos/1.1_consultarContratos_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| codigo | string | <span class="badge-req">🔴 Sim</span> | Código do item no catálogo |
| tipo | string | <span class="badge-req">🔴 Sim</span> | Tipo do item do catálogo a consultar (ex: material ou serviço) |


[Voltar ao sumário](#sumário)

### 12.1.2. consultarContratos_FimVigencia

Serviço para obter dados e consultar o endpoint consultarContratos_FimVigencia.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-contratos/1.2_consultarContratos_FimVigencia`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-contratos/1.2_consultarContratos_FimVigencia' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoOrgao | string | <span class="badge-req">🔴 Sim</span> | Código do órgão |
| codigoUnidadeGestora | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| codigoUnidadeGestoraOrigemContrato | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| codigoUnidadeRealizadoraCompra | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| numeroContrato | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Numero contrato |
| codigoModalidadeCompra | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| codigoTipo | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| codigoCategoria | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| niFornecedor | string | <span class="badge-opt">⚪ Não</span> | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| dataVigenciaFinalMin | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| dataVigenciaFinalMax | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoOrgao | Texto/Número | Código do órgão |
| nomeOrgao | Texto/Número | Nome do órgão |
| codigoUnidadeGestora | Texto/Número | Código do registro associado |
| nomeUnidadeGestora | Texto/Número | Valor do campo Nome unidade gestora |
| codigoUnidadeGestoraOrigemContrato | Texto/Número | Código do registro associado |
| nomeUnidadeGestoraOrigemContrato | Texto/Número | Valor do campo Nome unidade gestora origem contrato |
| receitaDespesa | Texto/Número | Valor do campo Receita despesa |
| numeroContrato | Texto/Número | Valor do campo Numero contrato |
| codigoUnidadeRealizadoraCompra | Texto/Número | Código do registro associado |
| nomeUnidadeRealizadoraCompra | Texto/Número | Valor do campo Nome unidade realizadora compra |
| numeroCompra | Texto/Número | Valor do campo Numero compra |
| codigoModalidadeCompra | Texto/Número | Código do registro associado |
| nomeModalidadeCompra | Texto/Número | Valor do campo Nome modalidade compra |
| codigoTipo | Texto/Número | Código do registro associado |
| nomeTipo | Texto/Número | Valor do campo Nome tipo |
| codigoCategoria | Texto/Número | Código do registro associado |
| nomeCategoria | Texto/Número | Valor do campo Nome categoria |
| codigoSubcategoria | Texto/Número | Código do registro associado |
| nomeSubcategoria | Texto/Número | Valor do campo Nome subcategoria |
| niFornecedor | Texto/Número | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| nomeRazaoSocialFornecedor | Texto/Número | Valor do campo Nome razao social fornecedor |
| processo | Texto/Número | Valor do campo Processo |
| objeto | Texto/Número | Valor do campo Objeto |
| informacoesComplementares | Texto/Número | Valor do campo Informacoes complementares |
| dataVigenciaInicial | Texto/Número | Data correspondente ao registro |
| dataVigenciaFinal | Texto/Número | Data correspondente ao registro |
| valorGlobal | Texto/Número | Valor do campo Valor global |
| numeroParcelas | Texto/Número | Valor do campo Numero parcelas |
| valorParcela | Texto/Número | Valor do campo Valor parcela |
| valorAcumulado | Texto/Número | Valor do campo Valor acumulado |
| totalDespesasAcessorias | Texto/Número | Valor do campo Total despesas acessorias |
| dataHoraInclusao | Texto/Número | Data correspondente ao registro |
| numeroControlePncpContrato | Texto/Número | Valor do campo Numero controle pncp contrato |
| numeroControlePncpCompra | Texto/Número | Valor do campo Numero controle pncp compra |
| idCompra | Texto/Número | Código identificador único da compra |
| dataHoraExclusao | Texto/Número | Data correspondente ao registro |
| contratoExcluido | Texto/Número | Valor do campo Contrato excluido |
| unidadesRequisitantes | Texto/Número | Valor do campo Unidades requisitantes |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoOrgao": "string",
"nomeOrgao": "string",
"codigoUnidadeGestora": "string",
"nomeUnidadeGestora": "string",
"codigoUnidadeGestoraOrigemContrato": "string",
"nomeUnidadeGestoraOrigemContrato": "string",
"receitaDespesa": "string",
"numeroContrato": "string",
"codigoUnidadeRealizadoraCompra": "string",
"nomeUnidadeRealizadoraCompra": "string",
"numeroCompra": "string",
"codigoModalidadeCompra": "string",
"nomeModalidadeCompra": "string",
"codigoTipo": "string",
"nomeTipo": "string",
"codigoCategoria": "string",
"nomeCategoria": "string",
"codigoSubcategoria": "string",
"nomeSubcategoria": "string",
"niFornecedor": "string",
"nomeRazaoSocialFornecedor": "string",
"processo": "string",
"objeto": "string",
"informacoesComplementares": "string",
"dataVigenciaInicial": "2024-01-15 10:30:00",
"dataVigenciaFinal": "2024-01-15 10:30:00",
"valorGlobal": 0,
"numeroParcelas": 0,
"valorParcela": 0,
"valorAcumulado": 0,
"totalDespesasAcessorias": 0,
"dataHoraInclusao": "2024-01-15 10:30:00",
"numeroControlePncpContrato": "string",
"numeroControlePncpCompra": "string",
"idCompra": "string",
"dataHoraExclusao": "2024-01-15 10:30:00",
"contratoExcluido": true,
"unidadesRequisitantes": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

## 12.2. consultarContratosItem

Serviço para obter dados e consultar o endpoint consultarContratosItem.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-contratos/2_consultarContratosItem`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-contratos/2_consultarContratosItem' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoOrgao | string | <span class="badge-req">🔴 Sim</span> | Código do órgão |
| codigoUnidadeGestora | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| codigoUnidadeGestoraOrigemContrato | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| codigoUnidadeRealizadoraCompra | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| numeroContrato | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Numero contrato |
| codigoModalidadeCompra | string | <span class="badge-opt">⚪ Não</span> | Código do registro associado |
| tipoItem | string | <span class="badge-opt">⚪ Não</span> | Valor do campo Tipo item |
| codigoItem | integer | <span class="badge-opt">⚪ Não</span> | Código do item do material/serviço |
| niFornecedor | string | <span class="badge-opt">⚪ Não</span> | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| dataVigenciaInicialMin | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| dataVigenciaInicialMax | string | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro |
| poder | string | <span class="badge-opt">⚪ Não</span> | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| esfera | string | <span class="badge-opt">⚪ Não</span> | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| idCompra | string | <span class="badge-opt">⚪ Não</span> | Código identificador único da compra |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Valor do campo Resultado |
| codigoOrgao | Texto/Número | Código do órgão |
| codigoUnidadeGestora | Texto/Número | Código do registro associado |
| codigoUnidadeGestoraOrigemContrato | Texto/Número | Código do registro associado |
| codigoUnidadeRealizadoraCompra | Texto/Número | Código do registro associado |
| codigoModalidadeCompra | Texto/Número | Código do registro associado |
| numeroContrato | Texto/Número | Valor do campo Numero contrato |
| niFornecedor | Texto/Número | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| nomeRazaoSocialFornecedor | Texto/Número | Valor do campo Nome razao social fornecedor |
| processo | Texto/Número | Valor do campo Processo |
| dataVigenciaInicial | Texto/Número | Data correspondente ao registro |
| dataVigenciaFinal | Texto/Número | Data correspondente ao registro |
| valorGlobal | Texto/Número | Valor do campo Valor global |
| tipoItem | Texto/Número | Valor do campo Tipo item |
| codigoItem | Texto/Número | Código do item do material/serviço |
| descricaoIitem | Texto/Número | Valor do campo Descricao iitem |
| quantidadeItem | Texto/Número | Valor do campo Quantidade item |
| valorUnitarioItem | Texto/Número | Valor do campo Valor unitario item |
| valorTotalItem | Texto/Número | Valor do campo Valor total item |
| dataHoraInclusao | Texto/Número | Data correspondente ao registro |
| numeroControlePncpContrato | Texto/Número | Valor do campo Numero controle pncp contrato |
| idCompra | Texto/Número | Código identificador único da compra |
| dataHoraExclusaoContrato | Texto/Número | Data correspondente ao registro |
| contratoExcluido | Texto/Número | Valor do campo Contrato excluido |
| nomeOrgao | Texto/Número | Nome do órgão |
| nomeUnidadeGestora | Texto/Número | Valor do campo Nome unidade gestora |
| nomeUnidadeGestoraOrigemContrato | Texto/Número | Valor do campo Nome unidade gestora origem contrato |
| nomeUnidadeRealizadoraCompra | Texto/Número | Valor do campo Nome unidade realizadora compra |
| nomeModalidadeCompra | Texto/Número | Valor do campo Nome modalidade compra |
| numeroCompra | Texto/Número | Valor do campo Numero compra |
| dataHoraExclusaoItem | Texto/Número | Data correspondente ao registro |
| contratoItemExcluido | Texto/Número | Valor do campo Contrato item excluido |
| numeroItem | Texto/Número | Valor do campo Numero item |
| esfera | Texto/Número | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| poder | Texto/Número | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| numeroControlePncpCompra | Texto/Número | Valor do campo Numero controle pncp compra |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoOrgao": "string",
"codigoUnidadeGestora": "string",
"codigoUnidadeGestoraOrigemContrato": "string",
"codigoUnidadeRealizadoraCompra": "string",
"codigoModalidadeCompra": "string",
"numeroContrato": "string",
"niFornecedor": "string",
"nomeRazaoSocialFornecedor": "string",
"processo": "string",
"dataVigenciaInicial": "2024-01-15 10:30:00",
"dataVigenciaFinal": "2024-01-15 10:30:00",
"valorGlobal": 0,
"tipoItem": "string",
"codigoItem": 0,
"descricaoIitem": "string",
"quantidadeItem": 0,
"valorUnitarioItem": 0,
"valorTotalItem": 0,
"dataHoraInclusao": "2024-01-15 10:30:00",
"numeroControlePncpContrato": "string",
"idCompra": "string",
"dataHoraExclusaoContrato": "2024-01-15 10:30:00",
"contratoExcluido": true,
"nomeOrgao": "string",
"nomeUnidadeGestora": "string",
"nomeUnidadeGestoraOrigemContrato": "string",
"nomeUnidadeRealizadoraCompra": "string",
"nomeModalidadeCompra": "string",
"numeroCompra": "string",
"dataHoraExclusaoItem": "2024-01-15 10:30:00",
"contratoItemExcluido": true,
"numeroItem": "string",
"esfera": "string",
"poder": "string",
"numeroControlePncpCompra": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

### 12.2.1. consultarContratosItem_Id

Serviço para obter dados e consultar o endpoint consultarContratosItem_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-contratos/2.1_consultarContratosItem_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-contratos/2.1_consultarContratosItem_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| codigo | string | <span class="badge-req">🔴 Sim</span> | Código do item no catálogo |
| tipo | string | <span class="badge-req">🔴 Sim</span> | Tipo do item do catálogo a consultar (ex: material ou serviço) |


[Voltar ao sumário](#sumário)

---

# 13. Módulo Fornecedor

O Módulo Fornecedor permite a consulta de dados cadastrais e situação dos fornecedores habilitados para participar de processos de contratação pública.

## 13.1. consultarFornecedor

Serviço que permite consultar dados cadastrais de fornecedores, incluindo informações sobre porte empresarial, natureza jurídica e situação de habilitação para licitar.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-fornecedor/1_consultarFornecedor`  
**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-fornecedor/1_consultarFornecedor' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| cnpj | string | <span class="badge-opt">⚪ Não</span> | CNPJ do fornecedor (sem máscara) |
| cpf | string | <span class="badge-opt">⚪ Não</span> | CPF do fornecedor (sem máscara) |
| naturezaJuridicaId | integer | <span class="badge-opt">⚪ Não</span> | Código da natureza jurídica do fornecedor |
| porteEmpresaId | integer | <span class="badge-opt">⚪ Não</span> | Código do porte da empresa |
| codigoCnae | integer | <span class="badge-opt">⚪ Não</span> | Código CNAE (Classificação Nacional de Atividades Econômicas) |
| ativo | boolean | <span class="badge-req">🔴 Sim</span> | Indica se o fornecedor está ativo. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| ativo | Booleano | Indica se o fornecedor está ativo |
| cnpj | Texto | CNPJ do fornecedor |
| cpf | Texto | CPF do fornecedor |
| habilitadoLicitar | Booleano | Indica se o fornecedor está habilitado para licitar |
| codigoCnae | Inteiro | Código CNAE do fornecedor |
| nomeCnae | Texto | Descrição da atividade CNAE |
| nomeMunicipio | Texto | Nome do município do fornecedor |
| naturezaJuridicaId | Inteiro | Código da natureza jurídica |
| naturezaJuridicaNome | Texto | Descrição da natureza jurídica |
| porteEmpresaId | Inteiro | Código do porte da empresa |
| porteEmpresaNome | Texto | Descrição do porte da empresa |
| nomeRazaoSocialFornecedor | Texto | Nome ou razão social do fornecedor |
| ufSigla | Texto | Sigla da unidade federativa (UF) do fornecedor |
| totalRegistros | Inteiro | Total de registros encontrados |
| totalPaginas | Inteiro | Total de páginas disponíveis |
| paginasRestantes | Inteiro | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
  "resultado": [
    {
      "ativo": true,
      "cnpj": "string",
      "cpf": "string",
      "habilitadoLicitar": true,
      "codigoCnae": 0,
      "nomeCnae": "string",
      "nomeMunicipio": "string",
      "naturezaJuridicaId": 0,
      "naturezaJuridicaNome": "string",
      "porteEmpresaId": 0,
      "porteEmpresaNome": "string",
      "nomeRazaoSocialFornecedor": "string",
      "ufSigla": "string"
    }
  ],
  "totalRegistros": 0,
  "totalPaginas": 0,
  "paginasRestantes": 0
}
```

[Voltar ao sumário](#sumário)

---

# 14. Módulo OCDS

O Módulo OCDS (Open Contracting Data Standard) disponibiliza dados de contratações públicas no formato aberto e padronizado internacionalmente pelo padrão OCDS, facilitando a interoperabilidade e a análise de dados de contratações governamentais por sistemas externos.

## 14.1. releases

Serviço que retorna os dados de contratações públicas no formato OCDS, incluindo informações sobre a licitação, partes envolvidas, itens licitados, lotes e resultados (adjudicações).

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-ocds/1_releases`  
**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-ocds/1_releases' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| page | integer | <span class="badge-opt">⚪ Não</span> | Número da página para paginação dos resultados |
| offSet | integer | <span class="badge-opt">⚪ Não</span> | Deslocamento (offset) para paginação dos resultados |
| buyerID | string | <span class="badge-req">🔴 Sim</span> | Identificador do comprador (CNPJ do órgão) |
| releaseStartDate | string | <span class="badge-req">🔴 Sim</span> | Data de início do período de consulta (formato: YYYY-MM-DD) |
| releaseEndDate | string | <span class="badge-req">🔴 Sim</span> | Data de fim do período de consulta (formato: YYYY-MM-DD) |

**Dados de Retorno:**

O retorno segue o padrão OCDS (Open Contracting Data Standard). Os principais campos são:

| Campo | Tipo | Descrição |
|---|---|---|
| publisherDTO | Objeto | Informações do publicador dos dados |
| publisherDTO.name | Texto | Nome do publicador |
| publisherDTO.uri | Texto | URI do publicador |
| publishedDate | Data | Data de publicação do pacote OCDS |
| version | Texto | Versão do padrão OCDS utilizado |
| publicationPolicy | Texto | Política de publicação dos dados |
| license | Texto | Licença de uso dos dados |
| extensions | Array | Extensões OCDS utilizadas |
| releases | Array | Lista de releases (registros) no padrão OCDS |
| releases[].ocid | Texto | Identificador único de contratação aberta (OCID) |
| releases[].id | Texto | Identificador único do release |
| releases[].date | Data | Data do release |
| releases[].tag | Array | Tags descritivas do estágio da contratação |
| releases[].initiationType | Texto | Tipo de iniciação do processo (ex: tender) |
| releases[].buyer | Objeto | Informações do comprador (órgão) |
| releases[].language | Texto | Idioma do release |
| releases[].parties | Array | Partes envolvidas na contratação |
| releases[].tender | Objeto | Dados da licitação |
| releases[].tender.id | Texto | Identificador da licitação |
| releases[].tender.title | Texto | Título da licitação |
| releases[].tender.description | Texto | Descrição da licitação |
| releases[].tender.procuringEntity | Objeto | Entidade responsável pela contratação |
| releases[].tender.value | Objeto | Valor estimado da licitação |
| releases[].tender.procurementMethod | Texto | Método de contratação |
| releases[].tender.procurementMethodDetails | Texto | Detalhes do método de contratação |
| releases[].tender.items | Array | Itens da licitação |
| releases[].tender.lots | Array | Lotes da licitação |
| releases[].awards | Array | Adjudicações (resultados) da licitação |
| links | Objeto | Links de navegação (paginação) |
| links.next | Texto | URL para a próxima página |
| links.prev | Texto | URL para a página anterior |

**Exemplo de Retorno:**
```json
{
  "publisherDTO": {
    "name": "string",
    "uri": "string"
  },
  "publishedDate": "2026-08-10T14:32:59.679Z",
  "version": "string",
  "publicationPolicy": "string",
  "license": "string",
  "extensions": [
    "string"
  ],
  "releases": [
    {
      "ocid": "string",
      "id": "string",
      "date": "2026-08-10T14:32:59.679Z",
      "tag": [
        "string"
      ],
      "initiationType": "string",
      "buyer": {
        "id": "string",
        "name": "string"
      },
      "language": "string",
      "parties": [
        {
          "id": "string",
          "name": "string",
          "identifier": {
            "scheme": "string",
            "id": "string",
            "legalName": "string"
          },
          "additionalIdentifiers": [
            {
              "id": "string",
              "legalName": "string"
            }
          ],
          "address": {
            "region": "string",
            "locality": "string",
            "countryName": "string"
          },
          "roles": [
            "string"
          ],
          "details": {
            "classifications": [
              {
                "scheme": "string",
                "id": "string",
                "uri": "string"
              }
            ]
          },
          "suppliers": [
            {
              "id": "string",
              "name": "string"
            }
          ]
        }
      ],
      "tender": {
        "id": "string",
        "title": "string",
        "description": "string",
        "procuringEntity": {
          "name": "string",
          "id": "string"
        },
        "value": {
          "amount": 0,
          "currency": "string"
        },
        "procurementMethod": "string",
        "procurementMethodDetails": "string",
        "procurementMethodRationale": "string",
        "submissionMethod": [
          "string"
        ],
        "tenderPeriod": {
          "startDate": "2026-08-10T14:32:59.679Z",
          "endDate": "2026-08-10T14:32:59.679Z",
          "maxExtentDate": "2026-08-10T14:32:59.679Z",
          "durationInDays": 1073741824
        },
        "items": [
          {
            "id": "string",
            "description": "string",
            "statusDetails": "string",
            "quantity": 0,
            "unit": {
              "name": "string",
              "value": {
                "amount": 0,
                "currency": "string"
              }
            },
            "relatedLot": "string"
          }
        ],
        "lots": [
          {
            "id": "string",
            "statusDetailsId": "string",
            "statusDetails": "string",
            "value": {
              "amount": 0,
              "currency": "string"
            },
            "confidentialBudget": true,
            "asset": "string",
            "realEstateRegistrationCode": "string",
            "standardPreferenceMarginApplicability": true,
            "standardPreferenceMarginPercentage": 0,
            "additionalPreferenceMarginApplicability": true,
            "additionalPreferenceMarginPercentage": 0,
            "ncmNbsCode": "string",
            "ncmNbsDescription": "string",
            "catalogItemCategoryId": 1073741824,
            "catalogItemCategoryName": "string",
            "catalogItemCode": 1073741824,
            "awardCriteria": "string",
            "awardCriteriaDetails": "string",
            "sustainability": [
              {
                "goal": "string",
                "strategies": [
                  "string"
                ]
              }
            ],
            "otherRequirements": {
              "reservedParticipation": [
                "string"
              ]
            },
            "subcontractingTerms": {
              "description": "string"
            }
          }
        ]
      },
      "awards": [
        {
          "id": "string",
          "title": "string",
          "description": "string",
          "date": "2026-08-10T14:32:59.680Z",
          "hasSubcontracting": true,
          "value": {
            "amount": 0,
            "currency": "string"
          },
          "suppliers": [
            {
              "id": "string",
              "name": "string"
            }
          ],
          "items": [
            {
              "id": "string",
              "description": "string",
              "statusDetails": "string",
              "quantity": 0,
              "unit": {
                "name": "string",
                "value": {
                  "amount": 0,
                  "currency": "string"
                }
              },
              "relatedLot": "string"
            }
          ]
        }
      ]
    }
  ],
  "links": {
    "next": "string",
    "prev": "string"
  },
  "uri": "string"
}
```

[Voltar ao sumário](#sumário)

---

# 15. Histórico de Revisões

| Data | Versão | Descrição | Autor |
|---|---|---|---|
| 2026-08-11 | 3.0 | Atualização completa com base no Swagger oficial: novos parâmetros no módulo Pesquisa de Preço (`tipo`, `codigo`, `poder`, `esfera`, `idCompra`, `dataCompraInicio`, `dataCompraFim`), novos campos de retorno, separação correta dos módulos Fornecedor e OCDS | Equipe COTIN |
| 2026-01-15 | 2.0 | Módulo ARP (correção dos parâmetros de vigência, novos endpoints `consultarUnidadesItem`, `consultarEmpenhosSaldoItem`, `consultarAdesoesItem`). Novos filtros no módulo Legado (`pertence14133`) e Contratações (`orgaoEntidadeCnpj`, `contratacaoExcluida`) | Equipe COTIN |
| 2025-04-10 | 1.0 | Versão original do manual | Equipe COTIN |

