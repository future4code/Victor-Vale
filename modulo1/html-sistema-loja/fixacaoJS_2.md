``` function calculaPrecoTotal(quantidade) {
  let custoTotal
  if (quantidade < 12){
    custoTotal = 1.30 * quantidade
  }
  else{
    custoTotal = 1 * quantidade
  }
  return custoTotal
} ```