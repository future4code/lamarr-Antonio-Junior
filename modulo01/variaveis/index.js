//Resposta do exercicio 1
/*let a = 10
let b = 10

console.log(b)
>10

b = 5
console.log(a, b)
>(10, 5) */

//Resposta do exercicio 2
/*let a = 10
let b = 20
c = a
b = c 
a = b

console.log(a, b, c)
>(10, 10, 10)*/

// let p = prompt("Quantas horas você trabalha por dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)

/* O Programa solicita as informações do usuário para depois fazer uma 
divisão e retornar um outro valor

Sugestões:
let p = horasTrabalhadasDiaria
let t valorRecebidoDiario */

//Exercícios de escrita de código 1

let n = "nome"
let i = "idade"

console.log(typeof n)
console.log(typeof i)

//index.js:33 Uncaught SyntaxError: Invalid or unexpected token
/*Ocorreu esse erro primeiramente pois não havia colocado as aspas na 
variavel n e por isso não estava recendo como string */

let nome = "Jr"
let idade = 26

console.log("Olá!", "Meu nome é ", nome, "e tenho", idade, "anos");

//Exercícios de escrita de código 2

let um = "Sim"
let dois = "Sim"
let tres = "Não"

console.log("Voce esta usando roupa azul hoje?", um);
console.log("Voce está gostando do curso?", dois);
console.log("Voce trabalhou até as 19h hoje?", tres);

//Exercícios de escrita de código 3

let a = 10
let b = 25

let c = a;

a = b;
b = c;


console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);

/* Foi necessário criar uma terceira variavel pra guardar o valor de a 
e para que esse valor não fosse modificado na troca */




