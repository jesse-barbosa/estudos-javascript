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