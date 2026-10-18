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

# 7. Módulo Contratações

O Módulo Contratações oferece acesso a informações detalhadas sobre os procedimentos de contratação.

## 7.1. Indicadores de Modalidade
(Descrição dos indicadores de modalidade)

## 7.2. Modos de Disputa
(Descrição dos modos de disputa)

## 7.3. Critérios de Julgamento
(Descrição dos critérios de julgamento)

## 7.4. Amparos Legais
(Descrição dos amparos legais)

## 7.5. consultarContratacoes_PNCP_14133

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

<a href="#">⬆️ Voltar ao topo</a>

### 7.5.1. consultarContratacoes_PNCP_14133_Id

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

<a href="#">⬆️ Voltar ao topo</a>

## 7.6. consultarItensContratacoes_PNCP_14133

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

<a href="#">⬆️ Voltar ao topo</a>

### 7.6.1. consultarItensContratacoes_PNCP_14133_Id

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

<a href="#">⬆️ Voltar ao topo</a>

## 7.7. consultarResultadoItensContratacoes_PNCP_14133

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

<a href="#">⬆️ Voltar ao topo</a>

### 7.7.1. consultarResultadoItensContratacoes_PNCP_14133_Id

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

<a href="#">⬆️ Voltar ao topo</a>

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>
