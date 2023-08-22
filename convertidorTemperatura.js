function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
var temperaturaCelsius = 30;
var temperaturaFahrenheitConvertida = celsiusAFahrenheit(temperaturaCelsius);
console.log("".concat(temperaturaCelsius, " \u00B0C equivale a ").concat(temperaturaFahrenheitConvertida, " \u00B0F"));
