#!/usr/bin/env python3
"""
Sincronizador Híbrido OpenAPI (/v3/api-docs) -> Manual da API de Compras (Sphinx + Padrão DELOG).

1. Busca a especificação ao vivo em https://dadosabertos.compras.gov.br/v3/api-docs
   (com fallback seguro para docs/source/_data/openapi_fallback.json).
2. Combina a estrutura ao vivo do Swagger (endpoints, parâmetros, tipos, obrigatoriedade,
   schemas de retorno) com o catálogo enriquecido de descrições do manual
   (docs/source/_data/descriptions_catalog.json).
3. Regenera as páginas dos módulos (04 a 14) e a versão para impressão (versao-impressao.md)
   mantendo 100% o layout visual do template compartilhado DELOG.
"""

import json
import os
import re
import urllib.request

OPENAPI_URL = "https://dadosabertos.compras.gov.br/v3/api-docs"
BASE_URL = "https://dadosabertos.compras.gov.br"

DOCS_DIR = os.path.dirname(os.path.abspath(__file__))
SOURCE_DIR = os.path.join(DOCS_DIR, "source")
DATA_DIR = os.path.join(SOURCE_DIR, "_data")
FALLBACK_SPEC_PATH = os.path.join(DATA_DIR, "openapi_fallback.json")
CATALOG_PATH = os.path.join(DATA_DIR, "descriptions_catalog.json")

PUBLIC_TAGS = [
    ("01 - CATÁLOGO - MATERIAL", 1, "01-catalogo-material.md", "1. Módulo Catálogo — Material", 1),
    ("02 - CATÁLOGO - SERVIÇO", 2, "02-catalogo-servico.md", "2. Módulo Catálogo — Serviço", 1),
    ("03 - PESQUISA DE PREÇO - PREÇOS PRATICADOS", 3, "03-pesquisa-preco.md", "3. Módulo Pesquisa de Preços", 1),
    ("04 - PGC", 4, "04-pgc.md", "4. Módulo PGC — Planejamento e Gerenciamento de Contratações", 1),
    ("05 - UASG", 5, "05-uasg.md", "5. Módulo UASG", 1),
    ("06 - LEGADO", 6, "06-legado.md", "6. Módulo Legado", 1),
    ("07 - CONTRATAÇÕES", 7, "07-contratacoes.md", "7. Módulo Contratações", 5),
    ("08 - ARP", 8, "08-arp.md", "8. Módulo ARP — Ata de Registro de Preços", 1),
    ("09 - CONTRATOS", 9, "09-contratos.md", "9. Módulo Contratos", 1),
    ("10 - FORNECEDOR", 10, "10-fornecedor.md", "10. Módulo Fornecedor", 1),
    ("11 - OCDS", 11, "11-ocds.md", "11. Módulo OCDS", 1),
]

TOP_TOOLBAR = """<div class="top-accessibility-bar" style="display: flex; justify-content: flex-end; align-items: center; gap: 8px; margin: 10px 0;">
  <span style="font-size: 14px; color: #555; font-weight: bold;">Tamanho do texto:</span>
  <button onclick="diminuirFonte()" title="Diminuir texto" style="padding: 6px 12px; font-weight: bold; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; background: #f8f9fa;">A-</button>
  <button onclick="resetarFonte()" title="Tamanho normal" style="padding: 6px 12px; font-weight: bold; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; background: #f8f9fa;">A</button>
  <button onclick="aumentarFonte()" title="Aumentar texto" style="padding: 6px 12px; font-weight: bold; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; background: #f8f9fa;">A+</button>
  
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 6px 16px; border: none; border-radius: 5px; font-size: 14px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2); margin-left: 10px;">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>"""

BOTTOM_PRINT = """<div class="bottom-print-bar" style="text-align: right; margin: 20px 0;">
  <button onclick="window.print()" style="background-color: #0056b3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
    🖨️ Imprimir ou baixar esta página
  </button>
</div>"""

PUBLICO_ALVO = '<p style="font-weight: bold; color: #d9534f; margin-top: -5px; margin-bottom: 20px;">PÚBLICO-ALVO: DESENVOLVEDORES E INTEGRADORES DE SISTEMAS</p>'


