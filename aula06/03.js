const prompt = require('readline-sync')

const idade = prompt.question("Digite seu idade: ")
const idadeNumber = Number(idade)

console.log(idadeNumber, typeof idadeNumber)

// Coersão Explícita
console.log(Number("x")) // NaN: Not a Number

console.log(String(10), typeof String(10))

console.log(Boolean(2))

// Coerção Implícita