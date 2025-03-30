/* let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo Do Número Secreto';

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; */

let numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número no intervalo de 1 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou Miserávi!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto, Parabéns!!!');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que <strong>${chute}</strong>`);
        } else {
            exibirTextoNaTela('p', `O número secreto é maior que <strong>${chute}</strong>`);
        }
    }
 }
