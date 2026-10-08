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
    // ── 4. Fix Definitivo do Menu Lateral (Visual Nativo, Acordeon Manual) ──
    const toc = document.querySelector('.local-toc');
    if (toc) {
        // Clonamos o menu para desconectá-lo dos eventos automáticos (ScrollSpy e hashchange) do tema nativo.
        // Assim, o tema do Sphinx não poderá mais fechar a sanfona à força.
        const clone = toc.cloneNode(true);
        toc.parentNode.replaceChild(clone, toc);

        // Re-implementamos o clique no botão nativo (+) e (-)
        const listItems = clone.querySelectorAll('li');
        listItems.forEach(function (li) {
            const expandSpan = li.querySelector('.toctree-expand');
            const subUl = li.querySelector('ul');
            
            if (expandSpan && subUl) {
                expandSpan.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    // Alterna a classe 'current', que o próprio CSS do Sphinx usa para virar o [+] para [-]
                    li.classList.toggle('current');
                    
                    if (li.classList.contains('current')) {
                        subUl.style.display = 'block';
                    } else {
                        subUl.style.display = 'none';
                    }
                });
            }
        });

        // Garantir que os cliques nos links naveguem sem interferir
        const links = clone.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    history.pushState(null, null, href);
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView();
                    }
                }
            });
        });
    }
});
