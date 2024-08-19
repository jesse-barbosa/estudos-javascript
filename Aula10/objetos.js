// Object Literal

const pessoa = {
    nome: 'Jessé',
    idade: 15,
    altura: 1.77,
    mensagem: () => {
        console.log("Olá")
    }
}

console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa['idade'])

pessoa.hobbies = ["Programar", "Jogar"]

pessoa.nome = "Jessé Barbosa"

console.log(pessoa)

delete pessoa.altura

console.log(pessoa)

console.clear()

pessoa.mensagem()

console.clear()

const idade = 15
const altura = 1.70

const objeto = {
    idade,
    altura,
}

console.log(objeto)

console.clear()

// Constante nome recebe o valor do elemento nome do objeto pessoa
// const nome = pessoa.nome

const { nome, hobbies } = pessoa

console.log(nome)
console.log(hobbies)
console.log(pessoa)
