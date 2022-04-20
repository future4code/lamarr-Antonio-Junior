// 1. 

let array 
console.log('a. ', array);
// imprime uma variavel indefinida a. undefined

array = null
console.log('b. ', array);
// imprime uma variável nula b.null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log('c. ', array.length);
//imprime o numero de elementos de uma array c . 11

let i = 0;
console.log('d. ', array[i]);
//imprime o primeiro item da array anterior d. 3

array[i+1] = 19;
console.log('e. ', array);
// trocou o segundo item da array anterior por 19 e. [3, 19,...,13]

const valor = array[i+6];
console.log('f. ', valor);
//imprime o sexto elemento contando à partir do primeiro, no caso imprime o 9

//1.  

const frase = prompt("Digite uma frase");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);
//SUBI NUM ÔNIBUS EM MIRROCOS

const nome = prompt("Qual o seu nome?");
const email= prompt("Qual o seu e-mail?");

let resultado = `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`;

console.log(resultado);

//2.

let frutasFavoritas = ["kiwi", "morango", "cajá", "tomate", "banana"];
console.log(frutasFavoritas);

console.log("Essas são minhas frutas favoritas:");
console.log(frutasFavoritas[0]);
console.log(frutasFavoritas[1]);
console.log(frutasFavoritas[2]);
console.log(frutasFavoritas[3]);
console.log(frutasFavoritas[4]);


let novaFruta = prompt("Qual a sua comida favorita");

frutasFavoritas[1] = novaFruta;

console.log(frutasFavoritas);

//3.

let listaDeTarefas = [];

let tarefa1 = prompt("Diga uma tarefa");
let tarefa2 = prompt("Diga mais uma tarefa");
let tarefa3 = prompt("Diga apenas mais uma tarefa");

listaDeTarefas.push(tarefa1);
listaDeTarefas.push(tarefa2);
listaDeTarefas.push(tarefa3);

console.log(listaDeTarefas);

let indice = prompt("Repita alguma de suas tarefas no formato de indice");

listaDeTarefas.splice(indice-1, indice);

console.log(listaDeTarefas);

//Desafio

//1.
let digiteAfrase = prompt("Digite uma frase");
let novaFrase = digiteAfrase.split(' ');

console.log(novaFrase);

//2
let frutass = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
let indicez = frutassahh.indexOf("Abacaxi");

console.log(`O indice é ${indicez}, e o tamanho é ${frutass.length}`);








