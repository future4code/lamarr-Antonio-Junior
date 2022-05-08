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
let usuarioCarta = comprarCarta();
let usuarioCarta1 = comprarCarta();
let usuarioCarta2 = comprarCarta();
let usuarioCarta3 = comprarCarta();
let primeiraSomaUsuario = usuarioCarta.valor + usuarioCarta1.valor;
let segundaSomaUsuario = primeiraSomaUsuario + usuarioCarta2.valor;
let terceiraSomaUsuario = segundaSomaUsuario + usuarioCarta3.valor;

let computadorCarta = comprarCarta();
let computadorCarta1 = comprarCarta();
let computadorCarta2 = comprarCarta();
let computadorCarta3 = comprarCarta();
let primeiraSomaComputador = computadorCarta.valor + computadorCarta1.valor;
let segundaSomaComputador = primeiraSomaComputador + computadorCarta2.valor;
let terceraSomaComputador = segundaSomaComputador  + computadorCarta3.valor;

let cartasIguaisUsuario = (
usuarioCarta === "A♦️" && usuarioCarta1 === "A♦️"|| 
usuarioCarta === "A♦️" && usuarioCarta1 === "A♥️"||
usuarioCarta === "A♦️" && usuarioCarta1 === "A♣️"||
usuarioCarta === "A♦️" && usuarioCarta1 === "A♠️"||
usuarioCarta === "A♥️" && usuarioCarta1 === "A♦️"|| 
usuarioCarta === "A♥️" && usuarioCarta1 === "A♥️"||
usuarioCarta === "A♥️" && usuarioCarta1 === "A♣️"||
usuarioCarta === "A♥️" && usuarioCarta1 === "A♠️"||
usuarioCarta === "A♣️" && usuarioCarta1 === "A♦️"|| 
usuarioCarta === "A♣️" && usuarioCarta1 === "A♥️"||
usuarioCarta === "A♣️" && usuarioCarta1 === "A♣️"||
usuarioCarta === "A♣️" && usuarioCarta1 === "A♠️"||
usuarioCarta === "A♠️" && usuarioCarta1 === "A♦️"|| 
usuarioCarta === "A♠️" && usuarioCarta1 === "A♥️"||
usuarioCarta === "A♠️" && usuarioCarta1 === "A♣️"||
usuarioCarta === "A♠️" && usuarioCarta1 === "A♠️"
) 

