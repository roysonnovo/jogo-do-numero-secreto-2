let listaNum = [];
let numLimite = 10;
let numSec = gerarNum();
let tentativas = 1;
let chute = 0;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function msgInicial() {
    exibirTexto('h1','Jogo do número secreto 2.0');
    exibirTexto('p', `Escolha um número entre 1 e ${numLimite}.`);
}
msgInicial();

function verificarChute() {
    chute = document.querySelector('input').value;
    
    if(chute == numSec){
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTexto('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numSec) {
            exibirTexto('p', 'O número secreto é menor.');
        }
        else {
            exibirTexto('p', 'O número secreto é maior.');
        }
    }
    tentativas++;
    limpaCampo();
}

function gerarNum() {
    let numEscolhido = parseInt(Math.random() * numLimite + 1);
    let qtdEleLista = listaNum.length;

    if (qtdEleLista == numLimite) {
        listaNum = [];
    }
    if (listaNum.includes(numEscolhido)) {
        return gerarNum();
    } else {
        listaNum.push(numEscolhido);

        return numEscolhido;
    }
}

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numSec = gerarNum();
    limpaCampo();
    tentativas = 1;
    msgInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}