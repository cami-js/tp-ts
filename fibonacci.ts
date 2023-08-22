function fibonacci(n: number): number[] {
    const secuencia: number[] = [];
  
    if (n >= 1) {
      secuencia.push(0);
    }
    if (n >= 2) {
      secuencia.push(1);
    }
  
    for (let i = 2; i < n; i++) {
      const siguienteNumero = secuencia[i - 1] + secuencia[i - 2];
      secuencia.push(siguienteNumero);
    }
  
    return secuencia;
  }
  
  function mostrarSecuenciaFibonacci(secuencia: number[]): void {
    console.log("Secuencia de Fibonacci:");
    console.log(secuencia.join(", "));
  }
  
  const N: number = 15;
  const secuenciaFibonacci: number[] = fibonacci(N);
  mostrarSecuenciaFibonacci(secuenciaFibonacci);
  