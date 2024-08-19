// Array.prototype.every(): Verificar se todos os elementos de um array seguem uma determinada condição retornada pela função
const pessoas = [
    {
        nome: 'João',
        idade: 30,
        altura: 1.77
    },
    {
        nome: 'Maria',
        idade: 25,
        altura: 1.60
    },
    {
        nome: 'Pedro',
        idade: 40,
        altura: 1.80
    }
]
const numeros = [50, 34, 64, 21, 76, 30]

const todosPositivos = numeros.every((numero) => numero > 0)
console.log(todosPositivos)

const todosMaioresDeIdade = pessoas.every((pessoa) => pessoa.idade >= 18)
console.log(todosMaioresDeIdade)

const todosAdultosAltos = pessoas.every((pessoa) => pessoa.idade >= 18 && pessoa.altura > 1.7)
console.log(todosAdultosAltos)


// Array.prototype.some: Verificar se algum elemento de um array torna verdadeira uma determinada condição retornada pela função

console.clear()

const numeros2 = [-1, 3, 7, -3, 5]

const retorno = numeros2.some((numero) => numero > 0)

console.log(retorno)
