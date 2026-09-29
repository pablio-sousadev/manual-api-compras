import os
import sys

from docutils import nodes
from docutils.parsers.rst import roles

# Role customizada para destaque (compatibilidade com padrão do PNCP)
def destaque_amarelo_claro_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = nodes.inline(text, text, classes=['destaque-amarelo-claro'])
    return [node], []

roles.register_local_role('destaque-amarelo-claro', destaque_amarelo_claro_role)

sys.path.insert(0, os.path.abspath('.'))

# ── Informações do projeto ────────────────────────────────────────────────────
project = 'Manual da API de Compras'
copyright = '2026, Ministério da Gestão e Inovação em Serviços Públicos - MGI'
author = 'COTIN/CGGES/DELOG/SEGES/MGI'
release = '3.0'
version = '3.0'

# ── Extensões ─────────────────────────────────────────────────────────────────
extensions = [
    'sphinx.ext.duration',
    'sphinx_rtd_dark_mode',
    'myst_parser',
    'sphinx_copybutton',
]

# Dark mode ligado por padrão
default_dark_mode = True

source_suffix = {
    '.rst': 'restructuredtext',
    '.md':  'markdown',
}

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']
language = 'pt_BR'

# Documento raiz — o usuário cai diretamente no manual (index.html)
root_doc = 'index'
master_doc = 'index'

# ── Tema sphinx-rtd-theme ─────────────────────────────────────────────────────
html_theme = 'sphinx_rtd_theme'

html_theme_options = {
    'logo_only': False,
    'display_version': True,
    'prev_next_buttons_location': 'bottom',
    'style_external_links': False,
    'collapse_navigation': False,
    'sticky_navigation': True,
    'navigation_depth': 4,
    'includehidden': True,
    'titles_only': False,
}

html_static_path = ['_static']
html_css_files = ['custom.css']

html_title = 'Manual da API de Compras'
html_short_title = 'API de Compras'

# ── MyST Parser ───────────────────────────────────────────────────────────────
myst_enable_extensions = [
    'colon_fence',
    'deflist',
    'tasklist',
    'html_image',
]
myst_heading_anchors = 3
