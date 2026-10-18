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

# 11. Módulo OCDS

O Módulo OCDS (Open Contracting Data Standard) disponibiliza dados de contratações públicas no formato aberto e padronizado internacionalmente pelo padrão OCDS, facilitando a interoperabilidade e a análise de dados de contratações governamentais por sistemas externos.

## 11.1. releases

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
| uri | Texto/Número | Valor do campo Uri |

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

<a href="#">⬆️ Voltar ao topo</a>

<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>
