function openConversation(name) {
    document.getElementById('message-page').style.display = 'none'; // Esconde a página de mensagens
    document.getElementById('conversation').style.display = 'block'; // Mostra a conversa
    document.getElementById('conversation-title').innerText = `Conversa com ${name}`; // Atualiza o título da conversa
    document.getElementById('conversation-messages').innerHTML = ''; // Limpa mensagens anteriores

    // Adiciona mensagens de exemplo (remover ou comentar esta parte)
    for (let i = 0; i < 5; i++) {
        const newMessage = document.createElement('li');
        newMessage.textContent = `${name}: Mensagem ${i + 1}`; // Mensagens de exemplo
        document.getElementById('conversation-messages').insertBefore(newMessage, document.getElementById('conversation-messages').firstChild);
    }
}
function openConversation(name) {
    document.getElementById('message-page').style.display = 'none'; // Esconde a página de mensagens
    document.getElementById('conversation').style.display = 'block'; // Mostra a conversa
    document.getElementById('conversation-title').textContent = `Conversa com ${name}`; // Atualiza o título da conversa
    document.getElementById('conversation-messages').innerHTML = ''; // Limpa mensagens anteriores
    
    // Rolando para a última mensagem
    const messageList = document.getElementById('conversation-messages');
    messageList.scrollTop = messageList.scrollHeight;
}

