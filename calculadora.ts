function realizarOperacion(numero1: number, numero2: number, operacion: string): number {
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
        } else {
          throw new Error('No se puede dividir por cero');
        }
      default:
        throw new Error('Operación inválida');
    }
  }
  
  const numero1 = 4;
  const numero2 = 6;
  const operacion = '+';
  
  try {
    const resultado = realizarOperacion(numero1, numero2, operacion);
    console.log('El resultado es:', resultado);
  } catch (error) {
    console.error('No se pudo realizar la operación');
  }
  