function pedra(){
    const numero_random = Math.random();
    let jogada_computador = '';
    if(numero_random >= 0 && numero_random < 1 / 3){
        jogada_computador = 'pedra';
    } else if(numero_random >= 1 / 3 && numero_random < 2 / 3){
        jogada_computador = 'papel';
    } else if (numero_random >= 2 / 3 && numero_random < 1){
        jogada_computador = 'tesoura';
    }
    alert(jogada_computador)

    let resultado = '';

    if(jogada_computador === 'pedra'){
       resultado = 'Empate.';
    } else if (jogada_computador === 'papel'){
        resultado = 'Você perdeu.';
    } else if (jogada_computador === 'tesoura'){
        resultado = 'Você ganhou.';
    }
    alert(`Você escolheu pedra. O computador escolheu ${jogada_computador}. ${resultado}`)
}

function papel(){
    const numero_random = Math.random();
    let jogada_computador = '';
    if(numero_random >= 0 && numero_random < 1 / 3){
        jogada_computador = 'pedra';
    } else if(numero_random >= 1 / 3 && numero_random < 2 / 3){
        jogada_computador = 'papel';
    } else if(numero_random > 2 / 3 && numero_random < 1){
        jogada_computador = 'tesoura';
    }

    let resultado = ''

    if(jogada_computador === 'pedra'){
        resultado = 'Você ganhou.'
    } else if(jogada_computador === 'papel'){
        resultado = 'Empate.';
    } else if(jogada_computador === 'tesoura'){
        resultado = 'Você perdeu.'
    }
    alert(`Você escolheu papel. O computador escolheu ${jogada_computador}. ${resultado}`)
}

function tesoura(){
    const numero_random = Math.random();
    let jogada_computador = '';
    if(numero_random >= 0 && numero_random < 1 / 3){
        jogada_computador = 'pedra';
    } else if(numero_random >= 1 / 3 && numero_random < 2 / 3){
        jogada_computador = 'papel';
    } else if(numero_random > 2 / 3 && numero_random < 1){
        jogada_computador = 'tesoura';
    }

    let resultado = ''

    if(jogada_computador === 'pedra'){
        resultado = 'Você perdeu.';
    } else if(jogada_computador === 'papel'){
        resultado = 'Você ganhou.'
    } else if(jogada_computador === 'tesoura'){
        resultado = 'Empate.'
    }
    alert(`Você escolheu tesoura. O computador escolheu ${jogada_computador}. ${resultado}`)
}