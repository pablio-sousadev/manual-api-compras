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

# 9. Módulo Contratos

O Módulo Contratos permite acesso às informações sobre contratos firmados pela Administração Pública.

## 9.1. consultarContratos

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
| codigoUnidadeGestora | string | <span class="badge-opt">⚪ Não</span> | Código da Unidade Gestora (UG) responsável pela execução e gestão do contrato |
| codigoUnidadeGestoraOrigemContrato | string | <span class="badge-opt">⚪ Não</span> | Código da Unidade Gestora de origem onde o contrato foi inicialmente firmado |
| codigoUnidadeRealizadoraCompra | string | <span class="badge-opt">⚪ Não</span> | Código da UASG responsável pela condução da licitação ou compra que originou o contrato |
| numeroContrato | string | <span class="badge-opt">⚪ Não</span> | Número identificador do contrato administrativo firmado |
| codigoModalidadeCompra | string | <span class="badge-opt">⚪ Não</span> | Código numérico da modalidade da compra originária |
| codigoTipo | string | <span class="badge-opt">⚪ Não</span> | Código identificador do tipo de termo ou instrumento contratual |
| codigoCategoria | string | <span class="badge-opt">⚪ Não</span> | Código da categoria do contrato ou da contratação |
| niFornecedor | string | <span class="badge-opt">⚪ Não</span> | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| dataVigenciaInicialMin | string | <span class="badge-req">🔴 Sim</span> | Limite inferior da data de início de vigência para filtro da consulta |
| dataVigenciaInicialMax | string | <span class="badge-req">🔴 Sim</span> | Limite superior da data de início de vigência para filtro da consulta |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| codigoOrgao | Texto/Número | Código do órgão |
| nomeOrgao | Texto/Número | Nome do órgão |
| codigoUnidadeGestora | Texto/Número | Código da Unidade Gestora (UG) responsável pela execução e gestão do contrato |
| nomeUnidadeGestora | Texto/Número | Nome da Unidade Gestora (UG) atual responsável pelo contrato |
| codigoUnidadeGestoraOrigemContrato | Texto/Número | Código da Unidade Gestora de origem onde o contrato foi inicialmente firmado |
| nomeUnidadeGestoraOrigemContrato | Texto/Número | Nome da Unidade Gestora (UG) que celebrou originalmente o contrato |
| receitaDespesa | Texto/Número | Classificação da natureza financeira do contrato (Despesa ou Receita) |
| numeroContrato | Texto/Número | Número identificador do contrato administrativo firmado |
| codigoUnidadeRealizadoraCompra | Texto/Número | Código da UASG responsável pela condução da licitação ou compra que originou o contrato |
| nomeUnidadeRealizadoraCompra | Texto/Número | Nome da UASG que realizou o procedimento licitatório da compra |
| numeroCompra | Texto/Número | Número sequencial da compra ou contratação no ano |
| codigoModalidadeCompra | Texto/Número | Código numérico da modalidade da compra originária |
| nomeModalidadeCompra | Texto/Número | Nome da modalidade de contratação que deu origem à ata ou contrato |
| codigoTipo | Texto/Número | Código identificador do tipo de termo ou instrumento contratual |
| nomeTipo | Texto/Número | Denominação do tipo de instrumento contratual (Contrato, Termo Aditivo, Empenho etc.) |
| codigoCategoria | Texto/Número | Código da categoria do contrato ou da contratação |
| nomeCategoria | Texto/Número | Denominação da categoria do contrato (ex.: Compras, Serviços, Obras, Locação) |
| codigoSubcategoria | Texto/Número | Código da subcategoria do contrato administrativo |
| nomeSubcategoria | Texto/Número | Denominação da subcategoria do contrato administrativo |
| niFornecedor | Texto/Número | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| nomeRazaoSocialFornecedor | Texto/Número | Nome empresarial (razão social) ou nome completo do fornecedor |
| processo | Texto/Número | Número do processo administrativo de contratação |
| objeto | Texto/Número | Descrição do objeto da contratação, ata ou contrato |
| informacoesComplementares | Texto/Número | Observações e informações complementares registradas no contrato |
| dataVigenciaInicial | Texto/Número | Data de início da vigência da ata de registro de preços ou do contrato |
| dataVigenciaFinal | Texto/Número | Data de término da vigência da ata de registro de preços ou do contrato |
| valorGlobal | Texto/Número | Valor global pactuado no instrumento contratual |
| numeroParcelas | Texto/Número | Quantidade de parcelas previstas no cronograma do contrato |
| valorParcela | Texto/Número | Valor financeiro de cada parcela prevista no contrato |
| valorAcumulado | Texto/Número | Valor financeiro total acumulado do contrato considerando termos aditivos e apostilamentos |
| totalDespesasAcessorias | Texto/Número | Valor total das despesas acessórias (frete, seguro, impostos) vinculadas à compra |
| dataHoraInclusao | Texto/Número | Data e hora de inclusão inicial do registro na base de dados |
| numeroControlePncpContrato | Texto/Número | Número de controle único do contrato administrativo no PNCP |
| numeroControlePncpCompra | Texto/Número | Número de controle único da contratação originária no PNCP |
| idCompra | Texto/Número | Código identificador único da compra |
| dataHoraExclusao | Texto/Número | Data e hora em que o registro foi marcado como excluído no sistema |
| contratoExcluido | Texto/Número | Indica se o registro do contrato foi excluído do sistema |
| unidadesRequisitantes | Texto/Número | Identificação das áreas ou unidades internas requisitantes da demanda |
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

