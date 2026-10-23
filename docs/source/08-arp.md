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

# 8. Módulo ARP — Ata de Registro de Preços

O Módulo ARP (Ata de Registro de Preços) permite consultar atas vigentes, itens, quantitativos e histórico de adesões.

## 8.1. consultarARP

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

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoUnidadeGerenciadora | string | <span class="badge-opt">⚪ Não</span> | Código da UASG responsável pelo gerenciamento da ata de registro de preços |
| codigoModalidadeCompra | string | <span class="badge-opt">⚪ Não</span> | Código numérico da modalidade da compra originária |
| numeroAtaRegistroPreco | string | <span class="badge-opt">⚪ Não</span> | Número da ata de registro de preços no formato sequencial/ano |
| dataVigenciaInicialMin | string | <span class="badge-req">🔴 Sim</span> | Limite inferior da data de início de vigência para filtro da consulta |
| dataVigenciaInicialMax | string | <span class="badge-req">🔴 Sim</span> | Limite superior da data de início de vigência para filtro da consulta |
| dataAssinaturaInicial | string | <span class="badge-opt">⚪ Não</span> | Data inicial do período de assinatura para filtro da consulta |
| dataAssinaturaFinal | string | <span class="badge-opt">⚪ Não</span> | Data final do período de assinatura para filtro da consulta |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| numeroAtaRegistroPreco | Texto/Número | Número da ata de registro de preços no formato sequencial/ano |
| codigoUnidadeGerenciadora | Texto/Número | Código da UASG responsável pelo gerenciamento da ata de registro de preços |
| nomeUnidadeGerenciadora | Texto/Número | Nome da UASG gerenciadora responsável pela ata de registro de preços |
| codigoOrgao | Texto/Número | Código do órgão |
| nomeOrgao | Texto/Número | Nome do órgão |
| linkAtaPNCP | Texto/Número | URL de acesso direto à página da ata de registro de preços no Portal PNCP |
| linkCompraPNCP | Texto/Número | URL de acesso direto à contratação originária no Portal PNCP |
| numeroCompra | Texto/Número | Número sequencial da compra ou contratação no ano |
| anoCompra | Texto/Número | Ano de abertura do processo de compra ou licitação |
| codigoModalidadeCompra | Texto/Número | Código numérico da modalidade da compra originária |
| nomeModalidadeCompra | Texto/Número | Nome da modalidade de contratação que deu origem à ata ou contrato |
| dataAssinatura | Texto/Número | Data de assinatura da ata de registro de preços ou do instrumento contratual |
| dataVigenciaInicial | Texto/Número | Data de início da vigência da ata de registro de preços ou do contrato |
| dataVigenciaFinal | Texto/Número | Data de término da vigência da ata de registro de preços ou do contrato |
| valorTotal | Texto/Número | Valor financeiro total do item (quantidade multiplicada pelo valor unitário) |
| statusAta | Texto/Número | Status do registro. 0 – False/Inativo; 1 – True/Ativo |
| objeto | Texto/Número | Descrição do objeto da contratação, ata ou contrato |
| quantidadeItens | Texto/Número | Quantidade total de itens vinculados ao registro |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| dataHoraInclusao | Texto/Número | Data e hora de inclusão inicial do registro na base de dados |
| dataHoraExclusao | Texto/Número | Data e hora em que o registro foi marcado como excluído no sistema |
| ataExcluido | Texto/Número | Indica se o registro da ata de registro de preços foi excluído |
| numeroControlePncpAta | Texto/Número | Número de controle único da ata de registro de preços no PNCP |
| numeroControlePncpCompra | Texto/Número | Número de controle único da contratação originária no PNCP |
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

<a href="#">⬆️ Voltar ao topo</a>

### 8.1.1. consultarARP_Id

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
| numeroControlePncpAta | string | <span class="badge-req">🔴 Sim</span> | Número de controle único da ata de registro de preços no PNCP |
| dataAtualizacao | string | <span class="badge-opt">⚪ Não</span> | Data da última atualização cadastral do registro |

<a href="#">⬆️ Voltar ao topo</a>

