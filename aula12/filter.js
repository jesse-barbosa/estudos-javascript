// FILTER

// map: Sempre retorna um Array do mesmo tamanho que o Array original
// Filter: Sempre retorna um array de tamanho igual ou inferior ao tamanho do array original
const numeros = [50, 34, 64, 21, 76, 30]

// const numeroPar = numeros.find((numero) => numero % 2 === 0) // Retorna apenas o primeiro que satisfaz a condição.
const numerosPares = numeros.filter((numero) => numero % 2 === 0) // Retorna apenas o primeiro que satisfaz a condição.

// console.log(numeroPar)
console.log(numerosPares)

// Exemplo 1
console.clear()

const alunos = [
    {nome: 'João', media: 96},
    {nome: 'Maria', media: 90},
    {nome: 'Pedro', media: 80},
    {nome: 'Ana', media: 95},
]

const alunosAcimaDaMedia = alunos.filter((aluno) => aluno.media >= 85)

console.log(alunosAcimaDaMedia)

// Exemplo 2
console.clear()

const produtos = [
    {nome: "Suco de laranja", preco: 7.50, tipo: 'Bebida'},
    {nome: "Pizza", preco: 19.90, tipo: 'Comida'},
    {nome: "Cachorro quente", preco: 5.00, tipo: 'Comida'},
    {nome: "Refrigerante", preco: 4.50, tipo: 'Bebida'},
    {nome: "Chocolate", preco: 1.50, tipo: 'Comida'},
]

const produtosFiltrados = produtos.filter((produto) => produto.preco < 10 && produto.tipo !== 'Bebida')

console.log(produtosFiltrados)