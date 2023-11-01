let listaDeNumerosSorteados = []
let numeroLimite = 50
let numeroSecreto = gerarNumeroSecreto()
let tentativas = 1

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`)   
}

exibirMensagemInicial()

function verificarChute(){ 
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
    let chute = document.querySelector('input').value
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou')
        exibirTextoNaTela('p', `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
        document.getElementById('botao_chute').setAttribute('disabled', true)
    }else if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'Número secreto é menor')
    }else{
        exibirTextoNaTela('p', 'Número secreto é maior')
    }
    tentativas++
    limparCampos()
}

function gerarNumeroSecreto(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length
    if(quantidadeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    }
    
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroSecreto()
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparCampos(){
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo(){
    limparCampos()
    exibirMensagemInicial()
    numeroSecreto = gerarNumeroSecreto()
    document.getElementById('reiniciar').setAttribute('disabled', true)
    document.getElementById('botao_chute').removeAttribute('disabled')
    tentativas = 1
}