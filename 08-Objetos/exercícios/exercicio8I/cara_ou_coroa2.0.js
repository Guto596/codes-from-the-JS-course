const score = JSON.parse(localStorage.getItem('cara_ou_coroa_pontos')) || {
    wins: 0,
    losses: 0
};

function playGame(guess) {
    const random_Number = Math.random()
    const result = random_Number < 0.5 ? 'cara' : 'coroa';
    
    let result_partida = guess === result ? 'You win!' : 'You lose!';
    console.log(result_partida);

    result_partida === 'You win!' ? score.wins ++ : score.losses ++;
    console.log(score)

    localStorage.setItem('cara_ou_coroa_pontos', JSON.stringify(score))
}