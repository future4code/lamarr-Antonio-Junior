//1.
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//a) Matheus Nachtergaele; Virginia Cavendish; Globo, 14h

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

//2.
const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a) nome: "Juca", idade:3, raca "SRD"; "Juba", idade:3, raca "SRD"; "Jubo", idade:3, raca "SRD"

//b) Permite que copiemos um objeto ou uma array e dando a possibilidade de alterar ou acrescentar mais elementos

//3.

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))


//Exercícios de escrita de código
//1.

const humano = {
    nome: "Junior", 
    apelidos: ["Ju", "Jun", "Junim"]
 }
 
 console.log(`Eu sou ${humano.nome} mas pode me chamar de ${humano.apelidos[0]}, ${humano.apelidos[1]} ou ${humano.apelidos[2]}`)

 const novoHumano = {
     ...humano,

    }

    const novosApelidos = [...novoHumano.apelidos, "Juju", "Jujuzinho", "J"]

    console.log(novoHumano)


//Exercícios de escrita de código
//2.

//a)

const entrevistado = {
    nome: "Junior",
    idade: "26",
    profissao: "Encarregado"

}


const entrevistado1 = {
    nome: "Samya",
    idade: "30",
    profissao: "Estoquista"

}

//b
// console.log([entrevistado.nome, 
//     entrevistado.idade, 
//     entrevistado.profissao, 
//     entrevistado.profissao.length])

//     console.log([entrevistado1.nome, 
//         entrevistado1.idade, 
//         entrevistado1.profissao, 
//         entrevistado1.profissao.length])


function retornarInformacoes (obj) {
    let arrayInformacoes = [obj.nome, obj.idade, obj.profissao, obj.profissao.length]

    return arrayInformacoes
}

console.log(retornarInformacoes(entrevistado))
console.log(retornarInformacoes(entrevistado1))


//Exercícios de escrita de código
//3.
//a)
const carrinho = []


const fruta = {
    nome: "manga",
    disponibilidade: true
}
const fruta1 = {
    nome: "limão",
    disponibilidade: true
}
const fruta2 = {
    nome: "pera",
    disponibilidade: true
}


// console.log(carrinho.push(fruta, fruta1, fruta2))
// console.log(carrinho)

function addFrtura(object) {
     carrinho.push(object)
}

addFrtura(fruta)
addFrtura(fruta1)
addFrtura(fruta2)

console.log(carrinho)


//DESAFIO
//1.

const seuNome = prompt("Qual o seu nome?")
const suaIdade = prompt ("Qual a sua idade?")
const suaProfissao = prompt("Qual a sua profissão?")

let informacoesA = {
    seunome: seuNome,
    suaidade: suaIdade,
    profissao: suaProfissao
}

console.log(informacoesA)







