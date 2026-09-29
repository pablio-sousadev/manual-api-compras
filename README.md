# Manual da API de Compras

Documentação técnica dos endpoints da **API de Compras Governamentais do PNCP**, publicada via [Read the Docs](https://readthedocs.org).

## Sobre

Este repositório contém a documentação completa da API de Compras, incluindo:
- Descrição de todos os 14 módulos disponíveis
- Parâmetros de entrada, tipos e obrigatoriedade
- Campos de retorno com exemplos em JSON
- Exemplos de requisição em cURL

**Produzido por** COTIN/CGGES/DELOG/SEGES/MGI  
**Versão:** 3.0 — Ago/2026

## Estrutura

```
manual-api-compras/
├── .readthedocs.yaml
├── pyproject.toml
├── README.md
└── docs/
    ├── requirements.txt
    └── source/
        ├── conf.py
        ├── index.md
        ├── manual-api-compras.md
        └── _static/
            ├── custom.css
            └── img/
```

## Build local

```bash
pip install sphinx==7.2.6 sphinx-rtd-theme==2.0.0 "sphinx-rtd-dark-mode>=1.3.0" "myst-parser>=3.0" "sphinx-copybutton>=0.5"
python3 -m sphinx docs/source/ docs/_build/html -b html
```
