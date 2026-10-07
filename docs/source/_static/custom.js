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

    // ── 4. Menu Lateral Sanfona sob Demanda (Tópicos Principais 1 a 15) ────────────
    const menuContainer = document.querySelector('.wy-menu-vertical') || document.querySelector('.local-toc');
    if (menuContainer) {
        const topItems = menuContainer.querySelectorAll('ul > li');
        topItems.forEach(function (li) {
            const subUl = li.querySelector('ul');
            if (subUl) {
                li.classList.add('has-children');
                subUl.style.display = 'none'; // Inicia recolhido por padrão

                // Botão '+' / '−'
                const toggleBtn = document.createElement('span');
                toggleBtn.className = 'toc-toggle-icon';
                toggleBtn.innerHTML = '+';
                toggleBtn.title = 'Expandir / Recolher tópico';

                const link = li.querySelector('a');
                if (link) {
                    li.insertBefore(toggleBtn, link);
                } else {
                    li.prepend(toggleBtn);
                }

                function toggleMenu(e) {
                    if (e) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    const isExpanded = subUl.style.display === 'block';
                    if (isExpanded) {
                        subUl.style.display = 'none';
                        toggleBtn.innerHTML = '+';
                        li.classList.remove('is-expanded');
                    } else {
                        subUl.style.display = 'block';
                        toggleBtn.innerHTML = '−';
                        li.classList.add('is-expanded');
                    }
                }

                toggleBtn.addEventListener('click', toggleMenu);

                if (link) {
                    link.addEventListener('click', function () {
                        // Se o submenu estiver fechado ao clicar no título, abre ele
                        if (subUl.style.display !== 'block') {
                            subUl.style.display = 'block';
                            toggleBtn.innerHTML = '−';
                            li.classList.add('is-expanded');
                        }
                    });
                }
            }
        });
    }
});
