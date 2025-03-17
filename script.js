document.addEventListener('DOMContentLoaded', () => {
    // Função para controle dos sliders
    function setupSlider(sliderNumber, startRadioId, totalSlides) {
        let count = 1;
        const startRadio = document.getElementById(startRadioId);
        
        // Verifica se o elemento de início existe
        if (startRadio) {
            startRadio.checked = true;
        } else {
            console.error(`Elemento com o ID ${startRadioId} não encontrado.`);
            return; // Se o elemento não for encontrado, a função é interrompida
        }
      
        // Intervalo para mudar o slider
        setInterval(() => {
            count++;
            if (count > totalSlides) count = 1;
            const radio = document.getElementById(`radio${(sliderNumber - 1) * 4 + count}`);
            
            // Verifica se o rádio existe antes de modificar
            if (radio) {
                radio.checked = true;
            } else {
                console.error(`Elemento com o ID radio${(sliderNumber - 1) * 4 + count} não encontrado.`);
            }
        }, 3000); // Intervalo de 3 segundos
    }

    // Configura os três sliders
    setupSlider(1, 'radio1', 4); // Slider 1 (radio1 a radio4)
    setupSlider(2, 'radio5', 4); // Slider 2 (radio5 a radio8)
    setupSlider(3, 'radio9', 4); // Slider 3 (radio9 a radio12)
  
    // Função para abrir e fechar o modal
    const menuIcon = document.querySelector('.menu-icon');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');
    
    if (menuIcon && modalOverlay && closeModal) {
        menuIcon.addEventListener('click', () => {
            modalOverlay.style.display = 'flex';
        });
        
        closeModal.addEventListener('click', () => {
            modalOverlay.style.display = 'none';
        });
        
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                modalOverlay.style.display = 'none';
            }
        });
    }

    // Função para rolar suavemente até uma seção
    function scrollToSection(targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            if ('scrollBehavior' in document.documentElement.style) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                targetSection.scrollIntoView(); // Fallback para rolagem instantânea
            }
        }
    }

    // Adiciona funcionalidade de rolagem aos links do menu e do modal
    const links = document.querySelectorAll('.menu a, .modal-link, .navegação2 p');
    if (links) {
        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const targetId = this.getAttribute('href');
                scrollToSection(targetId);
                if (modalOverlay) {
                    modalOverlay.style.display = 'none'; // Fecha o modal, se estiver aberto
                }
            });
        });
    }

    // Adiciona funcionalidade aos botões do WhatsApp
    function redirectToWhatsApp(phoneNumber, message) {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = url;
    }

    document.getElementById('contato').addEventListener('click', () => {
        redirectToWhatsApp('554584330907', 'Olá! Gostaria de mais informações.');
    });
  
    document.getElementById('contato-atendimento').addEventListener('click', () => {
        redirectToWhatsApp('554584330907', 'Olá! Gostaria de mais informações.');
    });
  
    document.querySelectorAll('#contato-saber-mais').forEach(button => {
        button.addEventListener('click', () => {
            redirectToWhatsApp('554584330907', 'Olá, gostaria de saber mais sobre os serviços!');
        });
    });

    document.getElementById('localizacao').addEventListener('click', () => {
        const mapsURL = 'https://www.google.com/maps?q=KS+Porcelanataria,+R.+Antonio+Franciscão+Neto,+248+-+Belmonte,+Cascavel+-+PR,+85817-866';
        window.open(mapsURL, '_blank'); // Abre em uma nova aba
    });

    // Funcionalidade de rolagem para links na navegação
    document.querySelectorAll('.navegação2 a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            console.log(`Link clicado: ${targetId}`); // Confirma que o clique foi detectado
            
            if (targetElement) {
                console.log(`Elemento encontrado: ${targetId}`);
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error(`Elemento não encontrado: ${targetId}`);
            }
        });
    });
});
