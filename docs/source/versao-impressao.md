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

# MANUAL COMPLETO: API DO COMPRAS.GOV.BR

> **Tipo:** Manual  
> **Público-alvo:** Desenvolvedores e integradores de sistemas  
> **Objetivo:** Consultar a referência técnica dos endpoints, parâmetros e dados de retorno da API de Compras Governamentais.

**VERSÃO 3.0 – Ago/26** *(Referente à API Compras.gov.br v3 / Especificação OpenAPI 1.0.0)*  
Ministério da Gestão e da Inovação em Serviços Públicos – MGI

---

<h2 id="sumario">Sumário</h2>

- <a href="#introducao">Introdução</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#outros-topicos-relevantes">Outros tópicos relevantes</a>
- <a href="#limites-de-uso">Limites de uso</a>
- <a href="#primeiros-passos">Primeiros passos</a>
- <a href="#modulo-catalogo-material">1. Módulo Catálogo — Material</a>
- <a href="#modulo-catalogo-servico">2. Módulo Catálogo — Serviço</a>
- <a href="#modulo-pesquisa-de-precos">3. Módulo Pesquisa de Preços</a>
- <a href="#modulo-pgc-planejamento-e-gerenciamento-de-contratacoes">4. Módulo PGC — Planejamento e Gerenciamento de Contratações</a>
- <a href="#modulo-uasg">5. Módulo UASG</a>
- <a href="#modulo-legado">6. Módulo Legado</a>
- <a href="#modulo-contratacoes">7. Módulo Contratações</a>
- <a href="#modulo-arp-ata-de-registro-de-precos">8. Módulo ARP — Ata de Registro de Preços</a>
- <a href="#modulo-contratos">9. Módulo Contratos</a>
- <a href="#modulo-fornecedor">10. Módulo Fornecedor</a>
- <a href="#modulo-ocds">11. Módulo OCDS</a>

---

<h2 id="introducao">Introdução</h2>

O Sistema Integrado de Administração de Serviços Gerais – Siasg, instituído pelo art. 7º do Decreto nº 1.094, de 23 de março de 1994, é o sistema informatizado de apoio às atividades operacionais do Sistema de Serviços Gerais – Sisg. A finalidade do Siasg é integrar os órgãos da Administração Pública Federal direta, autárquica e fundacional. Após a reestruturação do Sisg (nova releitura), o SIASG passa a receber o sistema de contratações do governo federal, Compras.gov.br.

O Compras.gov.br atua nas três grandes fases do ciclo de contratação pública — Planejamento da Contratação, Seleção do Fornecedor e Gestão e Fiscalização do Contrato —, integrando diversas ferramentas e sistemas que compõem a área de trabalho do gestor público.

---

<h2 id="objetivos">Objetivos</h2>

A API de Dados Abertos do Compras.gov.br tem por objetivo disponibilizar, de forma aberta, estruturada e legível por máquina, os dados das contratações públicas do Governo Federal, permitindo que sistemas externos, órgãos de controle, pesquisadores, empresas e a sociedade em geral possam consultá-los, integrá-los e reutilizá-los de maneira automatizada.

O serviço atende ao dever de transparência ativa previsto na Lei de Acesso à Informação (Lei nº 12.527, de 18 de novembro de 2011), que determina, em seu art. 8º, inciso III, que os órgãos e entidades públicas devem "possibilitar o acesso automatizado por sistemas externos em formatos abertos, estruturados e legíveis por máquina", e está alinhado à política brasileira de dados abertos, que busca ampliar o controle social, a pesquisa, a inovação e a geração de valor a partir dos dados públicos.

Ao oferecer acesso programático, padronizado e gratuito aos dados de contratações, a API amplia a transparência dos gastos públicos, reduz a assimetria de informação e favorece o desenvolvimento de soluções tecnológicas voltadas à melhoria da gestão pública.

---

<h2 id="outros-topicos-relevantes">Outros tópicos relevantes</h2>

O acesso aos dados é feito através de URLs, o protocolo de comunicação utilizado é o REST - Representational State Transfer/ HTTP 1.1 e os dados trafegados utilizam a notação JSON - JavaScript Object Notation.