### 8.1.2. consultarARP_FimVigencia

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
| codigoUnidadeGerenciadora | string | <span class="badge-opt">⚪ Não</span> | Código da UASG responsável pelo gerenciamento da ata de registro de preços |
| codigoModalidadeCompra | string | <span class="badge-opt">⚪ Não</span> | Código numérico da modalidade da compra originária |
| numeroAtaRegistroPreco | string | <span class="badge-opt">⚪ Não</span> | Número da ata de registro de preços no formato sequencial/ano |
| dataVigenciaFinalMin | string | <span class="badge-req">🔴 Sim</span> | Limite inferior da data de fim de vigência para filtro da consulta |
| dataVigenciaFinalMax | string | <span class="badge-req">🔴 Sim</span> | Limite superior da data de fim de vigência para filtro da consulta |
| dataAssinaturaInicial | string | <span class="badge-opt">⚪ Não</span> | Data inicial do período de assinatura para filtro da consulta |
| dataAssinaturaFinal | string | <span class="badge-opt">⚪ Não</span> | Data final do período de assinatura para filtro da consulta |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| numeroAtaRegistroPreco | Texto/Número | Número da ata de registro de preços no formato sequencial/ano |
| codigoUnidadeGerenciadora | Texto/Número | Código da UASG responsável pelo gerenciamento da ata de registro de preços |
| nomeUnidadeGerenciadora | Texto/Número | Nome da UASG gerenciadora responsável pela ata de registro de preços |
| codigoOrgao | Texto/Número | Código do órgão |
| nomeOrgao | Texto/Número | Nome do órgão |
| linkAtaPNCP | Texto/Número | URL de acesso direto à página da ata de registro de preços no Portal PNCP |
| linkCompraPNCP | Texto/Número | URL de acesso direto à contratação originária no Portal PNCP |
| numeroCompra | Texto/Número | Número sequencial da compra ou contratação no ano |
| anoCompra | Texto/Número | Ano de abertura do processo de compra ou licitação |
| codigoModalidadeCompra | Texto/Número | Código numérico da modalidade da compra originária |
| nomeModalidadeCompra | Texto/Número | Nome da modalidade de contratação que deu origem à ata ou contrato |
| dataAssinatura | Texto/Número | Data de assinatura da ata de registro de preços ou do instrumento contratual |
| dataVigenciaInicial | Texto/Número | Data de início da vigência da ata de registro de preços ou do contrato |
| dataVigenciaFinal | Texto/Número | Data de término da vigência da ata de registro de preços ou do contrato |
| valorTotal | Texto/Número | Valor financeiro total do item (quantidade multiplicada pelo valor unitário) |
| statusAta | Texto/Número | Status do registro. 0 – False/Inativo; 1 – True/Ativo |
| objeto | Texto/Número | Descrição do objeto da contratação, ata ou contrato |
| quantidadeItens | Texto/Número | Quantidade total de itens vinculados ao registro |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| dataHoraInclusao | Texto/Número | Data e hora de inclusão inicial do registro na base de dados |
| dataHoraExclusao | Texto/Número | Data e hora em que o registro foi marcado como excluído no sistema |
| ataExcluido | Texto/Número | Indica se o registro da ata de registro de preços foi excluído |
| numeroControlePncpAta | Texto/Número | Número de controle único da ata de registro de preços no PNCP |
| numeroControlePncpCompra | Texto/Número | Número de controle único da contratação originária no PNCP |
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

<a href="#">⬆️ Voltar ao topo</a>

