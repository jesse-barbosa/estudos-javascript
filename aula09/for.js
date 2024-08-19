const prompt = require('readline-sync')
let i

// Expressão 1 = inicialização da variável de controle
// Expressão 2 = condição de permanência do for
// Expressão 1 = incremento da variável de controle

//for(expressão 1;expressão 2 ; expressão 3){
//  O escopo do for
//}

for (i = 0 ; i < 5 ; i+= 2){
    console.log(i)
}

// Limpando o console
console.clear();

// Exemplo

// let maiorNumero = 0;
// let numeroInformado;
// for(let i = 0 ; i <= 5 ; i++){
//     numeroInformado = Number(prompt.question("Informe um número positivo: "))
//     if(numeroInformado > maiorNumero){
//         maiorNumero = numeroInformado
//     }
// }
// console.log("O maior número digitado foi: ", maiorNumero)

console.clear()

// Exemplo

const nome = "Jessé"

for(let i = 0 ; i < nome.length ; i++){
    if(i === 2){
        continue
    }
    console.log(nome[i])
}

// * Arrays

const nota1 = 10
const nota2 = 8
const nota3 = 5

const notas = [10, 8, 5]
const pessoa = ["Jessé", 15, 1.69, true]

console.log(notas)
console.log(pessoa)
console.log(pessoa[1])
pessoa[3] = false

console.log(pessoa)

console.clear()

console.log(pessoa.length)
console.log(notas.length)

console.clear()

// Fatiamento de arrays

const numeros = [40,34,67,89,23,10,40]

console.log(numeros.slice(0,2))
console.log(numeros.slice(2))

console.clear()

// Adicionando elementos no final do array
numeros.push(0)
console.log(numeros)

console.clear()

// Adicionando elementos no início do array
numeros.unshift(-1)
console.log(numeros)

// pop: remover o elemento que está no final do array
console.clear()
numeros.pop() // Remove o elemento 0 (do final)
console.log(numeros)

// shift: remover o primeiro elemento do array
console.clear()
numeros.shift()
console.log(numeros)

// Será que o elemento 20 existe no array numeros?
console.clear()
let numeroProcurado = 10
let estaNoArray = numeros.includes(numeroProcurado)

if (estaNoArray === true){
    console.log(`O elemento ${numeroProcurado} está no array.`)
} else {
    console.log(`O elemento ${numeroProcurado} não está no array`)
}

console.clear()
// * IndexOf
const indiceDoNumeroProcurado = numeros.indexOf(numeroProcurado)

console.log(indiceDoNumeroProcurado)

if(indiceDoNumeroProcurado === -1){
    console.log(`O elemento ${numeroProcurado} não está no array`)
}

console.clear()
// * Last IndexOf
// [10, 3, 6, 10, 4]
const indiceDoNumero40 = numeros.lastIndexOf(40) // Procura o último elemento com aquele valor

console.log(indiceDoNumero40)

console.clear()


// Percorrendo arrays com o for

const arr = [45,36,90,76,32,7]

for(let i = 0 ; i < arr.length ; i++){
    console.log(i, arr[i])
}

console.clear()

// * For of
for(const elemento of arr){
    console.log(elemento)
}
console.clear()
// * For in
for(const indice in arr){
    console.log(indice, typeof indice)
    console.log(arr[indice])
}