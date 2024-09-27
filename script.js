document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão do menu e o menu fullscreen
    const menuToggle = document.querySelector('.menu-hamburguer');
    const fullscreenMenu = document.getElementById('fullscreenMenu');

    // Função para abrir/fechar o menu de tela cheia
    const toggleFullscreenMenu = () => {
        fullscreenMenu.classList.toggle('active');
        console.log("Menu fullscreen ativado/desativado");
    };

    // Abre e fecha o menu de tela cheia
    menuToggle?.addEventListener('click', toggleFullscreenMenu);

    // Fecha o menu fullscreen ao clicar no botão de fechar
    const closeMenuButton = fullscreenMenu?.querySelector('.close-menu');
    closeMenuButton?.addEventListener('click', () => {
        fullscreenMenu.classList.remove('active');
        console.log("Menu fullscreen fechado");
    });

    // Fecha o menu fullscreen ao clicar em uma das opções de navegação
    const fullscreenNavLinks = document.querySelectorAll('#fullscreenNavList a');
    fullscreenNavLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            if (!link.classList.contains('servicos-link')) {
                fullscreenMenu.classList.remove('active');
                console.log("Menu fullscreen fechado após clicar em um link");
            }
        });
    });

    // Scroll do cabeçalho
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 0);
    });
});

// Seção FAQ's
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const arrow = item.querySelector('.arrow');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Fechar todos os itens abertos
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = '0'; // Oculta a resposta
                i.querySelector('.arrow').style.transform = 'rotate(0deg)'; // Reseta a seta
            });

            // Abrir ou fechar o item clicado
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px'; // Define max-height baseado na altura do conteúdo
                arrow.style.transform = 'rotate(180deg)'; // Rotaciona a seta
            }
        });
    });
});

// Animações nas seções
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o hero content e adiciona a classe visible ao texto principal
    const heroTexts = document.querySelectorAll('.hero-text');
    heroTexts.forEach(text => text.classList.add('visible')); // Torna o texto da hero visível

    // Seleciona todas as seções
    const sections = document.querySelectorAll('.section');

    // Cria um novo Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adiciona a classe visible quando a seção entra na visualização
                observer.unobserve(entry.target); // Para observar a seção uma vez que a animação foi aplicada
            }
        });
    });

    // Observa cada seção
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observa cada card na seção de serviços
    const servicos = document.querySelectorAll('.servico');
    servicos.forEach(servico => {
        observer.observe(servico);
    });

    // Observa os itens na seção "Por que escolher a NOVA?"
    const porqueNovaItems = document.querySelectorAll('.porque-nova .item');
    const porqueNovaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adiciona a classe visible quando o item entra na visualização
                porqueNovaObserver.unobserve(entry.target); // Para observar o item uma vez que a animação foi aplicada
            }
        });
    });

    // Observa apenas os itens
    porqueNovaItems.forEach(item => {
        porqueNovaObserver.observe(item); // Observe somente o item
    });

    // Observa os itens FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        const faqObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Adiciona a classe visible quando o item entra na visualização
                    faqObserver.unobserve(entry.target); // Para observar o item uma vez que a animação foi aplicada
                }
            });
        });

        faqObserver.observe(item); // Observe cada item da FAQ
        item.style.transitionDelay = `${index * 0.2}s`; // Atraso na animação para cada item
    });
});
