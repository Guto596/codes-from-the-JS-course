function pedra(){
    playGame('pedra')
}

function papel(){
    playGame('papel')
}

function tesoura(){
    /* 
    Quando o botão for clicado vai executar a função playGame() que vai executar a função
    pickComputerMove(), depois o valor da variável jogada_computador dentro da função será
    retornado, assim, fazendo com que a variável jogada_computador dentro da função tesoura()
    receba o valor da variável jogada_computador dentro de pickComputerMove(), assim, evitando
    problemas de escopo.
    */
    playGame('tesoura')
}

// ----------------------------------------------------------------------------------------- 

function playGame(playerMove) {
    const jogada_computador = pickComputerMove();

    let resultado = ''

    if (playerMove === 'tesoura') {
        if(jogada_computador === 'pedra'){
            resultado = 'Você perdeu.';
        } else if(jogada_computador === 'papel'){
            resultado = 'Você ganhou.'
        } else if(jogada_computador === 'tesoura'){
            resultado = 'Empate.'
        }

    } else if (playerMove === 'papel') {
        if(jogada_computador === 'pedra'){
            resultado = 'Você ganhou.'
        } else if(jogada_computador === 'papel'){
            resultado = 'Empate.';
        } else if(jogada_computador === 'tesoura'){
            resultado = 'Você perdeu.'
        }
        
    } else if (playerMove === 'pedra') {
        if(jogada_computador === 'pedra'){
            resultado = 'Empate.';
        } else if (jogada_computador === 'papel'){
             resultado = 'Você perdeu.';
        } else if (jogada_computador === 'tesoura'){
             resultado = 'Você ganhou.';
        }
    }

    alert(`Você escolheu ${playerMove}. O computador escolheu ${jogada_computador}. ${resultado}`)
}

// ----------------------------------------------------------------------------------------------

function pickComputerMove() {
    const numero_random = Math.random();

    let jogada_computador = '';
    
    if(numero_random >= 0 && numero_random < 1 / 3){
        jogada_computador = 'pedra';
    } else if(numero_random >= 1 / 3 && numero_random < 2 / 3){
        jogada_computador = 'papel';
    } else if(numero_random > 2 / 3 && numero_random < 1){
        jogada_computador = 'tesoura';
    }
    return jogada_computador
}