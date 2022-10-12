const operadores = process.argv[2]

const N1 = Number(process.argv[3])
const N2 = Number(process.argv[4])

const operacoes = (operadores, N1, N2) => {
    // if(operadores === "add") {
    //     return N1+N2
    // } else if (operadores === "sub") {
    //     return N1-N2
    // } else if (operadores === "mult") {
    //     return N1*N2
    // } else if(operadores === "div") {
    //     return N1/N2
    // } else {
    //     return "erro"
    // }
    switch(operadores) {
        case "add":
            return N1+N2;
                break;
        case "sub":
            return N1-N2
                break;
        case "mult":
            return N1*N2
                break;
        case "div":
            return N1/N2
                break;
    }
}

const resultado = operacoes(operadores, N1, N2)
console.log(resultado)