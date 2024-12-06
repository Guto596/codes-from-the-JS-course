let escolha = '';

function cara() {
    /*
    escolha = 'cara';
    let resultado = Math.random();

    if (resultado < 1 / 2) {
        alert('O resultado foi CARA. Você ganhou!');
        alert(resultado);
    } else if (resultado > 1 / 2) {
        alert('O resultado foi COROA. Você perdeu!');
        alert(resultado);
    }
    */
    let resultado = Math.random();
    resultado < 1 / 2 ? alert('O resultado foi CARA. Você ganhou!') : alert('O resultado foi COROA. Você perdeu!');
    alert(resultado);
}

function coroa() {
    /*
    escolha = 'coroa';
    let resultado = Math.random();

    if(resultado < 1 / 2) {
        alert('O resultado foi CARA. Você perdeu!');
        alert(resultado);
    } else if (resultado > 1 / 2) {
        alert('O resultado foi COROA. Você ganhou!');
        alert(resultado)
    }
    */
    let resultado = Math.random();
    resultado < 1 / 2 ? alert('O resultado foi CARA. Você perdeu!') : alert('O resultado foi COROA. Você ganhou!');
    alert(resultado);
}