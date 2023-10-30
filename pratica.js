function olaMundo(){
    console.log('Olá, mundo!')
}

function olaMundo2(campo){
    let nome = document.querySelector(campo).value
    console.log(`Olá, ${nome}`)
}

function calculaDobro(numero){
    return numero * 2
}

function media(n1, n2, n3){
    return (n1 + n2 + n3) / 3
}

function maior(n1, n2){
    let maior
    if(n1 > n2)
        maior = n1 
    else 
        maior = n2 

    return maior
}

function multiplica(numero){
    return numero * numero;
}



