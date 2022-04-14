// Exercícios de interpretação de código

//1. 

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)
//b. false 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
//c. true

console.log("d. ", typeof resultado)
//d. boolean

//2.

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

//se somar 2 + 2 vai vir em formato de string 22 e não 4

//3.

//O prompt sempre vai retornar um string, precisamos converter ela para "Number", que pode
//ser feito com parseInt adcionados na função ficando parseInt(primeiroNumero) + parseInt(segundoNumero)

//Exercícios de escrita de código

//1.

let idade = prompt("Qual a sua idade?");
let idadeDoMelhorAmg = prompt("Qual a idade do seu melhor amigo? Ou da sua melhor amiga?");

let maisIdade = idade >= idadeDoMelhorAmg
console.log("Sua idade é maior do que a do seu amigo?", maisIdade);

console.log(idade - idadeDoMelhorAmg);

//2.

let par = prompt("Por favor, insira um número par");
let resto = par % 2
console.log(resto);

// todo numero par dividido por 2 da resto zero
// se colocar um número impar ele retorna o resto que faltou

//3.

let idadeEmAnos = prompt("Quantos anos você tem?");
console.log("Sua idade convertida em meses, é", idadeEmAnos * 12);
console.log("Sua idade convertida em dias, é", idadeEmAnos * 365);
console.log("Sua idade convertida em horas, é", idadeEmAnos * 8766);

//4.

let num1 = prompt("Por favor, insira um número");
let num2 = prompt("Por favor, insira mais um número");

let numMaior = num1 >= num2
let igual = num1 === num2
let divisivel1 = (num1 % num2) === 0
let divisivel2 = (num2 % num1) === 0

console.log(numMaior);
console.log(igual);
console.log(divisivel1);
console.log(divisivel2);





