const loginForm = document.getElElementById('loginForm');
const messageDiv = document.getElementById('message');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Contet-type': 'aplication/json'
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