### 9.1.1. consultarContratos_Id

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

### 9.1.2. consultarContratos_FimVigencia

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
| codigoUnidadeGestora | string | <span class="badge-opt">⚪ Não</span> | Código da Unidade Gestora (UG) responsável pela execução e gestão do contrato |
| codigoUnidadeGestoraOrigemContrato | string | <span class="badge-opt">⚪ Não</span> | Código da Unidade Gestora de origem onde o contrato foi inicialmente firmado |
| codigoUnidadeRealizadoraCompra | string | <span class="badge-opt">⚪ Não</span> | Código da UASG responsável pela condução da licitação ou compra que originou o contrato |
| numeroContrato | string | <span class="badge-opt">⚪ Não</span> | Número identificador do contrato administrativo firmado |
| codigoModalidadeCompra | string | <span class="badge-opt">⚪ Não</span> | Código numérico da modalidade da compra originária |
| codigoTipo | string | <span class="badge-opt">⚪ Não</span> | Código identificador do tipo de termo ou instrumento contratual |
| codigoCategoria | string | <span class="badge-opt">⚪ Não</span> | Código da categoria do contrato ou da contratação |
| niFornecedor | string | <span class="badge-opt">⚪ Não</span> | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| dataVigenciaFinalMin | string | <span class="badge-req">🔴 Sim</span> | Limite inferior da data de fim de vigência para filtro da consulta |
| dataVigenciaFinalMax | string | <span class="badge-req">🔴 Sim</span> | Limite superior da data de fim de vigência para filtro da consulta |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| codigoOrgao | Texto/Número | Código do órgão |
| nomeOrgao | Texto/Número | Nome do órgão |
| codigoUnidadeGestora | Texto/Número | Código da Unidade Gestora (UG) responsável pela execução e gestão do contrato |
| nomeUnidadeGestora | Texto/Número | Nome da Unidade Gestora (UG) atual responsável pelo contrato |
| codigoUnidadeGestoraOrigemContrato | Texto/Número | Código da Unidade Gestora de origem onde o contrato foi inicialmente firmado |
| nomeUnidadeGestoraOrigemContrato | Texto/Número | Nome da Unidade Gestora (UG) que celebrou originalmente o contrato |
| receitaDespesa | Texto/Número | Classificação da natureza financeira do contrato (Despesa ou Receita) |
| numeroContrato | Texto/Número | Número identificador do contrato administrativo firmado |
| codigoUnidadeRealizadoraCompra | Texto/Número | Código da UASG responsável pela condução da licitação ou compra que originou o contrato |
| nomeUnidadeRealizadoraCompra | Texto/Número | Nome da UASG que realizou o procedimento licitatório da compra |
| numeroCompra | Texto/Número | Número sequencial da compra ou contratação no ano |
| codigoModalidadeCompra | Texto/Número | Código numérico da modalidade da compra originária |
| nomeModalidadeCompra | Texto/Número | Nome da modalidade de contratação que deu origem à ata ou contrato |
| codigoTipo | Texto/Número | Código identificador do tipo de termo ou instrumento contratual |
| nomeTipo | Texto/Número | Denominação do tipo de instrumento contratual (Contrato, Termo Aditivo, Empenho etc.) |
| codigoCategoria | Texto/Número | Código da categoria do contrato ou da contratação |
| nomeCategoria | Texto/Número | Denominação da categoria do contrato (ex.: Compras, Serviços, Obras, Locação) |
| codigoSubcategoria | Texto/Número | Código da subcategoria do contrato administrativo |
| nomeSubcategoria | Texto/Número | Denominação da subcategoria do contrato administrativo |
| niFornecedor | Texto/Número | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| nomeRazaoSocialFornecedor | Texto/Número | Nome empresarial (razão social) ou nome completo do fornecedor |
| processo | Texto/Número | Número do processo administrativo de contratação |
| objeto | Texto/Número | Descrição do objeto da contratação, ata ou contrato |
| informacoesComplementares | Texto/Número | Observações e informações complementares registradas no contrato |
| dataVigenciaInicial | Texto/Número | Data de início da vigência da ata de registro de preços ou do contrato |
| dataVigenciaFinal | Texto/Número | Data de término da vigência da ata de registro de preços ou do contrato |
| valorGlobal | Texto/Número | Valor global pactuado no instrumento contratual |
| numeroParcelas | Texto/Número | Quantidade de parcelas previstas no cronograma do contrato |
| valorParcela | Texto/Número | Valor financeiro de cada parcela prevista no contrato |
| valorAcumulado | Texto/Número | Valor financeiro total acumulado do contrato considerando termos aditivos e apostilamentos |
| totalDespesasAcessorias | Texto/Número | Valor total das despesas acessórias (frete, seguro, impostos) vinculadas à compra |
| dataHoraInclusao | Texto/Número | Data e hora de inclusão inicial do registro na base de dados |
| numeroControlePncpContrato | Texto/Número | Número de controle único do contrato administrativo no PNCP |
| numeroControlePncpCompra | Texto/Número | Número de controle único da contratação originária no PNCP |
| idCompra | Texto/Número | Código identificador único da compra |
| dataHoraExclusao | Texto/Número | Data e hora em que o registro foi marcado como excluído no sistema |
| contratoExcluido | Texto/Número | Indica se o registro do contrato foi excluído do sistema |
| unidadesRequisitantes | Texto/Número | Identificação das áreas ou unidades internas requisitantes da demanda |
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

