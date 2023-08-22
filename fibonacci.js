function fibonacci(n) {
    var secuencia = [];
    if (n >= 1) {
        secuencia.push(0);
    }
    if (n >= 2) {
        secuencia.push(1);
    }
    for (var i = 2; i < n; i++) {
        var siguienteNumero = secuencia[i - 1] + secuencia[i - 2];
        secuencia.push(siguienteNumero);
    }
    return secuencia;
}
function mostrarSecuenciaFibonacci(secuencia) {
    console.log("Secuencia de Fibonacci:");
    console.log(secuencia.join(", "));
}
var N = 15;
var secuenciaFibonacci = fibonacci(N);
mostrarSecuenciaFibonacci(secuenciaFibonacci);
