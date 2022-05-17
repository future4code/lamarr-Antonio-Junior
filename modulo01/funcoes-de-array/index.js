//Exercícios de interpretação de código 1

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
  //Vai ser impresso os itens, os index e as arrays completas de cada objeto

  //Exercícios de interpretação de código 2

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  /*Como colocamos para retornar apenas os itens.nome, vai ser impresso apenas os nomes contidos
  em cada objeto */

  //Exercícios de interpretação de código 3

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

/*Foi solicitado com o callback .filter, para que filtrasse e imprimisse todos os apelidos
com (item.apelido) que fossem diferentes de "Chijo" */

//Exercícios de escrita de código 1.a)

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const novaArrayDoguinhos = pets.map((item, index, array) => {
//      return item.nome
//  })

//  console.log(novaArrayDoguinhos)

// //Exercícios de escrita de código 1.b)

// const novaArraySalsichas = pets.filter((item, index, array) => {
//     return item.raca === "Salsicha"
// })

// console.log(novaArraySalsichas)


// //Exercícios de escrita de código 1.c)

// const cupom = pets.filter((item) => {
//   return  item.raca === "Poodle"
// }).map ((item) => {
//   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
// })

// console.log(cupom)





// //Exercícios de escrita de código 2.a)

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  const cadaItem = produtos.map((item, index, array) => {
//     return item.nome
// })

// console.log(cadaItem)

// //Exercícios de escrita de código 2.b)

// // const nomePdesconto =  produtos.map((item, index, array) => {
// //   return item.nome 
  
// // })

// const precoPdesconto = produtos.map((item, index, array) => {
//   return  {
//       nome: item.nome,
//       preço: (item.preco * 0.95).toFixed(2)
//   }

// })

// console.log(precoPdesconto);

// //Exercícios de escrita de código 2.c)

// const bebidas = produtos.map((item) => {
//   return item.categoria
// })

// console.log(bebidas)

// //Exercícios de escrita de código 2.d)

// let produtosYpe = produtos.filter((marcaYpê) => {
//   return marcaYpê.nome.includes("Ypê")
// })

// console.log(produtosYpe);

//Exercícios de escrita de código 2.e)


// let produtosYpe = produtos.filter((marcaYpê) => {
//     return marcaYpê.nome.includes("Ypê")


//   }).map((marcaYpê) => {
//     return `compre ${marcaYpê.nome} por ${marcaYpê.preco}`

//   })

//   console.log(produtosYpe)

















