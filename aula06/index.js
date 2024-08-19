// ! Sempre utilize o camel case no JavaScript!

// ! JavaScript possui tipagem dinâmica: interfere os tipos de dados

// ! JavaScript possui uma tipagem fraca

var nomeDoAluno = "Jessé Barbosa";
var idade = 15;
var altura = 1.66;
var estudando = true;

console.log(nomeDoAluno, typeof nomeDoAluno);

console.log(idade, typeof idade);

console.log(altura, typeof altura);

console.log(estudando, typeof estudando);

var curso = "Front end em React",
  topico = "JavaScript Básico 1";

  console.log(curso, topico)

// ! Não utilize var nos seus códigos JavaScript

let notaDoAluno = 10

const mediaDoAluno = 8
// ! mediaDoAluno = 9 Não é permitido!

notaDoAluno = 9

console.log(notaDoAluno)
console.log(mediaDoAluno)