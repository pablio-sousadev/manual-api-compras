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

# 2. Módulo Catálogo — Serviço

O Catálogo de Materiais (CATMAT) e o Catálogo de Serviços (CATSER), do Sistema Integrado de Administração e Serviços Gerais – SIASG, são as bases de dados que identificam todos os materiais licitados e adquiridos e todos os serviços licitados contratados pela Administração Pública Federal.

## 2.1. consultarSecaoServico

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
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
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

<a href="#">⬆️ Voltar ao topo</a>

## 2.2. consultarDivisaoServico

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
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
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

<a href="#">⬆️ Voltar ao topo</a>

## 2.3. consultarGrupoServico

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
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
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

<a href="#">⬆️ Voltar ao topo</a>

## 2.4. consultarClasseServico

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
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
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

<a href="#">⬆️ Voltar ao topo</a>

## 2.5. consultarSubClasseServico

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
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
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

<a href="#">⬆️ Voltar ao topo</a>

## 2.6. consultarItemServico

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
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
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

<a href="#">⬆️ Voltar ao topo</a>

## 2.7. consultarUndMedidaServico

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
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
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

<a href="#">⬆️ Voltar ao topo</a>

## 2.8. consultarNaturezaDespesaServico

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
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
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

<a href="#">⬆️ Voltar ao topo</a>

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>
