// Definição da função
function saudacao(nomeEstudante, curso="FrontEnd em React") {
    // Template string || template literals
    return `Olá, ${nomeEstudante}! Seja bem vindo(a) ao curso de ${curso}.`
}

const mensagemSaudacao = saudacao("Jessé barbosa", "Backend com NodeJS") // Chamada da função

console.log(mensagemSaudacao)

console.clear()

function somar(n1, n2) {
    return n1 + n2
}

const res = somar(2, 3)

console.log(res)
console.log(res / 10)

console.clear()

// --------------------------
// FUNÇÕES ANÔNIMAS

const dobroNumero = function (numero) {
    return numero * 2
}

const dobro = dobroNumero(2)
console.log(dobro)

// ARROW FUNCTIONS: Função Seta

const subtrair = (n1, n2) => {
    return n1 - n2
}
// É possivel omitir o return, caso o escopo da função possa ser composto apenas por uma linha (que executa o retorno do valor)
const multiplicar = (n1, n2) => n1 * n2

// Omitir os parênteses no parâmetro
const triplo = n => n * 3