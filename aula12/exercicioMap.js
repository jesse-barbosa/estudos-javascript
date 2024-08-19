// Fazer um Array de objetos com pessoas, e em seguida, fazer um map adicionando o IMC de cada um.

const pessoas = [
    {
        nome: 'João',
        peso: 70,
        altura: 1.75
    },
    {
        nome: 'Maria',
        peso: 50,
        altura: 1.60
    },
    {
        nome: 'Pedro',
        peso: 80,
        altura: 1.90
    }
]

const pessoasComImc = pessoas.map((pessoa) => {
    return {
        ...pessoa,
        imc: pessoa.peso / (pessoa.altura ** 2)
    }
})

console.log('Pessoas:')
pessoas.forEach((pessoa) => console.log(`${pessoa.nome},`))

console.log('Imc de cada um:')
pessoasComImc.forEach((pessoa) => console.log(`${pessoa.imc}`))