def fetch_openapi_spec():
    """Busca o JSON do /v3/api-docs ao vivo ou carrega o fallback local."""
    try:
        req = urllib.request.Request(
            OPENAPI_URL,
            headers={"User-Agent": "Manual-API-Compras-Sphinx-Sync/3.0", "Accept": "application/json"},
        )
        with urllib.request.urlopen(req, timeout=15) as resp:
            raw = resp.read().decode("utf-8")
            spec = json.loads(raw)
            if "paths" in spec and "components" in spec:
                os.makedirs(DATA_DIR, exist_ok=True)
                with open(FALLBACK_SPEC_PATH, "w", encoding="utf-8") as f:
                    json.dump(spec, f, indent=2, ensure_ascii=False)
                print(f"[OpenAPI Sync] Especificação atualizada ao vivo de {OPENAPI_URL} ({len(spec['paths'])} rotas).")
                return spec
    except Exception as exc:
        print(f"[OpenAPI Sync] Aviso: usando cache local ({exc}).")

    with open(FALLBACK_SPEC_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def humanize_field_name(name):
    """Gera descrição semântica legível caso um campo novo seja incluído futuramente no Swagger."""
    words = re.sub(r"([a-z0-9])([A-Z])", r"\1 \2", name).replace("_", " ").lower()
    return f"Informação referente a {words}"


def extract_schema_properties(spec, schema_obj):
    """Extrai propriedades de retorno (incluindo itens de 'resultado') a partir do schema OpenAPI."""
    schemas = spec.get("components", {}).get("schemas", {})
    if "$ref" in schema_obj:
        ref_name = schema_obj["$ref"].split("/")[-1]
        schema_obj = schemas.get(ref_name, {})

    props = schema_obj.get("properties", {})
    fields = []

    if "resultado" in props:
        fields.append(("resultado", "Texto/Número", "Lista de registros retornados na consulta"))
        res_prop = props["resultado"]
        items_ref = res_prop.get("items", {}).get("$ref", "")
        if items_ref:
            item_schema = schemas.get(items_ref.split("/")[-1], {})
            for k, v in item_schema.get("properties", {}).items():
                fields.append((k, "Texto/Número", v.get("description", "")))
        elif "$ref" in res_prop:
            item_schema = schemas.get(res_prop["$ref"].split("/")[-1], {})
            for k, v in item_schema.get("properties", {}).items():
                fields.append((k, "Texto/Número", v.get("description", "")))

    for k, v in props.items():
        if k == "resultado":
            continue
        fields.append((k, "Texto/Número", v.get("description", "")))

    return fields


def build_json_example_from_schema(spec, schema_obj):
    """Constrói um exemplo JSON caso um novo endpoint seja criado no Swagger."""
    schemas = spec.get("components", {}).get("schemas", {})

    def sample_from_schema(s, depth=0):
        if depth > 4:
            return {}
        if "$ref" in s:
            s = schemas.get(s["$ref"].split("/")[-1], {})
        stype = s.get("type", "object")
        if "example" in s:
            return s["example"]
        if stype == "array":
            return [sample_from_schema(s.get("items", {}), depth + 1)]
        if stype == "integer" or stype == "number":
            return 0
        if stype == "boolean":
            return True
        if stype == "string":
            fmt = s.get("format", "")
            if fmt == "date-time":
                return "2024-01-15T10:30:00"
            if fmt == "date":
                return "2024-01-15"
            return "string"
        out = {}
        for prop_k, prop_v in s.get("properties", {}).items():
            out[prop_k] = sample_from_schema(prop_v, depth + 1)
        return out

    return json.dumps(sample_from_schema(schema_obj), indent=2, ensure_ascii=False)


def sync_all():
    spec = fetch_openapi_spec()
    with open(CATALOG_PATH, "r", encoding="utf-8") as f:
        catalog = json.load(f)

    ep_catalog = catalog.get("endpoints", {})
    global_params = catalog.get("param_descriptions_global", {})
    global_returns = catalog.get("return_descriptions_global", {})
    mod_catalog = catalog.get("modules", {})

    generated_sections = {}

    for tag, chap_num, filename, chap_title, start_idx in PUBLIC_TAGS:
        mod_info = mod_catalog.get(tag, {})
        intro_md = mod_info.get("intro", "")

        # Coleta endpoints desta tag no OpenAPI
        eps = []
        for path, methods in spec.get("paths", {}).items():
            for http_method, op in methods.items():
                if tag in op.get("tags", []):
                    eps.append((path, http_method.upper(), op))

        def sort_key(item):
            seg = item[0].split("/")[-1]
            m = re.match(r"^(\d+(?:\.\d+)?)_", seg)
            if m:
                return ([int(x) for x in m.group(1).split(".")], seg)
            return ([999], seg)

        eps.sort(key=sort_key)

        # Mapeia a numeração principal (ex: 1 -> 4.1, 1.1 -> 4.1.1, ou no cap 10: 1 -> 10.5, 1.1 -> 10.5.1)
        main_num_map = {}
        current_sub = start_idx

        ep_blocks = []
        for path, http_method, op in eps:
            seg = path.split("/")[-1]
            m_num = re.match(r"^(\d+)(?:\.(\d+))?_(.*)$", seg)
            if m_num:
                major_raw = int(m_num.group(1))
                minor_raw = m_num.group(2)
                ep_short_name = m_num.group(3)
            else:
                major_raw = 999
                minor_raw = None
                ep_short_name = op.get("operationId", seg)

            if major_raw not in main_num_map:
                main_num_map[major_raw] = current_sub
                current_sub += 1

            mapped_major = main_num_map[major_raw]
            is_sub_endpoint = minor_raw is not None

            if is_sub_endpoint:
                heading_prefix = "###"
                sec_number = f"{chap_num}.{mapped_major}.{minor_raw}"
            else:
                heading_prefix = "##"
                sec_number = f"{chap_num}.{mapped_major}"

            cat_ep = ep_catalog.get(path, {})
            display_name = cat_ep.get("name", ep_short_name)

            # Descrição funcional do endpoint
            if cat_ep.get("description_markdown"):
                desc_md = cat_ep["description_markdown"]
            else:
                op_desc = op.get("summary") or op.get("description") or f"Serviço para obter dados e consultar o endpoint {display_name}."
                if ep_short_name.endswith("_CSV"):
                    desc_md = (
                        f"{op_desc}\n\n"
                        "> Este endpoint possui os mesmos parâmetros e dados de retorno do endpoint anterior, "
                        "porém a resposta é retornada no formato `.csv` em vez de JSON."
                    )
                elif ep_short_name.endswith("_Id"):
                    desc_md = (
                        f"{op_desc}\n\n"
                        "> Este endpoint possui os mesmos dados de retorno do endpoint anterior. "
                        "A diferença é que a consulta é realizada pelo identificador único da compra ou pelo número de controle PNCP."
                    )
                else:
                    desc_md = op_desc

            badge_class = f"badge-{http_method.lower()}"
            full_url = f"{BASE_URL}{path}"

            block_lines = [
                f"{heading_prefix} {sec_number}. {display_name}",
                "",
                desc_md,
                "",
                f"**Endpoint:** `{full_url}`  ",
                "",
                f'**Método HTTP:** <span class="{badge_class}">{http_method}</span>',
                "",
                "**Exemplo de Requisição (cURL):**",
                "```bash",
                f"curl -X '{http_method}' \\",
                f"  '{full_url}' \\",
                "  -H 'accept: */*'",
                "```",
            ]

            # Se for _CSV, não repete tabela de parâmetros e retorno (mantém o padrão enxuto do manual)
            is_csv = ep_short_name.endswith("_CSV")
            is_id_variant = is_sub_endpoint and ep_short_name.endswith("_Id")

            if not is_csv:
                # Parâmetros sincronizados ao vivo do Swagger (/v3/api-docs)
                live_params = op.get("parameters", [])
                if live_params:
                    block_lines.extend([
                        "",
                        "**Parâmetros da Solicitação:**",
                        "",
                        "| Campo | Tipo | Obrigatório | Descrição |",
                        "|---|---|---|---|",
                    ])
                    cat_params = cat_ep.get("parameters", {})
                    for p in live_params:
                        pname = p.get("name", "")
                        pschema = p.get("schema", {})
                        ptype = pschema.get("type", "string")
                        preq = p.get("required", False)
                        req_badge = '<span class="badge-req">🔴 Sim</span>' if preq else '<span class="badge-opt">⚪ Não</span>'

                        # Prioriza a descrição rica do catálogo; se não houver, usa a do Swagger ou gera uma
                        pdesc = (
                            cat_params.get(pname)
                            or global_params.get(pname)
                            or p.get("description")
                            or pschema.get("description")
                            or humanize_field_name(pname)
                        )
                        block_lines.append(f"| {pname} | {ptype} | {req_badge} | {pdesc} |")

                # Dados de Retorno e Exemplo JSON (para endpoints principais e _FimVigencia)
                if not is_id_variant:
                    resp_200 = op.get("responses", {}).get("200", {})
                    content_map = resp_200.get("content", {})
                    first_ctype = list(content_map.keys())[0] if content_map else ""
                    resp_schema = content_map.get(first_ctype, {}).get("schema", {})

                    cat_returns = cat_ep.get("returns", {})
                    live_fields = extract_schema_properties(spec, resp_schema) if resp_schema else []

                    # Combina campos do catálogo com eventuais campos novos do Swagger
                    merged_fields = []
                    seen_fields = set()

                    for rname, rinfo in cat_returns.items():
                        merged_fields.append((rname, rinfo["type"], rinfo["description"]))
                        seen_fields.add(rname)

                    for fname, ftype, fdesc in live_fields:
                        if fname not in seen_fields:
                            g_info = global_returns.get(fname, {})
                            final_type = g_info.get("type", ftype)
                            final_desc = g_info.get("description") or fdesc or humanize_field_name(fname)
                            merged_fields.append((fname, final_type, final_desc))
                            seen_fields.add(fname)

                    if merged_fields:
                        block_lines.extend([
                            "",
                            "**Dados de Retorno:**",
                            "",
                            "| Campo | Tipo | Descrição |",
                            "|---|---|---|",
                        ])
                        for rname, rtype, rdesc in merged_fields:
                            block_lines.append(f"| {rname} | {rtype} | {rdesc} |")

                    json_ex = cat_ep.get("json_example") or (
                        build_json_example_from_schema(spec, resp_schema) if resp_schema else ""
                    )
                    if json_ex:
                        block_lines.extend([
                            "",
                            "**Exemplo de Retorno:**",
                            "```json",
                            json_ex,
                            "```",
                        ])

            block_lines.extend([
                "",
                '<a href="#">⬆️ Voltar ao topo</a>',
            ])
            ep_blocks.append("\n".join(block_lines))

        section_body = f"# {chap_title}\n\n{intro_md}\n\n" + "\n\n".join(ep_blocks)
        generated_sections[chap_num] = section_body

        page_content = f"{TOP_TOOLBAR}\n\n{PUBLICO_ALVO}\n\n{section_body}\n\n{BOTTOM_PRINT}\n"
        out_file = os.path.join(SOURCE_DIR, filename)
        with open(out_file, "w", encoding="utf-8") as f:
            f.write(page_content)

    # Também reconstrói versao-impressao.md (Manual completo) com todos os módulos sincronizados
    rebuild_versao_impressao(generated_sections)
    print("[OpenAPI Sync] Todos os 11 módulos e a versão para impressão foram sincronizados com sucesso.")


def slugify_heading(text):
    """Gera o id de âncora compatível com o sumário do Manual Completo."""
    import unicodedata
    cleaned = re.sub(r"^\d+(?:\.\d+)*\.\s*", "", text.strip())
    norm = unicodedata.normalize("NFKD", cleaned).encode("ascii", "ignore").decode("ascii").lower()
    slug = re.sub(r"[^a-z0-9]+", "-", norm).strip("-")
    return slug


def rebuild_versao_impressao(generated_sections):
    """Atualiza versao-impressao.md mantendo seções introdutórias e módulos 1 a 11 sincronizados."""
    intro_sections = [
        (
            '<h2 id="introducao">Introdução</h2>\n\n'
            "O Sistema Integrado de Administração de Serviços Gerais – Siasg, instituído pelo art. 7º do Decreto nº 1.094, "
            "de 23 de março de 1994, é o sistema informatizado de apoio às atividades operacionais do Sistema de Serviços Gerais – Sisg. "
            "A finalidade do Siasg é integrar os órgãos da Administração Pública Federal direta, autárquica e fundacional. "
            "Após a reestruturação do Sisg (nova releitura), o SIASG passa a receber o sistema de contratações do governo federal, Compras.gov.br.\n\n"
            "O Compras.gov.br atua nas três grandes fases do ciclo de contratação pública — Planejamento da Contratação, "
            "Seleção do Fornecedor e Gestão e Fiscalização do Contrato —, integrando diversas ferramentas e sistemas que compõem a área de trabalho do gestor público."
        ),
        (
            '<h2 id="objetivos">Objetivos</h2>\n\n'
            "A API de Dados Abertos do Compras.gov.br tem por objetivo disponibilizar, de forma aberta, estruturada e legível por máquina, "
            "os dados das contratações públicas do Governo Federal, permitindo que sistemas externos, órgãos de controle, pesquisadores, "
            "empresas e a sociedade em geral possam consultá-los, integrá-los e reutilizá-los de maneira automatizada.\n\n"
            "O serviço atende ao dever de transparência ativa previsto na Lei de Acesso à Informação (Lei nº 12.527, de 18 de novembro de 2011), "
            'que determina, em seu art. 8º, inciso III, que os órgãos e entidades públicas devem "possibilitar o acesso automatizado por sistemas '
            'externos em formatos abertos, estruturados e legíveis por máquina", e está alinhado à política brasileira de dados abertos, '
            "que busca ampliar o controle social, a pesquisa, a inovação e a geração de valor a partir dos dados públicos.\n\n"
            "Ao oferecer acesso programático, padronizado e gratuito aos dados de contratações, a API amplia a transparência dos gastos públicos, "
            "reduz a assimetria de informação e favorece o desenvolvimento de soluções tecnológicas voltadas à melhoria da gestão pública."
        ),
        (
            '<h2 id="outros-topicos-relevantes">Outros tópicos relevantes</h2>\n\n'
            "O acesso aos dados é feito através de URLs, o protocolo de comunicação utilizado é o REST - Representational State Transfer/ HTTP 1.1 "
            "e os dados trafegados utilizam a notação JSON - JavaScript Object Notation.\n\n"
            "Em cada consulta é possível especificar uma série de parâmetros de filtro, que devem compor a URL. "
            "Você (ser humano ou máquina) pode navegar através de todos os recursos apenas utilizando os links disponíveis. "
            "O acesso à API é realizado através do seguinte endereço: [Swagger UI - Dados Abertos Compras](https://dadosabertos.compras.gov.br/swagger-ui/index.html)"
        ),
        (
            '<h2 id="limites-de-uso">Limites de uso</h2>\n\n'
            "O acesso à API está sujeito a limite de 100 (cem) chamadas a cada 60 (sessenta) segundos por endereço IP. "
            "Requisições que excedam esse limite recebem resposta com código HTTP 429 (*Too Many Requests*). "
            "Para conjuntos de dados de maior volume, recomenda-se utilizar a paginação disponível em cada endpoint, "
            "com até 500 registros por página, ou recorrer ao Repositório de Dados do Compras.gov.br, que disponibiliza os mesmos dados em arquivos para download."
        ),
        (
            '<h2 id="primeiros-passos">Primeiros passos</h2>\n\n'
            "1. Consulte a documentação interativa ([Swagger UI](https://dadosabertos.compras.gov.br/swagger-ui/index.html)), que permite testar cada endpoint diretamente no navegador.\n"
            "2. Escolha o módulo correspondente ao dado de interesse.\n"
            "3. Informe os parâmetros obrigatórios do endpoint (indicados com 🔴 na tabela de parâmetros).\n"
            "4. Utilize `pagina` e `tamanhoPagina` para navegar pelos resultados (observação: no Módulo 11 – OCDS, por seguir o padrão internacional, o parâmetro de paginação é `page`).\n"
            "5. Para volumes maiores, prefira o Repositório de Dados."
        ),
    ]

    all_demoted = list(intro_sections)

    for num in sorted(generated_sections.keys()):
        sec_text = generated_sections[num]
        lines = sec_text.splitlines()
        in_code = False
        new_lines = []
        for line in lines:
            if line.strip().startswith("```"):
                in_code = not in_code
            if not in_code:
                m_h = re.match(r"^(#{1,3})\s+(.*)$", line)
                if m_h:
                    hashes, h_title = m_h.group(1), m_h.group(2).strip()
                    level = len(hashes) + 1  # # -> h2, ## -> h3, ### -> h4
                    hid = slugify_heading(h_title)
                    line = f'<h{level} id="{hid}">{h_title}</h{level}>'
            new_lines.append(line)
        demoted = "\n".join(new_lines)
        demoted = demoted.replace('<a href="#">⬆️ Voltar ao topo</a>', '<a href="#sumario">⬆️ Voltar ao sumário</a>')
        all_demoted.append(demoted)

    versao_impressao_md = f"""{TOP_TOOLBAR}

{PUBLICO_ALVO}

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

""" + "\n\n---\n\n".join(all_demoted) + f"\n\n{BOTTOM_PRINT}\n"

    with open(os.path.join(SOURCE_DIR, "versao-impressao.md"), "w", encoding="utf-8") as f:
        f.write(versao_impressao_md)


if __name__ == "__main__":
    sync_all()
