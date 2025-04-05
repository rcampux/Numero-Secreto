/* let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo Do Número Secreto';

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; */

let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMensagemTelaInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número no intervalo de 1 a 10');
}

exibirMensagemTelaInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou Miserávi!');
        let palavraTentativa = tentativas > 1? `tentativas` : `tentativa`;
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}, Parabéns!!!`;
        exibirTextoNaTela('p', `${mensagemTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que <strong>${chute}</strong>`);
        } else {
            exibirTextoNaTela('p', `O número secreto é maior que <strong>${chute}</strong>`);
        }
        tentativas++;
        limparCampo();
    }
 }

 function gerarNumeroAleatorio() {
    let numeroEsclhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numerol){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEsclhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEsclhido);
        console.log(listaDeNumerosSorteados);
        return numeroEsclhido;
    }
 }
 
 function exibirTextoNaTela(tag, texto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     /* responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); */
 }
 
 function limparCampo() {
     chute = document.querySelector('input')
     chute.value = '';
 }

 function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemTelaInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
 }

