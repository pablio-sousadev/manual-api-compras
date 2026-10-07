document.addEventListener('DOMContentLoaded', function () {
    // ── 1. Botões de Impressão (Topo e Rodapé) ──────────────────────────────────
    function createPrintButton() {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn-print-custom';
        btn.innerHTML = '🖨️ Imprimir Documento';
        btn.title = 'Clique para imprimir ou salvar em PDF';
        btn.onclick = function () {
            window.print();
        };
        return btn;
    }

    const contentBox = document.querySelector('.wy-nav-content .rst-content');
    if (contentBox) {
        // Topo
        const topContainer = document.createElement('div');
        topContainer.className = 'print-toolbar-top';
        topContainer.appendChild(createPrintButton());
        contentBox.insertBefore(topContainer, contentBox.firstChild);

        // Rodapé
        const bottomContainer = document.createElement('div');
        bottomContainer.className = 'print-toolbar-bottom';
        bottomContainer.appendChild(createPrintButton());
        const footer = contentBox.querySelector('footer');
        if (footer) {
            contentBox.insertBefore(bottomContainer, footer);
        } else {
            contentBox.appendChild(bottomContainer);
        }
    }

    // ── 2. Barra de Acessibilidade (Tamanho da Fonte) ───────────────────────────
    const fontSizes = [13, 14, 15, 16, 18, 20, 22]; // px
    let currentFontIndex = parseInt(localStorage.getItem('user_font_index')) || 3;

    function applyFontSize(index) {
        if (index < 0) index = 0;
        if (index >= fontSizes.length) index = fontSizes.length - 1;
        currentFontIndex = index;
        localStorage.setItem('user_font_index', currentFontIndex);

        const target = document.querySelector('.wy-nav-content');
        if (target) {
            target.style.fontSize = fontSizes[currentFontIndex] + 'px';
        }
    }

    applyFontSize(currentFontIndex);

    const accessBar = document.createElement('div');
    accessBar.className = 'accessibility-toolbar';
    accessBar.innerHTML = `
        <span class="access-label" title="Acessibilidade de Fonte">Tamanho do Texto:</span>
        <button type="button" id="btn-font-dec" title="Diminuir tamanho da fonte (A-)">A-</button>
        <button type="button" id="btn-font-reset" title="Restaurar tamanho padrão da fonte">A</button>
        <button type="button" id="btn-font-inc" title="Aumentar tamanho da fonte (A+)">A+</button>
    `;
    document.body.appendChild(accessBar);

    document.getElementById('btn-font-dec').addEventListener('click', function () {
        applyFontSize(currentFontIndex - 1);
    });
    document.getElementById('btn-font-reset').addEventListener('click', function () {
        applyFontSize(3);
    });
    document.getElementById('btn-font-inc').addEventListener('click', function () {
        applyFontSize(currentFontIndex + 1);
    });

    // ── 3. Zoom de Imagens (Modal / Lightbox) ───────────────────────────────────
    const modalHtml = `
        <div id="image-lightbox-modal" class="image-modal-overlay">
            <div class="image-modal-container">
                <button type="button" class="image-modal-close" id="lightbox-close-btn" title="Fechar (Esc)">&times;</button>
                <img id="lightbox-img" src="" alt="Imagem ampliada" />
                <div id="lightbox-caption" class="image-modal-caption"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const modal = document.getElementById('image-lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const modalCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close-btn');

    function openLightbox(imgSrc, altText) {
        modalImg.src = imgSrc;
        modalCaption.textContent = altText || '';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.wy-nav-content article img, .wy-nav-content img').forEach(function (img) {
        img.classList.add('zoomable-image');
        img.title = 'Clique para ampliar esta imagem';
        img.addEventListener('click', function () {
            openLightbox(this.src, this.alt);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);

    modal.addEventListener('click', function (e) {
        if (e.target === modal || e.target.classList.contains('image-modal-container')) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeLightbox();
        }
    });

    // ── 4. Menu Lateral Sanfona Unificado (Todos os Níveis: Módulos e Endpoints) ──
    function initAccordionMenu() {
        const menuContainers = document.querySelectorAll('.wy-menu-vertical, .local-toc');
        menuContainers.forEach(function (container) {
            // Remover qualquer botão customizado anterior para evitar duplicidade visual
            container.querySelectorAll('.toc-toggle-icon').forEach(function (el) {
                el.remove();
            });

            // Selecionar TODOS os LIs que têm sub-listas (Módulos Nível 1 e Endpoints Nível 2)
            const listItems = container.querySelectorAll('li');
            listItems.forEach(function (li) {
                const subUl = li.querySelector('ul');
                if (subUl) {
                    li.classList.add('has-subitems');
                    
                    // Iniciar recolhido por padrão
                    subUl.style.display = 'none';

                    // Usar o elemento nativo .toctree-expand do Sphinx
                    let expandSpan = li.querySelector('.toctree-expand');
                    if (!expandSpan) {
                        expandSpan = document.createElement('span');
                        expandSpan.className = 'toctree-expand';
                        expandSpan.innerHTML = '+';
                        const link = li.querySelector('a');
                        if (link) {
                            li.insertBefore(expandSpan, link);
                        } else {
                            li.prepend(expandSpan);
                        }
                    } else if (!expandSpan.innerHTML || expandSpan.innerHTML.trim() === '') {
                        expandSpan.innerHTML = '+';
                    }

                    // Função Toggle Unificada
                    function toggleItem(e) {
                        if (e) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        const isCurrentlyOpen = (subUl.style.display === 'block');
                        if (isCurrentlyOpen) {
                            subUl.style.display = 'none';
                            expandSpan.innerHTML = '+';
                            li.classList.remove('is-expanded');
                        } else {
                            subUl.style.display = 'block';
                            expandSpan.innerHTML = '−';
                            li.classList.add('is-expanded');
                        }
                    }

                    // Clique no ícone de expansão (+ / −)
                    expandSpan.onclick = toggleItem;

                    // Clique no link de texto (Módulo ou Endpoint pai)
                    const mainLink = li.querySelector('a');
                    if (mainLink) {
                        mainLink.addEventListener('click', function (e) {
                            const href = mainLink.getAttribute('href');
                            if (href && href.startsWith('#')) {
                                toggleItem(null);
                            }
                        });
                    }
                }
            });
        });
    }

    initAccordionMenu();
});
