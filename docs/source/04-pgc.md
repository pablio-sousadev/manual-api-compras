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

# 4. Módulo PGC — Planejamento e Gerenciamento de Contratações

O PGC, no contexto da administração pública brasileira, visa organizar e planejar as contratações.

## 4.1. consultarPgcDetalhe

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
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| codigoUasg | Texto/Número | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |
| nomeUasg | Texto/Número | Nome da UASG |
| orgao | Texto/Número | CNPJ do órgão (sem máscara) |
| numeroArtefato | Texto/Número | Número sequencial do artefato de planejamento no PGC |
| anoArtefato | Texto/Número | Ano de elaboração do artefato de planejamento no PGC |
| codigoEstadoArtefato | Texto/Número | Código do estado ou situação atual do artefato de planejamento no PGC |
| codigoCategoriaArtefato | Texto/Número | Código da categoria do artefato de planejamento no PGC |
| descricaoArtefato | Texto/Número | Descrição textual do artefato de planejamento da contratação |
| codigoTipoArtefato | Texto/Número | Código identificador do tipo de artefato de planejamento (DFD, ETP, TR etc.) |
| ordemDfd | Texto/Número | Número de ordem do item dentro do Documento de Formalização de Demanda (DFD) |
| descricaoObjetoDfd | Texto/Número | Descrição sucinta do objeto registrado no Documento de Formalização de Demanda (DFD) |
| nivelPrioridadeDfd | Texto/Número | Grau de prioridade atribuído à demanda no Documento de Formalização de Demanda (DFD) |
| dataPrevistaFormalizacaoDemanda | Texto/Número | Data prevista para a formalização da demanda pela área requisitante |
| codigoAreaDfd | Texto/Número | Código identificador da área requisitante vinculada ao Documento de Formalização de Demanda (DFD) |
| tipoItem | Texto/Número | Classificação do tipo do item no contrato (Material ou Serviço) |
| itemSustentavel | Texto/Número | Indica se o item é sustentável. 0 – False/Não; 1 – True/Sim |
| codigoGrupoMaterial | Texto/Número | Código do grupo de material na estrutura do catálogo CATMAT |
| nomeGrupoMaterial | Texto/Número | Nome do grupo de material na estrutura do catálogo CATMAT |
| codigoClasseMaterial | Texto/Número | Código da classe de material na hierarquia do catálogo CATMAT |
| nomeClasseMaterial | Texto/Número | Nome da classe de material na estrutura do catálogo CATMAT |
| codigoPdmMaterial | Texto/Número | Código do Padrão Descritivo de Material (PDM) no catálogo CATMAT |
| nomePdmMaterial | Texto/Número | Nome do Padrão Descritivo de Material (PDM) no catálogo CATMAT |
| codigoSecaoServico | Texto/Número | Código da seção de serviço na hierarquia do catálogo CATSER |
| nomeSecaoServico | Texto/Número | Nome da seção de serviço na hierarquia do catálogo CATSER |
| codigoDivisaoServico | Texto/Número | Código da divisão de serviço na estrutura do catálogo CATSER |
| nomeDivisaoServico | Texto/Número | Nome da divisão de serviço na estrutura do catálogo CATSER |
| codigoGrupoServico | Texto/Número | Código do grupo de serviço na estrutura do catálogo CATSER |
| nomeGrupoServico | Texto/Número | Nome do grupo de serviço na estrutura do catálogo CATSER |
| codigoClasseServico | Texto/Número | Código da classe de serviço na hierarquia do catálogo CATSER |
| nomeClasseServico | Texto/Número | Nome da classe de serviço na estrutura do catálogo CATSER |
| codigoSubclasseServico | Texto/Número | Código da subclasse de serviço na estrutura do catálogo CATSER |
| nomeSubclasseServico | Texto/Número | Nome da subclasse de serviço na hierarquia do catálogo CATSER |
| codigoItemCatalogo | Texto/Número | Código do item no catálogo de materiais ou serviços |
| descricaoItemCatalogo | Texto/Número | Descrição padronizada do item no catálogo de materiais (CATMAT) ou serviços (CATSER) |
| siglaUnidadeFornecimento | Texto/Número | Sigla da unidade de fornecimento |
| nomeUnidadeFornecimento | Texto/Número | Nome da unidade de fornecimento |
| quantidadeItem | Texto/Número | Quantidade prevista do item no planejamento ou contrato |
| valorUnitarioItem | Texto/Número | Valor unitário estimado ou pactuado para o item |
| valorTotalItem | Texto/Número | Valor total estimado ou contratado para o item no planejamento/contrato |
| tituloProjetoCompra | Texto/Número | Título de identificação do projeto de compra no planejamento (PGC) |
| descricaoProjetoCompra | Texto/Número | Descrição do escopo do projeto de compra no planejamento anual (PGC) |
| anoPcaProjetoCompra | Texto/Número | Ano do projeto de compra no PCA |
| dataInicioProcessoCompra | Texto/Número | Data prevista para o início do processo de contratação conforme planejamento no PGC |
| dataFimProcessoCompra | Texto/Número | Data prevista ou efetiva para conclusão do processo de contratação no planejamento |
| duracaoProcessoCompra | Texto/Número | Duração estimada do processo de contratação em dias |
| numeroItemPncp | Texto/Número | Número sequencial do item da contratação registrado no PNCP |
| statusContratacaoExecucao | Texto/Número | Status do registro. 0 – False/Inativo; 1 – True/Ativo |
| dataHoraPublicacaoPncp | Texto/Número | Data e hora em que o Plano de Contratações Anual ou artefato foi publicado no PNCP |
| dataHoraAtualizacaoArtefato | Texto/Número | Data e hora da última alteração do artefato de planejamento no PGC |
| dataHoraAtualizacaoProjetoCompra | Texto/Número | Data e hora da última atualização do projeto de compra no PGC |
| dataHoraAtualizacaoDfd | Texto/Número | Data e hora da última atualização do Documento de Formalização de Demanda (DFD) |
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

