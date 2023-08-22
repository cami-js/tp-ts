function celsiusAFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
  }
  
  const temperaturaCelsius: number = 30;
  
  const temperaturaFahrenheitConvertida: number = celsiusAFahrenheit(temperaturaCelsius);
  console.log(`${temperaturaCelsius} °C equivale a ${temperaturaFahrenheitConvertida} °F`);
  