Em cada consulta é possível especificar uma série de parâmetros de filtro, que devem compor a URL. Você (ser humano ou máquina) pode navegar através de todos os recursos apenas utilizando os links disponíveis. O acesso à API é realizado através do seguinte endereço: [Swagger UI - Dados Abertos Compras](https://dadosabertos.compras.gov.br/swagger-ui/index.html)

---

<h2 id="limites-de-uso">Limites de uso</h2>

O acesso à API está sujeito a limite de 100 (cem) chamadas a cada 60 (sessenta) segundos por endereço IP. Requisições que excedam esse limite recebem resposta com código HTTP 429 (*Too Many Requests*). Para conjuntos de dados de maior volume, recomenda-se utilizar a paginação disponível em cada endpoint, com até 500 registros por página, ou recorrer ao Repositório de Dados do Compras.gov.br, que disponibiliza os mesmos dados em arquivos para download.

---

<h2 id="primeiros-passos">Primeiros passos</h2>

1. Consulte a documentação interativa ([Swagger UI](https://dadosabertos.compras.gov.br/swagger-ui/index.html)), que permite testar cada endpoint diretamente no navegador.
2. Escolha o módulo correspondente ao dado de interesse.
3. Informe os parâmetros obrigatórios do endpoint (indicados com 🔴 na tabela de parâmetros).
4. Utilize `pagina` e `tamanhoPagina` para navegar pelos resultados (observação: no Módulo 11 – OCDS, por seguir o padrão internacional, o parâmetro de paginação é `page`).
5. Para volumes maiores, prefira o Repositório de Dados.

---

<h2 id="modulo-catalogo-material">1. Módulo Catálogo — Material</h2>

O Catálogo de Materiais (CATMAT) e o Catálogo de Serviços (CATSER), do Sistema Integrado de Administração e Serviços Gerais – SIASG, são as bases de dados que identificam todos os materiais licitados e adquiridos e todos os serviços licitados contratados pela Administração Pública Federal. Todas as operações realizadas por meio do SIASG/Compras Governamentais utilizam esses catálogos para definir os objetos das respectivas licitações e contratações.

<h3 id="consultargrupomaterial">1.1. consultarGrupoMaterial</h3>

Serviço para obter dados e consultar o endpoint consultarGrupoMaterial.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-material/1_consultarGrupoMaterial`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-material/1_consultarGrupoMaterial' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| codigoGrupo | integer | <span class="badge-opt">⚪ Não</span> | Código do grupo do material/serviço |
| statusGrupo | boolean | <span class="badge-opt">⚪ Não</span> | Status do grupo. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
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
"codigoGrupo": 0,
"nomeGrupo": "string",
"statusGrupo": true,
"dataHoraAtualizacao": "2024-01-15 10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarclassematerial">1.2. consultarClasseMaterial</h3>

Serviço para obter dados e consultar o endpoint consultarClasseMaterial.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-material/2_consultarClasseMaterial`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-material/2_consultarClasseMaterial' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| codigoGrupo | integer | <span class="badge-opt">⚪ Não</span> | Código do grupo do material/serviço |
| codigoClasse | integer | <span class="badge-opt">⚪ Não</span> | Código da classe do material/serviço |
| statusClasse | boolean | <span class="badge-opt">⚪ Não</span> | Status da classe. 0 – False/Inativo; 1 – True/Ativo |
| bps | boolean | <span class="badge-opt">⚪ Não</span> | Indica se está vinculado ao Banco de Preços em Saúde (BPS). 0 – False/Não; 1 – True/Sim |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| codigoClasse | Texto/Número | Código da classe do material/serviço |
| codigoGrupo | Texto/Número | Código do grupo do material/serviço |
| nomeGrupo | Texto/Número | Nome do grupo do material |
| nomeClasse | Texto/Número | Nome da classe do material |
| statusClasse | Texto/Número | Status da classe. 0 – False/Inativo; 1 – True/Ativo |
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
"codigoGrupo": 0,
"nomeGrupo": "string",
"nomeClasse": "string",
"statusClasse": true,
"dataHoraAtualizacao": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarpdmmaterial">1.3. consultarPdmMaterial</h3>

Serviço para obter dados e consultar o endpoint consultarPdmMaterial.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-material/3_consultarPdmMaterial`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-material/3_consultarPdmMaterial' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| statusPdm | boolean | <span class="badge-opt">⚪ Não</span> | Status do PDM. 0 – False/Inativo; 1 – True/Ativo |
| codigoPdm | integer | <span class="badge-opt">⚪ Não</span> | Código do Produto Descritivo Básico (PDM) |
| codigoGrupo | integer | <span class="badge-opt">⚪ Não</span> | Código do grupo do material/serviço |
| codigoClasse | integer | <span class="badge-opt">⚪ Não</span> | Código da classe do material/serviço |
| bps | boolean | <span class="badge-opt">⚪ Não</span> | Indica se está vinculado ao Banco de Preços em Saúde (BPS). 0 – False/Não; 1 – True/Sim |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| codigoGrupo | Texto/Número | Código do grupo do material/serviço |
| nomeGrupo | Texto/Número | Nome do grupo do material |
| codigoClasse | Texto/Número | Código da classe do material/serviço |
| nomeClasse | Texto/Número | Nome da classe do material |
| codigoPdm | Texto/Número | Código do Produto Descritivo Básico (PDM) |
| nomePdm | Texto/Número | Nome do PDM |
| statusPdm | Texto/Número | Status do PDM. 0 – False/Inativo; 1 – True/Ativo |
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
"codigoPdm": 0,
"nomePdm": "string",
"statusPdm": true,
"dataHoraAtualizacao": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultaritemmaterial">1.4. consultarItemMaterial</h3>

Serviço para obter dados e consultar o endpoint consultarItemMaterial.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-material/4_consultarItemMaterial`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-material/4_consultarItemMaterial' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoItem | integer | <span class="badge-opt">⚪ Não</span> | Código do item do material/serviço |
| codigoGrupo | integer | <span class="badge-opt">⚪ Não</span> | Código do grupo do material/serviço |
| codigoClasse | integer | <span class="badge-opt">⚪ Não</span> | Código da classe do material/serviço |
| codigoPdm | integer | <span class="badge-opt">⚪ Não</span> | Código do Produto Descritivo Básico (PDM) |
| descricaoItem | string | <span class="badge-opt">⚪ Não</span> | Descrição do item |
| statusItem | boolean | <span class="badge-opt">⚪ Não</span> | Status do item. 0 – False/Inativo; 1 – True/Ativo |
| bps | boolean | <span class="badge-opt">⚪ Não</span> | Indica se está vinculado ao Banco de Preços em Saúde (BPS). 0 – False/Não; 1 – True/Sim |
| codigo_ncm | string | <span class="badge-opt">⚪ Não</span> | Código NCM – Nomenclatura Comum do Mercosul |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| codigoItem | Texto/Número | Código do item do material/serviço |
| codigoGrupo | Texto/Número | Código do grupo do material/serviço |
| nomeGrupo | Texto/Número | Nome do grupo do material |
| codigoClasse | Texto/Número | Código da classe do material/serviço |
| nomeClasse | Texto/Número | Nome da classe do material |
| codigoPdm | Texto/Número | Código do Produto Descritivo Básico (PDM) |
| nomePdm | Texto/Número | Nome do PDM |
| descricaoItem | Texto/Número | Descrição do item |
| statusItem | Texto/Número | Status do item. 0 – False/Inativo; 1 – True/Ativo |
| itemSustentavel | Texto/Número | Indica se o item é sustentável. 0 – False/Não; 1 – True/Sim |
| codigo_ncm | Texto/Número | Código NCM – Nomenclatura Comum do Mercosul |
| descricao_ncm | Texto/Número | Descrição do NCM |
| aplica_margem_preferencia | Texto/Número | Indica se o item aplica margem de preferência. 0 – False/Não; 1 – True/Sim |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoItem": 0,
"codigoGrupo": 0,
"nomeGrupo": "string",
"codigoClasse": 0,
"nomeClasse": "string",
"codigoPdm": 0,
"nomePdm": "string",
"descricaoItem": "string",
"statusItem": true,
"itemSustentavel": true,
"codigo_ncm": "string",
"descricao_ncm": "string",
"aplica_margem_preferencia": true,
"dataHoraAtualizacao": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarmaterialnaturezadespesa">1.5. consultarMaterialNaturezaDespesa</h3>

Serviço para obter dados e consultar o endpoint consultarMaterialNaturezaDespesa.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-material/5_consultarMaterialNaturezaDespesa`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-material/5_consultarMaterialNaturezaDespesa' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoPdm | integer | <span class="badge-opt">⚪ Não</span> | Código do Produto Descritivo Básico (PDM) |
| codigoNaturezaDespesa | string | <span class="badge-opt">⚪ Não</span> | Código da natureza de despesa |
| statusNaturezaDespesa | boolean | <span class="badge-opt">⚪ Não</span> | Status da natureza de despesa. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| codigoPdm | Texto/Número | Código do Produto Descritivo Básico (PDM) |
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
"codigoPdm": 0,
"codigoNaturezaDespesa": "string",
"nomeNaturezaDespesa": "string",
"statusNaturezaDespesa": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarmaterialunidadefornecimento">1.6. consultarMaterialUnidadeFornecimento</h3>

Serviço para obter dados e consultar o endpoint consultarMaterialUnidadeFornecimento.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-material/6_consultarMaterialUnidadeFornecimento`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-material/6_consultarMaterialUnidadeFornecimento' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoPdm | integer | <span class="badge-opt">⚪ Não</span> | Código do Produto Descritivo Básico (PDM) |
| statusUnidadeFornecimentoPdm | boolean | <span class="badge-opt">⚪ Não</span> | Status da unidade de fornecimento do PDM. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| codigoPdm | Texto/Número | Código do Produto Descritivo Básico (PDM) |
| siglaUnidadeFornecimento | Texto/Número | Sigla da unidade de fornecimento |
| nomeUnidadeFornecimento | Texto/Número | Nome da unidade de fornecimento |
| descricaoUnidadeFornecimento | Texto/Número | Descrição da unidade de fornecimento |
| siglaUnidadeMedida | Texto/Número | Sigla da unidade de medida |
| capacidadeUnidadeFornecimento | Texto/Número | Capacidade da unidade de fornecimento |
| numeroSequencialUnidadeFornecimento | Texto/Número | Número sequencial da unidade de fornecimento |
| statusUnidadeFornecimentoPdm | Texto/Número | Status da unidade de fornecimento do PDM. 0 – False/Inativo; 1 – True/Ativo |
| statusUnidadeFornecimento | Texto/Número | Status da unidade de fornecimento. 0 – False/Inativo; 1 – True/Ativo |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoPdm": 0,
"siglaUnidadeFornecimento": "string",
"nomeUnidadeFornecimento": "string",
"descricaoUnidadeFornecimento": "string",
"siglaUnidadeMedida": "string",
"capacidadeUnidadeFornecimento": 0,
"numeroSequencialUnidadeFornecimento": 0,
"statusUnidadeFornecimentoPdm": true,
"statusUnidadeFornecimento": true,
"dataHoraAtualizacao": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarmaterialcaracteristicas">1.7. consultarMaterialCaracteristicas</h3>

Serviço para obter dados e consultar o endpoint consultarMaterialCaracteristicas.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-material/7_consultarMaterialCaracteristicas`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-material/7_consultarMaterialCaracteristicas' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoItem | integer | <span class="badge-opt">⚪ Não</span> | Código do item do material/serviço |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| codigoItem | Texto/Número | Código do item do material/serviço |
| itemSustentavel | Texto/Número | Indica se o item é sustentável. 0 – False/Não; 1 – True/Sim |
| statusItem | Texto/Número | Status do item. 0 – False/Inativo; 1 – True/Ativo |
| codigoCaracteristica | Texto/Número | Código da característica |
| nomeCaracteristica | Texto/Número | Nome da característica |
| statusCaracteristica | Texto/Número | Status da característica. 0 – False/Inativo; 1 – True/Ativo |
| codigoValorCaracteristica | Texto/Número | Código do valor da característica |
| nomeValorCaracteristica | Texto/Número | Nome do valor da característica |
| statusValorCaracteristica | Texto/Número | Status do valor da característica. 0 – False/Inativo; 1 – True/Ativo |
| numeroCaracteristica | Texto/Número | Número sequencial da característica |
| siglaUnidadeMedida | Texto/Número | Sigla da unidade de medida |
| dataHoraAtualizacao | Texto/Número | Data e hora da última atualização do registro |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"codigoItem": 0,
"itemSustentavel": true,
"statusItem": true,
"codigoCaracteristica": "string",
"nomeCaracteristica": "string",
"statusCaracteristica": true,
"codigoValorCaracteristica": "string",
"nomeValorCaracteristica": "string",
"statusValorCaracteristica": true,
"numeroCaracteristica": 0,
"siglaUnidadeMedida": "string",
"dataHoraAtualizacao": "2022-01-01T00:00:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

---

<h2 id="modulo-catalogo-servico">2. Módulo Catálogo — Serviço</h2>

O Catálogo de Materiais (CATMAT) e o Catálogo de Serviços (CATSER), do Sistema Integrado de Administração e Serviços Gerais – SIASG, são as bases de dados que identificam todos os materiais licitados e adquiridos e todos os serviços licitados contratados pela Administração Pública Federal.

<h3 id="consultarsecaoservico">2.1. consultarSecaoServico</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultardivisaoservico">2.2. consultarDivisaoServico</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultargruposervico">2.3. consultarGrupoServico</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarclasseservico">2.4. consultarClasseServico</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarsubclasseservico">2.5. consultarSubClasseServico</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultaritemservico">2.6. consultarItemServico</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarundmedidaservico">2.7. consultarUndMedidaServico</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarnaturezadespesaservico">2.8. consultarNaturezaDespesaServico</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

---

<h2 id="modulo-pesquisa-de-precos">3. Módulo Pesquisa de Preços</h2>

O Módulo Pesquisa de Preço disponibiliza os preços praticados nas contratações públicas federais, permitindo consultar, por material ou serviço, os valores registrados em contratações anteriores. Constitui importante subsídio para a pesquisa de preços e para a estimativa de valores de referência nas contratações.

<h3 id="consultarmaterial">3.1. consultarMaterial</h3>

Serviço para obter dados e consultar o endpoint consultarMaterial.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/1_consultarMaterial`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/1_consultarMaterial' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| tipo | string | <span class="badge-req">🔴 Sim</span> | Tipo do item do catálogo a consultar (ex: material ou serviço) |
| codigo | string | <span class="badge-req">🔴 Sim</span> | Código do item no catálogo |
| codigoUasg | string | <span class="badge-opt">⚪ Não</span> | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |
| estado | string | <span class="badge-opt">⚪ Não</span> | Sigla do estado (UF) |
| codigoMunicipio | integer | <span class="badge-opt">⚪ Não</span> | Código do município (IBGE) |
| dataResultado | boolean | <span class="badge-opt">⚪ Não</span> | Data do resultado da compra |
| codigoClasse | integer | <span class="badge-opt">⚪ Não</span> | Código da classe do material/serviço |
| poder | string | <span class="badge-opt">⚪ Não</span> | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| esfera | string | <span class="badge-opt">⚪ Não</span> | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| idCompra | string | <span class="badge-opt">⚪ Não</span> | Código identificador único da compra |
| dataCompraInicio | string | <span class="badge-opt">⚪ Não</span> | Data de início do período da compra (formato: YYYY-MM-DD) |
| dataCompraFim | string | <span class="badge-opt">⚪ Não</span> | Data de fim do período da compra (formato: YYYY-MM-DD) |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| idCompra | Texto/Número | Código identificador único da compra |
| dataCompra | Texto/Número | Data da compra |
| forma | Texto/Número | Forma de aquisição: SISPP (preços praticados) ou SISRP (menor preço) |
| modalidade | Texto/Número | Código da modalidade de licitação |
| dataHoraAtualizacaoCompra | Texto/Número | Data e hora da última atualização da compra |
| idItemCompra | Texto/Número | Código do item da compra |
| numeroItemCompra | Texto/Número | Número do item da compra |
| niFornecedor | Texto/Número | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| codigoItemCatalogo | Texto/Número | Código do item no catálogo de materiais ou serviços |
| quantidade | Texto/Número | Quantidade adquirida |
| precoUnitario | Texto/Número | Valor unitário do item |
| descricaoItem | Texto/Número | Descrição do item |
| siglaUnidadeFornecimento | Texto/Número | Sigla da unidade de fornecimento |
| nomeUnidadeFornecimento | Texto/Número | Nome da unidade de fornecimento |
| capacidadeUnidadeFornecimento | Texto/Número | Capacidade da unidade de fornecimento |
| siglaUnidadeMedida | Texto/Número | Sigla da unidade de medida |
| nomeUnidadeMedida | Texto/Número | Nome da unidade de medida |
| criterioJulgamento | Texto/Número | Código do critério de julgamento |
| percentualMaiorDesconto | Texto/Número | Maior percentual de desconto aplicado |
| nomeFornecedor | Texto/Número | Nome do fornecedor |
| marca | Texto/Número | Marca do produto (caso exista) |
| dataResultado | Texto/Número | Data do resultado da compra |
| dataHoraAtualizacaoItem | Texto/Número | Data e hora da última atualização do item |
| codigoUasg | Texto/Número | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |
| nomeUasg | Texto/Número | Nome da UASG |
| codigoOrgao | Texto/Número | Código do órgão |
| nomeOrgao | Texto/Número | Nome do órgão |
| estado | Texto/Número | Sigla do estado (UF) |
| codigoMunicipio | Texto/Número | Código do município (IBGE) |
| municipio | Texto/Número | Nome do município |
| poder | Texto/Número | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| esfera | Texto/Número | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| dataHoraAtualizacaoUasg | Texto/Número | Data e hora da última atualização da UASG |
| codigoClasse | Texto/Número | Código da classe do material/serviço |
| nomeClasse | Texto/Número | Nome da classe do material |
| idCompraItem | Texto/Número | Identificador único do item da compra |
| objetoCompra | Texto/Número | Descrição do objeto da compra |
| descricaoDetalhadaItem | Texto/Número | Descrição detalhada do item |
| dataAtualizacaoFato | Texto/Número | Data e hora da atualização do fato |
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
"idCompra": 0,
"dataCompra": "2026-07-29",
"forma": "string",
"modalidade": 1073741824,
"dataHoraAtualizacaoCompra": "2024-01-15T10:30:00",
"idItemCompra": 0,
"numeroItemCompra": 0,
"niFornecedor": "string",
"codigoItemCatalogo": 0,
"quantidade": 0,
"precoUnitario": 0,
"descricaoItem": "string",
"siglaUnidadeFornecimento": "string",
"nomeUnidadeFornecimento": "string",
"capacidadeUnidadeFornecimento": 0,
"siglaUnidadeMedida": "string",
"nomeUnidadeMedida": "string",
"criterioJulgamento": "string",
"percentualMaiorDesconto": 0,
"nomeFornecedor": "string",
"marca": "string",
"dataResultado": "2026-07-29",
"dataHoraAtualizacaoItem": "2024-01-15T10:30:00",
"codigoUasg": "string",
"nomeUasg": "string",
"codigoOrgao": 0,
"nomeOrgao": "string",
"estado": "string",
"codigoMunicipio": 0,
"municipio": "string",
"poder": "string",
"esfera": "string",
"dataHoraAtualizacaoUasg": "2024-01-15T10:30:00",
"codigoClasse": 0,
"nomeClasse": "string",
"idCompraItem": "string",
"objetoCompra": "string",
"descricaoDetalhadaItem": "string",
"dataAtualizacaoFato": "2024-01-15T10:30:00",
"codigoPdm": "string",
"nomePdm": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarmaterial-csv">3.1.1. consultarMaterial_CSV</h4>

Serviço para obter dados e consultar o endpoint consultarMaterial_CSV.

> Este endpoint possui os mesmos parâmetros e dados de retorno do endpoint anterior, porém a resposta é retornada no formato `.csv` em vez de JSON.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/1.1_consultarMaterial_CSV`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/1.1_consultarMaterial_CSV' \
  -H 'accept: */*'
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarmaterialdetalhe">3.2. consultarMaterialDetalhe</h3>

Serviço para obter dados e consultar o endpoint consultarMaterialDetalhe.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/2_consultarMaterialDetalhe`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/2_consultarMaterialDetalhe' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoItemCatalogo | integer | <span class="badge-req">🔴 Sim</span> | Código do item no catálogo de materiais ou serviços |
| dataCompraInicio | string | <span class="badge-opt">⚪ Não</span> | Data de início do período da compra (formato: YYYY-MM-DD) |
| dataCompraFim | string | <span class="badge-opt">⚪ Não</span> | Data de fim do período da compra (formato: YYYY-MM-DD) |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| idCompra | Texto/Número | Código identificador único da compra |
| idItemCompra | Texto/Número | Código do item da compra |
| numeroItemCompra | Texto/Número | Número do item da compra |
| codigoItemCatalogo | Texto/Número | Código do item no catálogo de materiais ou serviços |
| objetoCompra | Texto/Número | Descrição do objeto da compra |
| descricaoDetalhadaItem | Texto/Número | Descrição detalhada do item |
| dataAtualizacaoFato | Texto/Número | Data e hora da atualização do fato |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"idCompra": "string",
"idItemCompra": 0,
"numeroItemCompra": 0,
"codigoItemCatalogo": 0,
"objetoCompra": "string",
"descricaoDetalhadaItem": "string",
"dataAtualizacaoFato": "2024-01-15T10:30:00"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarmaterialdetalhe-csv">3.2.1. consultarMaterialDetalhe_CSV</h4>

Serviço para obter dados e consultar o endpoint consultarMaterialDetalhe_CSV.

> Este endpoint possui os mesmos parâmetros e dados de retorno do endpoint anterior, porém a resposta é retornada no formato `.csv` em vez de JSON.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/2.1_consultarMaterialDetalhe_CSV`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/2.1_consultarMaterialDetalhe_CSV' \
  -H 'accept: */*'
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarservico">3.3. consultarServico</h3>

Serviço para obter dados e consultar o endpoint consultarServico.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/3_consultarServico`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/3_consultarServico' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoItemCatalogo | integer | <span class="badge-req">🔴 Sim</span> | Código do item no catálogo de materiais ou serviços |
| codigoUasg | string | <span class="badge-opt">⚪ Não</span> | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |
| estado | string | <span class="badge-opt">⚪ Não</span> | Sigla do estado (UF) |
| codigoMunicipio | integer | <span class="badge-opt">⚪ Não</span> | Código do município (IBGE) |
| dataResultado | boolean | <span class="badge-opt">⚪ Não</span> | Data do resultado da compra |
| poder | string | <span class="badge-opt">⚪ Não</span> | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| esfera | string | <span class="badge-opt">⚪ Não</span> | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| dataCompraInicio | string | <span class="badge-opt">⚪ Não</span> | Data de início do período da compra (formato: YYYY-MM-DD) |
| dataCompraFim | string | <span class="badge-opt">⚪ Não</span> | Data de fim do período da compra (formato: YYYY-MM-DD) |
| idCompra | string | <span class="badge-opt">⚪ Não</span> | Código identificador único da compra |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| idCompra | Texto/Número | Código identificador único da compra |
| idItemCompra | Texto/Número | Código do item da compra |
| forma | Texto/Número | Forma de aquisição: SISPP (preços praticados) ou SISRP (menor preço) |
| modalidade | Texto/Número | Código da modalidade de licitação |
| criterioJulgamento | Texto/Número | Código do critério de julgamento |
| numeroItemCompra | Texto/Número | Número do item da compra |
| descricaoItem | Texto/Número | Descrição do item |
| codigoItemCatalogo | Texto/Número | Código do item no catálogo de materiais ou serviços |
| nomeUnidadeMedida | Texto/Número | Nome da unidade de medida |
| siglaUnidadeMedida | Texto/Número | Sigla da unidade de medida |
| quantidade | Texto/Número | Quantidade adquirida |
| precoUnitario | Texto/Número | Valor unitário do item |
| percentualMaiorDesconto | Texto/Número | Maior percentual de desconto aplicado |
| niFornecedor | Texto/Número | Número de identificação do fornecedor (CPF/CNPJ/Estrangeiro) |
| nomeFornecedor | Texto/Número | Nome do fornecedor |
| codigoUasg | Texto/Número | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |
| nomeUasg | Texto/Número | Nome da UASG |
| codigoMunicipio | Texto/Número | Código do município (IBGE) |
| municipio | Texto/Número | Nome do município |
| estado | Texto/Número | Sigla do estado (UF) |
| codigoOrgao | Texto/Número | Código do órgão |
| nomeOrgao | Texto/Número | Nome do órgão |
| poder | Texto/Número | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| esfera | Texto/Número | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| dataCompra | Texto/Número | Data da compra |
| dataHoraAtualizacaoCompra | Texto/Número | Data e hora da última atualização da compra |
| dataHoraAtualizacaoItem | Texto/Número | Data e hora da última atualização do item |
| dataResultado | Texto/Número | Data do resultado da compra |
| dataHoraAtualizacaoUasg | Texto/Número | Data e hora da última atualização da UASG |
| objetoCompra | Texto/Número | Descrição do objeto da compra |
| descricaoDetalhadaItem | Texto/Número | Descrição detalhada do item |
| dataAtualizacaoFato | Texto/Número | Data e hora da atualização do fato |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"idCompra": "string",
"idItemCompra": 0,
"forma": "string",
"modalidade": 0,
"criterioJulgamento": "string",
"numeroItemCompra": 0,
"descricaoItem": "string",
"codigoItemCatalogo": 0,
"nomeUnidadeMedida": "string",
"siglaUnidadeMedida": "string",
"quantidade": 0,
"precoUnitario": 0,
"percentualMaiorDesconto": 0,
"niFornecedor": "string",
"nomeFornecedor": "string",
"codigoUasg": "string",
"nomeUasg": "string",
"codigoMunicipio": 0,
"municipio": "string",
"estado": "string",
"codigoOrgao": 0,
"nomeOrgao": "string",
"poder": "string",
"esfera": "string",
"dataCompra": "2024-01-15",
"dataHoraAtualizacaoCompra": "2024-01-15T10:30:00",
"dataHoraAtualizacaoItem": "2024-01-15T10:30:00",
"dataResultado": "2024-01-1",
"dataHoraAtualizacaoUasg": "2024-01-15T10:30:00",
"objetoCompra": "string",
"descricaoDetalhadaItem": "string",
"dataAtualizacaoFato": "2026-07-29T14:28:21.456Z"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarservico-csv">3.3.1. consultarServico_CSV</h4>

Serviço para obter dados e consultar o endpoint consultarServico_CSV.

> Este endpoint possui os mesmos parâmetros e dados de retorno do endpoint anterior, porém a resposta é retornada no formato `.csv` em vez de JSON.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/3.1_consultarServico_CSV`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/3.1_consultarServico_CSV' \
  -H 'accept: */*'
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarservicodetalhe">3.4. consultarServicoDetalhe</h3>

Serviço para obter dados e consultar o endpoint consultarServicoDetalhe.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/4_consultarServicoDetalhe`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/4_consultarServicoDetalhe' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| codigoItemCatalogo | integer | <span class="badge-req">🔴 Sim</span> | Código do item no catálogo de materiais ou serviços |
| dataCompraInicio | string | <span class="badge-opt">⚪ Não</span> | Data de início do período da compra (formato: YYYY-MM-DD) |
| dataCompraFim | string | <span class="badge-opt">⚪ Não</span> | Data de fim do período da compra (formato: YYYY-MM-DD) |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| idCompra | Texto/Número | Código identificador único da compra |
| idItemCompra | Texto/Número | Código do item da compra |
| numeroItemCompra | Texto/Número | Número do item da compra |
| codigoItemCatalogo | Texto/Número | Código do item no catálogo de materiais ou serviços |
| objetoCompra | Texto/Número | Descrição do objeto da compra |
| descricaoDetalhadaItem | Texto/Número | Descrição detalhada do item |
| dataAtualizacaoFato | Texto/Número | Data e hora da atualização do fato |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"idCompra": "string",
"idItemCompra": 0,
"numeroItemCompra": 0,
"codigoItemCatalogo": 0,
"objetoCompra": "string",
"descricaoDetalhadaItem": "string",
"dataAtualizacaoFato": "2026-07-29T14:34:37.824Z"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarservicodetalhe-csv">3.4.1. consultarServicoDetalhe_CSV</h4>

Serviço para obter dados e consultar o endpoint consultarServicoDetalhe_CSV.

> Este endpoint possui os mesmos parâmetros e dados de retorno do endpoint anterior, porém a resposta é retornada no formato `.csv` em vez de JSON.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/4.1_consultarServicoDetalhe_CSV`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-pesquisa-preco/4.1_consultarServicoDetalhe_CSV' \
  -H 'accept: */*'
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

---

<h2 id="modulo-pgc-planejamento-e-gerenciamento-de-contratacoes">4. Módulo PGC — Planejamento e Gerenciamento de Contratações</h2>

O PGC, no contexto da administração pública brasileira, visa organizar e planejar as contratações.

<h3 id="consultarpgcdetalhe">4.1. consultarPgcDetalhe</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarpgcdetalhe-csv">4.1.1. consultarPgcDetalhe_CSV</h4>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarpgcdetalhecatalogo">4.2. consultarPgcDetalheCatalogo</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarpgcdetalhecatalogo-csv">4.2.1. consultarPgcDetalheCatalogo_CSV</h4>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarpgcagregacao">4.3. consultarPgcAgregacao</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarpgcagregacao-csv">4.3.1. consultarPgcAgregacao_CSV</h4>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

---

<h2 id="modulo-uasg">5. Módulo UASG</h2>

Módulo para consulta de informações sobre as Unidades Administrativas de Serviços Gerais (UASG).

<h3 id="consultaruasg">5.1. consultarUasg</h3>

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
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| codigoUasg | Texto/Número | Código identificador da UASG (Unidade Administrativa de Serviços Gerais) |
| nomeUasg | Texto/Número | Nome da UASG |
| usoSisg | Texto/Número | Indica se a UASG usa o SISG. 0 – False/Não; 1 – True/Sim |
| adesaoSiasg | Texto/Número | Indica se a unidade administrativa possui termo de adesão ativo ao SIASG |
| siglaUf | Texto/Número | Sigla da unidade federativa (UF) |
| codigoMunicipio | Texto/Número | Código do município (IBGE) |
| codigoMunicipioIbge | Texto/Número | Código oficial do município sede da unidade segundo a tabela do IBGE |
| nomeMunicipioIbge | Texto/Número | Nome oficial do município conforme tabela territorial do IBGE |
| codigoUnidadePolo | Texto/Número | Código da UASG polo à qual a unidade administrativa está vinculada |
| nomeUnidadePolo | Texto/Número | Nome da UASG polo centralizadora à qual a unidade está vinculada |
| codigoUnidadeEspelho | Texto/Número | Código da UASG espelho vinculada à unidade para fins de integração |
| nomeUnidadeEspelho | Texto/Número | Nome da unidade administrativa configurada como UASG espelho |
| uasgCadastradora | Texto/Número | Código da UASG responsável pelo cadastramento do fornecedor no SICAF |
| cnpjCpfUasg | Texto/Número | Número de inscrição no CNPJ ou CPF vinculado à UASG |
| codigoOrgao | Texto/Número | Código do órgão |
| cnpjCpfOrgao | Texto/Número | CNPJ ou CPF do órgão |
| cnpjCpfOrgaoVinculado | Texto/Número | CNPJ ou CPF do órgão vinculado |
| cnpjCpfOrgaoSuperior | Texto/Número | CNPJ ou CPF do órgão superior |
| codigoSiorg | Texto/Número | Código da unidade administrativa no Sistema de Informações Organizacionais do Governo Federal (SIORG) |
| statusUasg | Texto/Número | Status da UASG. 0 – False/Inativo; 1 – True/Ativo (Obrigatório) |
| dataImplantacaoSidec | Texto/Número | Data de implantação do módulo de divulgação de compras (SIDEC) na unidade administrativa |
| dataHoraMovimento | Texto/Número | Data e hora da última movimentação ou atualização cadastral da unidade/órgão |
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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultaruasg-csv">5.1.1. consultarUasg_CSV</h4>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarorgao">5.2. consultarOrgao</h3>

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
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| codigoOrgao | Texto/Número | Código do órgão |
| nomeOrgao | Texto/Número | Nome do órgão |
| nomeMnemonicoOrgao | Texto/Número | Sigla ou nome mnemônico de identificação do órgão público |
| cnpjCpfOrgao | Texto/Número | CNPJ ou CPF do órgão |
| codigoOrgaoVinculado | Texto/Número | Código identificador do órgão vinculado ou supervisionado |
| cnpjCpfOrgaoVinculado | Texto/Número | CNPJ ou CPF do órgão vinculado |
| nomeOrgaoVinculado | Texto/Número | Nome oficial do órgão ou entidade vinculada |
| codigoOrgaoSuperior | Texto/Número | Código identificador do órgão superior na estrutura da Administração Pública |
| cnpjCpfOrgaoSuperior | Texto/Número | CNPJ ou CPF do órgão superior |
| nomeOrgaoSuperior | Texto/Número | Nome oficial do ministério ou órgão superior vinculante |
| codigoTipoAdministracao | Texto/Número | Código da natureza de administração do órgão (direta, autárquica, fundacional, empresa pública etc.) |
| nomeTipoAdministracao | Texto/Número | Descrição da natureza jurídica da administração do órgão (Administração Direta, Autarquia, Fundação etc.) |
| poder | Texto/Número | Poder da federação. E – Executivo; L – Legislativo; J – Judiciário |
| esfera | Texto/Número | Esfera governamental. F – Federal; E – Estadual; M – Municipal |
| usoSisg | Texto/Número | Indica se a UASG usa o SISG. 0 – False/Não; 1 – True/Sim |
| statusOrgao | Texto/Número | Status do órgão. 0 – False/Inativo; 1 – True/Ativo (Obrigatório) |
| dataHoraMovimento | Texto/Número | Data e hora da última movimentação ou atualização cadastral da unidade/órgão |
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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarorgao-csv">5.2.1. consultarOrgao_CSV</h4>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

---

<h2 id="modulo-legado">6. Módulo Legado</h2>

Possibilita a obtenção de dados sobre as licitações realizadas pelo Governo Federal de acordo com a Lei 8.666/93 e legislação correlata.

<h3 id="consultarlicitacao">6.1. consultarLicitacao</h3>

Serviço para obter dados e consultar o endpoint consultarLicitacao.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/1_consultarLicitacao`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/1_consultarLicitacao' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| uasg | integer | <span class="badge-opt">⚪ Não</span> | Código numérico de 6 dígitos da UASG responsável |
| numero_aviso | integer | <span class="badge-opt">⚪ Não</span> | Número do aviso da licitação ou contratação direta |
| modalidade | integer | <span class="badge-opt">⚪ Não</span> | Código da modalidade de licitação |
| data_publicacao_inicial | string | <span class="badge-req">🔴 Sim</span> | Data de início da publicação (formato: YYYY-MM-DD) |
| data_publicacao_final | string | <span class="badge-req">🔴 Sim</span> | Data final da publicação, limitado a 365 dias (formato: YYYY-MM-DD) |
| pertence14133 | boolean | <span class="badge-opt">⚪ Não</span> | Indica se pertence ao regime da Lei nº 14.133/2021. 0 – False; 1 – True |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| id_compra | Texto/Número | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| identificador | Texto/Número | Código identificador único do registro na consulta |
| numero_processo | Texto/Número | Número dos autos do processo administrativo da contratação |
| uasg | Texto/Número | Código numérico de 6 dígitos da UASG responsável |
| modalidade | Texto/Número | Código da modalidade de licitação |
| nome_modalidade | Texto/Número | Denominação da modalidade licitatória |
| numero_aviso | Texto/Número | Número do aviso da licitação ou contratação direta |
| situacao_aviso | Texto/Número | Situação de publicação do aviso de licitação |
| tipo_pregao | Texto/Número | Forma de realização do pregão no sistema legado |
| tipo_recurso | Texto/Número | Origem ou tipo de recurso orçamentário utilizado na contratação |
| nome_responsavel | Texto/Número | Nome do agente público responsável pela condução da licitação |
| funcao_responsavel | Texto/Número | Cargo ou função do agente público responsável pela condução da licitação |
| numero_itens | Texto/Número | Quantidade total de itens que compõem a licitação |
| valor_estimado_total | Texto/Número | Soma total dos valores estimados dos itens da contratação |
| valor_homologado_total | Texto/Número | Soma total dos valores homologados na contratação legada |
| informacoes_gerais | Texto/Número | Informações gerais sobre a sessão pública e condições da licitação |
| objeto | Texto/Número | Descrição do objeto da contratação, ata ou contrato |
| endereco_entrega_edital | Texto/Número | Endereço físico ou eletrônico para retirada do edital e entrega de documentação |
| codigo_municipio_uasg | Texto/Número | Código do município de localização da UASG responsável |
| data_abertura_proposta | Texto/Número | Data de abertura das propostas comerciais da licitação |
| data_entrega_edital | Texto/Número | Data a partir da qual o edital da licitação ficou disponível aos interessados |
| data_entrega_proposta | Texto/Número | Data limite para entrega das propostas pelos licitantes |
| data_publicacao | Texto/Número | Data de publicação do aviso de licitação no Diário Oficial da União |
| dt_alteracao | Texto/Número | Data da última alteração registrada no processo ou item |
| pertence14133 | Texto/Número | Indica se pertence ao regime da Lei nº 14.133/2021. 0 – False; 1 – True |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"id_compra": "string",
"identificador": "string",
"numero_processo": "string",
"uasg": 0,
"modalidade": 0,
"nome_modalidade": "string",
"numero_aviso": 0,
"situacao_aviso": "string",
"tipo_pregao": "string",
"tipo_recurso": "string",
"nome_responsavel": "string",
"funcao_responsavel": "string",
"numero_itens": 0,
"valor_estimado_total": 0,
"valor_homologado_total": 0,
"informacoes_gerais": "string",
"objeto": "string",
"endereco_entrega_edital": "string",
"codigo_municipio_uasg": 0,
"data_abertura_proposta": "2024-01-15",
"data_entrega_edital": "2024-01-15",
"data_entrega_proposta": "2024-01-15",
"data_publicacao": "2024-01-15",
"dt_alteracao": "2024-01-15T10:30:00",
"pertence14133": true
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarlicitacao-id">6.1.1. consultarLicitacao_Id</h4>

Serviço para obter dados e consultar o endpoint consultarLicitacao_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/1.1_consultarLicitacao_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/1.1_consultarLicitacao_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Data da última alteração registrada no processo ou item |

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultaritemlicitacao">6.2. consultarItemLicitacao</h3>

Serviço para obter dados e consultar o endpoint consultarItemLicitacao.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/2_consultarItemLicitacao`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/2_consultarItemLicitacao' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| uasg | integer | <span class="badge-opt">⚪ Não</span> | Código numérico de 6 dígitos da UASG responsável |
| numero_aviso | integer | <span class="badge-opt">⚪ Não</span> | Número do aviso da licitação ou contratação direta |
| modalidade | integer | <span class="badge-req">🔴 Sim</span> | Código da modalidade de licitação |
| decreto_7174 | boolean | <span class="badge-opt">⚪ Não</span> | Indica se há aplicação de margem de preferência para bens e serviços de informática (Decreto nº 7.174/2010) |
| codigo_item_material | integer | <span class="badge-opt">⚪ Não</span> | Código do item de material no catálogo CATMAT (legado) |
| codigo_item_servico | integer | <span class="badge-opt">⚪ Não</span> | Código do item de serviço no catálogo CATSER (legado) |
| cnpj_fornecedor | string | <span class="badge-opt">⚪ Não</span> | Número do CNPJ do fornecedor participante ou contratado |
| cpfVencedor | string | <span class="badge-opt">⚪ Não</span> | Número do CPF do licitante vencedor (quando pessoa física) |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| numero_licitacao | Texto/Número | Número identificador do certame licitatório |
| uasg | Texto/Número | Código numérico de 6 dígitos da UASG responsável |
| nome_uasg | Texto/Número | Nome por extenso da Unidade Administrativa de Serviços Gerais (UASG) |
| modalidade | Texto/Número | Código da modalidade de licitação |
| nome_modalidade | Texto/Número | Denominação da modalidade licitatória |
| numero_aviso | Texto/Número | Número do aviso da licitação ou contratação direta |
| numero_item_licitacao | Texto/Número | Número sequencial do item dentro da licitação |
| codigo_item_material | Texto/Número | Código do item de material no catálogo CATMAT (legado) |
| nome_material | Texto/Número | Descrição resumida do material licitado |
| codigo_item_servico | Texto/Número | Código do item de serviço no catálogo CATSER (legado) |
| nome_servico | Texto/Número | Descrição resumida do serviço licitado |
| cnpj_fornecedor | Texto/Número | Número do CNPJ do fornecedor participante ou contratado |
| nome_fornecedor | Texto/Número | Razão social ou nome do fornecedor participante |
| quantidade | Texto/Número | Quantidade adquirida |
| unidade | Texto/Número | Unidade de medida ou fornecimento do item |
| descricao_item | Texto/Número | Descrição do item de material ou serviço constante do processo licitatório |
| beneficio | Texto/Número | Descrição ou tipo de benefício concedido a ME/EPP no item da licitação |
| valor_estimado | Texto/Número | Valor estimado da licitação no sistema legado |
| decreto_7174 | Texto/Número | Indica se há aplicação de margem de preferência para bens e serviços de informática (Decreto nº 7.174/2010) |
| criterio_julgamento | Texto/Número | Critério de julgamento utilizado na avaliação das propostas da licitação |
| cpf_vencedor | Texto/Número | Número do CPF do fornecedor vencedor pessoa física no sistema legado |
| nome_vencedor_pf | Texto/Número | Nome civil do licitante pessoa física vencedor do certame |
| sustentavel | Texto/Número | Indica se o item possui critérios de sustentabilidade ambiental, social ou econômica |
| dt_alteracao | Texto/Número | Data da última alteração registrada no processo ou item |
| id_compra | Texto/Número | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| id_compra_item | Texto/Número | Identificador único do item específico dentro da compra no SIASG |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"numero_licitacao": "string",
"uasg": 0,
"nome_uasg": "string",
"modalidade": 0,
"nome_modalidade": "string",
"numero_aviso": 0,
"numero_item_licitacao": 0,
"codigo_item_material": 0,
"nome_material": "string",
"codigo_item_servico": 0,
"nome_servico": "string",
"cnpj_fornecedor": "string",
"nome_fornecedor": "string",
"quantidade": 0,
"unidade": "string",
"descricao_item": "string",
"beneficio": "string",
"valor_estimado": 0,
"decreto_7174": "string",
"criterio_julgamento": "string",
"cpf_vencedor": "string",
"nome_vencedor_pf": "string",
"sustentavel": 0,
"dt_alteracao": "2024-01-15T10:30:00",
"id_compra": "string",
"id_compra_item": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultaritemlicitacao-id">6.2.1. consultarItemLicitacao_Id</h4>

Serviço para obter dados e consultar o endpoint consultarItemLicitacao_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/2.1_consultarItemLicitacao_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/2.1_consultarItemLicitacao_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| id_compra_item | string | <span class="badge-opt">⚪ Não</span> | Identificador único do item específico dentro da compra no SIASG |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Data da última alteração registrada no processo ou item |

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarpregoes">6.3. consultarPregoes</h3>

Serviço para obter dados e consultar o endpoint consultarPregoes.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/3_consultarPregoes`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/3_consultarPregoes' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| co_uasg | integer | <span class="badge-opt">⚪ Não</span> | Código identificador da Unidade Administrativa de Serviços Gerais (UASG) |
| co_orgao | integer | <span class="badge-opt">⚪ Não</span> | Código identificador do órgão na estrutura organizacional do SIASG |
| numero | integer | <span class="badge-opt">⚪ Não</span> | Número sequencial da licitação ou pregão no ano |
| ds_tipo_pregao_compra | string | <span class="badge-opt">⚪ Não</span> | Classificação do pregão quanto à forma de contratação (tradicional ou registro de preços) |
| dt_data_edital_inicial | string | <span class="badge-req">🔴 Sim</span> | Data inicial do período de disponibilização do edital para filtro |
| dt_data_edital_final | string | <span class="badge-req">🔴 Sim</span> | Data final do período de disponibilização do edital para filtro |
| pertence14133 | boolean | <span class="badge-opt">⚪ Não</span> | Indica se pertence ao regime da Lei nº 14.133/2021. 0 – False; 1 – True |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| id_compra | Texto/Número | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| co_processo | Texto/Número | Número do processo administrativo vinculado à contratação |
| co_portaria | Texto/Número | Número da portaria de designação da comissão ou pregoeiro |
| co_uasg | Texto/Número | Código identificador da Unidade Administrativa de Serviços Gerais (UASG) |
| no_ausg | Texto/Número | Nome da Unidade Administrativa de Serviços Gerais (UASG) responsável pelo certame |
| co_orgao | Texto/Número | Código identificador do órgão na estrutura organizacional do SIASG |
| no_orgao | Texto/Número | Nome oficial do órgão público contratante |
| numero | Texto/Número | Número sequencial da licitação ou pregão no ano |
| ds_situacao_pregao | Texto/Número | Descrição da situação operacional do pregão eletrônico |
| ds_tipo_pregao | Texto/Número | Descrição da forma de realização do pregão (eletrônico ou presencial) |
| ds_tipo_pregao_compra | Texto/Número | Classificação do pregão quanto à forma de contratação (tradicional ou registro de preços) |
| tx_objeto | Texto/Número | Texto descritivo do objeto do pregão ou processo de compra |
| valor_estimado_total | Texto/Número | Soma total dos valores estimados dos itens da contratação |
| valor_homologado_total | Texto/Número | Soma total dos valores homologados na contratação legada |
| dt_portaria | Texto/Número | Data de expedição da portaria de designação do pregoeiro e equipe de apoio |
| dt_data_edital | Texto/Número | Data de disponibilização do edital do pregão |
| dt_inicio_proposta | Texto/Número | Data e hora de início para envio de propostas no pregão |
| dt_fim_proposta | Texto/Número | Data e hora limite para acolhimento de propostas no pregão |
| dt_alteracao | Texto/Número | Data da última alteração registrada no processo ou item |
| dt_encerramento | Texto/Número | Data de encerramento da sessão pública do pregão |
| dt_resultado | Texto/Número | Data de divulgação do resultado final do julgamento |
| pertence14133 | Texto/Número | Indica se pertence ao regime da Lei nº 14.133/2021. 0 – False; 1 – True |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"id_compra": "string",
"co_processo": "string",
"co_portaria": "string",
"co_uasg": 0,
"no_ausg": "string",
"co_orgao": 0,
"no_orgao": "string",
"numero": 0,
"ds_situacao_pregao": "string",
"ds_tipo_pregao": "string",
"ds_tipo_pregao_compra": "string",
"tx_objeto": "string",
"valor_estimado_total": "string",
"valor_homologado_total": "string",
"dt_portaria": "2026-07-29T17:58:39.835Z",
"dt_data_edital": "2026-07-29T17:58:39.835Z",
"dt_inicio_proposta": "2026-07-29T17:58:39.835Z",
"dt_fim_proposta": "2026-07-29T17:58:39.835Z",
"dt_alteracao": "2026-07-29T17:58:39.835Z",
"dt_encerramento": "2026-07-29T17:58:39.835Z",
"dt_resultado": "2026-07-29T17:58:39.835Z",
"pertence14133": true
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarpregoes-id">6.3.1. consultarPregoes_Id</h4>

Serviço para obter dados e consultar o endpoint consultarPregoes_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/3.1_consultarPregoes_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/3.1_consultarPregoes_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Data da última alteração registrada no processo ou item |

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultaritenspregoes">6.4. consultarItensPregoes</h3>

Serviço para obter dados e consultar o endpoint consultarItensPregoes.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/4_consultarItensPregoes`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/4_consultarItensPregoes' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| co_uasg | integer | <span class="badge-opt">⚪ Não</span> | Código identificador da Unidade Administrativa de Serviços Gerais (UASG) |
| decreto_7174 | string | <span class="badge-opt">⚪ Não</span> | Indica se há aplicação de margem de preferência para bens e serviços de informática (Decreto nº 7.174/2010) |
| fornecedor_vencedor | string | <span class="badge-opt">⚪ Não</span> | Nome ou razão social do fornecedor declarado vencedor do item |
| dt_hom_inicial | string | <span class="badge-req">🔴 Sim</span> | Data inicial do período de homologação para filtro da consulta |
| dt_hom_final | string | <span class="badge-req">🔴 Sim</span> | Data final do período de homologação para filtro da consulta |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| id_compra | Texto/Número | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| id_compra_item | Texto/Número | Identificador único do item específico dentro da compra no SIASG |
| decreto_7174 | Texto/Número | Indica se há aplicação de margem de preferência para bens e serviços de informática (Decreto nº 7.174/2010) |
| situacao_item | Texto/Número | Situação final do item no certame (Homologado, Cancelado, Deserto etc.) |
| descricao_item | Texto/Número | Descrição do item de material ou serviço constante do processo licitatório |
| descricao_detalhada_item | Texto/Número | Especificação técnica complementar do item licitado |
| margem_preferencial | Texto/Número | Indicador de aplicação de margem de preferência no item do pregão legado |
| tratamento_diferenciado | Texto/Número | Indicador do tipo de tratamento diferenciado conferido a ME/EPP na licitação |
| quantidade_item | Texto/Número | Quantidade demandada do item na licitação |
| unidade_fornecimento | Texto/Número | Unidade física de fornecimento do material ou prestação do serviço |
| valor_estimado_item | Texto/Número | Valor total estimado para o item na licitação legada |
| menor_lance | Texto/Número | Valor do menor lance válido ofertado durante a fase competitiva do item |
| valor_negociado | Texto/Número | Valor final negociado com o fornecedor vencedor no pregão |
| valor_homologado_item | Texto/Número | Valor homologado para o item no certame legado |
| fornecedor_vencedor | Texto/Número | Nome ou razão social do fornecedor declarado vencedor do item |
| no_adjudic | Texto/Número | Nome da autoridade ou pregoeiro responsável pela adjudicação |
| no_hom | Texto/Número | Nome da autoridade competente responsável pela homologação do certame |
| dt_encerramento | Texto/Número | Data de encerramento da sessão pública do pregão |
| dt_adjudic | Texto/Número | Data de adjudicação do objeto ou item do pregão ao licitante vencedor |
| dt_hom | Texto/Número | Data de homologação do resultado do pregão pela autoridade competente |
| dt_alteracao | Texto/Número | Data da última alteração registrada no processo ou item |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"id_compra": "string",
"id_compra_item": "string",
"decreto_7174": "string",
"situacao_item": "string",
"descricao_item": "string",
"descricao_detalhada_item": "string",
"margem_preferencial": "string",
"tratamento_diferenciado": "string",
"quantidade_item": "string",
"unidade_fornecimento": "string",
"valor_estimado_item": "string",
"menor_lance": "string",
"valor_negociado": "string",
"valor_homologado_item": "string",
"fornecedor_vencedor": "string",
"no_adjudic": "string",
"no_hom": "string",
"dt_encerramento": "2026-07-06T19:53:33.156Z",
"dt_adjudic": "2026-07-06T19:53:33.156Z",
"dt_hom": "2026-07-06T19:53:33.156Z",
"dt_alteracao": "2026-07-06T19:53:33.156Z"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultaritenspregoes-id">6.4.1. consultarItensPregoes_Id</h4>

Serviço para obter dados e consultar o endpoint consultarItensPregoes_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/4.1_consultarItensPregoes_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/4.1_consultarItensPregoes_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| id_compra_item | string | <span class="badge-opt">⚪ Não</span> | Identificador único do item específico dentro da compra no SIASG |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Data da última alteração registrada no processo ou item |

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarcomprassemlicitacao">6.5. consultarComprasSemLicitacao</h3>

Serviço para obter dados e consultar o endpoint consultarComprasSemLicitacao.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/5_consultarComprasSemLicitacao`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/5_consultarComprasSemLicitacao' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| dt_ano_aviso | integer | <span class="badge-req">🔴 Sim</span> | Ano de publicação do aviso de contratação direta ou licitação |
| nu_aviso_licitacao | integer | <span class="badge-opt">⚪ Não</span> | Número identificador do aviso de licitação publicado |
| co_modalidade_licitacao | integer | <span class="badge-opt">⚪ Não</span> | Código numérico da modalidade de licitação no sistema legado |
| co_orgao | string | <span class="badge-opt">⚪ Não</span> | Código identificador do órgão na estrutura organizacional do SIASG |
| co_orgao_superior | string | <span class="badge-opt">⚪ Não</span> | Código identificador do órgão superior ao qual a entidade está vinculada |
| co_uasg | integer | <span class="badge-opt">⚪ Não</span> | Código identificador da Unidade Administrativa de Serviços Gerais (UASG) |
| dtDeclaracaoDispensaInicial | string | <span class="badge-opt">⚪ Não</span> | Data inicial do período de declaração de dispensa/inexigibilidade para filtro |
| dtDeclaracaoDispensaFinal | string | <span class="badge-opt">⚪ Não</span> | Data final do período de declaração de dispensa/inexigibilidade para filtro |
| dtRatificacao | string | <span class="badge-opt">⚪ Não</span> | Data de ratificação da dispensa ou inexigibilidade pela autoridade competente |
| dtPublicacao | string | <span class="badge-opt">⚪ Não</span> | Data de publicação do ato de contratação direta na imprensa oficial |
| pertence14133 | boolean | <span class="badge-opt">⚪ Não</span> | Indica se pertence ao regime da Lei nº 14.133/2021. 0 – False; 1 – True |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| id_compra | Texto/Número | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| co_orgao | Texto/Número | Código identificador do órgão na estrutura organizacional do SIASG |
| co_orgao_superior | Texto/Número | Código identificador do órgão superior ao qual a entidade está vinculada |
| co_uasg | Texto/Número | Código identificador da Unidade Administrativa de Serviços Gerais (UASG) |
| no_ausg | Texto/Número | Nome da Unidade Administrativa de Serviços Gerais (UASG) responsável pelo certame |
| co_modalidade_licitacao | Texto/Número | Código numérico da modalidade de licitação no sistema legado |
| ds_lei | Texto/Número | Norma legal de regência aplicável ao procedimento licitatório |
| nu_processo | Texto/Número | Número do processo administrativo no órgão de origem |
| qt_total_item | Texto/Número | Quantidade total de unidades previstas para o item na contratação |
| vr_estimado | Texto/Número | Valor financeiro estimado para a contratação direta ou pregão |
| nu_aviso_licitacao | Texto/Número | Número identificador do aviso de licitação publicado |
| ds_objeto_licitacao | Texto/Número | Descrição do objeto geral do certame licitatório |
| ds_fundamento_legal | Texto/Número | Descrição do fundamento legal que embasa a dispensa ou inexigibilidade de licitação |
| ds_justificativa | Texto/Número | Justificativa administrativa registrada para a contratação direta ou procedimento |
| no_responsavel_decl_disp | Texto/Número | Nome do servidor ou autoridade responsável pela declaração de dispensa/inexigibilidade |
| no_cargo_resp_decl_disp | Texto/Número | Cargo da autoridade responsável pela declaração de dispensa ou inexigibilidade |
| no_responsavel_ratificacao | Texto/Número | Nome da autoridade competente que ratificou a dispensa ou inexigibilidade |
| no_cargo_resp_ratificacao | Texto/Número | Cargo da autoridade superior responsável pela ratificação da contratação direta |
| dt_declaracao_dispensa | Texto/Número | Data da declaração formal da dispensa ou inexigibilidade de licitação |
| dt_ratificacao | Texto/Número | Data de ratificação do procedimento pela autoridade superior |
| dt_publicacao | Texto/Número | Data de publicação oficial do ato ou aviso no Diário Oficial |
| dt_ano_aviso | Texto/Número | Ano de publicação do aviso de contratação direta ou licitação |
| dt_alteracao | Texto/Número | Data da última alteração registrada no processo ou item |
| pertence14133 | Texto/Número | Indica se pertence ao regime da Lei nº 14.133/2021. 0 – False; 1 – True |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"id_compra": "string",
"co_orgao": "string",
"co_orgao_superior": "string",
"co_uasg": 0,
"no_ausg": "string",
"co_modalidade_licitacao": 0,
"ds_lei": "string",
"nu_processo": "string",
"qt_total_item": 0,
"vr_estimado": 0,
"nu_aviso_licitacao": 0,
"ds_objeto_licitacao": "string",
"ds_fundamento_legal": "string",
"ds_justificativa": "string",
"no_responsavel_decl_disp": "string",
"no_cargo_resp_decl_disp": "string",
"no_responsavel_ratificacao": "string",
"no_cargo_resp_ratificacao": "string",
"dt_declaracao_dispensa": "2024-01-15",
"dt_ratificacao": "2024-01-15",
"dt_publicacao": "2024-01-15",
"dt_ano_aviso": 1073741824,
"dt_alteracao": "2024-01-15",
"pertence14133": true
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarcomprasemlicitacao-id">6.5.1. consultarCompraSemLicitacao_Id</h4>

Serviço para obter dados e consultar o endpoint consultarCompraSemLicitacao_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/5.1_consultarCompraSemLicitacao_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/5.1_consultarCompraSemLicitacao_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| idCompra | string | <span class="badge-req">🔴 Sim</span> | Código identificador único da compra |

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarcompraitenssemlicitacao">6.6. consultarCompraItensSemLicitacao</h3>

Serviço para obter dados e consultar o endpoint consultarCompraItensSemLicitacao.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/6_consultarCompraItensSemLicitacao`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/6_consultarCompraItensSemLicitacao' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| co_uasg | integer | <span class="badge-opt">⚪ Não</span> | Código identificador da Unidade Administrativa de Serviços Gerais (UASG) |
| co_orgao | string | <span class="badge-opt">⚪ Não</span> | Código identificador do órgão na estrutura organizacional do SIASG |
| dt_ano_aviso_licitacao | integer | <span class="badge-req">🔴 Sim</span> | Ano de referência do aviso de licitação no sistema legado |
| co_modalidade_licitacao | integer | <span class="badge-opt">⚪ Não</span> | Código numérico da modalidade de licitação no sistema legado |
| co_conjunto_materiais | integer | <span class="badge-opt">⚪ Não</span> | Código identificador do conjunto de materiais no catálogo legado |
| co_servico | integer | <span class="badge-opt">⚪ Não</span> | Código identificador do serviço no catálogo CATSER |
| nu_cpf_cnpj_fornecedor | string | <span class="badge-opt">⚪ Não</span> | Número do CPF ou CNPJ do fornecedor contratado na dispensa/inexigibilidade |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| co_conjunto_materiais | Texto/Número | Código identificador do conjunto de materiais no catálogo legado |
| co_servico | Texto/Número | Código identificador do serviço no catálogo CATSER |
| ds_detalhada | Texto/Número | Detalhamento das especificações do item no pregão ou contratação direta |
| in_tipo_fornecedor_vencedor | Texto/Número | Indicador da natureza do fornecedor vencedor (Pessoa Jurídica, Pessoa Física ou Estrangeiro) |
| no_fornecedor_vencedor | Texto/Número | Nome empresarial ou nome civil do fornecedor vencedor do item |
| no_conjunto_materiais | Texto/Número | Denominação do conjunto ou grupo de materiais no catálogo |
| no_marca_material | Texto/Número | Marca comercial do produto ofertado pelo licitante vencedor |
| no_servico | Texto/Número | Nome descritivo do serviço no catálogo CATSER |
| no_unidade_medida | Texto/Número | Unidade de medida de fornecimento adotada para o item |
| nu_cnpj_vencedor | Texto/Número | Número de inscrição no CNPJ da empresa vencedora do item |
| nu_cpf_vencedor | Texto/Número | Número do CPF da pessoa física vencedora do item |
| qt_material_alt | Texto/Número | Quantidade solicitada na unidade de fornecimento alternativa do material |
| vr_estimado | Texto/Número | Valor financeiro estimado para a contratação direta ou pregão |
| in_material_servico | Texto/Número | Indicador da natureza do item licitado (M para Material ou S para Serviço) |
| dt_publicacao | Texto/Número | Data de publicação oficial do ato ou aviso no Diário Oficial |
| id_compra | Texto/Número | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| id_compra_item | Texto/Número | Identificador único do item específico dentro da compra no SIASG |
| co_uasg | Texto/Número | Código identificador da Unidade Administrativa de Serviços Gerais (UASG) |
| co_modalidade_licitacao | Texto/Número | Código numérico da modalidade de licitação no sistema legado |
| no_modalidade_licitacao | Texto/Número | Denominação da modalidade de licitação no sistema legado |
| nu_aviso_licitacao | Texto/Número | Número identificador do aviso de licitação publicado |
| dt_ano_aviso_licitacao | Texto/Número | Ano de referência do aviso de licitação no sistema legado |
| nu_inciso | Texto/Número | Número do inciso legal que fundamenta a dispensa ou inexigibilidade |
| nu_processo | Texto/Número | Número do processo administrativo no órgão de origem |
| qt_total_item | Texto/Número | Quantidade total de unidades previstas para o item na contratação |
| ds_objeto_licitacao | Texto/Número | Descrição do objeto geral do certame licitatório |
| ds_fundamento_legal | Texto/Número | Descrição do fundamento legal que embasa a dispensa ou inexigibilidade de licitação |
| ds_justificativa | Texto/Número | Justificativa administrativa registrada para a contratação direta ou procedimento |
| nu_cpf_resp_decl_disp | Texto/Número | CPF ou matrícula do responsável pela declaração de dispensa/inexigibilidade |
| nu_cpf_resp_ratificacao | Texto/Número | CPF ou matrícula da autoridade responsável pela ratificação |
| nu_cpf_resp_publicacao | Texto/Número | CPF ou matrícula do servidor responsável pelo envio para publicação |
| no_responsavel_decl_disp | Texto/Número | Nome do servidor ou autoridade responsável pela declaração de dispensa/inexigibilidade |
| no_cargo_resp_decl_disp | Texto/Número | Cargo da autoridade responsável pela declaração de dispensa ou inexigibilidade |
| no_responsavel_ratificacao | Texto/Número | Nome da autoridade competente que ratificou a dispensa ou inexigibilidade |
| no_cargo_resp_ratificacao | Texto/Número | Cargo da autoridade superior responsável pela ratificação da contratação direta |
| nu_item_material | Texto/Número | Número sequencial do item dentro do processo de compra |
| vr_estimado_item | Texto/Número | Valor estimado correspondente ao item específico da contratação |
| ds_fabricante | Texto/Número | Nome ou identificação do fabricante do material ofertado |
| dt_alteracao | Texto/Número | Data da última alteração registrada no processo ou item |
| co_orgao | Texto/Número | Código identificador do órgão na estrutura organizacional do SIASG |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"co_conjunto_materiais": 0,
"co_servico": 0,
"ds_detalhada": "string",
"in_tipo_fornecedor_vencedor": "string",
"no_fornecedor_vencedor": "string",
"no_conjunto_materiais": "string",
"no_marca_material": "string",
"no_servico": "string",
"no_unidade_medida": "string",
"nu_cnpj_vencedor": "string",
"nu_cpf_vencedor": "string",
"qt_material_alt": 0,
"vr_estimado": 0,
"in_material_servico": "string",
"dt_publicacao": "2026-07-30",
"id_compra": "string",
"id_compra_item": "string",
"co_uasg": 0,
"co_modalidade_licitacao": 0,
"no_modalidade_licitacao": "string",
"nu_aviso_licitacao": 0,
"dt_ano_aviso_licitacao": 0,
"nu_inciso": "string",
"nu_processo": "string",
"qt_total_item": 0,
"ds_objeto_licitacao": "string",
"ds_fundamento_legal": "string",
"ds_justificativa": "string",
"nu_cpf_resp_decl_disp": "string",
"nu_cpf_resp_ratificacao": "string",
"nu_cpf_resp_publicacao": "string",
"no_responsavel_decl_disp": "string",
"no_cargo_resp_decl_disp": "string",
"no_responsavel_ratificacao": "string",
"no_cargo_resp_ratificacao": "string",
"nu_item_material": 0,
"vr_estimado_item": 0,
"ds_fabricante": "string",
"dt_alteracao": "2024-01-15T10:30:00",
"co_orgao": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultaritenscomprassemlicitacao-id">6.6.1. consultarItensComprasSemLicitacao_Id</h4>

Serviço para obter dados e consultar o endpoint consultarItensComprasSemLicitacao_Id.

> Este endpoint possui os mesmos dados de retorno do endpoint anterior. A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/6.1_consultarItensComprasSemLicitacao_Id`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/6.1_consultarItensComprasSemLicitacao_Id' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id_compra | string | <span class="badge-req">🔴 Sim</span> | Identificador único composto da compra no SIASG (UASG + modalidade + número + ano) |
| id_compra_item | string | <span class="badge-opt">⚪ Não</span> | Identificador único do item específico dentro da compra no SIASG |
| dt_alteracao | string | <span class="badge-opt">⚪ Não</span> | Data da última alteração registrada no processo ou item |

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarrdc">6.7. consultarRdc</h3>

Serviço para obter dados e consultar o endpoint consultarRdc.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-legado/7_consultarRdc`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-legado/7_consultarRdc' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| data_publicacao_min | string | <span class="badge-req">🔴 Sim</span> | Data inicial do período de publicação para filtro da consulta |
| data_publicacao_max | string | <span class="badge-req">🔴 Sim</span> | Data final do período de publicação para filtro da consulta |
| endereco_entrega_edital | string | <span class="badge-opt">⚪ Não</span> | Endereço físico ou eletrônico para retirada do edital e entrega de documentação |
| forma_de_realizacao | string | <span class="badge-opt">⚪ Não</span> | Forma de condução da licitação (presencial ou eletrônica) |
| funcao_responsavel | string | <span class="badge-opt">⚪ Não</span> | Cargo ou função do agente público responsável pela condução da licitação |
| modalidade | integer | <span class="badge-opt">⚪ Não</span> | Código da modalidade de licitação |
| nome_responsavel | string | <span class="badge-opt">⚪ Não</span> | Nome do agente público responsável pela condução da licitação |
| numero_aviso | integer | <span class="badge-opt">⚪ Não</span> | Número do aviso da licitação ou contratação direta |
| objeto | string | <span class="badge-opt">⚪ Não</span> | Descrição do objeto da contratação, ata ou contrato |
| orgao | integer | <span class="badge-opt">⚪ Não</span> | CNPJ do órgão (sem máscara) |
| situacao_aviso | string | <span class="badge-opt">⚪ Não</span> | Situação de publicação do aviso de licitação |
| uasg | integer | <span class="badge-opt">⚪ Não</span> | Código numérico de 6 dígitos da UASG responsável |
| uf_uasg | string | <span class="badge-opt">⚪ Não</span> | Sigla da Unidade da Federação (UF) de localização da UASG |
| valor_estimado_total_max | number | <span class="badge-opt">⚪ Não</span> | Limite máximo do valor total estimado para filtro |
| valor_estimado_total_min | number | <span class="badge-opt">⚪ Não</span> | Limite mínimo do valor total estimado para filtro |
| valor_homologado_total_max | number | <span class="badge-opt">⚪ Não</span> | Limite máximo do valor total homologado para filtro |
| valor_homologado_total_min | number | <span class="badge-opt">⚪ Não</span> | Limite mínimo do valor total homologado para filtro |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |
| data_abertura_proposta | Texto/Número | Data de abertura das propostas comerciais da licitação |
| data_entrega_edital | Texto/Número | Data a partir da qual o edital da licitação ficou disponível aos interessados |
| data_entrega_proposta | Texto/Número | Data limite para entrega das propostas pelos licitantes |
| data_publicacao | Texto/Número | Data de publicação do aviso de licitação no Diário Oficial da União |
| endereco_entrega_edital | Texto/Número | Endereço físico ou eletrônico para retirada do edital e entrega de documentação |
| forma_de_realizacao_licitacao | Texto/Número | Modalidade operacional de realização do certame (eletrônico ou presencial) |
| funcao_responsavel | Texto/Número | Cargo ou função do agente público responsável pela condução da licitação |
| identificador | Texto/Número | Código identificador único do registro na consulta |
| informacoes_gerais | Texto/Número | Informações gerais sobre a sessão pública e condições da licitação |
| modalidade | Texto/Número | Código da modalidade de licitação |
| nome_responsavel | Texto/Número | Nome do agente público responsável pela condução da licitação |
| numero_aviso | Texto/Número | Número do aviso da licitação ou contratação direta |
| numero_itens | Texto/Número | Quantidade total de itens que compõem a licitação |
| numero_processo | Texto/Número | Número dos autos do processo administrativo da contratação |
| objeto | Texto/Número | Descrição do objeto da contratação, ata ou contrato |
| situacao_aviso | Texto/Número | Situação de publicação do aviso de licitação |
| tipo_recurso | Texto/Número | Origem ou tipo de recurso orçamentário utilizado na contratação |
| uasg | Texto/Número | Código numérico de 6 dígitos da UASG responsável |
| orgao_uasg | Texto/Número | Código do órgão ao qual a UASG está subordinada |
| uf_uasg | Texto/Número | Sigla da Unidade da Federação (UF) de localização da UASG |
| totalRegistros | Texto/Número | Total de registros encontrados |
| totalPaginas | Texto/Número | Total de páginas disponíveis |
| paginasRestantes | Texto/Número | Número de páginas restantes |

**Exemplo de Retorno:**
```json
{
"resultado": [
{
"data_abertura_proposta": "2024-01-15",
"data_entrega_edital": "2024-01-15",
"data_entrega_proposta": "2024-01-15",
"data_publicacao": "2024-01-15",
"endereco_entrega_edital": "string",
"forma_de_realizacao_licitacao": "string",
"funcao_responsavel": "string",
"identificador": "string",
"informacoes_gerais": "string",
"modalidade": 0,
"nome_responsavel": "0",
"numero_aviso": 0,
"numero_itens": 0,
"numero_processo": "string",
"objeto": "string",
"situacao_aviso": "string",
"tipo_recurso": "string",
"uasg": 0,
"orgao_uasg": 0,
"uf_uasg": "string"
}
],
"totalRegistros": 0,
"totalPaginas": 0,
"paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

---

<h2 id="modulo-contratacoes">7. Módulo Contratações</h2>

O Módulo Contratações disponibiliza os dados das contratações públicas regidas pela Lei nº 14.133/2021, incluindo as informações das contratações, dos itens e dos resultados por item, com identificação do número de controle do Portal Nacional de Contratações Públicas (PNCP). Os dados refletem as contratações publicadas no PNCP e permitem consultar, de forma estruturada, o planejamento, a seleção do fornecedor e os resultados das contratações federais.

<h3 id="indicadores-de-modalidade">7.1. Indicadores de Modalidade</h3>
Consulta os códigos e as descrições dos indicadores de modalidade de contratação, utilizados como parâmetro de filtro nos endpoints do Módulo Contratações.

<h3 id="modos-de-disputa">7.2. Modos de Disputa</h3>
Consulta os códigos e as descrições dos modos de disputa previstos na Lei nº 14.133/2021 (por exemplo, aberto e fechado), utilizados como parâmetro de filtro nos endpoints do módulo.

<h3 id="criterios-de-julgamento">7.3. Critérios de Julgamento</h3>
Consulta os códigos e as descrições dos critérios de julgamento das propostas (por exemplo, menor preço e melhor técnica ou conteúdo artístico), utilizados como parâmetro de filtro.

<h3 id="amparos-legais">7.4. Amparos Legais</h3>
Consulta os códigos e as descrições dos amparos legais das contratações, correspondentes aos dispositivos legais que fundamentam cada procedimento, utilizados como parâmetro de filtro.

<h3 id="consultarcontratacoes-pncp-14133">7.5. consultarContratacoes_PNCP_14133</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarcontratacoes-pncp-14133-id">7.5.1. consultarContratacoes_PNCP_14133_Id</h4>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultaritenscontratacoes-pncp-14133">7.6. consultarItensContratacoes_PNCP_14133</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultaritenscontratacoes-pncp-14133-id">7.6.1. consultarItensContratacoes_PNCP_14133_Id</h4>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarresultadoitenscontratacoes-pncp-14133">7.7. consultarResultadoItensContratacoes_PNCP_14133</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarresultadoitenscontratacoes-pncp-14133-id">7.7.1. consultarResultadoItensContratacoes_PNCP_14133_Id</h4>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

---

<h2 id="modulo-arp-ata-de-registro-de-precos">8. Módulo ARP — Ata de Registro de Preços</h2>

O Módulo ARP (Ata de Registro de Preços) permite consultar atas vigentes, itens, quantitativos e histórico de adesões.

<h3 id="consultararp">8.1. consultarARP</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultararp-id">8.1.1. consultarARP_Id</h4>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultararp-fimvigencia">8.1.2. consultarARP_FimVigencia</h4>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultararpitem">8.2. consultarARPItem</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultararpitem-id">8.2.1. consultarARPItem_Id</h4>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarunidadesitem">8.3. consultarUnidadesItem</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarempenhossaldoitem">8.4. consultarEmpenhosSaldoItem</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultaradesoesitem">8.5. consultarAdesoesItem</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

---

<h2 id="modulo-contratos">9. Módulo Contratos</h2>

O Módulo Contratos permite acesso às informações sobre contratos firmados pela Administração Pública.

<h3 id="consultarcontratos">9.1. consultarContratos</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarcontratos-id">9.1.1. consultarContratos_Id</h4>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarcontratos-fimvigencia">9.1.2. consultarContratos_FimVigencia</h4>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h3 id="consultarcontratositem">9.2. consultarContratosItem</h3>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

<h4 id="consultarcontratositem-id">9.2.1. consultarContratosItem_Id</h4>

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

<a href="#sumario">⬆️ Voltar ao sumário</a>

---

<h2 id="modulo-fornecedor">10. Módulo Fornecedor</h2>

O Módulo Fornecedor permite a consulta de dados cadastrais e situação dos fornecedores habilitados para participar de processos de contratação pública.

<h3 id="consultarfornecedor">10.1. consultarFornecedor</h3>

Serviço que permite consultar dados cadastrais de fornecedores, incluindo informações sobre porte empresarial, natureza jurídica e situação de habilitação para licitar.

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-fornecedor/1_consultarFornecedor`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-fornecedor/1_consultarFornecedor' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| pagina | integer | <span class="badge-opt">⚪ Não</span> | Referente à paginação dos resultados. Permite ao usuário navegar entre as páginas de resultados. (Default: 1) |
| tamanhoPagina | integer | <span class="badge-opt">⚪ Não</span> | Ajustar o tamanho de registros por página (limite máx. de 500 registros por página). (Default: 10) |
| cnpj | string | <span class="badge-opt">⚪ Não</span> | CNPJ do fornecedor (sem máscara) |
| cpf | string | <span class="badge-opt">⚪ Não</span> | CPF do fornecedor (sem máscara) |
| naturezaJuridicaId | integer | <span class="badge-opt">⚪ Não</span> | Código da natureza jurídica do fornecedor |
| porteEmpresaId | integer | <span class="badge-opt">⚪ Não</span> | Código do porte da empresa |
| codigoCnae | integer | <span class="badge-opt">⚪ Não</span> | Código CNAE (Classificação Nacional de Atividades Econômicas) |
| ativo | boolean | <span class="badge-req">🔴 Sim</span> | Indica se o fornecedor está ativo. 0 – False/Inativo; 1 – True/Ativo |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| ativo | Booleano | Indica se o fornecedor está ativo |
| cnpj | Texto | CNPJ do fornecedor |
| cpf | Texto | CPF do fornecedor |
| habilitadoLicitar | Booleano | Indica se o fornecedor está habilitado para licitar |
| codigoCnae | Inteiro | Código CNAE do fornecedor |
| nomeCnae | Texto | Descrição da atividade CNAE |
| nomeMunicipio | Texto | Nome do município do fornecedor |
| naturezaJuridicaId | Inteiro | Código da natureza jurídica |
| naturezaJuridicaNome | Texto | Descrição da natureza jurídica |
| porteEmpresaId | Inteiro | Código do porte da empresa |
| porteEmpresaNome | Texto | Descrição do porte da empresa |
| nomeRazaoSocialFornecedor | Texto | Nome ou razão social do fornecedor |
| ufSigla | Texto | Sigla da unidade federativa (UF) do fornecedor |
| totalRegistros | Inteiro | Total de registros encontrados |
| totalPaginas | Inteiro | Total de páginas disponíveis |
| paginasRestantes | Inteiro | Número de páginas restantes |
| resultado | Texto/Número | Lista de registros retornados na página atual da consulta |

**Exemplo de Retorno:**
```json
{
  "resultado": [
    {
      "ativo": true,
      "cnpj": "string",
      "cpf": "string",
      "habilitadoLicitar": true,
      "codigoCnae": 0,
      "nomeCnae": "string",
      "nomeMunicipio": "string",
      "naturezaJuridicaId": 0,
      "naturezaJuridicaNome": "string",
      "porteEmpresaId": 0,
      "porteEmpresaNome": "string",
      "nomeRazaoSocialFornecedor": "string",
      "ufSigla": "string"
    }
  ],
  "totalRegistros": 0,
  "totalPaginas": 0,
  "paginasRestantes": 0
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

---

<h2 id="modulo-ocds">11. Módulo OCDS</h2>

O Módulo OCDS (Open Contracting Data Standard) disponibiliza dados de contratações públicas no formato aberto e padronizado internacionalmente pelo padrão OCDS, facilitando a interoperabilidade e a análise de dados de contratações governamentais por sistemas externos.

> **Nota sobre paginação:** Por seguir a especificação internacional *Open Contracting Data Standard (OCDS)*, o endpoint deste módulo utiliza o parâmetro `page` (em inglês) para navegação entre páginas, enquanto os demais módulos da API utilizam o parâmetro `pagina`.

<h3 id="releases">11.1. releases</h3>

Serviço que retorna os dados de contratações públicas no formato OCDS, incluindo informações sobre a licitação, partes envolvidas, itens licitados, lotes e resultados (adjudicações).

**Endpoint:** `https://dadosabertos.compras.gov.br/modulo-ocds/1_releases`  

**Método HTTP:** <span class="badge-get">GET</span>

**Exemplo de Requisição (cURL):**
```bash
curl -X 'GET' \
  'https://dadosabertos.compras.gov.br/modulo-ocds/1_releases' \
  -H 'accept: */*'
```

**Parâmetros da Solicitação:**

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| page | integer | <span class="badge-opt">⚪ Não</span> | Número da página para paginação dos resultados |
| offSet | integer | <span class="badge-opt">⚪ Não</span> | Deslocamento (offset) para paginação dos resultados |
| buyerID | string | <span class="badge-req">🔴 Sim</span> | Identificador do comprador (CNPJ do órgão) |
| releaseStartDate | string | <span class="badge-req">🔴 Sim</span> | Data de início do período de consulta (formato: YYYY-MM-DD) |
| releaseEndDate | string | <span class="badge-req">🔴 Sim</span> | Data de fim do período de consulta (formato: YYYY-MM-DD) |

**Dados de Retorno:**

| Campo | Tipo | Descrição |
|---|---|---|
| publisherDTO | Objeto | Informações do publicador dos dados |
| publisherDTO.name | Texto | Nome do publicador |
| publisherDTO.uri | Texto | URI do publicador |
| publishedDate | Data | Data de publicação do pacote OCDS |
| version | Texto | Versão do padrão OCDS utilizado |
| publicationPolicy | Texto | Política de publicação dos dados |
| license | Texto | Licença de uso dos dados |
| extensions | Array | Extensões OCDS utilizadas |
| releases | Array | Lista de releases (registros) no padrão OCDS |
| releases[].ocid | Texto | Identificador único de contratação aberta (OCID) |
| releases[].id | Texto | Identificador único do release |
| releases[].date | Data | Data do release |
| releases[].tag | Array | Tags descritivas do estágio da contratação |
| releases[].initiationType | Texto | Tipo de iniciação do processo (ex: tender) |
| releases[].buyer | Objeto | Informações do comprador (órgão) |
| releases[].language | Texto | Idioma do release |
| releases[].parties | Array | Partes envolvidas na contratação |
| releases[].tender | Objeto | Dados da licitação |
| releases[].tender.id | Texto | Identificador da licitação |
| releases[].tender.title | Texto | Título da licitação |
| releases[].tender.description | Texto | Descrição da licitação |
| releases[].tender.procuringEntity | Objeto | Entidade responsável pela contratação |
| releases[].tender.value | Objeto | Valor estimado da licitação |
| releases[].tender.procurementMethod | Texto | Método de contratação |
| releases[].tender.procurementMethodDetails | Texto | Detalhes do método de contratação |
| releases[].tender.items | Array | Itens da licitação |
| releases[].tender.lots | Array | Lotes da licitação |
| releases[].awards | Array | Adjudicações (resultados) da licitação |
| links | Objeto | Links de navegação (paginação) |
| links.next | Texto | URL para a próxima página |
| links.prev | Texto | URL para a página anterior |
| uri | Texto/Número | Informação referente a uri |

**Exemplo de Retorno:**
```json
{
  "publisherDTO": {
    "name": "string",
    "uri": "string"
  },
  "publishedDate": "2026-08-10T14:32:59.679Z",
  "version": "string",
  "publicationPolicy": "string",
  "license": "string",
  "extensions": [
    "string"
  ],
  "releases": [
    {
      "ocid": "string",
      "id": "string",
      "date": "2026-08-10T14:32:59.679Z",
      "tag": [
        "string"
      ],
      "initiationType": "string",
      "buyer": {
        "id": "string",
        "name": "string"
      },
      "language": "string",
      "parties": [
        {
          "id": "string",
          "name": "string",
          "identifier": {
            "scheme": "string",
            "id": "string",
            "legalName": "string"
          },
          "additionalIdentifiers": [
            {
              "id": "string",
              "legalName": "string"
            }
          ],
          "address": {
            "region": "string",
            "locality": "string",
            "countryName": "string"
          },
          "roles": [
            "string"
          ],
          "details": {
            "classifications": [
              {
                "scheme": "string",
                "id": "string",
                "uri": "string"
              }
            ]
          },
          "suppliers": [
            {
              "id": "string",
              "name": "string"
            }
          ]
        }
      ],
      "tender": {
        "id": "string",
        "title": "string",
        "description": "string",
        "procuringEntity": {
          "name": "string",
          "id": "string"
        },
        "value": {
          "amount": 0,
          "currency": "string"
        },
        "procurementMethod": "string",
        "procurementMethodDetails": "string",
        "procurementMethodRationale": "string",
        "submissionMethod": [
          "string"
        ],
        "tenderPeriod": {
          "startDate": "2026-08-10T14:32:59.679Z",
          "endDate": "2026-08-10T14:32:59.679Z",
          "maxExtentDate": "2026-08-10T14:32:59.679Z",
          "durationInDays": 1073741824
        },
        "items": [
          {
            "id": "string",
            "description": "string",
            "statusDetails": "string",
            "quantity": 0,
            "unit": {
              "name": "string",
              "value": {
                "amount": 0,
                "currency": "string"
              }
            },
            "relatedLot": "string"
          }
        ],
        "lots": [
          {
            "id": "string",
            "statusDetailsId": "string",
            "statusDetails": "string",
            "value": {
              "amount": 0,
              "currency": "string"
            },
            "confidentialBudget": true,
            "asset": "string",
            "realEstateRegistrationCode": "string",
            "standardPreferenceMarginApplicability": true,
            "standardPreferenceMarginPercentage": 0,
            "additionalPreferenceMarginApplicability": true,
            "additionalPreferenceMarginPercentage": 0,
            "ncmNbsCode": "string",
            "ncmNbsDescription": "string",
            "catalogItemCategoryId": 1073741824,
            "catalogItemCategoryName": "string",
            "catalogItemCode": 1073741824,
            "awardCriteria": "string",
            "awardCriteriaDetails": "string",
            "sustainability": [
              {
                "goal": "string",
                "strategies": [
                  "string"
                ]
              }
            ],
            "otherRequirements": {
              "reservedParticipation": [
                "string"
              ]
            },
            "subcontractingTerms": {
              "description": "string"
            }
          }
        ]
      },
      "awards": [
        {
          "id": "string",
          "title": "string",
          "description": "string",
          "date": "2026-08-10T14:32:59.680Z",
          "hasSubcontracting": true,
          "value": {
            "amount": 0,
            "currency": "string"
          },
          "suppliers": [
            {
              "id": "string",
              "name": "string"
            }
          ],
          "items": [
            {
              "id": "string",
              "description": "string",
              "statusDetails": "string",
              "quantity": 0,
              "unit": {
                "name": "string",
                "value": {
                  "amount": 0,
                  "currency": "string"
                }
              },
              "relatedLot": "string"
            }
          ]
        }
      ]
    }
  ],
  "links": {
    "next": "string",
    "prev": "string"
  },
  "uri": "string"
}
```

<a href="#sumario">⬆️ Voltar ao sumário</a>

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>
