document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').ariaValueMax;
    const password = document.getElementById('password').ariaValueMax;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');

    if (password !== confirmPassword) {
        messageDiv.textContent = 'As senhas não coincidem.';
        messageDiv.style.color = 'red';
        return;
    }

    try {
        const response = await fetch('./register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        messageDiv.textContent = data.message;
        messageDiv.style.color = response.ok ? 'green' : 'red';
    } catch (error) {
        messageDiv.textContent = 'Erro ao conectar ao servidor.';
        messageDiv.style.color = 'red';
    }
});