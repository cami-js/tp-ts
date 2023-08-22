function realizarOperacion(numero1, numero2, operacion) {
    switch (operacion) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            if (numero2 !== 0) {
                return numero1 / numero2;
            }
            else {
                throw new Error('No se puede dividir por cero');
            }
        default:
            throw new Error('Operación inválida');
    }
}
var numero1 = 4;
var numero2 = 6;
var operacion = '+';
try {
    var resultado = realizarOperacion(numero1, numero2, operacion);
    console.log('El resultado es:', resultado);
}
catch (error) {
    console.error('No se pudo realizar la operación');
}
