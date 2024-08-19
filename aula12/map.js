// Map
// Ele cria um novo array que possui o mesmo tamanho do array original*
// Composto pelos elementos que foram retornados a cada iteração
const numeros = [50, 34, 64, 21, 76, 30]

const novoArray = numeros.map((elemento) => {
    return elemento * 2
})

console.log(novoArray)

// Exemplo 1: Elevando todos os números ao quadrado

console.clear()

const numerosAoQuadrado = numeros.map((elemento) => elemento ** 2)

console.log(numerosAoQuadrado)


// Exemplo 2: Adicionando uma propriedade aos objetos do array
console.clear()

const carrinho = [
    {
        produto: "Arroz",
        preco: 7.98,
        quantidade: 4
    },
    {
        produto: "Macarrão",
        preco: 4.98,
        quantidade: 3
    }
]

const carrinhoComPrecoTotal = carrinho.map((item) => {
    return {
        ...item,
        total: item.preco * item.quantidade
    }
})
console.log(carrinhoComPrecoTotal)


// const pessoa = {
//     nome: "Jessé",
//     idade: 15,
//     altura: 1.7
// }

// ! Desestruturação ou spread (operator)
// const pessoaComPeso = {
//     ...pessoa,
//     peso: 65
// }

// console.log(pessoaComPeso)