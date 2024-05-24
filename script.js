document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir o envio padrão do formulário

    var password = document.getElementById("password").value;

    // Você pode adicionar sua lógica aqui para verificar a senha
    // Por exemplo, você pode enviar uma solicitação AJAX para o servidor para autenticação

    // Para demonstração, vamos supor que a senha correta seja "password"
    if (password === "76625330") {
        // Se a senha estiver correta, redirecione para outra página
        window.location.href = "txt.html";
    } else {
        // Se a senha estiver incorreta, exiba uma mensagem de erro
        alert("Senha incorreta. Por favor, tente novamente.");
    }
});
