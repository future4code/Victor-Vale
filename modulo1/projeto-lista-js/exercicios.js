// EXEMPLOS DE IMPLEMENTAÇÃO  ---------------------------------------------------------------
/*
// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
   //implemente sua lógica aqui
  const altura = prompt("digite a altura")
  const largura = prompt("digite a largura")
  const area = altura*largura
  console.log(area) 

}
calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("em que ano estamos?")
  const anoNascimento = prompt("digite seu ano de nascimento")
  console.log(anoAtual - anoNascimento)

}
imprimeIdade() 

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  const imc = peso / (altura*altura)
  return imc

}
const peso1 = ("digite seu peso")
const altura1 = ("digite sua altura")
console.log(calculaIMC(peso1, altura1))

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt("digite seu nome")
  const idade = prompt("digite sua idade")
  const email = prompt("digite seu email")
  console.log("Meu nome é", nome, "tenho", idade," anos, e o meu email é", email, "." )

}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("digite uma cor")
  const cor2 = prompt("digite uma cor")
  const cor3 = prompt("digite uma cor")
  const cores=[] 
  cores.push(cor1, cor2, cor3)
  console.log(cores)

}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  console.log(frase.toUpperCase())

}
const frase = prompt("digite uma frase")
retornaStringEmMaiuscula(frase)

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidade = custo/valorIngresso
  return quantidade

}
const cutstoTotal = prompt("digite o custo do espetaculo")
const ValorCada = prompt("Por quanto voce quer vender?")
console.log (calculaIngressosEspetaculo(cutstoTotal, ValorCada))


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const comparacao = string1.length === string2.length
  return comparacao 
}
const frase1 = prompt("digite uma string")
const frase2 = prompt("digite outra string")
console.log(checaStringsMesmoTamanho(frase1, frase2))

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiro = array[0]
  return primeiro 
}
const umArray = ["kaka", "keke", "kiki", "koko", "kuku"]
console.log(retornaPrimeiroElemento(umArray))

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimo = array[array.length-1]
  return ultimo
}
const umArray = ["kaka", "keke", "kiki", "koko", "kuku"]
console.log(retornaUltimoElemento(umArray))

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const aux1 = array[0]
  const aux2 = array[length-1]
  const arraytrocado[0] = aux2 
  const arraytrocado[length-1] = aux1
  return arraytrocado
}
const umArray = ["kaka", "keke", "kiki", "koko", "kuku"]
console.log(trocaPrimeiroEUltimo(umArray))
*/
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const comparacao = string1.toUpperCase() === string2.toUpperCase()
  return comparacao
}
const primeiraString = "abcDe"
const segundaString = "ABCDE"
console.log (checaIgualdadeDesconsiderandoCase(primeiraString, segundaString))

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}