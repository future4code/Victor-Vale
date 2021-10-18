// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

const array = ["verde", "azul", "amarelo"]
function retornaTamanhoArray(array) {
    const tamanho = array.length
    return tamanho
}
const num = retornaTamanhoArray(array)
console.log(num)

// EXERCÍCIO 02

const array = ["gato", "cachorro", "galinha", "passaro"]

function retornaArrayInvertido(array) {
    const invertido = array.reverse()
    return invertido
}
const num = retornaArrayInvertido(array)
console.log(num)

// EXERCÍCIO 03

const array = [6, 5, 4, 3, 2, 1]
function retornaArrayOrdenado(array) {
    const ordenado =(array.sort())
    return ordenado
}
console.log(retornaArrayOrdenado(array))
    
// EXERCÍCIO 04

const array = [1, 2, 3, 4, 5, 6, 7, 8]
function retornaNumerosPares(array) {   
    const arrayPar = []
    let i = 0 
    while (i < array.length){
        if (array[i] % 2 === 0){
            let numeroPar = array[i]
            arrayPar.push(numeroPar)
        }   
    i++
    }
    return arrayPar
}
console.log(retornaNumerosPares(array))


// EXERCÍCIO 05
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function retornaNumerosParesElevadosADois(array) {
    const arrayPar = []
    let i = 0 
    while (i < array.length){
        if (array[i] % 2 === 0){
            let numeroPar = array[i]
            arrayPar.push(numeroPar*numeroPar)
        }   
    i++
    }

    return arrayPar
}
console.log(retornaNumerosParesElevadosADois(array))


// EXERCÍCIO 06
const array = [33, 45, 1, 2, 7, 101, 26]
function retornaMaiorNumero(array) {
    let i = 0
    let maior = array[0]
    while (i < array.length){
        if(maior < array[i]){
            maior = array[i]
        }
        i++
    }
  return maior 
}
const numero = retornaMaiorNumero(array)
console.log(numero)

// EXERCÍCIO 07
const num1 = 6
const num2 = 10
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior
    let menor
    let booleano 
    let diferenca 
    if (num1>num2){
        maior = num1
        menor = num2
    }
    else{
        maior = num2
        menor = num1 
    }
    booleano = maior % menor === 0 
    diferenca = maior - menor 
    const objeto = {
        maiorNumero: maior,
        maiorDvisivelPorMenor: booleano,
        diferenca: diferenca
    }
    return objeto
}
console.log(retornaObjetoEntreDoisNumeros(num1, num2))

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let i = 0 
    const array = []
    let par = 0
    while (i < n){
        array.push(par)
        par = par + 2
        i++
    } 
    return array
} 

const n = 10 
console.log (retornaNPrimeirosPares(n))


// EXERCÍCIO 09
const ladoA = 10
const ladoB = 10
const ladoC = 10
let frase 
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC){
        frase = "equilatero"
    }
    else if (ladoA !== ladoB && ladoB !== lado){
        frase = "escaleno"
    }
    else {
        frase = "isósceles"
    }
    return frase
}
console.log(classificaTriangulo(ladoA, ladoB, ladoC))

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}