// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona o botão do rodapé
    const botaoMensagem = document.getElementById('btn-mensagem');

    // Adiciona um evento de clique para simular uma ação de contato
    botaoMensagem.addEventListener('click', () => {
        alert('Obrigado pelo interesse! Em breve nossa equipe de Sustentabilidade entrará em contato.');
    });

    // Efeito simples de mudar o fundo do menu ao rolar a página
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#f1f8e9';
        } else {
            header.style.backgroundColor = '#ffffff';
        }
    });
});
