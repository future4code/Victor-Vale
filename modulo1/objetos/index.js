

// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
// EXERCICIO 1.a) "Matheus Nachtergaele", "Virginia Cavendish", Globo 14h

// EXERCICIO 2.a) Juca, 3, SRD ; Juba, 3, SRD; Jubo, 3, SRD 
// EXERCICIO 2.b) A sintaxe dos 3 pontos cria uma cópia do objeto que pode ser modificada 

// EXERCICIO 3.a) False e undefined
// EXERCICIO 3.b) Imprimou False pois era um valor Booleano atribuído a variavel "backender" 
// e undefined pois a variavel altura não foi declarada. 





// EXERCICIOS DE ESCRITA DE CÓDIGO

// EXERCICIO 1. a)
// Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que
// sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como 
//entrada um objeto e imprime uma mensagem no modelo abaixo: 

//"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

// const pessoa = {
//     nome: "Victor",
//     apelidos: ["Vitin", "vitão", "Sandro"] 

// }

// function imprimirFrase(pessoa)
// {
//     console.log("Eu sou", pessoa.nome, "mas pode me chamar de", pessoa.apelidos[0], "ou ", pessoa.apelidos[1], "ou ", pessoa.apelidos[2])
// }

// imprimirFrase(pessoa)

// EXERCICIO 1. b)
//Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma 
//nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

// const novaPessoa = {
//     ...pessoa,
//     apelidos: ["tonihno", "Vitin Mil Grau", "Vitin pão de queijo"]
// }
// imprimirFrase(novaPessoa)


// EXERCICIO 2. a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

// const pessoa = {
//     nome: "Victor Ferreira do Vale",
//     idade: 27,
//     profissao: "Engenheiro mecânico"
// }

// EXERCICIO 2. b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// function informar (pessoa)
// {
//     const informacoes = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
//     return informacoes
// }
// console.log (informar(pessoa))


// EXERCICIO 3. a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
 const carrinho = []

//EXERCICIO 3.b Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as
//seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

const estoque1 = {
    nome: "banana",
    disponibilidade: true,
} 

const estoque2 = {
    nome: "pera",
    disponibilidade: true,
} 

const estoque3 = {
    nome: "uva",
    disponibilidade: false,
} 
 function colocar(estoque){
     carrinho.push(estoque)
 }
 
 colocar(estoque1)
 colocar(estoque2)
 colocar(estoque3)

 console.log(carrinho)