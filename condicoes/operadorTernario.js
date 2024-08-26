function verificarNumero (numero) {
        const mensagem = numero >= 0 ? "O número é positivo" : "O número é negativo"
        return mensagem
}
let numero = -5
console.log(verificarNumero(numero))