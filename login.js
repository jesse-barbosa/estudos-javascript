const prompt = require("readline-sync")

const name = prompt.question("Digite seu nome de usuário:")

const password = Number(prompt.question("Digite sua senha: "))


const verificarLogin = (name, password) => {
    if(name === "Jessé Barbosa" && password === 1234){
        console.log("Seja bem vindo ao sistema!")
        return
    } else if(name === "Jessé Barbosa" && password != 1234){
        console.log("Senha inválida")
        return
    }
    console.log("Usuário não cadastrado no sistema.")
}

verificarLogin(name, password)