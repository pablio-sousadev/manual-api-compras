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

O Módulo Contratações disponibiliza os dados das contratações públicas regidas pela Lei nº 14.133/2021, incluindo as informações das contratações, dos itens e dos resultados por item, com identificação do número de controle do Portal Nacional de Contratações Públicas (PNCP). Os dados refletem as contratações publicadas no PNCP e permitem consultar, de forma estruturada, o planejamento, a seleção do fornecedor e os resultados das contratações federais.

## 7.1. Indicadores de Modalidade
Consulta os códigos e as descrições dos indicadores de modalidade de contratação, utilizados como parâmetro de filtro nos endpoints do Módulo Contratações.

## 7.2. Modos de Disputa
Consulta os códigos e as descrições dos modos de disputa previstos na Lei nº 14.133/2021 (por exemplo, aberto e fechado), utilizados como parâmetro de filtro nos endpoints do módulo.

## 7.3. Critérios de Julgamento
Consulta os códigos e as descrições dos critérios de julgamento das propostas (por exemplo, menor preço e melhor técnica ou conteúdo artístico), utilizados como parâmetro de filtro.

## 7.4. Amparos Legais
Consulta os códigos e as descrições dos amparos legais das contratações, correspondentes aos dispositivos legais que fundamentam cada procedimento, utilizados como parâmetro de filtro.

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
| unidadeOrgaoCodigoUnidade | string | <span class="badge-opt">⚪ Não</span> | Código da unidade administrativa (UASG) pertencente ao órgão titular da contratação |
| codigoOrgao | integer | <span class="badge-opt">⚪ Não</span> | Código do órgão |
| orgaoEntidadeCnpj | string | <span class="badge-opt">⚪ Não</span> | Número do CNPJ do órgão ou entidade titular da contratação |
| dataPublicacaoPncpInicial | string | <span class="badge-req">🔴 Sim</span> | Data inicial do período de publicação no PNCP (formato AAAA-MM-DD) |
| dataPublicacaoPncpFinal | string | <span class="badge-req">🔴 Sim</span> | Data final do período de publicação no PNCP (formato AAAA-MM-DD) |
| codigoModalidade | integer | <span class="badge-req">🔴 Sim</span> | Código numérico da modalidade da contratação |
| unidadeOrgaoCodigoIbge | integer | <span class="badge-opt">⚪ Não</span> | Código IBGE do município onde se localiza a unidade administrativa do órgão titular |
| unidadeOrgaoUfSigla | string | <span class="badge-opt">⚪ Não</span> | Sigla da Unidade Federativa (UF) da unidade administrativa do órgão titular |
| dataAualizacaoPncp | string | <span class="badge-opt">⚪ Não</span> | Data de atualização da contratação no PNCP utilizada como parâmetro de filtro |
| amparoLegalCodigoPncp | integer | <span class="badge-opt">⚪ Não</span> | Código identificador do amparo legal da contratação no PNCP |
| contratacaoExcluida | boolean | <span class="badge-opt">⚪ Não</span> | Indica se o registro da contratação foi excluído no PNCP |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| idCompra | Texto/Número | Código identificador único da compra |
| numeroControlePNCP | Texto/Número | Número de controle único da contratação no PNCP (formato CNPJ-esfera-sequencial/ano) |
| anoCompraPncp | Texto/Número | Ano da contratação registrado no Portal Nacional de Contratações Públicas (PNCP) |
| sequencialCompraPncp | Texto/Número | Número sequencial da contratação dentro do ano e órgão no PNCP |
| orgaoEntidadeCnpj | Texto/Número | Número do CNPJ do órgão ou entidade titular da contratação |
| orgaoSubrogadoCnpj | Texto/Número | Número do CNPJ do órgão ou entidade para o qual a contratação foi sub-rogada |
| codigoOrgao | Texto/Número | Código do órgão |
| orgaoEntidadeRazaoSocial | Texto/Número | Razão social ou nome oficial do órgão/entidade titular da contratação |
| orgaoSubrogadoRazaoSocial | Texto/Número | Razão social ou nome oficial do órgão/entidade sub-rogado |
| orgaoEntidadeEsferaId | Texto/Número | Sigla identificadora da esfera governamental do órgão titular (F = Federal, E = Estadual, M = Municipal) |
| orgaoSubrogadoEsferaId | Texto/Número | Sigla da esfera governamental do órgão sub-rogado |
| orgaoEntidadePoderId | Texto/Número | Sigla identificadora do Poder ao qual pertence o órgão titular (E = Executivo, L = Legislativo, J = Judiciário) |
| orgaoSubrogadoPoderId | Texto/Número | Sigla do Poder ao qual pertence o órgão sub-rogado |
| unidadeOrgaoCodigoUnidade | Texto/Número | Código da unidade administrativa (UASG) pertencente ao órgão titular da contratação |
| unidadeSubrogadaCodigoUnidade | Texto/Número | Código da unidade administrativa (UASG) para a qual a contratação foi sub-rogada |
| unidadeOrgaoNomeUnidade | Texto/Número | Nome oficial da unidade administrativa (UASG) do órgão titular |
| unidadeSubrogadaNomeUnidade | Texto/Número | Nome oficial da unidade administrativa (UASG) sub-rogada |
| unidadeOrgaoUfSigla | Texto/Número | Sigla da Unidade Federativa (UF) da unidade administrativa do órgão titular |
| unidadeSubrogadaUfSigla | Texto/Número | Sigla da Unidade Federativa (UF) da unidade administrativa sub-rogada |
| unidadeOrgaoMunicipioNome | Texto/Número | Nome do município de localização da unidade administrativa do órgão titular |
| unidadeSubrogadaMunicipioNome | Texto/Número | Nome do município de localização da unidade administrativa sub-rogada |
| unidadeOrgaoCodigoIbge | Texto/Número | Código IBGE do município onde se localiza a unidade administrativa do órgão titular |
| unidadeSubrogadaCodigoIbge | Texto/Número | Código IBGE do município de localização da unidade administrativa sub-rogada |
| numeroCompra | Texto/Número | Número sequencial da compra ou contratação no ano |
| modalidadeIdPncp | Texto/Número | Código identificador da modalidade de contratação na tabela de domínio do PNCP |
| codigoModalidade | Texto/Número | Código numérico da modalidade da contratação |
| modalidadeNome | Texto/Número | Nome da modalidade de contratação (ex.: Pregão Eletrônico, Concorrência, Dispensa) |
| srp | Texto/Número | Indica se a contratação utiliza o Sistema de Registro de Preços (SRP) |
| modoDisputaIdPncp | Texto/Número | Código identificador do modo de disputa na tabela de domínio do PNCP |
| codigoModoDisputa | Texto/Número | Código identificador do modo de disputa adotado na seleção do fornecedor |
| amparoLegalCodigoPncp | Texto/Número | Código identificador do amparo legal da contratação no PNCP |
| amparoLegalNome | Texto/Número | Nome ou identificação resumida do amparo legal da contratação (lei, artigo e inciso) |
| amparoLegalDescricao | Texto/Número | Descrição detalhada do dispositivo legal que fundamenta a contratação |
| informacaoComplementar | Texto/Número | Informações adicionais relevantes sobre a contratação ou edital |
| processo | Texto/Número | Número do processo administrativo de contratação |
| objetoCompra | Texto/Número | Descrição do objeto da compra |
| existeResultado | Texto/Número | Indica se o item da contratação já possui resultado de julgamento registrado |
| orcamentoSigilosoCodigo | Texto/Número | Código indicador do regime de sigilo do orçamento estimado |
| orcamentoSigilosoDescricao | Texto/Número | Descrição da condição de publicidade ou sigilo do orçamento estimado |
| situacaoCompraIdPncp | Texto/Número | Código identificador da situação atual da contratação no PNCP |
| situacaoCompraNomePncp | Texto/Número | Descrição da situação atual da contratação no PNCP (ex.: Divulgada no PNCP, Revogada, Anulada, Suspensa) |
| tipoInstrumentoConvocatorioCodigoPncp | Texto/Número | Código identificador do instrumento convocatório na tabela do PNCP |
| tipoInstrumentoConvocatorioNome | Texto/Número | Denominação do instrumento convocatório utilizado (Edital, Aviso de Contratação Direta, Ato que autoriza a Contratação Direta) |
| modoDisputaNomePncp | Texto/Número | Nome do modo de disputa adotado (ex.: Aberto, Aberto-Fechado, Fechado, Não se aplica) |
| valorTotalEstimado | Texto/Número | Valor total estimado pela Administração para a contratação ou item (em R$) |
| valorTotalHomologado | Texto/Número | Valor total efetivamente homologado na contratação ou resultado (em R$) |
| dataInclusaoPncp | Texto/Número | Data de inclusão inicial do registro no Portal Nacional de Contratações Públicas (PNCP) |
| dataAtualizacaoPncp | Texto/Número | Data da última atualização do registro no Portal Nacional de Contratações Públicas (PNCP) |
| dataPublicacaoPncp | Texto/Número | Data de publicação oficial da contratação ou edital no PNCP |
| dataAberturaPropostaPncp | Texto/Número | Data e hora de início do recebimento de propostas registradas no PNCP |
| dataEncerramentoPropostaPncp | Texto/Número | Data e hora de encerramento do recebimento de propostas no PNCP |
| contratacaoExcluida | Texto/Número | Indica se o registro da contratação foi excluído no PNCP |
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
| dataAtualizacaoPncp | string | <span class="badge-opt">⚪ Não</span> | Data da última atualização do registro no Portal Nacional de Contratações Públicas (PNCP) |

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
| unidadeOrgaoCodigoUnidade | string | <span class="badge-opt">⚪ Não</span> | Código da unidade administrativa (UASG) pertencente ao órgão titular da contratação |
| orgaoEntidadeCnpj | string | <span class="badge-opt">⚪ Não</span> | Número do CNPJ do órgão ou entidade titular da contratação |
| situacaoCompraItem | string | <span class="badge-opt">⚪ Não</span> | Código identificador da situação do item da contratação |
| materialOuServico | string | <span class="badge-opt">⚪ Não</span> | Sigla que classifica a natureza do item: 'M' (Material) ou 'S' (Serviço) |
| codigoClasse | integer | <span class="badge-opt">⚪ Não</span> | Código da classe do material/serviço |
| codigoGrupo | integer | <span class="badge-opt">⚪ Não</span> | Código do grupo do material/serviço |
| codItemCatalogo | integer | <span class="badge-opt">⚪ Não</span> | Código do item de material (CATMAT) ou serviço (CATSER) no catálogo de compras |
| temResultado | boolean | <span class="badge-opt">⚪ Não</span> | Indica se o item possui resultado de homologação divulgado (true/false) |
| codFornecedor | string | <span class="badge-opt">⚪ Não</span> | Código identificador interno do fornecedor no sistema |
| dataInclusaoPncpInicial | string | <span class="badge-req">🔴 Sim</span> | Data inicial do período de inclusão no PNCP para filtro da consulta |
| dataInclusaoPncpFinal | string | <span class="badge-req">🔴 Sim</span> | Data final do período de inclusão no PNCP para filtro da consulta |
| dataAtualizacaoPncp | string | <span class="badge-opt">⚪ Não</span> | Data da última atualização do registro no Portal Nacional de Contratações Públicas (PNCP) |
| bps | boolean | <span class="badge-opt">⚪ Não</span> | Indica se está vinculado ao Banco de Preços em Saúde (BPS). 0 – False/Não; 1 – True/Sim |
| margemPreferenciaNormal | boolean | <span class="badge-opt">⚪ Não</span> | Indica se o item prevê aplicação de margem de preferência normal para produtos manufaturados ou serviços nacionais |
| codigoNCM | string | <span class="badge-opt">⚪ Não</span> | Código da Nomenclatura Comum do Mercosul (NCM) associado ao item |
| codigoPdm | string | <span class="badge-opt">⚪ Não</span> | Código do Produto Descritivo Básico (PDM) |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| idCompra | Texto/Número | Código identificador único da compra |
| idCompraItem | Texto/Número | Identificador único do item da compra |
| idContratacaoPNCP | Texto/Número | Identificador único da contratação na base do Portal Nacional de Contratações Públicas (PNCP) |
| unidadeOrgaoCodigoUnidade | Texto/Número | Código da unidade administrativa (UASG) pertencente ao órgão titular da contratação |
| orgaoEntidadeCnpj | Texto/Número | Número do CNPJ do órgão ou entidade titular da contratação |
| numeroItemPncp | Texto/Número | Número sequencial do item da contratação registrado no PNCP |
| numeroItemCompra | Texto/Número | Número do item da compra |
| numeroGrupo | Texto/Número | Número do grupo ou lote ao qual o item pertence na licitação |
| descricaoResumida | Texto/Número | Descrição resumida do objeto ou item contratado |
| materialOuServico | Texto/Número | Sigla que classifica a natureza do item: 'M' (Material) ou 'S' (Serviço) |
| materialOuServicoNome | Texto/Número | Descrição por extenso da natureza do item ('Material' ou 'Serviço') |
| codigoClasse | Texto/Número | Código da classe do material/serviço |
| codigoGrupo | Texto/Número | Código do grupo do material/serviço |
| codItemCatalogo | Texto/Número | Código do item de material (CATMAT) ou serviço (CATSER) no catálogo de compras |
| descricaodetalhada | Texto/Número | Descrição complementar detalhada das características do item |
| unidadeMedida | Texto/Número | Unidade de fornecimento ou medida comercial do item (ex.: Unidade, Caixa, Mês, Quilograma) |
| orcamentoSigiloso | Texto/Número | Indica se o valor estimado da contratação possui caráter sigiloso (art. 24 da Lei nº 14.133/2021) |
| itemCategoriaIdPncp | Texto/Número | Código identificador da categoria do item no padrão do PNCP |
| itemCategoriaNome | Texto/Número | Denominação da categoria na qual o item se enquadra no PNCP |
| criterioJulgamentoIdPncp | Texto/Número | Código identificador do critério de julgamento do item no PNCP |
| criterioJulgamentoNome | Texto/Número | Denominação do critério de julgamento adotado para seleção da proposta (ex.: menor preço, maior desconto) |
| situacaoCompraItem | Texto/Número | Código identificador da situação do item da contratação |
| situacaoCompraItemNome | Texto/Número | Descrição da situação do item da contratação (ex.: Em Andamento, Homologado, Deserto, Fracassado) |
| tipoBeneficio | Texto/Número | Código do tipo de benefício aplicável a ME/EPP (LC nº 123/2006) |
| tipoBeneficioNome | Texto/Número | Descrição do tipo de benefício ME/EPP (Participação exclusiva, Subcontratação, Cota reservada ou Não se aplica) |
| incentivoProdutivoBasico | Texto/Número | Indica se o item exige cumprimento do Processo Produtivo Básico (PPB) |
| quantidade | Texto/Número | Quantidade adquirida |
| valorUnitarioEstimado | Texto/Número | Valor unitário estimado de referência para a aquisição do item (em R$) |
| valorTotal | Texto/Número | Valor financeiro total do item (quantidade multiplicada pelo valor unitário) |
| temResultado | Texto/Número | Indica se o item possui resultado de homologação divulgado (true/false) |
| codFornecedor | Texto/Número | Código identificador interno do fornecedor no sistema |
| nomeFornecedor | Texto/Número | Nome do fornecedor |
| quantidadeResultado | Texto/Número | Quantidade adjudicada ao fornecedor no resultado do item |
| valorUnitarioResultado | Texto/Número | Valor unitário adjudicado no resultado do item (em R$) |
| valorTotalResultado | Texto/Número | Valor total homologado para o fornecedor vencedor no resultado do item |
| dataInclusaoPncp | Texto/Número | Data de inclusão inicial do registro no Portal Nacional de Contratações Públicas (PNCP) |
| dataAtualizacaoPncp | Texto/Número | Data da última atualização do registro no Portal Nacional de Contratações Públicas (PNCP) |
| dataResultado | Texto/Número | Data do resultado da compra |
| margemPreferenciaNormal | Texto/Número | Indica se o item prevê aplicação de margem de preferência normal para produtos manufaturados ou serviços nacionais |
| percentualMargemPreferenciaNormal | Texto/Número | Percentual numérico de margem de preferência normal aplicado ao item |
| margemPreferenciaAdicional | Texto/Número | Indica se o item prevê aplicação de margem de preferência adicional (inovação/desenvolvimento nacional) |
| percentualMargemPreferenciaAdicional | Texto/Número | Percentual numérico de margem de preferência adicional aplicado ao item |
| codigoNCM | Texto/Número | Código da Nomenclatura Comum do Mercosul (NCM) associado ao item |
| descricaoNCM | Texto/Número | Descrição da mercadoria conforme a tabela da Nomenclatura Comum do Mercosul (NCM) |
| numeroControlePNCPCompra | Texto/Número | Número de controle PNCP da compra que originou o registro |
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
| dataAtualizacaoPncp | string | <span class="badge-opt">⚪ Não</span> | Data da última atualização do registro no Portal Nacional de Contratações Públicas (PNCP) |

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
| unidadeOrgaoCodigoUnidade | string | <span class="badge-opt">⚪ Não</span> | Código da unidade administrativa (UASG) pertencente ao órgão titular da contratação |
| orgaoEntidadeCnpj | string | <span class="badge-opt">⚪ Não</span> | Número do CNPJ do órgão ou entidade titular da contratação |
| niFornecedor | string | <span class="badge-opt">⚪ Não</span> | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| codigoPais | string | <span class="badge-opt">⚪ Não</span> | Código ISO de identificação do país de origem do fornecedor |
| porteFornecedorId | integer | <span class="badge-opt">⚪ Não</span> | Código identificador do porte empresarial do fornecedor (ME, EPP, Demais etc.) |
| naturezaJuridicaId | string | <span class="badge-opt">⚪ Não</span> | Código CONCLA/IBGE da natureza jurídica do fornecedor |
| situacaoCompraItemResultadoId | integer | <span class="badge-opt">⚪ Não</span> | Código identificador da situação do resultado do item no PNCP |
| valorUnitarioHomologadoInicial | number | <span class="badge-opt">⚪ Não</span> | Valor unitário originalmente homologado no certame |
| valorUnitarioHomologadoFinal | number | <span class="badge-opt">⚪ Não</span> | Valor unitário final após negociação ou atualização na ata |
| valorTotalHomologadoInicial | number | <span class="badge-opt">⚪ Não</span> | Limite inferior do valor total homologado para filtro |
| valorTotalHomologadoFinal | number | <span class="badge-opt">⚪ Não</span> | Limite superior do valor total homologado para filtro |
| dataResultadoPncpInicial | string | <span class="badge-req">🔴 Sim</span> | Data inicial do período de publicação do resultado no PNCP |
| dataResultadoPncpFinal | string | <span class="badge-req">🔴 Sim</span> | Data final do período de publicação do resultado no PNCP |
| aplicacaoMargemPreferencia | boolean | <span class="badge-opt">⚪ Não</span> | Indica se houve aplicação de margem de preferência no julgamento do item |
| aplicacaoBeneficioMeepp | boolean | <span class="badge-opt">⚪ Não</span> | Indica se houve aplicação de benefício destinado a microempresas e empresas de pequeno porte (LC nº 123/2006) |
| aplicacaoCriterioDesempate | boolean | <span class="badge-opt">⚪ Não</span> | Indica se foi utilizado critério de desempate no julgamento do item |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| idCompraItem | Texto/Número | Identificador único do item da compra |
| idCompra | Texto/Número | Código identificador único da compra |
| idContratacaoPNCP | Texto/Número | Identificador único da contratação na base do Portal Nacional de Contratações Públicas (PNCP) |
| unidadeOrgaoCodigoUnidade | Texto/Número | Código da unidade administrativa (UASG) pertencente ao órgão titular da contratação |
| unidadeOrgaoUfSigla | Texto/Número | Sigla da Unidade Federativa (UF) da unidade administrativa do órgão titular |
| numeroItemPncp | Texto/Número | Número sequencial do item da contratação registrado no PNCP |
| sequencialResultado | Texto/Número | Número sequencial do registro de resultado do item no PNCP |
| niFornecedor | Texto/Número | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| tipoPessoa | Texto/Número | Classificação da personalidade do fornecedor (PJ = Pessoa Jurídica, PF = Pessoa Física, PE = Pessoa Estrangeira) |
| nomeRazaoSocialFornecedor | Texto/Número | Nome empresarial (razão social) ou nome completo do fornecedor |
| codigoPais | Texto/Número | Código ISO de identificação do país de origem do fornecedor |
| indicadorSubcontratacao | Texto/Número | Indica se houve previsão ou ocorrência de subcontratação para o item |
| ordemClassificacaoSrp | Texto/Número | Ordem de classificação do fornecedor no cadastro de reserva do registro de preços |
| quantidadeHomologada | Texto/Número | Quantidade do item efetivamente homologada para o fornecedor na ata ou compra |
| valorUnitarioHomologado | Texto/Número | Valor unitário homologado ao fornecedor vencedor do item (em R$) |
| valorTotalHomologado | Texto/Número | Valor total efetivamente homologado na contratação ou resultado (em R$) |
| percentualDesconto | Texto/Número | Percentual de desconto ofertado ou homologado sobre o valor de referência |
| situacaoCompraItemResultadoId | Texto/Número | Código identificador da situação do resultado do item no PNCP |
| situacaoCompraItemResultadoNome | Texto/Número | Descrição da situação do resultado do item (ex.: Informado, Cancelado) |
| motivoCancelamento | Texto/Número | Justificativa registrada para o cancelamento do item ou do resultado da contratação |
| porteFornecedorId | Texto/Número | Código identificador do porte empresarial do fornecedor (ME, EPP, Demais etc.) |
| porteFornecedorNome | Texto/Número | Descrição do enquadramento de porte empresarial do fornecedor |
| naturezaJuridicaNome | Texto/Número | Descrição da natureza jurídica do fornecedor contratado |
| naturezaJuridicaId | Texto/Número | Código CONCLA/IBGE da natureza jurídica do fornecedor |
| dataInclusaoPncp | Texto/Número | Data de inclusão inicial do registro no Portal Nacional de Contratações Públicas (PNCP) |
| dataAtualizacaoPncp | Texto/Número | Data da última atualização do registro no Portal Nacional de Contratações Públicas (PNCP) |
| dataCancelamentoPncp | Texto/Número | Data de registro do cancelamento do item ou resultado no PNCP |
| dataResultadoPncp | Texto/Número | Data de homologação ou publicação do resultado do item no PNCP |
| numeroControlePNCPCompra | Texto/Número | Número de controle PNCP da compra que originou o registro |
| orgaoEntidadeCnpj | Texto/Número | Número do CNPJ do órgão ou entidade titular da contratação |
| aplicacaoMargemPreferencia | Texto/Número | Indica se houve aplicação de margem de preferência no julgamento do item |
| amparoLegalMargemPreferenciaId | Texto/Número | Código identificador do amparo legal que regulamenta a margem de preferência |
| amparoLegalMargemPreferenciaNome | Texto/Número | Denominação do ato normativo que regulamenta a margem de preferência |
| aplicacaoBeneficioMeepp | Texto/Número | Indica se houve aplicação de benefício destinado a microempresas e empresas de pequeno porte (LC nº 123/2006) |
| aplicacaoCriterioDesempate | Texto/Número | Indica se foi utilizado critério de desempate no julgamento do item |
| amparoLegalCriterioDesempateId | Texto/Número | Código identificador do amparo legal referente ao critério de desempate aplicado |
| amparoLegalCriterioDesempateNome | Texto/Número | Denominação do amparo legal referente ao critério de desempate aplicado |
| moedaEstrangeiraId | Texto/Número | Código identificador da moeda estrangeira utilizada na cotação da proposta |
| dataCotacaoMoedaEstrangeira | Texto/Número | Data da cotação de câmbio utilizada para conversão de valores em moeda estrangeira |
| valorNominalMoedaEstrangeira | Texto/Número | Valor nominal da proposta expresso na moeda estrangeira de origem |
| paisOrigemProdutoServicoId | Texto/Número | Código ISO do país de origem do produto ou serviço ofertado |
| timezoneCotacaoMoedaEstrangeira | Texto/Número | Fuso horário de referência da cotação de moeda estrangeira |
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
| dataAtualizacaoPncp | string | <span class="badge-opt">⚪ Não</span> | Data da última atualização do registro no Portal Nacional de Contratações Públicas (PNCP) |

<a href="#">⬆️ Voltar ao topo</a>

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>
