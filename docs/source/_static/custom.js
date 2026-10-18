/* === CÓDIGO JavaScript PARA O POPUP DE IMAGENS, IMPRESSÃO E MENU LATERAL (custom.js) === */

document.addEventListener('DOMContentLoaded', function() {
    console.log("Script de popup carregado!");

    // 1. Criar a estrutura HTML do Popup (padrão Template Compartilhado DELOG)
    const lightboxHTML = `
        <div id="lightbox-overlay" style="display: none; position: fixed; z-index: 99999; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.9); cursor: pointer; opacity: 0; transition: opacity 0.3s ease; justify-content: center; align-items: center;">
            <span id="lightbox-close" style="position: absolute; top: 20px; right: 30px; color: white; font-size: 50px; font-weight: bold; cursor: pointer; user-select: none;" title="Fechar (Esc)">&times;</span>
            <img id="lightbox-image" src="" alt="Imagem ampliada" style="max-width: 90%; max-height: 90%; border: 3px solid white; border-radius: 4px; box-shadow: 0 0 30px rgba(0, 0, 0, 0.6); transform: scale(0.9); transition: transform 0.3s ease;">
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    // 2. Selecionar os elementos do popup
    const overlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');

    // 3. Selecionar imagens dentro da área de conteúdo principal
    const images = document.querySelectorAll('.md-content img, .rst-content img, article img');

    // 4. Adicionar o evento de clique em cada imagem
    images.forEach(image => {
        image.style.cursor = 'zoom-in';
        image.setAttribute('title', 'Clique para ampliar');

        image.addEventListener('click', function(e) {
            e.preventDefault();
            lightboxImg.src = this.src;
            lightboxImg.alt = this.getAttribute('alt') || 'Imagem ampliada';

            overlay.style.display = 'flex';
            setTimeout(() => {
                overlay.style.opacity = '1';
                lightboxImg.style.transform = 'scale(1)';
            }, 10);

            document.body.style.overflow = 'hidden';
        });
    });

    // 5. Função para fechar o popup
    function closeLightbox() {
        overlay.style.opacity = '0';
        lightboxImg.style.transform = 'scale(0.9)';

        setTimeout(() => {
            overlay.style.display = 'none';
            lightboxImg.src = '';
            document.body.style.overflow = '';
        }, 300);
    }

    closeBtn.addEventListener('click', closeLightbox);

    overlay.addEventListener('click', function(e) {
        if (e.target !== lightboxImg) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.style.display === 'flex') {
            closeLightbox();
        }
    });

    // 6. Ocultar definitivamente o widget flutuante "latest" (readthedocs-flyout) na impressão/PDF
    function hideRtdFlyoutForPrint() {
        const rtdElements = document.querySelectorAll(
            'readthedocs-flyout, readthedocs-notification, readthedocs-search, .rst-versions, #readthedocs-embed-flyout'
        );
        rtdElements.forEach(function(el) {
            // Injeta regra @media print dentro do Shadow DOM do Web Component do Read the Docs
            if (el.shadowRoot && !el.shadowRoot.getElementById('rtd-no-print-style')) {
                const style = document.createElement('style');
                style.id = 'rtd-no-print-style';
                style.textContent = '@media print { :host, *, .container, aside { display: none !important; visibility: hidden !important; opacity: 0 !important; } }';
                el.shadowRoot.appendChild(style);
            }
        });
    }

    hideRtdFlyoutForPrint();
    setTimeout(hideRtdFlyoutForPrint, 1000);
    setTimeout(hideRtdFlyoutForPrint, 3000);

    function setRtdFlyoutHidden(hidden) {
        document.querySelectorAll(
            'readthedocs-flyout, readthedocs-notification, readthedocs-search, readthedocs-hotkeys, .rst-versions, #readthedocs-embed-flyout'
        ).forEach(function(el) {
            if (hidden) {
                el.setAttribute('data-prev-display', el.style.display || '');
                el.style.setProperty('display', 'none', 'important');
                el.style.setProperty('visibility', 'hidden', 'important');
            } else {
                const prev = el.getAttribute('data-prev-display');
                if (prev) {
                    el.style.display = prev;
                } else {
                    el.style.removeProperty('display');
                }
                el.style.removeProperty('visibility');
            }
        });
    }

    window.addEventListener('beforeprint', function() {
        hideRtdFlyoutForPrint();
        setRtdFlyoutHidden(true);
    });

    window.addEventListener('afterprint', function() {
        setRtdFlyoutHidden(false);
    });

    const originalPrint = window.print.bind(window);
    window.print = function() {
        hideRtdFlyoutForPrint();
        setRtdFlyoutHidden(true);
        originalPrint();
        setTimeout(function() {
            setRtdFlyoutHidden(false);
        }, 500);
    };

    // 7. Ajuste do Menu Lateral Nativo do Read the Docs:
    // Mantém os ícones nativos (+ e -) do tema, mas impede que as seções/sub-endpoints
    // recolham sozinhos quando o usuário clica em um link. Só recolhe ao clicar no (-).
    setTimeout(function() {
        if (window.SphinxRtdTheme && window.SphinxRtdTheme.Navigation) {
            const nav = window.SphinxRtdTheme.Navigation;

            // Sobrescreve toggleCurrent para alternar apenas o item clicado sem fechar irmãos
            nav.toggleCurrent = function(elem) {
                const li = elem.closest('li');
                li.toggleClass('current');
                const isExpanded = li.hasClass('current');
                li.attr('aria-expanded', isExpanded ? 'true' : 'false');
            };

            // Sobrescreve reset (disparado em hashchange) para destacar o link atual
            // e abrir seus ancestrais sem jamais fechar abas já abertas pelo usuário
            nav.reset = function() {
                const hash = encodeURI(window.location.hash) || '#';
                try {
                    const menu = window.jQuery('.wy-menu-vertical');
                    let link = menu.find('[href="' + hash + '"]');
                    if (link.length === 0) {
                        const sec = window.jQuery('.document [id="' + hash.substring(1) + '"]').closest('div.section, section');
                        if (sec.length > 0) {
                            link = menu.find('[href="#' + sec.attr('id') + '"]');
                        }
                    }
                    if (link.length > 0) {
                        menu.find('a.current').removeClass('current');
                        link.addClass('current').attr('aria-expanded', 'true');
                        for (let level = 1; level <= 10; level++) {
                            link.closest('li.toctree-l' + level).addClass('current').attr('aria-expanded', 'true');
                        }
                    }
                } catch (err) {
                    console.log('Erro ao sincronizar âncora no menu:', err);
                }
            };

            // Ao clicar no texto de um link (e não no botão + / -), apenas abre se tiver filhos, nunca fecha
            if (window.jQuery) {
                window.jQuery(document).off('click', '.wy-menu-vertical .current ul li a');
                window.jQuery(document).on('click', '.wy-menu-vertical .current ul li a', function() {
                    const a = window.jQuery(this);
                    window.jQuery("[data-toggle='wy-nav-shift']").removeClass('shift');
                    window.jQuery("[data-toggle='rst-versions']").removeClass('shift');
                    const li = a.closest('li');
                    if (li.children('ul').length > 0) {
                        li.addClass('current').attr('aria-expanded', 'true');
                    }
                    nav.hashChange();
                });
            }
        }
    }, 50);
});
