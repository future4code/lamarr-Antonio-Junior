
//Exercícios de interpretação de código 1
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
//Está fazendo um loop que sempre soma com o valor do valor, ou seja, sempre acrescenta o valor
//O resultado do console é 10

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
//Todos os números maiores que dezoito
//É suficiente e precisa também do indexOf que retorna o index do array

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
//Faz um loop que conta os asteriscos e incrementa sempre mais um a cada vez que roda

//Exercícios de escrita de código 1

let condicao=true;
let numUsuario;
let qntBichinhos = []

while(condicao){
    qntBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
    if(qntBichinhos==0){
        condicao=false;
        console.log( "Que pena! Você pode adotar um pet!");

    } else if (qntBichinhos === 1){
      for(let i = 0; i < qntBichinhos; i++){
        let nome = prompt("Qual o nome dele?")

        let nomeDoBichinho = []

        nomeDoBichinho.push(nome)

        console.log(nomeDoBichinho)

      } 
    } else if (qntBichinhos > 1){
      for(let i = 0; i < qntBichinhos; i++){
        let nome = prompt("Quais os nomes deles?")

        let nomeDoBichinho = []

        nomeDoBichinho.push(nome)

        console.log(nomeDoBichinho)
      }
    }
}

//Exercícios de escrita de código 2

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let divisaoPorDez = []
let guardarNumerosPares = []
let index = []

function imprimirCadaArray(){
console.log(array)
}
imprimirCadaArray()

function dividirPorDez (){
  for(let i = 0; i<array.length; i++){
    if(array[i]>1){
      divisaoPorDez.push(array[i]/10)
    }
  }
  console.log(divisaoPorDez)
}
dividirPorDez()

function numerosPares (){
  for(let i = 0; i<array.length; i++){
    if(array[i]%2===0){
      guardarNumerosPares.push(array[i])
    }
  }
  console.log(guardarNumerosPares)
}
numerosPares()





