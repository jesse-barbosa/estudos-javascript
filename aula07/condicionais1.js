const prompt = require("readline-sync")

const idade = Number(prompt.question("Qual a sua idade?"))

// if (idade < 18){
//   console.log("Você é menor de iade!")
// }
// else {
//   console.log("Você é maior de idade")
// }

function verificarIdade(){
  if (idade < 18){
    console.log("Você é menor de iade!")
    return
  }
  console.log("Você é maior de idade!")
}

verificarIdade()