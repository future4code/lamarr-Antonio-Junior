//Exercícios de interpretação de código
//1.

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
// a. Vai ser impresso o resultado da multiplicação 2*5 e 10*5 (10, 50)
//b. Nada vai ser impresso, pois nada foi solicitado

//2.

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
/*a. Essa função recebe um texto e imprime o resultado maisculo e verifica se tem elementos iguais
com a função includes e retonna true ou false
São muitas a suas utilidades, a principal é a de interagir com o usuário imprimindo um
resultado de acordo com a respota que a pessoa deu. */

/*b.
i. true, pois com a função includes verificou se tem a palavra cenoura
indiferente de maiuscula ou minuscula. 
ii. true, pois com a função includes verificou se tem a palavra cenoura
indiferente de maiuscula ou minuscula. 
iii. true, pois com a função includes verificou se tem a palavra cenoura
indiferente de maiuscula ou minuscula. 
*/

//Exercícios de escrita de código
//1. 
//a.
 function imprimirInformacoes () {
    const exemplo = "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    console.log(exemplo.replace("Caio", "Jr"))
    console.log(exemplo.replace("23", "26"))
    console.log(exemplo.replace("São Paulo", "Ceará"))
    console.log(exemplo.replace("estudante", "Musico"))
    
    }
    
    imprimirInformacoes()

    
//b

function unificar () {
    const nome = "Jr"
    const idade = 26
    const cidade = "Iguatu"
    const profissão = "Encarregado de obras"
  
    console.log("Eu sou " + nome + ", tenho " + idade + ", anos moro em " + cidade + " e sou " + profissão)    
  }
  
  unificar()

  //2. a)

function somar () {
    let num1 = 32
    let num2 = 31
  
    let somar = num1 + num2
    
    console.log(somar)
  }
  
  somar ()

  //2.b)

  function maiorIgual () {
    let num1 = 32
    let num2 = 31
  
    let maiorIgual = num1 >= num2
    
    console.log(maiorIgual)
  }
  
  maiorIgual ()

  //2. c)

  function parOuNao () {
    let num1 = 32
    
  
    let parOuNao = num1  % 2 === 0 
    
    console.log(parOuNao)
  }
  
  parOuNao ()

  //2.d) 

  function tamanhoMaiuscula () {
    let num1 = "Eu amo a Labenu"
    
  
    let tamanhoMaiuscula = num1
    
    console.log("A frase em maiuscula fica assim: ", num1.toUpperCase())
    console.log("Seu tamanho é de", tamanhoMaiuscula.length, "letras")
  }
  
  tamanhoMaiuscula ()

  //3.


  let numero1 = Number(prompt("Insira um número"));
  let numero2 = Number(prompt("Insira mais um número"));
  console.log("Numeros inseridos: ", numero1, "e", numero2)
  
  
    
    function soma () {
  
      
       let soma = numero1 + numero2
       
       
      console.log("soma:", soma)
    } 
  
    soma()
  
    function subtracao () {
  
      
      let subtracao = numero1 - numero2
      
      
     console.log("Diferença:", subtracao)
  
   }
   
   subtracao()
  
   function multiplicacao () {
  
      
    let multiplicacao = numero1 * numero2
    
    
   console.log("Multiplicação:", multiplicacao)
  } 
  
  multiplicacao()
  
  
  
   function divisao () {
  
      
    let divisao = numero1 / numero2
    
    
   console.log("Divisão:", divisao)
  } 
  
  divisao()

  








