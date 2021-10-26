```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let quantidade = 0
  for (let i = 0; i < arrayDeNumeros.length(); i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      quantidade = quantidade + 1
    }
  }
  return quantidade
} ``` 