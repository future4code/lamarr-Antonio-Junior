// Respostas comentadas

// a.  executar o comando node ./arquivo.js junto com o process.argv[2]

// b.

const nome = process.argv[2]
const idade = Number(process.argv[3])

const nomeIdade = (nome, idade) => {
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
}

nomeIdade(nome, idade)

//c. 

// Para alterar bastar trocar o console por (`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7} anos.`)





