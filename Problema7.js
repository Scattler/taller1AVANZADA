//Flecha

/*const encontrarMasCercanoACero = () => {
    let numeros = [];
    
    // Obtener 50 números enteros aleatorios
    for (let i = 0; i < 50; i++) {
      numeros.push(Math.floor(Math.random() * 201) - 100); // Generar número aleatorio entre -100 y 100
    }
    
    // Encontrar número más cercano a cero
    let masCercano = numeros[0];
    numeros.forEach(num => {
      if (Math.abs(num) < Math.abs(masCercano)) {
        masCercano = num;
      }
    });
    
    // Imprimir resultado
    console.log(`El número más cercano a cero es ${Math.abs(masCercano)}.`);
  };
  
  
  encontrarMasCercanoACero();*/


//Tradicional

  function encontrarMasCercanoACero() {
    let numeros = [];
    
    // Obtener 50 números enteros aleatorios
    for (let i = 0; i < 50; i++) {
      numeros.push(Math.floor(Math.random() * 201) - 100); // Generar número aleatorio entre -100 y 100
    }
    
    // Encontrar número más cercano a cero
    let masCercano = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (Math.abs(numeros[i]) < Math.abs(masCercano)) {
        masCercano = numeros[i];
      }
    }
    /*Se declara una variable llamada masCercano que se inicializa con el primer número del arreglo numeros. 
    Se ejecuta otro ciclo for que se repetirá tantas veces como elementos tenga el arreglo numeros. 
    En cada iteración, si el valor absoluto del elemento en la posición actual del arreglo es menor que el valor absoluto de masCercano, 
    se actualiza el valor de masCercano.*/
    
    // Imprimir resultado
    console.log("El número más cercano a cero es " + Math.abs(masCercano) + ".");
  }
  
  
  encontrarMasCercanoACero();