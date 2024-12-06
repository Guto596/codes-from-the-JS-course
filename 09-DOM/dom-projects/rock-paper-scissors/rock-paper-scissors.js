let pontos = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

document.querySelector('.js-score').innerHTML = `Wins: ${pontos.wins}, Losses: ${pontos.losses}, Ties: ${pontos.ties}`;

/*
if (!pontos) {
    pontos = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
*/

let div_pontos = document.getElementById('pontuacao')

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${pontos.wins}, Losses: ${pontos.losses}, Ties: ${pontos.ties}`;
}

function jogada_comp() {

    let num = Math.random();
    let computador = '';

    if (num <= 1 / 3) {
        computador = 'pedra';
    } else if (num > 1 / 3 && num <= 2 / 3) {
        computador = 'papel';
    } else if (num > 2 / 3 && num <= 3) {
        computador = 'tesoura';
    }

    console.log(num)
    return computador

}

function partida(jogador) {

    let computador = jogada_comp();
    let resultado = '';
    let div_res = document.getElementById('res');

    if (jogador === 'pedra') {
        if (computador === 'pedra') {
            resultado = 'Empate.';
        } else if (computador === 'papel') {
            resultado = 'Você perdeu!';
        } else if (computador === 'tesoura') {
            resultado = 'Você ganhou!';
        }
    } else if (jogador === 'papel') {
        if (computador === 'pedra') {
            resultado = 'Você ganhou!';
        } else if (computador === 'papel') {
            resultado = 'Empate.';
        } else if (computador === 'tesoura') {
            resultado = 'Você perdeu!';
        }
    } else if (jogador === 'tesoura') {
        if (computador === 'pedra') {
            resultado = 'Você perdeu!';
        } else if (computador === 'papel') {
            resultado = 'Você ganhou!';
        } else if (computador === 'tesoura') {
            resultado = 'Empate.';
        }
    }

    if (resultado === 'Você ganhou!') {
        pontos.wins += 1;
    } else if (resultado === 'Você perdeu!') {
        pontos.losses += 1;
    } else if (resultado === 'Empate.') {
        pontos.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(pontos));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = resultado

    document.querySelector('.js-moves').innerHTML = `Você escolheu ${jogador}. O computador escolheu ${computador}`
    

    

    return resultado;

}

function pedra() {
    partida('pedra');

}

function papel() {
    partida('papel');
}

function tesoura() {
    partida('tesoura');
}

function reset() {
    pontos.wins = 0;
    pontos.losses = 0;
    pontos.ties = 0;

    localStorage.removeItem('score')

    updateScoreElement();

    

    //div_pontos.innerHTML = `Wins: ${pontos.wins}, Losses: ${pontos.losses}, Ties: ${pontos.ties}.`
}