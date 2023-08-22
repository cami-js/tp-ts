function contarPalabras(oracion: string): number {
    const palabras = oracion.split(" ");
    return palabras.length;
  }
  
  const oracion = "Hello World"; 
  const cantidadPalabras: number = contarPalabras(oracion);
  
  console.log(`La oración tiene ${cantidadPalabras} ${cantidadPalabras === 1 ? "palabra" : "palabras"}.`);
  