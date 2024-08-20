// Exemplo 3
const prompt = require("readline-sync");

// Math.random() => gera um número entre 0 e 1
const randomNumber = parseInt(Math.random() * 10);

let NumeroDoUsuario = Number(
  prompt.question("Digite um numero entre 0 e 10: ")
);

let tentativas = 0;
while (NumeroDoUsuario !== randomNumber){
  tentativas++
  console.log("Você errou o número! Tente novamente...");
  NumeroDoUsuario = Number(
    prompt.question("Digite um numero entre 0 e 10: ")
  );
}

console.log("Vc acertou o número! O número era",randomNumber,"\n");
console.log("Numero de tentativas:",tentativas);