<a href="#">⬆️ Voltar ao topo</a>

### 4.1.1. consultarPgcDetalhe_CSV

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

<a href="#">⬆️ Voltar ao topo</a>

## 4.2. consultarPgcDetalheCatalogo

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
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| codigoUasg | Texto/Número | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |
| nomeUasg | Texto/Número | Nome da UASG |
| orgao | Texto/Número | CNPJ do órgão (sem máscara) |
| numeroArtefato | Texto/Número | Número sequencial do artefato de planejamento no PGC |
| anoArtefato | Texto/Número | Ano de elaboração do artefato de planejamento no PGC |
| codigoEstadoArtefato | Texto/Número | Código do estado ou situação atual do artefato de planejamento no PGC |
| codigoCategoriaArtefato | Texto/Número | Código da categoria do artefato de planejamento no PGC |
| descricaoArtefato | Texto/Número | Descrição textual do artefato de planejamento da contratação |
| codigoTipoArtefato | Texto/Número | Código identificador do tipo de artefato de planejamento (DFD, ETP, TR etc.) |
| ordemDfd | Texto/Número | Número de ordem do item dentro do Documento de Formalização de Demanda (DFD) |
| descricaoObjetoDfd | Texto/Número | Descrição sucinta do objeto registrado no Documento de Formalização de Demanda (DFD) |
| nivelPrioridadeDfd | Texto/Número | Grau de prioridade atribuído à demanda no Documento de Formalização de Demanda (DFD) |
| dataPrevistaFormalizacaoDemanda | Texto/Número | Data prevista para a formalização da demanda pela área requisitante |
| codigoAreaDfd | Texto/Número | Código identificador da área requisitante vinculada ao Documento de Formalização de Demanda (DFD) |
| tipoItem | Texto/Número | Classificação do tipo do item no contrato (Material ou Serviço) |
| itemSustentavel | Texto/Número | Indica se o item é sustentável. 0 – False/Não; 1 – True/Sim |
| codigoGrupoMaterial | Texto/Número | Código do grupo de material na estrutura do catálogo CATMAT |
| nomeGrupoMaterial | Texto/Número | Nome do grupo de material na estrutura do catálogo CATMAT |
| codigoClasseMaterial | Texto/Número | Código da classe de material na hierarquia do catálogo CATMAT |
| nomeClasseMaterial | Texto/Número | Nome da classe de material na estrutura do catálogo CATMAT |
| codigoPdmMaterial | Texto/Número | Código do Padrão Descritivo de Material (PDM) no catálogo CATMAT |
| nomePdmMaterial | Texto/Número | Nome do Padrão Descritivo de Material (PDM) no catálogo CATMAT |
| codigoSecaoServico | Texto/Número | Código da seção de serviço na hierarquia do catálogo CATSER |
| nomeSecaoServico | Texto/Número | Nome da seção de serviço na hierarquia do catálogo CATSER |
| codigoDivisaoServico | Texto/Número | Código da divisão de serviço na estrutura do catálogo CATSER |
| nomeDivisaoServico | Texto/Número | Nome da divisão de serviço na estrutura do catálogo CATSER |
| codigoGrupoServico | Texto/Número | Código do grupo de serviço na estrutura do catálogo CATSER |
| nomeGrupoServico | Texto/Número | Nome do grupo de serviço na estrutura do catálogo CATSER |
| codigoClasseServico | Texto/Número | Código da classe de serviço na hierarquia do catálogo CATSER |
| nomeClasseServico | Texto/Número | Nome da classe de serviço na estrutura do catálogo CATSER |
| codigoSubclasseServico | Texto/Número | Código da subclasse de serviço na estrutura do catálogo CATSER |
| nomeSubclasseServico | Texto/Número | Nome da subclasse de serviço na hierarquia do catálogo CATSER |
| codigoItemCatalogo | Texto/Número | Código do item no catálogo de materiais ou serviços |
| descricaoItemCatalogo | Texto/Número | Descrição padronizada do item no catálogo de materiais (CATMAT) ou serviços (CATSER) |
| siglaUnidadeFornecimento | Texto/Número | Sigla da unidade de fornecimento |
| nomeUnidadeFornecimento | Texto/Número | Nome da unidade de fornecimento |
| quantidadeItem | Texto/Número | Quantidade prevista do item no planejamento ou contrato |
| valorUnitarioItem | Texto/Número | Valor unitário estimado ou pactuado para o item |
| valorTotalItem | Texto/Número | Valor total estimado ou contratado para o item no planejamento/contrato |
| tituloProjetoCompra | Texto/Número | Título de identificação do projeto de compra no planejamento (PGC) |
| descricaoProjetoCompra | Texto/Número | Descrição do escopo do projeto de compra no planejamento anual (PGC) |
| anoPcaProjetoCompra | Texto/Número | Ano do projeto de compra no PCA |
| dataInicioProcessoCompra | Texto/Número | Data prevista para o início do processo de contratação conforme planejamento no PGC |
| dataFimProcessoCompra | Texto/Número | Data prevista ou efetiva para conclusão do processo de contratação no planejamento |
| duracaoProcessoCompra | Texto/Número | Duração estimada do processo de contratação em dias |
| numeroItemPncp | Texto/Número | Número sequencial do item da contratação registrado no PNCP |
| statusContratacaoExecucao | Texto/Número | Status do registro. 0 – False/Inativo; 1 – True/Ativo |
| dataHoraPublicacaoPncp | Texto/Número | Data e hora em que o Plano de Contratações Anual ou artefato foi publicado no PNCP |
| dataHoraAtualizacaoArtefato | Texto/Número | Data e hora da última alteração do artefato de planejamento no PGC |
| dataHoraAtualizacaoProjetoCompra | Texto/Número | Data e hora da última atualização do projeto de compra no PGC |
| dataHoraAtualizacaoDfd | Texto/Número | Data e hora da última atualização do Documento de Formalização de Demanda (DFD) |
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

<a href="#">⬆️ Voltar ao topo</a>

### 4.2.1. consultarPgcDetalheCatalogo_CSV

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

<a href="#">⬆️ Voltar ao topo</a>

## 4.3. consultarPgcAgregacao

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
| ano | integer | <span class="badge-req">🔴 Sim</span> | Ano de referência do registro ou da contratação |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| orgao | Texto/Número | CNPJ do órgão (sem máscara) |
| ano | Texto/Número | Ano de referência do registro ou da contratação |
| poder | Texto/Número | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| esfera | Texto/Número | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| dataHoraPublicacaoPncp | Texto/Número | Data e hora em que o Plano de Contratações Anual ou artefato foi publicado no PNCP |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| quantidadeTotalItens | Texto/Número | Soma total de itens constantes no projeto de compra ou artefato |
| valorTotalEstimado | Texto/Número | Valor total estimado pela Administração para a contratação ou item (em R$) |
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

<a href="#">⬆️ Voltar ao topo</a>

### 4.3.1. consultarPgcAgregacao_CSV

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

<a href="#">⬆️ Voltar ao topo</a>

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>
