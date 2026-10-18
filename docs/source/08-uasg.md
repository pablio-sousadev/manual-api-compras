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

<a href="#">⬆️ Voltar ao topo</a>

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


<a href="#">⬆️ Voltar ao topo</a>

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

<a href="#">⬆️ Voltar ao topo</a>

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


<a href="#">⬆️ Voltar ao topo</a>


<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>
