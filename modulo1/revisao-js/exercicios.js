// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
    return array.length
}


// EXERCÍCIO 02

function retornaArrayInvertido(array) {
    const invertido = array.reverse()
    return invertido
}


// EXERCÍCIO 03

function retornaArrayOrdenado(array) {
    const ordenado =(array.sort())
    return ordenado
}

    
// EXERCÍCIO 04  

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



// EXERCÍCIO 05

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


// EXERCÍCIO 06

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


// EXERCÍCIO 07

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


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let i = 0 
    const array = []
    let numPar = 0
    while (i < n){
        array.push(par)
        par = par + 2
        i++
    } 
    return array
} 



// EXERCÍCIO 09

function classificaTriangulo(ladoA, ladoB, ladoC) {
    let frase
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


// EXERCÍCIO 10

function retornaSegundoMaiorESegundoMenor(array) {
    let maior = array[0] 
    let menor = array[0]
    let segundoMaior = array[0]
    let segundoMenor = array[0]
    const arr = []
    for (let i=0; i < array.length; i++){
        if (maior < array[i]){
            maior = array[i]
        }
        if (menor > array[i]){
            menor = array[i]
        }
    }
    for (let i=0; i < array.length; i++){
        if (segundoMaior !== maior && segundoMaior < array[i]{
            segundoMaior = array[i]
            arr.push(segundoMaior)
        }
        if (segundoMenor !== menor && segundoMaior > array[i]{
            segundoMenor = array[i]
            arr.push(segundoMenor)
        }
        i++
    }
    return arr
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao ${filme.ano}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novoObjeto = {...pessoa}
    novoObjeto.nome = "ANONIMO"
    return novoObjeto

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasPermitidas = pessoas.filter((pessoas) =>{
        return pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade < 60
    })
     return pessoasPermitidas

   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoPermitidas = pessoas.filter((pessoas) => {
        return pessoas.altura < 1.5 || pessoas.idade <= 14 || pessoas.idade > 60
    })
        return pessoasNaoPermitidas
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