## 8.2. consultarARPItem

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
| codigoUnidadeGerenciadora | integer | <span class="badge-opt">⚪ Não</span> | Código da UASG responsável pelo gerenciamento da ata de registro de preços |
| codigoModalidadeCompra | string | <span class="badge-opt">⚪ Não</span> | Código numérico da modalidade da compra originária |
| dataVigenciaInicialMin | string | <span class="badge-req">🔴 Sim</span> | Limite inferior da data de início de vigência para filtro da consulta |
| dataVigenciaInicialMax | string | <span class="badge-req">🔴 Sim</span> | Limite superior da data de início de vigência para filtro da consulta |
| dataAssinaturaInicial | string | <span class="badge-opt">⚪ Não</span> | Data inicial do período de assinatura para filtro da consulta |
| dataAssinaturaFinal | string | <span class="badge-opt">⚪ Não</span> | Data final do período de assinatura para filtro da consulta |
| numeroItem | string | <span class="badge-opt">⚪ Não</span> | Número sequencial de identificação do item no processo |
| codigoItem | integer | <span class="badge-opt">⚪ Não</span> | Código do item do material/serviço |
| tipoItem | string | <span class="badge-opt">⚪ Não</span> | Classificação do tipo do item no contrato (Material ou Serviço) |
| niFornecedor | string | <span class="badge-opt">⚪ Não</span> | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| codigoPdm | integer | <span class="badge-opt">⚪ Não</span> | Código do Produto Descritivo Básico (PDM) |
| numeroCompra | string | <span class="badge-opt">⚪ Não</span> | Número sequencial da compra ou contratação no ano |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| numeroAtaRegistroPreco | Texto/Número | Número da ata de registro de preços no formato sequencial/ano |
| codigoUnidadeGerenciadora | Texto/Número | Código da UASG responsável pelo gerenciamento da ata de registro de preços |
| numeroCompra | Texto/Número | Número sequencial da compra ou contratação no ano |
| anoCompra | Texto/Número | Ano de abertura do processo de compra ou licitação |
| codigoModalidadeCompra | Texto/Número | Código numérico da modalidade da compra originária |
| dataAssinatura | Texto/Número | Data de assinatura da ata de registro de preços ou do instrumento contratual |
| dataVigenciaInicial | Texto/Número | Data de início da vigência da ata de registro de preços ou do contrato |
| dataVigenciaFinal | Texto/Número | Data de término da vigência da ata de registro de preços ou do contrato |
| numeroItem | Texto/Número | Número sequencial de identificação do item no processo |
| codigoItem | Texto/Número | Código do item do material/serviço |
| descricaoItem | Texto/Número | Descrição do item |
| tipoItem | Texto/Número | Classificação do tipo do item no contrato (Material ou Serviço) |
| quantidadeHomologadaItem | Texto/Número | Quantidade total homologada para o item na contratação |
| classificacaoFornecedor | Texto/Número | Posição de classificação do fornecedor no resultado do item ou ata |
| niFornecedor | Texto/Número | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| nomeRazaoSocialFornecedor | Texto/Número | Nome empresarial (razão social) ou nome completo do fornecedor |
| quantidadeHomologadaVencedor | Texto/Número | Quantidade total adjudicada e homologada ao fornecedor vencedor |
| valorUnitario | Texto/Número | Valor unitário praticado ou contratado para o item (em R$) |
| valorTotal | Texto/Número | Valor financeiro total do item (quantidade multiplicada pelo valor unitário) |
| maximoAdesao | Texto/Número | Quantidade máxima total permitida para adesões (caronas) ao item da ata |
| nomeUnidadeGerenciadora | Texto/Número | Nome da UASG gerenciadora responsável pela ata de registro de preços |
| nomeModalidadeCompra | Texto/Número | Nome da modalidade de contratação que deu origem à ata ou contrato |
| idCompra | Texto/Número | Código identificador único da compra |
| numeroControlePncpCompra | Texto/Número | Número de controle único da contratação originária no PNCP |
| dataHoraInclusao | Texto/Número | Data e hora de inclusão inicial do registro na base de dados |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| quantidadeEmpenhada | Texto/Número | Quantidade do item já empenhada pelas unidades participantes ou caronas |
| percentualMaiorDesconto | Texto/Número | Maior percentual de desconto aplicado |
| situacaoSicaf | Texto/Número | Situação cadastral do fornecedor no Sistema de Cadastramento Unificado de Fornecedores (SICAF) |
| dataHoraExclusao | Texto/Número | Data e hora em que o registro foi marcado como excluído no sistema |
| itemExcluido | Texto/Número | Indica se o item da contratação foi excluído no sistema |
| numeroControlePncpAta | Texto/Número | Número de controle único da ata de registro de preços no PNCP |
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

<a href="#">⬆️ Voltar ao topo</a>

### 8.2.1. consultarARPItem_Id

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
| numeroControlePncpAta | string | <span class="badge-req">🔴 Sim</span> | Número de controle único da ata de registro de preços no PNCP |
| dataAtualizacao | string | <span class="badge-opt">⚪ Não</span> | Data da última atualização cadastral do registro |

<a href="#">⬆️ Voltar ao topo</a>

