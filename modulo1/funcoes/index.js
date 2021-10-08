// EXERCICIOS DE INTEPRETAÇÃO DE CÓDIGO. EXERCICIO 1 

// Os valores impressos são 10 e 50
// Não apareceria nada 

// EXERCICIO 2
// a) Essa função informa ao usuario se a frase digitada por ele possui a palavra cenoura em minúsculo
// b) true 
// false 
// false



// EXERCICIOS DE ESCRITA DE CÓDIGO. EXERCICIO 1 a)
/*
function imprimir(){
    console.log("Eu sou Victor, tenho 27 anos, moro em Governador Valadares - MG e sou estudante")
}
imprimir() */

//EXERCICIO 1 B)
/*
const nome = prompt("digite seu nome:")
const idade = Number(prompt ("digite sua idade:"))
const cidade = prompt("digite sua cidade:")
const profissao = prompt("digite sua profissao:")

function frase(nome, idade, cidade, profissao){
    console.log("eu sou", nome, "tenho", String (idade), "moro em ", cidade, "e sou", profissao)

}

frase(nome, idade, cidade, profissao)



EXERCICIO 2 a)

function somar(num1, num2)
{
    const resultado = num1+num2
    return resultado
}
 
const numero1 = 2
const numero2 = 4
console.log(somar (numero1, numero2))
*/


/* EXERCICIO 2 b) 

function comparar (num1, num2)
{
    const comparacao = num1>=num2
    return comparacao
}
const numero1 = 2
const numero2 = 5
 comparar (numero1, numero2)
console.log (comparar (numero1, numero2))

*/


// EXERCICIO 2 c)
/*

function ehPar (num)
{
    const par = num % 2 === 0 
    return par
}

const numero = prompt("digiteum numero: ")
console.log (ehPar(numero))
*/

// EXERCICIO 2 d)
/*

const frase1 = prompt("digite a frase")
function imprimir (frase) 
{
    console.log (frase.length)
    console.log (frase.toUpperCase()) 
}

imprimir(frase1)
*/

// EXERCICIO 3 (esse eu não deixei comentado)


function soma (num1, num2)
{
    const result1 = num1+num2
    return result1
}

function sub (num1, num2)
{
    const result2 = (num1-num2)
    return result2
}

function produto (num1, num2)
{
    const result3 = (num1*num2)
    return result3
}

function divisao (num1, num2)
{
    const result4 = (num1/num2)
    return result4
}

const numero1 = Number(prompt("digite o 1o numero"))
const numero2 = Number(prompt("digite o 2o numero"))
console.log( "A soma e a subtracao sao respectivamente", soma(numero1, numero2), sub(numero1, numero2))
console.log( "O produto e a divisao sao respectivamente", produto(numero1, numero2), divisao(numero1, numero2))




