// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
// 1 O resultado no console é de 10

//2 a) Será impresso na tela todos os números do array maiores que 18 
// b) para acessar o indice é melhor utilizar a função for ou while

//3 apareceria na tela "****"



// EXERCICIOS DE ESCRITA DE CÓDIGO 
// 1 a)

const quantidade = prompt ("digite quantos animais você tem:")
if (quantidade <= 0){
    console.log("que pena! você pode adotar um pet!")
}
else if (quantidade > 0){
    const animais = []
    for (let i=0; i < quantidade; i++){
        animais[i] = prompt("digite o nome do animal ", i+1)
    }
    console.log("seus animais são: ", animais)
}

// 2 a)

const arrayOriginal = [45, 80, 59, 5, 20, -2, 11, 44]
let i = 0
while (i < arrayOriginal.length){
    console.log (arrayOriginal[i])
    i = i+1 
}

// 2 b)

const arrayOriginal = [45, 80, 59, 5, 20, -2, 11, 44]
let i = 0
while (i < arrayOriginal.length){
    console.log (arrayOriginal[i]/10)
    i = i+1 
}

// 2 c)

const arrayOriginal = [45, 80, 59, 5, 20, -2, 11, 44]
let i = 0
let novoArray = []
while (i < arrayOriginal.length){
    if (arrayOriginal[i] % 2 === 0){
        let numeroPar = arrayOriginal[i]
        novoArray.push(numeroPar)
    }   
i++
}
console.log(novoArray)

// 2 d)

const arrayOriginal = [45, 80, 59, 5, 20, -2, 11, 44]
let i = 0 
while (i < arrayOriginal.length){
    console.log("o elemento do index ", i, "é ", arrayOriginal[i])
    i++
}

// 2 e)

const arrayOriginal = [45, 80, 59, 5, 20, -2, 11, 44]
let menor = arrayOriginal[0]
let maior = arrayOriginal[0]

for (let i = 0; i < arrayOriginal.length; i++){
    if(menor > arrayOriginal[i]){
        menor = arrayOriginal[i]
    }
    if (maior < arrayOriginal[i]){
        maior = arrayOriginal[i]
    }
}
console.log("o maior número é: ", maior)
console.log("o menor número é: ", menor)
