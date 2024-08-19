// * FUNÇÕES DE ALTA ORDEM DE ARRAYS

// 1. Array.prototype.forEach()

const numeros = [40, 34, 67, 89, 23, 10]

numeros.forEach((item, index, arrayCompleto) => {
  console.log(index,item,arrayCompleto)
})

// 2. Array.prototype.find(): útil para encontrar um elemento dentro do array

const encontrado = numeros.find((numero) => {
  return numero < 20 && numero > 10
})

console.log(encontrado)

// Array de objetos
const pessoas = [
  {
    nome: "Pessoa 1",
    idade: 27,
    altura: 1.77
  },
  {
    nome: "Pessoa 2",
    idade: 39,
    altura: 1.56
  },
  {
    nome: "Pessoa 3",
    idade: 46,
    altura: 1.82
  }
]
// Pessoa encontrada também pode ser um objeto, nesse caso
const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7) // Pessoa nesse caso é o objeto (elemento)
console.clear()
console.log(pessoaEncontrada.nome) // puxando o nome do objeto encontrado

// 3. Array.prototype.findIndex(): Muito parecido com o find(), porém retorna o índice do elemento encontrado.

const indicePessoaEncontrada = pessoas.findIndex(
  (pessoa) => pessoa.idade > 50 && pessoa.altura < 1.7
) // Pessoa nesse caso é o objeto (elemento)

console.clear()
console.log(indicePessoaEncontrada) // puxando o nome do objeto encontrado
