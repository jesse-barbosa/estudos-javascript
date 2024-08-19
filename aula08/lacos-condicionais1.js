const prompt = require("readline-sync");

let saldo = Number(prompt.question("Qual eh o seu saldo?"));

while (saldo < 0) {
  saldo = Number(prompt.question("Saldo inválido! Qual eh o seu saldo?"));
}
console.log(saldo);

// Exemplo 2
const prompt = require("readline-sync");

let notaAluno = Number(prompt.question("Digite a nota do aluno: "));

let somaNotas = 0; // Acumulador
let contador = 0; // Acumulador (para contar a quantidade de notas digitadas)

while (notaAluno >= 0) {
  somaNotas += notaAluno; // incrementa o acumulador
  contador++; // pós-incremento
  notaAluno = Number(prompt.question("Digite a proxima nota do aluno: "));
}

console.log("Fim do Loop \n");
mediaNotas = somaNotas / contador;
console.log("Média das notas informadas:", mediaNotas, " \n");

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