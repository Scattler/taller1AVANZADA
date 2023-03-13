// Tipo flecha


//Calculamos la media de la temperatura
const calcularTemperaturaMedia = (tempMax, tempMin) => {
    const tempMedia = (tempMax + tempMin) / 2;
  

    return tempMedia + " °C";
  };
  // Ingresamos la temperatura maxima y minima para obtner el resultado del promedio de la temperatura
  const tempMax = 25;
  const tempMin = 10;
  
  console.log(calcularTemperaturaMedia(tempMax, tempMin )); 

//Tradicional

  /*function calcularTemperaturaMedia(tempMax, tempMin) {
    // Calculamos la temperatura media como la media aritmética de la temperatura máxima y mínima
    const tempMedia = (tempMax + tempMin) / 2;
  
    // Devolvemos la temperatura media
    return tempMedia;
  }
  
  // Ejemplo de uso
  const tempMax = 25;
  const tempMin = 10;
  
  console.log(calcularTemperaturaMedia(tempMax, tempMin)); // Muestra "17.5"*/