function contarPalabras(oracion) {
    var palabras = oracion.split(" ");
    return palabras.length;
}
var oracion = "Hello World";
var cantidadPalabras = contarPalabras(oracion);
console.log("La oraci\u00F3n tiene ".concat(cantidadPalabras, " ").concat(cantidadPalabras === 1 ? "palabra" : "palabras", "."));
