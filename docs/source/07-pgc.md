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

<a href="#">⬆️ Voltar ao topo</a>

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


<a href="#">⬆️ Voltar ao topo</a>

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

<a href="#">⬆️ Voltar ao topo</a>

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


<a href="#">⬆️ Voltar ao topo</a>

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

<a href="#">⬆️ Voltar ao topo</a>

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


<a href="#">⬆️ Voltar ao topo</a>


<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>
