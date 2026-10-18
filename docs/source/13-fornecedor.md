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

# 13. Módulo Fornecedor

O Módulo Fornecedor permite a consulta de dados cadastrais e situação dos fornecedores habilitados para participar de processos de contratação pública.

## 13.1. consultarFornecedor

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
| resultado | Texto/Número | Valor do campo Resultado |

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

<a href="#">⬆️ Voltar ao topo</a>

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>
