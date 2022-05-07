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

    let usuario = [];
    let computador = [];

    let carta = comprarCarta()
    let carta1 = comprarCarta()

    let cartasIguais = (
      carta.texto === "A♦️" && carta1.texto === "A♦️"|| 
      carta.texto === "A♦️" && carta1.texto === "A♥️"||
      carta.texto === "A♦️" && carta1.texto === "A♣️"||
      carta.texto === "A♦️" && carta1.texto === "A♠️"||
      carta.texto === "A♥️" && carta1.texto === "A♦️"|| 
      carta.texto === "A♥️" && carta1.texto === "A♥️"||
      carta.texto === "A♥️" && carta1.texto === "A♣️"||
      carta.texto === "A♥️" && carta1.texto === "A♠️"||
      carta.texto === "A♣️" && carta1.texto === "A♦️"|| 
      carta.texto === "A♣️" && carta1.texto === "A♥️"||
      carta.texto === "A♣️" && carta1.texto === "A♣️"||
      carta.texto === "A♣️" && carta1.texto === "A♠️"||
      carta.texto === "A♠️" && carta1.texto === "A♦️"|| 
      carta.texto === "A♠️" && carta1.texto === "A♥️"||
      carta.texto === "A♠️" && carta1.texto === "A♣️"||
      carta.texto === "A♠️" && carta1.texto === "A♠️"
    );

   if (confirm("Bem-vinde ao jogo BlackJack! Quer iniciar uma nova rodada?")){
        confirm(`Suas cartas são ${carta.texto} ${carta1.texto}`)

   } else {
      alert("O jogo acabou")
   }

       
    