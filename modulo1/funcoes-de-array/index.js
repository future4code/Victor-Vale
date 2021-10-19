

// EXERCICIOS ESCRITA DE CÓDIGO 
// 1 a)
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
//    const nomeDosPets = pets.map((item, indice, array) => {
//     return item.nome
//    })   
//    console.log (nomeDosPets)

// 1 b)
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ] 
//  const soSalsicha = pets.filter((item, indice, array) => {
//      return item.raca == "Salsicha"
//  })
// console.log (soSalsicha)

// 1 c)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ] 
 const pegarPoodles = (item) => {
     if (item.raca === "Poodle"){
         return true
     }
     else {
         return false
     }
 }
const Poodles = pets.filter(pegarPoodles)
