// questão 1 a)
const nome 

// questão 1 b)
const idade 

// questão 1 c)
console.log(typeof nome)
console.log(typeof idade)

// questão 1 d) foi impresso na tela "Uncaught SyntaxError: Missing initializer in const declaration"
//o console está dizendo que a variavel não foi inicializada 


// questão 1 e)
let idade = prompt("sua idade:")
const nome = prompt("seu nome:")


console.log(typeof idade)
console.log(typeof nome)

// os dois comandos de typeof me retornaram no console que os tipos das variáveis eram strings 

console.log ("ola", nome,"você tem ", idade, "anos")

// questão 2

let resposta1 = prompt("voce está usando tênis?")
let resposta2 = prompt("voce está usando calça?")
let resposta3 = prompt("voce tem cachorro?")
console.log("voce está usando tênis? - ", resposta1, " - voce está usando calça? - ", resposta2, " - voce tem cachorro? - ", resposta3)

//Questão 3
let a = 20
let b = 38
let aux 

aux = b
b = a
a = aux  

console.log("o novo valor de a eh ", a, "e o novo valor de b eh ", b)