## 9.2. consultarContratosItem

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
| codigoUnidadeGestora | string | <span class="badge-opt">⚪ Não</span> | Código da Unidade Gestora (UG) responsável pela execução e gestão do contrato |
| codigoUnidadeGestoraOrigemContrato | string | <span class="badge-opt">⚪ Não</span> | Código da Unidade Gestora de origem onde o contrato foi inicialmente firmado |
| codigoUnidadeRealizadoraCompra | string | <span class="badge-opt">⚪ Não</span> | Código da UASG responsável pela condução da licitação ou compra que originou o contrato |
| numeroContrato | string | <span class="badge-opt">⚪ Não</span> | Número identificador do contrato administrativo firmado |
| codigoModalidadeCompra | string | <span class="badge-opt">⚪ Não</span> | Código numérico da modalidade da compra originária |
| tipoItem | string | <span class="badge-opt">⚪ Não</span> | Classificação do tipo do item no contrato (Material ou Serviço) |
| codigoItem | integer | <span class="badge-opt">⚪ Não</span> | Código do item do material/serviço |
| niFornecedor | string | <span class="badge-opt">⚪ Não</span> | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| dataVigenciaInicialMin | string | <span class="badge-req">🔴 Sim</span> | Limite inferior da data de início de vigência para filtro da consulta |
| dataVigenciaInicialMax | string | <span class="badge-req">🔴 Sim</span> | Limite superior da data de início de vigência para filtro da consulta |
| poder | string | <span class="badge-opt">⚪ Não</span> | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| esfera | string | <span class="badge-opt">⚪ Não</span> | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| idCompra | string | <span class="badge-opt">⚪ Não</span> | Código identificador único da compra |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| codigoOrgao | Texto/Número | Código do órgão |
| codigoUnidadeGestora | Texto/Número | Código da Unidade Gestora (UG) responsável pela execução e gestão do contrato |
| codigoUnidadeGestoraOrigemContrato | Texto/Número | Código da Unidade Gestora de origem onde o contrato foi inicialmente firmado |
| codigoUnidadeRealizadoraCompra | Texto/Número | Código da UASG responsável pela condução da licitação ou compra que originou o contrato |
| codigoModalidadeCompra | Texto/Número | Código numérico da modalidade da compra originária |
| numeroContrato | Texto/Número | Número identificador do contrato administrativo firmado |
| niFornecedor | Texto/Número | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| nomeRazaoSocialFornecedor | Texto/Número | Nome empresarial (razão social) ou nome completo do fornecedor |
| processo | Texto/Número | Número do processo administrativo de contratação |
| dataVigenciaInicial | Texto/Número | Data de início da vigência da ata de registro de preços ou do contrato |
| dataVigenciaFinal | Texto/Número | Data de término da vigência da ata de registro de preços ou do contrato |
| valorGlobal | Texto/Número | Valor global pactuado no instrumento contratual |
| tipoItem | Texto/Número | Classificação do tipo do item no contrato (Material ou Serviço) |
| codigoItem | Texto/Número | Código do item do material/serviço |
| descricaoIitem | Texto/Número | Descrição detalhada do item vinculado à ata de registro de preços |
| quantidadeItem | Texto/Número | Quantidade prevista do item no planejamento ou contrato |
| valorUnitarioItem | Texto/Número | Valor unitário estimado ou pactuado para o item |
| valorTotalItem | Texto/Número | Valor total estimado ou contratado para o item no planejamento/contrato |
| dataHoraInclusao | Texto/Número | Data e hora de inclusão inicial do registro na base de dados |
| numeroControlePncpContrato | Texto/Número | Número de controle único do contrato administrativo no PNCP |
| idCompra | Texto/Número | Código identificador único da compra |
| dataHoraExclusaoContrato | Texto/Número | Data e hora de exclusão do contrato administrativo |
| contratoExcluido | Texto/Número | Indica se o registro do contrato foi excluído do sistema |
| nomeOrgao | Texto/Número | Nome do órgão |
| nomeUnidadeGestora | Texto/Número | Nome da Unidade Gestora (UG) atual responsável pelo contrato |
| nomeUnidadeGestoraOrigemContrato | Texto/Número | Nome da Unidade Gestora (UG) que celebrou originalmente o contrato |
| nomeUnidadeRealizadoraCompra | Texto/Número | Nome da UASG que realizou o procedimento licitatório da compra |
| nomeModalidadeCompra | Texto/Número | Nome da modalidade de contratação que deu origem à ata ou contrato |
| numeroCompra | Texto/Número | Número sequencial da compra ou contratação no ano |
| dataHoraExclusaoItem | Texto/Número | Data e hora de exclusão do item vinculado ao contrato |
| contratoItemExcluido | Texto/Número | Indica se o item específico do contrato foi excluído |
| numeroItem | Texto/Número | Número sequencial de identificação do item no processo |
| esfera | Texto/Número | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| poder | Texto/Número | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| numeroControlePncpCompra | Texto/Número | Número de controle único da contratação originária no PNCP |
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

### 9.2.1. consultarContratosItem_Id

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
