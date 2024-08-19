const prompt = require('readline-sync')

const nome = prompt.question("Digite seu nome: ")

let contador = 0

while(true){
  contador++
  console.log("Seja bem vindo ao vírus, ", nome, "🤡")
}