/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


    carta1 = comprarCarta()
    carta2 = comprarCarta()
    somaDasCartas1 = carta1.valor + carta2.valor

    carta3 = comprarCarta()
    carta4 = comprarCarta()
    somaDasCartas2 = carta3.valor + carta4.valor


    if(confirm("Quer iniciar uma nova rodada?")) {
      console.log("Bem-vindo(a) ao jogo de Blackjack")
      console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - ${somaDasCartas1}`);
      console.log(`Computador - cartas: ${carta2.texto} ${carta3.texto} - ${somaDasCartas2}`)

      if(somaDasCartas1 > somaDasCartas2){
         console.log("O usuário ganhou!")
      } else if (somaDasCartas1 < somaDasCartas2){
         console.log("O computador ganhou!")
      } else if (somaDasCartas1 === somaDasCartas2) {
         console.log("Empate")
      }

   } else {
      alert("O jogo acabou!")
   }
   

   


































 


       

  

   
       