//Exercícios de interpretação de código
//1.

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// Pede um número para o usuário, mas como recebe como string já transforma ele em número.
// Logo depois usa as condicionais e divide o numero por dois, caso o numero tenha resto 0
// ele imprime que passou no teste (Verifica se o número é par), se não tiver resto igual a 0
// ele imprime "Não passou no teste"

//b) Números pares

//c) Números impares 

//2.

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//a) O codigo acima serve para retornar um valor de acordo com a fruta inserida pelo usuário

//b) O preço da maça é R$2.25

//c)Seria impresso a linhas de baixo também, no caso, 5, pois a opção "break" faz com que quando a condicão é 
// concluida ele para a verificação

//3.

const numero1 = Number(prompt("Digite o primeiro número."))

if(numero1 > 0) {
  console.log("Esse número passou no teste")}
	let mensagem = "Essa mensagem é secreta!!!"


console.log(mensagem)

//a)A primeira linha pede ao usuário que insira um número

//b) Se for 10, vai imprimir "Esse número passou no teste" e se for -10 "Essa mensagem é secreta"

//c) Sim, tem um erro! O colchete i if estava pegando tudo, até o console e está faltando o else.

//1.

let idadeUsuario = Number(prompt("Pode nos informar qual a sua idade?"))

   if (idadeUsuario >= 18) {
       console.log("Você pode dirigir")
   } else {
       console.log("Você não pode dirigir.")
   }

   //2

   let turno = prompt("Qual o turno você estuda? Responda com M (matutino) ou V (Vespertino) ou N (Noturno).");

      if (turno === "M"){
          console.log("Bom Dia!")
      } else if (turno === "V") {
          console.log("Boa Tarde!")
      } else if (turno === "N") {
        console.log("Boa Noite!")
      } else {
          console.log("Por favor, responda com M, V ou N")
      }

      //3

      let verificaTurno
      verificaTurno = prompt("Qual o turno você estuda? Responda com M (matutino) ou V (Vespertino) ou N (Noturno).");
      

      switch(verificaTurno) {
            case "M":
            console.log("Bom Dia!");
            break;
           case "V":
             console.log("Boa Tarde!");
             break
           case "N": 
             console.log("Boa Noite!");
               break;
             default:
             console.log("Por favor, responda com M, V ou N")

      }

      //4

      let filme = prompt("Qual filme irão assistir?")
      let ingresso = prompt("Qual o valor do ingresso?")

         if (filme === "fantasia" && ingresso === "15") {
           console.log("Bom filme!")
       } else {
           console.log("Escolha outro filme :(")
       }
     

     //DESAFIOS

     //1.

     
      let filme1 = prompt("Qual filme irão assistir?")
      let ingresso1 = prompt("Qual o valor do ingresso?")
      let lanche = prompt("Qual lanche você quer comprar?")

       if (filme1 === "fantasia" && ingresso1 === "15" && lanche === lanche) {
         console.log("Bom filme!")
         console.log(`Aproveite o seus ${lanche}`)
       } else {
         console.log("Escolha outro filme :(")
     }


     //2.

     let nomeCompleto = prompt("Por favor, insira seu nome completo");
     let tipoDeJogo = prompt("Insira o tipo de jogo! IN ou DO")
     let etapaDoJogo = prompt("Insira a etapa do jogo! SF, DT ou FI");
     let categoria = prompt("Insira a categoria! 1, 2, 3 ou 4");
     let qtnIngressos = prompt("Insira a quantidade de ingressos");
     
     console.log("Nome do cliente", nomeCompleto);
     console.log("Tipo de jogo:", tipoDeJogo);
     console.log("Etapa do jogo", etapaDoJogo);
     console.log("Categoria:", categoria);
     console.log("Quantidade de Ingressos:", qtnIngressos);
     console.log("---Valores--- ")
     
     
     if (tipoDeJogo === "DO" && categoria === "1" && etapaDoJogo === "SF" ) {
     console.log("Valor do Ingresso R$1320,00")
     console.log("Valor total:", "R$",qtnIngressos * 1320);
     } else if (tipoDeJogo === "DO" && categoria === "2" && etapaDoJogo ==="SF") {
     console.log("Valor do Ingresso R$880,00")
     console.log("Valor total:", qtnIngressos * 880);
     } else if (tipoDeJogo === "DO" && categoria === "3" && etapaDoJogo ==="SF") {
       console.log("Valor do Ingresso R$550,00")
       console.log("Valor total:", qtnIngressos * 550);
     } else if (tipoDeJogo === "DO" && categoria === "4" && etapaDoJogo ==="SF") {
       console.log("Valor do Ingresso R$220,00")
       console.log("Valor total:", qtnIngressos * 220);
     } else if (tipoDeJogo === "DO" && categoria === "1" && etapaDoJogo ==="DT") {
       console.log("Valor do Ingresso R$660,00")
       console.log("Valor total:", qtnIngressos * 660);
     } else if (tipoDeJogo === "DO" && categoria === "2" && etapaDoJogo ==="DT") {
       console.log("Valor do Ingresso R$440,00")
       console.log("Valor total:", qtnIngressos * 440);
     } else if (tipoDeJogo === "DO" && categoria === "3" && etapaDoJogo ==="DT") {
       console.log("Valor do Ingresso R$330,00")
       console.log("Valor total:", qtnIngressos * 330);
     } else if (tipoDeJogo === "DO" && categoria === "4" && etapaDoJogo ==="DT") {
       console.log("Valor do Ingresso R$170,00")
       console.log("Valor total:", qtnIngressos * 170);
     } else if (tipoDeJogo === "DO" && categoria === "1" && etapaDoJogo ==="FI") {
       console.log("Valor do Ingresso R$1980,00")
       console.log("Valor total:", qtnIngressos * 1980);
     } else if (tipoDeJogo === "DO" && categoria === "2" && etapaDoJogo ==="FI") {
       console.log("Valor do Ingresso R$1320,00")
       console.log("Valor total:", qtnIngressos * 1320);
     } else if (tipoDeJogo === "DO" && categoria === "3" && etapaDoJogo ==="FI") {
       console.log("Valor do Ingresso R$880,00")
       console.log("Valor total:", qtnIngressos * 880);
     } else if (tipoDeJogo === "DO" && categoria === "4" && etapaDoJogo ==="FI") {
       console.log("Valor do Ingresso R$330,00")
       console.log("Valor total:", qtnIngressos * 330);
     } else if (tipoDeJogo === "IN" && categoria === "1" && etapaDoJogo === "SF" ) {
      console.log("Valor do Ingresso R$1320,00")
      console.log("Valor total:", qtnIngressos * 1320 * 4.10);
     } else if (tipoDeJogo === "IN" && categoria === "2" && etapaDoJogo ==="SF") {
       console.log("Valor do Ingresso R$880,00")
       console.log("Valor total:", qtnIngressos * 880 * 4.10);
     } else if (tipoDeJogo === "IN" && categoria === "3" && etapaDoJogo ==="SF") {
       console.log("Valor do Ingresso R$550,00")
       console.log("Valor total:", qtnIngressos * 550 * 4.10);
     } else if (tipoDeJogo === "IN" && categoria === "4" && etapaDoJogo ==="SF") {
       console.log("Valor do Ingresso R$220,00")
       console.log("Valor total:", qtnIngressos * 220 * 4.10);
     } else if (tipoDeJogo === "IN" && categoria === "1" && etapaDoJogo ==="DT") {
       console.log("Valor do Ingresso R$660,00")
       console.log("Valor total:", qtnIngressos * 660 * 4.10);
     } else if (tipoDeJogo === "IN" && categoria === "2" && etapaDoJogo ==="DT") {
       console.log("Valor do Ingresso R$440,00")
       console.log("Valor total:", qtnIngressos * 440 * 4.10);
     } else if (tipoDeJogo === "IN" && categoria === "3" && etapaDoJogo ==="DT") {
       console.log("Valor do Ingresso R$330,00")
       console.log("Valor total:", qtnIngressos * 330 * 4.10);
     } else if (tipoDeJogo === "IN" && categoria === "4" && etapaDoJogo ==="DT") {
       console.log("Valor do Ingresso R$170,00")
       console.log("Valor total:", qtnIngressos * 170 * 4.10);
     } else if (tipoDeJogo === "IN" && categoria === "1" && etapaDoJogo ==="FI") {
       console.log("Valor do Ingresso R$1980,00")
       console.log("Valor total:", qtnIngressos * 1980 * 4.10);
     } else if (tipoDeJogo === "IN" && categoria === "2" && etapaDoJogo ==="FI") {
       console.log("Valor do Ingresso R$1320,00")
       console.log("Valor total:", qtnIngressos * 1320 * 4.10);
     } else if (tipoDeJogo === "IN" && categoria === "3" && etapaDoJogo ==="FI") {
       console.log("Valor do Ingresso R$880,00")
       console.log("Valor total:", qtnIngressos * 880 * 4.10);
     } else if (tipoDeJogo === "IN" && categoria === "4" && etapaDoJogo ==="FI") {
       console.log("Valor do Ingresso R$330,00")
       console.log("Valor total:", qtnIngressos * 330 * 4.10);
     }

      





    

     
     




