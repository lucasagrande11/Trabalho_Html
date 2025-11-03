document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');
    const feedbackMessage = document.getElementById('feedbackMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        feedbackMessage.style.display = 'none';
        feedbackMessage.className = 'feedback-message';

        
        if (validateForm()) {
            simulateSubmission();
        } else {
            console.log("Validação falhou. Verifique os campos.");
        }
    });

    
    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            alert('Por favor, preencha o campo Nome.');
            nameInput.focus();
            isValid = false;
        } else if (emailInput.value.trim() === '') {
            alert('Por favor, preencha o campo E-mail.');
            emailInput.focus();
            isValid = false;
        } else if (!validateEmailFormat(emailInput.value.trim())) {
            // Verificação de formato do e-mail
            alert('Por favor, insira um formato de e-mail válido.');
            emailInput.focus();
            isValid = false;
        } else if (messageTextarea.value.trim() === '') {
            alert('Por favor, preencha o campo Mensagem.');
            messageTextarea.focus();
            isValid = false;
        }

        return isValid;
    }

    function validateEmailFormat(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return re.test(String(email).toLowerCase());
    }

    function simulateSubmission() {
        nameInput.value = '';
        emailInput.value = '';
        messageTextarea.value = '';
        feedbackMessage.textContent = 'Mensagem enviada com sucesso!';
        feedbackMessage.classList.add('success-message');
        feedbackMessage.style.display = 'block';
        document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
    }
});