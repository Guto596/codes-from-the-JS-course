const nome = prompt('Olá, digite seu nome.')
const tempo = new Date()
const horas = tempo.getHours()

if (nome == '' || nome === null) {
    alert('[ERRO] Coloque o seu nome.')
} else {
    alert(`Agora são ${horas} horas.`)
    if (horas >= 6 && horas <= 12) {
        alert(`Bom dia, ${nome}!`);
    } else if (horas >= 13 && horas <= 17) {
        alert(`Boa tarde, ${nome}!`);
    } else {
        alert(`Boa noite, ${nome}!`);
    }
}