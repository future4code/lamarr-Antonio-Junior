// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

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
// implemente sua lógica aqui
let altura = Number(prompt("altura"))
let largura = Number(prompt("largura"))
let area = altura*largura

console.log(area)
}

  // implemente sua lógica aqui

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Em que ano estamos?"));
  let anoDeNascimento = Number(prompt("Em que ano você nasceu?"));
  let idade = anoAtual - anoDeNascimento;

  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(altura, peso) {
  // implemente sua lógica aqui
  peso = Number(prompt("Qual o seu peso?"));
  altura = Number(prompt("Qual a sua altura?"));
  let imc = peso / (altura * altura);

  return imc
}

// EXERCÍCIO 
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let nome = (prompt("Qual o seu nome?"));
  let idade = Number(prompt("Qual a sua idade?"))
  let email = (prompt("Qual o seu email?"))

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
 
}
  


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  cores = [prompt("Qual sua primeira cor preferida?"), prompt("Qual sua segunda cor preferida?"), 
    prompt("Qual sua terceira cor preferida?")];
    
    
console.log(cores);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula() {
  // implemente sua lógica aqui
   
 let texto = prompt("Qual a palavra?")

let string = texto.toUpperCase();

return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  custo = Number(prompt("Valor do espetáculo"))
  valorIngresso = Number(prompt("Valor di ingresso"))
  let cv = custo / valorIngresso

  return cv
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  string1 = prompt("Qual a primeira palavra?")
  string2 = prompt("Qual a segunda palavra?")

  let qm = string1 >= string2
 
  return qm

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
array [prompt("Quais os números")]

let rd = array[0]

return rd

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  array [prompt("Quais os elementos")]

  let ue = array[array.length - 1];

  return ue

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let index01 = array[0]

array[0] = array[array.length - 1]
array[array.length - 1] = index01

return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = prompt("Qual a primeira palavra?")
  string2 = prompt("Qual a segunda palavra?")

  let qm = string1.toUpperCase() === string2.toUpperCase()
 
  return qm

} 




// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Qual o ano estamos?"));
const anoNascimento = Number(prompt("Qual o ano do seu nascimento?"));
const anoDoRg = Number(prompt("Qual o ano foi emitido o seu RG?"));

let a = anoAtual - anoNascimento
let b = anoDoRg+5 <= anoAtual
let c = anoDoRg+10 <= anoAtual
let d = anoDoRg+15 <= anoAtual

if (a <= 20) {
  console.log(b)
} else if (a > 20 && a <= 50) {
console.log(c)
} else if (a > 50) {
  console.log(d)
} else {
  console.log("Idade não confere")
}

}

checaRenovacaoRG()



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
    // implemente sua lógica aqui
  let resultado = ano
  
  resultado = (ano % 400 == 0) || (ano % 4 == 0) && (ano % 100 != 0)

  return resultado
  }

  

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
var num = prompt("Você tem mais de 18 anos? Sim ou Não?")
var obj = prompt("Você possui ensino médio completo? Sim ou Não?")
var str = prompt("Você possui disponibilidade exclusiva durante os horários do curso? Sim ou Não?")

let a = num === "sim" 
let b = obj === "sim" 
let c = str === "sim" 

if (a === b === c){
  console.log(a === b === c)
} else {
  console.log(false)
}
}

checaValidadeInscricaoLabenu()
