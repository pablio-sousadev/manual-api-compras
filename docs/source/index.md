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

# Manual do Usuário – API do Compras.gov.br

> **Tipo:** Manual  
> **Público-alvo:** Desenvolvedores e integradores de sistemas  
> **Objetivo:** Consultar a referência técnica dos endpoints, parâmetros e dados de retorno da API de Compras Governamentais.

**Ministério da Gestão e da Inovação em Serviços Públicos – MGI**

---

## Introdução

O Sistema Integrado de Administração de Serviços Gerais – Siasg, instituído pelo art. 7º do Decreto nº 1.094, de 23 de março de 1994, é o sistema informatizado de apoio às atividades operacionais do Sistema de Serviços Gerais – Sisg. A finalidade do Siasg é integrar os órgãos da Administração Pública Federal direta, autárquica e fundacional. Após a reestruturação do Sisg (nova releitura), o SIASG passa a receber o sistema de contratações do governo federal, Compras.gov.br.

O Compras.gov.br atua nas três grandes fases do ciclo de contratação pública — Planejamento da Contratação, Seleção do Fornecedor e Gestão e Fiscalização do Contrato —, integrando diversas ferramentas e sistemas que compõem a área de trabalho do gestor público.

## Objetivos

A API de Dados Abertos do Compras.gov.br tem por objetivo disponibilizar, de forma aberta, estruturada e legível por máquina, os dados das contratações públicas do Governo Federal, permitindo que sistemas externos, órgãos de controle, pesquisadores, empresas e a sociedade em geral possam consultá-los, integrá-los e reutilizá-los de maneira automatizada.

O serviço atende ao dever de transparência ativa previsto na Lei de Acesso à Informação (Lei nº 12.527, de 18 de novembro de 2011), que determina, em seu art. 8º, inciso III, que os órgãos e entidades públicas devem "possibilitar o acesso automatizado por sistemas externos em formatos abertos, estruturados e legíveis por máquina", e está alinhado à política brasileira de dados abertos, que busca ampliar o controle social, a pesquisa, a inovação e a geração de valor a partir dos dados públicos.

Ao oferecer acesso programático, padronizado e gratuito aos dados de contratações, a API amplia a transparência dos gastos públicos, reduz a assimetria de informação e favorece o desenvolvimento de soluções tecnológicas voltadas à melhoria da gestão pública.

## Outros tópicos relevantes

O acesso aos dados é feito através de URLs, o protocolo de comunicação utilizado é o REST - Representational State Transfer/ HTTP 1.1 e os dados trafegados utilizam a notação JSON - JavaScript Object Notation.

Em cada consulta é possível especificar uma série de parâmetros de filtro, que devem compor a URL. Você (ser humano ou máquina) pode navegar através de todos os recursos apenas utilizando os links disponíveis. O acesso à API é realizado através do seguinte endereço: [Swagger UI - Dados Abertos Compras](https://dadosabertos.compras.gov.br/swagger-ui/index.html)

## Limites de uso

O acesso à API está sujeito a limite de 100 (cem) chamadas a cada 60 (sessenta) segundos por endereço IP. Requisições que excedam esse limite recebem resposta com código HTTP 429 (*Too Many Requests*). Para conjuntos de dados de maior volume, recomenda-se utilizar a paginação disponível em cada endpoint, com até 500 registros por página, ou recorrer ao Repositório de Dados do Compras.gov.br, que disponibiliza os mesmos dados em arquivos para download.

## Primeiros passos

1. Consulte a documentação interativa ([Swagger UI](https://dadosabertos.compras.gov.br/swagger-ui/index.html)), que permite testar cada endpoint diretamente no navegador.
2. Escolha o módulo correspondente ao dado de interesse.
3. Informe os parâmetros obrigatórios do endpoint (indicados com 🔴 na tabela de parâmetros).
4. Utilize `pagina` e `tamanhoPagina` para navegar pelos resultados (observação: no Módulo 11 – OCDS, por seguir o padrão internacional, o parâmetro de paginação é `page`).
5. Para volumes maiores, prefira o Repositório de Dados.

---

<span style="font-size: 1.5em; font-weight: bold;">Formatos de Visualização</span>

Você pode acessar os módulos específicos que quer consultar ou ver o manual completo, com todas as seções. Para isso, selecione o que quer ler no menu ao lado ou abaixo. Você também pode baixar ou imprimir cada uma dessas páginas ou o manual completo.

* **Padrão - escolha a seção específica que quer acessar:**
  * [1. Módulo Catálogo — Material](01-catalogo-material.md)
  * [2. Módulo Catálogo — Serviço](02-catalogo-servico.md)
  * [3. Módulo Pesquisa de Preços](03-pesquisa-preco.md)
  * [4. Módulo PGC — Planejamento e Gerenciamento de Contratações](04-pgc.md)
  * [5. Módulo UASG](05-uasg.md)
  * [6. Módulo Legado](06-legado.md)
  * [7. Módulo Contratações](07-contratacoes.md)
  * [8. Módulo ARP — Ata de Registro de Preços](08-arp.md)
  * [9. Módulo Contratos](09-contratos.md)
  * [10. Módulo Fornecedor](10-fornecedor.md)
  * [11. Módulo OCDS](11-ocds.md)
* [Manual completo: todo o manual na mesma página](versao-impressao.md)

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>

```{toctree}
:hidden:
:maxdepth: 3

Início <self>
01-catalogo-material
02-catalogo-servico
03-pesquisa-preco
04-pgc
05-uasg
06-legado
07-contratacoes
08-arp
09-contratos
10-fornecedor
11-ocds
Manual completo <versao-impressao>
```
