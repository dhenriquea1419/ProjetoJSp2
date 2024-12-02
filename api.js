function obterMensagens() {
    return [
        { nome: "João", email: "joao@exemplo.com", mensagem: "Gostaria de saber mais sobre o produto X." },
        { nome: "Maria", email: "maria@exemplo.com", mensagem: "Tenho uma dúvida sobre o pagamento." },
        { nome: "Pedro", email: "pedro@exemplo.com", mensagem: "Muito obrigado pelo atendimento!" }
    ];
}


function inserirMensagem(mensagem) {
    var inserir = $.ajax({
        url: 'https://app-p2-aab7c7fdddb8.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(mensagem),
        dataType: 'json',
        async: false,
        contentType: 'application/json',
    }).fail(function() {
        console.error('Erro ao enviar a mensagem');
        return false; 
    });

    inserir.done(function(data) {
        if (data.status === "sucesso") {
            console.log('Mensagem enviada com sucesso!');
            alert('Mensagem enviada com sucesso!');
            return true; 
        } else {
            console.error('Erro no envio da mensagem:', data.mensagem);
            alert('Erro ao enviar a mensagem.');
            return false;
        }
    });
function inserirMensagem(mensagem) {
    console.log("Mensagem recebida: ", mensagem);
    return true;  
}

}

function enviarMensagem() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagemTexto = document.getElementById('msg').value;

    if (nome && email && mensagemTexto) {
        var mensagem = {
            nome: nome,
            email: email,
            mensagem: mensagemTexto
        };

        inserirMensagem(mensagem);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

document.getElementById('sendMessageBtn').addEventListener('click', enviarMensagem);
