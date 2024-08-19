// REDUCE

const numeros = [1, 2, 3, 4, 5]

const media = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
    return elemento /arrayCompleto.length + acumulador
}, 0)

console.log(media)

// Exemplo 1
console.clear()

const somaPares = numeros.reduce((acumulador, numero) => {
    // se o número for par
    if (numero % 2 === 0){
        return numero + acumulador
    } else {
        return acumulador
    }
}, 0)

console.log(somaPares)

// Exemplo 3
console.clear()
// Total a pagar do carrinho

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

const totalPagar = carrinho.reduce((acumulador, item) => {
    return (item.preco * item.quantidade) + acumulador
}, 0)

console.log(totalPagar)