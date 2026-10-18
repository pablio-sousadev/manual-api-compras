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

**VERSÃO 3.0 – Ago/26**  
Ministério da Gestão e da Inovação em Serviços Públicos – MGI

---

## 1. Introdução

O Sistema Integrado de Administração de Serviços Gerais – Siasg, instituído pelo art. 7º do Decreto nº 1.094, de 23 de março de 1994, é o sistema informatizado de apoio às atividades operacionais do Sistema de Serviços Gerais – Sisg. A finalidade do Siasg é integrar os órgãos da Administração Pública Federal direta, autárquica e fundacional. Após a reestruturação do Sisg (nova releitura), o SIASG passa a receber o sistema de contratações do governo federal, Compras.gov.br.

O Compras.gov.br atua nas três grandes fases do ciclo de contratação pública — Planejamento da Contratação, Seleção do Fornecedor e Gestão e Fiscalização do Contrato —, integrando diversas ferramentas e sistemas que compõem a área de trabalho do gestor público.

## 2. Objetivos

A transparência desempenha um papel fundamental na gestão pública.

## 3. Outros tópicos relevantes

O acesso aos dados é feito através de URLs, o protocolo de comunicação utilizado é o REST - Representational State Transfer/ HTTP 1.1 e os dados trafegados utilizam a notação JSON - JavaScript Object Notation.

Em cada consulta é possível especificar uma série de parâmetros de filtro, que devem compor a URL. Você (ser humano ou máquina) pode navegar através de todos os recursos apenas utilizando os links disponíveis. O acesso à API é realizado através do seguinte endereço: Swagger UI - Dados Abertos Compras

---

<span style="font-size: 1.5em; font-weight: bold;">Formatos de Visualização</span>

Você pode acessar os módulos específicos que quer consultar ou ver o manual completo, com todas as seções. Para isso, selecione o que quer ler no menu ao lado ou abaixo. Você também pode baixar ou imprimir cada uma dessas páginas ou o manual completo.

* **Padrão - escolha a seção específica que quer acessar:**
  * [4. Módulo Catálogo — Material](04-catalogo-material.md)
  * [5. Módulo Catálogo — Serviço](05-catalogo-servico.md)
  * [6. Módulo Pesquisa de Preço — Preços Praticados](06-pesquisa-preco.md)
  * [7. Módulo PGC — Planejamento e Gerenciamento de Contratações](07-pgc.md)
  * [8. Módulo UASG](08-uasg.md)
  * [9. Módulo Legado](09-legado.md)
  * [10. Módulo Contratações](10-contratacoes.md)
  * [11. Módulo ARP — Ata de Registro de Preços](11-arp.md)
  * [12. Módulo Contratos](12-contratos.md)
  * [13. Módulo Fornecedor](13-fornecedor.md)
  * [14. Módulo OCDS](14-ocds.md)
  * [15. Histórico de Revisões](15-historico-revisoes.md)
* [Manual completo: todo o manual na mesma página](versao-impressao.md)

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>

```{toctree}
:hidden:
:maxdepth: 1

Início <self>
```

```{toctree}
:hidden:
:maxdepth: 3
:caption: Módulos de Catálogo

04-catalogo-material
05-catalogo-servico
```

```{toctree}
:hidden:
:maxdepth: 3
:caption: Módulos de Planejamento e Pesquisa

06-pesquisa-preco
07-pgc
```

```{toctree}
:hidden:
:maxdepth: 3
:caption: Módulos Estruturantes e Legado

08-uasg
09-legado
```

```{toctree}
:hidden:
:maxdepth: 3
:caption: Módulos de Contratações e Gestão

10-contratacoes
11-arp
12-contratos
```

```{toctree}
:hidden:
:maxdepth: 3
:caption: Módulos de Fornecedores e Padrão Aberto

13-fornecedor
14-ocds
```

```{toctree}
:hidden:
:maxdepth: 1
:caption: Referência e Versão para Impressão

15-historico-revisoes
Manual completo <versao-impressao>
```
