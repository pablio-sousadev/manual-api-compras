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

<a href="#">⬆️ Voltar ao topo</a>

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

<a href="#">⬆️ Voltar ao topo</a>

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

<a href="#">⬆️ Voltar ao topo</a>

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

<a href="#">⬆️ Voltar ao topo</a>

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
| tipo | string | <span class="badge-req">🔴 Sim</span> | Tipo do item do catálogo a consultar (ex: material ou serviço) |
| codigo | string | <span class="badge-req">🔴 Sim</span> | Código do item no catálogo |

<a href="#">⬆️ Voltar ao topo</a>

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>
