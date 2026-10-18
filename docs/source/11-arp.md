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
| pagina                    | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina             | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10)            |
| codigoUnidadeGerenciadora | string  | <span class="badge-opt">⚪ Não</span> | Código do registro associado                                                                                  |
| codigoModalidadeCompra    | string  | <span class="badge-opt">⚪ Não</span> | Código do registro associado                                                                                  |
| numeroAtaRegistroPreco    | string  | <span class="badge-opt">⚪ Não</span> | Valor do campo Numero ata registro preco                                                                      |
| dataVigenciaInicialMin    | string  | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro                                                                               |
| dataVigenciaInicialMax    | string  | <span class="badge-req">🔴 Sim</span> | Data correspondente ao registro                                                                               |
| dataAssinaturaInicial     | string  | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro                                                                               |
| dataAssinaturaFinal       | string  | <span class="badge-opt">⚪ Não</span> | Data correspondente ao registro                                                                               |

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

<a href="#">⬆️ Voltar ao topo</a>

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


<a href="#">⬆️ Voltar ao topo</a>

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

<a href="#">⬆️ Voltar ao topo</a>

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

<a href="#">⬆️ Voltar ao topo</a>

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


<a href="#">⬆️ Voltar ao topo</a>

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

<a href="#">⬆️ Voltar ao topo</a>

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

<a href="#">⬆️ Voltar ao topo</a>

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

<a href="#">⬆️ Voltar ao topo</a>


<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>
