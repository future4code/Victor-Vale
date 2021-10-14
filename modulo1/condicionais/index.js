// EXERICIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCICIO 1
//  a) o código avalia se o usuario digitou um numero impar ou par, se ele digitou um numero par
// o numero passou no teste 
//  b) números pares 
//  c) números impares 

// EXERCICIO 2
// a) o código serve para estabelecer um preço de acordo com a escolha da fruta 
// b) "o preço da fruta maça é 2.25"
// c) "o preço da fruta pera é 5.0"

// EXERCICIO 3
// a) a primeira linha recebe o número que o usuario digitar 
// b) "Esse número passou no teste"  . se fosse -10 não faria nada 
// c) Haverá um erro pois mensagem não está no escopo principal, então o console.log não tem acesso a essa
// variavel 
 

EXERCICIOS DE ESCRITA DE CÓDIGO
EXERCICIO 1
const idade = Number(prompt("digite sua idade:"))
if (idade >= 18){
    console.log("voce pode dirigir")
}
else {
    console.log("você não pode dirigir")
}

EXERCICIO 2
const turno = prompt("digite seu turno: M ou V ou N ").toUpperCase()
if (turno === "M"){
    console.log("Bom dia!")
}
else if (turno === "V") {
    console.log ("Boa tarde!")

}
else if(turno ==="N"){
    console.log ("boa noite!")
}

EXERCICIO 3
const turno = prompt("digite seu turno: M ou V ou N ").toUpperCase()
switch (turno){
    case "M":
        console.log ("Bom dia!")
        break
    case "N": 
        console.log("Boa noite!")
        break
    case "V":
        console.log("Boa tarde!")
        break
}

EXERCICIO 4
const genero = prompt("digite o genero do filme").toLocaleLowerCase()
const preco = Number(prompt("digite o preço do filme"))
if (genero === "fantasia" && preco < 15 ){
    console.log("bom filme!")
}
else {
    console.log("escolha outro filme =( ")
}


