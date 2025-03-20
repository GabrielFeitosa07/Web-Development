document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); //Impede o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    //Simulação de autenticação (Substitua por sua Lógica de autenticação)
    if (username === 'usuario' && password === 'senha') {
        messageDiv.textContent = 'Login bem-sucedido!';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'Usuário ou Senha incorretos.';
        messageDiv.style.color = 'red';
    }
});