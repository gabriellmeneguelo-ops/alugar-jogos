function alterarStatus (id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (!confirm('Deseja confirmar a devolução deste jogo?')) {
            return;
        }

        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }

    exibirQuantidadeDeJogosAlugados();
}

function exibirQuantidadeDeJogosAlugados() {
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
    console.log(`Quantidade de jogos alugados: ${jogosAlugados.length}`);
}