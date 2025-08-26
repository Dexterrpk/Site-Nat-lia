// Adicione este código ao seu arquivo script.js

// Form handling for service selection
document.addEventListener('DOMContentLoaded', function() {
    const serviceSelect = document.getElementById('servico');
    const messageTextarea = document.getElementById('mensagem');
    
    if (serviceSelect) {
        serviceSelect.addEventListener('change', function() {
            if (this.value) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
    }
    
    // Enhance form validation
    const contactForm = document.querySelector('.form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const nome = formData.get('nome');
            const telefone = formData.get('telefone');
            const servico = formData.get('servico');
            const mensagem = formData.get('mensagem');
            
            // Create WhatsApp message
            const serviceNames = {
                'formatacao': 'Formatação',
                'manutencao': 'Manutenção',
                'upgrade': 'Upgrade',
                'montagem': 'Montagem',
                'rede': 'Configuração de Rede',
                'outro': 'Outro'
            };
            
            const serviceText = serviceNames[servico] || 'Serviço não especificado';
            const whatsappMessage = `Olá Cleiton! Meu nome é ${nome}. Gostaria de solicitar um orçamento para: ${serviceText}. ${mensagem}. Meu WhatsApp: ${telefone}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Redirect to WhatsApp
            window.open(`https://wa.me/5575999294419?text=${encodedMessage}`, '_blank');
        });
    }
    
    // Add value detection for form fields
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
    });
});