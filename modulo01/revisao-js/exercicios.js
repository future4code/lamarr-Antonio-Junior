// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse(array)
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function(a, b){return a - b})
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const par = x => x % 2 === 0
  const pares = array.filter(par)
  return pares
    
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const par = x => x % 2 === 0
  const paresAoQuadrado = array.filter(par).map(function(item){
    return Math.pow(item, 2)
  })
  return paresAoQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  var maior = Math.max(...array);
  return maior
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
 
  const maiorNumero = Math.max(num1, num2);
  const menorNumero = Math.min(num1, num2);
  const diferenca = maiorNumero - menorNumero
  for (let i = menorNumero; i <= maiorNumero; i++) {
      if (i % menorNumero === 0) {
          maiorDivisivelPorMenor = true;
      } else {
          maiorDivisivelPorMenor = false;

      }
  }
  return {maiorNumero, maiorDivisivelPorMenor, diferenca};

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let retornaNPrimeirosPares = [];
    for (let i = 0; i < n; i++){
     retornaNPrimeirosPares.push(i*2)
   }
   return retornaNPrimeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
    return "Equilátero"

  } else if (ladoA === ladoB  || ladoA === ladoC || ladoB === ladoC ) {
    return "Isósceles"

  } else {
    return "Escaleno"

  }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    for (let j = 0; j < array.length - 1; j++) {
        for (let i = 0; i < array.length -1; i++) {
            if (array[i] > array [i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]]
            }
        }
    
        
}

return [array[array.length-2], array[1]]

 }



// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  filmes = {   
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }

   return(`Venha assistir ao filme ${filmes.nome}, de 2006, dirigido por ${filmes.diretor} e estrelado por ${filmes.atores[0]}, ${filmes.atores[1]}, ${filmes.atores[2]}, ${filmes.atores[3]}.`)

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  // pessoa = {
  //   nome: "Astrodev",
  //   idade: 25,
  //   email: "astrodev@labenu.com.br",
  //   endereco: "Rua do Futuro, 4"
  // }

  // const pessoas2 = Object.assign({}, pessoa);
  // pessoas2.nome = "ANÔNIMO"
  // return pessoas2


  const esconderNome = {
    ...pessoa,
    nome: "ANÔNIMO"
}
return esconderNome  
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  
  
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}