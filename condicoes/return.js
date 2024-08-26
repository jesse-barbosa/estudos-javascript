function verificarNumero (numero) {
    if(numero >= 0){
        return "O número é positivo"
    }
    return "O número é negativo"
}
let numero = -5
console.log(verificarNumero(numero))