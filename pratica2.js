function imc(peso, altura){
    return peso / (altura * altura)
}

console.log(imc(83, 1.73))

function fatorial(num){
    if(num < 0)
        return -1
    else if(num == 0)
        return 1
    else 
        return num * fatorial(num - 1)
}

console.log(fatorial(5))

function converte(valor){
    return valor * 4.80
}

console.log(converte(789.90))

function calculoSalaRetangular(altura, largura){
    let area = largura * altura 
    let perimetro = 2*(largura + altura)
    console.log(area)
    console.log(perimetro)
}

calculoSalaRetangular(5, 3)

function calculoSalaCircular(raio){
    let area = 3.14 * (raio*raio)
    let perimetro = 2 * 3.14 * raio 
    console.log(area)
    console.log(perimetro)
}

calculoSalaCircular(2.3)

function tabuada(num){
    let i = 1;
    while(i <= 10){
        console.log(`${num} x ${i} = ${num*i}`);
        i++
    }
}

tabuada(8)