## 8.3. consultarUnidadesItem

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
| numeroAta | string | <span class="badge-req">🔴 Sim</span> | Número identificador da ata de registro de preços |
| unidadeGerenciadora | string | <span class="badge-req">🔴 Sim</span> | Identificação da unidade gerenciadora da ata de registro de preços |
| numeroItem | string | <span class="badge-req">🔴 Sim</span> | Número sequencial de identificação do item no processo |
| dataAtualizacao | string | <span class="badge-opt">⚪ Não</span> | Data da última atualização cadastral do registro |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| numeroAta | Texto/Número | Número identificador da ata de registro de preços |
| unidadeGerenciadora | Texto/Número | Identificação da unidade gerenciadora da ata de registro de preços |
| numeroItem | Texto/Número | Número sequencial de identificação do item no processo |
| codigoPdm | Texto/Número | Código do Produto Descritivo Básico (PDM) |
| descricaoItem | Texto/Número | Descrição do item |
| fornecedor | Texto/Número | Identificação ou razão social do fornecedor contratado |
| quantidadeRegistrada | Texto/Número | Quantidade originalmente registrada para o item na ata de registro de preços |
| saldoAdesoes | Texto/Número | Saldo remanescente disponível para novas adesões (caronas) ao item da ata |
| saldoRemanejamentoEmpenho | Texto/Número | Saldo disponível para remanejamento de quantitativos entre unidades da ata |
| qtdLimiteAdesao | Texto/Número | Quantidade limite disponível para adesão ao item da ata de registro de preços |
| qtdLimiteInformadoCompra | Texto/Número | Quantidade limite de adesão informada no instrumento convocatório da compra |
| aceitaAdesao | Texto/Número | Indica se a ata de registro de preços permite adesão por órgãos não participantes (carona) |
| dataHoraInclusao | Texto/Número | Data e hora de inclusão inicial do registro na base de dados |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| dataHoraExclusao | Texto/Número | Data e hora em que o registro foi marcado como excluído no sistema |
| codigoUnidade | Texto/Número | Código da unidade administrativa participante ou requisitante |
| nomeUnidade | Texto/Número | Nome da unidade administrativa participante ou gerenciadora |
| tipoUnidade | Texto/Número | Papel da unidade na ata de registro de preços (Gerenciadora, Participante ou Não Participante/Carona) |
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

<a href="#">⬆️ Voltar ao topo</a>

## 8.4. consultarEmpenhosSaldoItem

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
| numeroAta | string | <span class="badge-req">🔴 Sim</span> | Número identificador da ata de registro de preços |
| unidadeGerenciadora | string | <span class="badge-req">🔴 Sim</span> | Identificação da unidade gerenciadora da ata de registro de preços |
| dataAtualizacao | string | <span class="badge-opt">⚪ Não</span> | Data da última atualização cadastral do registro |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| numeroItem | Texto/Número | Número sequencial de identificação do item no processo |
| unidade | Texto/Número | Unidade de medida ou fornecimento do item |
| tipo | Texto/Número | Tipo do item do catálogo a consultar (ex: material ou serviço) |
| quantidadeRegistrada | Texto/Número | Quantidade originalmente registrada para o item na ata de registro de preços |
| quantidadeEmpenhada | Texto/Número | Quantidade do item já empenhada pelas unidades participantes ou caronas |
| saldoEmpenho | Texto/Número | Saldo quantitativo disponível para emissão de novos empenhos na unidade |
| dataHoraInclusao | Texto/Número | Data e hora de inclusão inicial do registro na base de dados |
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

<a href="#">⬆️ Voltar ao topo</a>

## 8.5. consultarAdesoesItem

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
| numeroAta | string | <span class="badge-req">🔴 Sim</span> | Número identificador da ata de registro de preços |
| unidadeGerenciadora | string | <span class="badge-req">🔴 Sim</span> | Identificação da unidade gerenciadora da ata de registro de preços |
| numeroItem | string | <span class="badge-req">🔴 Sim</span> | Número sequencial de identificação do item no processo |
| unidade | string | <span class="badge-opt">⚪ Não</span> | Unidade de medida ou fornecimento do item |
| dataAtualizacao | string | <span class="badge-opt">⚪ Não</span> | Data da última atualização cadastral do registro |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| numeroAta | Texto/Número | Número identificador da ata de registro de preços |
| unidadeGerenciadora | Texto/Número | Identificação da unidade gerenciadora da ata de registro de preços |
| unidadeNaoParticipante | Texto/Número | Indica se a unidade atua como órgão não participante (carona) na ata |
| dataAprovacaoAnalise | Texto/Número | Data de aprovação da análise de viabilidade ou planejamento da demanda |
| quantidadeAprovadaAdesao | Texto/Número | Quantidade total do item já aprovada em solicitações de adesão (carona) |
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

<a href="#">⬆️ Voltar ao topo</a>

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>
