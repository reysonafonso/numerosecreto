function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

listaGenerica = []

linguagensDeProgramacao = ['JavaScript', 'C','C++', 'Kotlin', 'Python']

console.log(linguagensDeProgramacao)

linguagensDeProgramacao.push('Java')
linguagensDeProgramacao.push('Ruby')
linguagensDeProgramacao.push('GoLang')

console.log(linguagensDeProgramacao)

listaNomes = ['Reyson','Ray','Monik']

console.log(listaNomes[0])

console.log(listaNomes[1])

console.log(listaNomes[2])


exibirTextoNaTela('h1', linguagensDeProgramacao)

exibirTextoNaTela('p', listaNomes)