let cartasIguaisComputador = (
computadorCarta === "A♦️" && computadorCarta1 === "A♦️"|| 
computadorCarta === "A♦️" && computadorCarta1 === "A♥️"||
computadorCarta === "A♦️" && computadorCarta1 === "A♣️"||
computadorCarta === "A♦️" && computadorCarta1 === "A♠️"||
computadorCarta === "A♥️" && computadorCarta1 === "A♦️"|| 
computadorCarta === "A♥️" && computadorCarta1 === "A♥️"||
computadorCarta === "A♥️" && computadorCarta1 === "A♣️"||
computadorCarta === "A♥️" && computadorCarta1 === "A♠️"||
computadorCarta === "A♣️" && computadorCarta1 === "A♦️"|| 
computadorCarta === "A♣️" && computadorCarta1 === "A♥️"||
computadorCarta === "A♣️" && computadorCarta1 === "A♣️"||
computadorCarta === "A♣️" && computadorCarta1 === "A♠️"||
computadorCarta === "A♠️" && computadorCarta1 === "A♦️"|| 
computadorCarta === "A♠️" && computadorCarta1 === "A♥️"||
computadorCarta === "A♠️" && computadorCarta1 === "A♣️"||
computadorCarta === "A♠️" && computadorCarta1 === "A♠️"
)

   

   if(confirm("Bem-vinde ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?")) {
      
   function primeiroConfirme (){
      usuario.push(usuarioCarta);
      usuario.push(usuarioCarta1);
      computador.push(computadorCarta)
      computador.push(computadorCarta1)
      
   }

   primeiroConfirme()

   if(cartasIguaisUsuario || cartasIguaisComputador){
      alert("Você tirou dois ases (A) iguais, por favor inicie o jogo novamente")
      primeiroConfirme()
            } else {
      if(confirm(`Suas cartas são ${usuarioCarta.texto} ${usuarioCarta1.texto}. A carta revelada do computador é ${computadorCarta.texto}
Deseja comprar mais uma carta?`)){
         usuario.push(usuarioCarta2);
         usuarioCarta2
        
       if(segundaSomaUsuario>21){
     alert(`Usuario - cartas ${usuarioCarta.texto}${usuarioCarta1.texto}${usuarioCarta2.texto} - Pontuação ${segundaSomaUsuario} 
      Computador - Cartas ${computadorCarta.texto}${computadorCarta1.texto}- Pontuação ${primeiraSomaComputador}
      O computador ganhou!`)
              }else{
       if(confirm(`Suas cartas são ${usuarioCarta.texto} ${usuarioCarta1.texto} ${usuarioCarta2.texto}. A carta revelada do computador é ${computadorCarta.texto}
Deseja comprar mais uma carta?`)){
         usuario.push(usuarioCarta3);
         usuarioCarta3;

       if(terceiraSomaUsuario>21){
       alert(`Usuario - cartas ${usuarioCarta.texto}${usuarioCarta1.texto}${usuarioCarta2.texto}${usuarioCarta3.texto} - Pontuação ${terceiraSomaUsuario}
 Computador - Cartas ${computadorCarta.texto}${computadorCarta1.texto}- Pontuação ${primeiraSomaComputador}
 O computador ganhou!`)
               } else {
        if(confirm(`Suas cartas são ${usuarioCarta.texto} ${usuarioCarta1.texto} ${usuarioCarta2.texto}${usuarioCarta3.texto}. 
As cartas revelada do computador são ${computadorCarta.texto} ${computadorCarta1.texto}
Deseja comprar mais uma carta?`)){
               
               } else {
         computador.push(computadorCarta2);
         computadorCarta2;

         if(segundaSomaComputador > 21){
       alert(`Usuario - cartas ${usuarioCarta.texto}${usuarioCarta1.texto}${usuarioCarta2.texto}${usuarioCarta3.texto} - Pontuação ${terceiraSomaUsuario}
 Computador - Cartas ${computadorCarta.texto}${computadorCarta1.texto}${computadorCarta2.texto}- Pontuação ${segundaSomaComputador}
 O Usuário ganhou!`);

         } else if (segundaSomaComputador > terceiraSomaUsuario) {
       alert(`Usuario - cartas ${usuarioCarta.texto}${usuarioCarta1.texto}${usuarioCarta2.texto}${usuarioCarta3.texto} - Pontuação ${terceiraSomaUsuario}
  Computador - Cartas ${computadorCarta.texto}${computadorCarta1.texto}${computadorCarta2.texto}- Pontuação ${segundaSomaComputador}
  O computador ganhou`);
         } else if (segundaSomaComputador = terceiraSomaUsuario){
       alert(`Usuario - cartas ${usuarioCarta.texto}${usuarioCarta1.texto}${usuarioCarta2.texto}${usuarioCarta3.texto} - Pontuação ${terceiraSomaUsuario}
  Computador - Cartas ${computadorCarta.texto}${computadorCarta1.texto}${computadorCarta2.texto}- Pontuação ${segundaSomaComputador}
  Empate`)
         } else if (segundaSomaComputador < terceiraSomaUsuario){
                    computador.push(computadoroCarta3);
                    computadoroCarta3;
         if(terceraSomaComputador > 21) {
      alert(`Usuario - cartas ${usuarioCarta.texto}${usuarioCarta1.texto}${usuarioCarta2.texto}${usuarioCarta3.texto} - Pontuação ${terceiraSomaUsuario}
  Computador - Cartas ${computadorCarta.texto}${computadorCarta1.texto}${computadorCarta2.texto}${computadorCarta3.texto}- Pontuação ${terceiraSomaComputador}
  O Usuário ganhou!`);
          } else if (terceraSomaComputador > terceiraSomaUsuario){
      alert(`Usuario - cartas ${usuarioCarta.texto}${usuarioCarta1.texto}${usuarioCarta2.texto}${usuarioCarta3.texto} - Pontuação ${terceiraSomaUsuario}
  Computador - Cartas ${computadorCarta.texto}${computadorCarta1.texto}${computadorCarta2.texto}${computadorCarta3.texto}- Pontuação ${terceiraSomaComputador}
  O Computador ganhou`);
         } else if (terceraSomaComputador = terceiraSomaUsuario) {
      alert(`Usuario - cartas ${usuarioCarta.texto}${usuarioCarta1.texto}${usuarioCarta2.texto}${usuarioCarta3.texto} - Pontuação ${terceiraSomaUsuario}
  Computador - Cartas ${computadorCarta.texto}${computadorCarta1.texto}${computadorCarta2.texto}${computadorCarta3.texto}- Pontuação ${terceiraSomaComputador}
  Empate!`);
                    }
                  }

               }
            
         } 
              } else {
         computador.push(computadorCarta2);
         computadorCarta2;
         if(segundaSomaComputador > 21) {
      alert(`Usuario - cartas ${usuarioCarta.texto}${usuarioCarta1.texto}${usuarioCarta2.texto}- Pontuação ${segundaSomaUsuario}
   Computador - Cartas ${computadorCarta.texto}${computadorCarta1.texto}${computadorCarta2.texto}- Pontuação ${segundaSomaComputador}
   O Usuário ganhou!`)
         } else if (segundaSomaComputador > terceiraSomaUsuario) {
      alert(`Usuario - cartas ${usuarioCarta.texto}${usuarioCarta1.texto}${usuarioCarta2.texto}- Pontuação ${segundaSomaUsuario}
   Computador - Cartas ${computadorCarta.texto}${computadorCarta1.texto}${computadorCarta2.texto}- Pontuação ${segundaSomaComputador}
   O Computador ganhou!`)
         }  else if (segundaSomaComputador = terceiraSomaUsuario) {
      alert(`Usuario - cartas ${usuarioCarta.texto}${usuarioCarta1.texto}${usuarioCarta2.texto}- Pontuação ${segundaSomaUsuario}
   Computador - Cartas ${computadorCarta.texto}${computadorCarta1.texto}${computadorCarta2.texto}- Pontuação ${segundaSomaComputador}
   Empate!`)
         } else if (segundaSomaComputador < terceiraSomaUsuario){
         computador.push(computadoroCarta3);
         computadoroCarta3;
         if (terceraSomaComputador > 21) {
      alert(`Usuario - cartas ${usuarioCarta.texto}${usuarioCarta1.texto}${usuarioCarta2.texto}- Pontuação ${segundaSomaUsuario}
   Computador - Cartas ${computadorCarta.texto}${computadorCarta1.texto}${computadorCarta2.texto}${computadorCarta3.texto}- Pontuação ${terceiraSomaComputador}
   O Usuário ganhou!`)
         } else if (terceiraSomaComputador > terceiraSomaUsuario) {
      alert(`Usuario - cartas ${usuarioCarta.texto}${usuarioCarta1.texto}${usuarioCarta2.texto}- Pontuação ${segundaSomaUsuario}
   Computador - Cartas ${computadorCarta.texto}${computadorCarta1.texto}${computadorCarta2.texto}${computadorCarta3.texto}- Pontuação ${terceiraSomaComputador}
   O Computador ganhou!`)
         } else if (terceiraSomaComputador > terceiraSomaUsuario) {
      alert(`Usuario - cartas ${usuarioCarta.texto}${usuarioCarta1.texto}${usuarioCarta2.texto}- Pontuação ${segundaSomaUsuario}
   Computador - Cartas ${computadorCarta.texto}${computadorCarta1.texto}${computadorCarta2.texto}${computadorCarta3.texto}- Pontuação ${terceiraSomaComputador}
   Empate!`)
         }
         }
      }
      } 
           } else {
      computador.push(computadorCarta2);
      computadorCarta2;
      if (segundaSomaComputador > 21){
      alert (`Suas cartas são ${usuarioCarta.texto} ${usuarioCarta1.texto}. Sua pontuação é ${primeiraSomaUsuario}
   As cartas do computador são ${computadorCarta.texto} ${computadorCarta1.texto} ${computadorCarta2.texto}. A pontuação do computador é ${segundaSomaComputador}.
   O Usuário ganhou!`)
      } else if (segundaSomaComputador > primeiraSomaUsuario){
      alert (`Suas cartas são ${usuarioCarta.texto} ${usuarioCarta1.texto}. Sua pontuação é ${primeiraSomaUsuario}.  As cartas do computador são ${computadorCarta.texto} ${computadorCarta1.texto} ${computadorCarta2.texto}. 
    A pontuação do computador é ${segundaSomaComputador}.
    O Computador ganhou!`)
      } else if (segundaSomaComputador = primeiraSomaUsuario) {
      alert (`Suas cartas são ${usuarioCarta.texto} ${usuarioCarta1.texto}. Sua pontuação é ${primeiraSomaUsuario}
   As cartas do computador são ${computadorCarta.texto} ${computadorCarta1.texto} ${computadorCarta2.texto}. A pontuação do computador é ${segundaSomaComputador}.
   Empate!`)
      } else if (segundaSomaComputador < primeiraSomaUsuario) {
      computador.push(computadoroCarta3);
      computadoroCarta3;
      if (terceraSomaComputador > 21){
      alert (`Suas cartas são ${usuarioCarta.texto} ${usuarioCarta1.texto}. Sua pontuação é ${primeiraSomaUsuario}
   As cartas do computador são ${computadorCarta.texto} ${computadorCarta1.texto} ${computadorCarta2.texto}${computadorCarta3.texto}. A pontuação do computador é ${terceiraSomaComputador}.
   O Usuário ganhou!`)
      } else if (terceiraSomaComputador > primeiraSomaUsuario){
      alert (`Suas cartas são ${usuarioCarta.texto} ${usuarioCarta1.texto}. Sua pontuação é ${primeiraSomaUsuario}
    As cartas do computador são ${computadorCarta.texto} ${computadorCarta1.texto} ${computadorCarta2.texto}${computadorCarta3.texto}. A pontuação do computador é ${terceiraSomaComputador}.
    O Computador ganhou!`)
      } else if (terceiraSomaComputador = primeiraSomaUsuario){
      alert (`Suas cartas são ${usuarioCarta.texto} ${usuarioCarta1.texto}. Sua pontuação é ${primeiraSomaUsuario}
    As cartas do computador são ${computadorCarta.texto} ${computadorCarta1.texto} ${computadorCarta2.texto}${computadorCarta3.texto}. A pontuação do computador é ${terceiraSomaComputador}.
    Empate!`)
      }
      }
   }
 } 

} else {
   alert("O jogo acabou.")
}





      

   


       