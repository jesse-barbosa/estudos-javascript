// HIGH ORDER FUNCTIONS

// * 1. Função que retorna uma função como parâmetro

function welcome (courseName, studentName){
  return (studentName) => {
    console.log(
      `Olá ${studentName}! Seja bem vindo(a) ao curso de ${courseName}.`
    )
  }
}
const displayWelcomeToFrontEndCourse = welcome("Front-end em React")

displayWelcomeToFrontEndCourse("Jessé Barbosa")

console.clear()

// * 2. Função que recebe uma função como parâmetro

const soma = (n1, n2) => n1 + n2
const subtrair = (n1, n2) => n1 - n2
const multiplicar = (n1, n2) => n1 * n2
const dividir = (n1, n2) => n1 / n2
// funcaoDaOperacao: função que realiza a operação entre os dois números
// Ou seja: Ela precisa ser uma função que receba dois números
const calcular = (n1, n2, funcaoDaOperacao) => funcaoDaOperacao(n1, n2) // Esta é uma função de alta ordem
// const calcular = (n1, n2, funcaoDaOperacao) => {
//   return funcaoDaOperacao(n1, n2)
// }
// ! calcular = (10, 5, somar) = somar(10, 5)
const retorno = (calcular(5, 2, multiplicar))

console.log(retorno)

// O cálculo que eu quero é: (n1 * n2) + (2 * n1 * n2)

const resultado = calcular(10, 5, (n1, n2) => n1 * n2 + 2 * n1 * n2)
console.log(resultado)
// const calculoPrimeiroMembro = calcular(3, 5, multiplicar)
// const calculoSegundoMembro = 2 * calcular(3, 5, multiplicar)
// const calculoSomandoMembros = calculoPrimeiroMembro + calculoSegundoMembro
// console.log(calculoSomandoMembros)