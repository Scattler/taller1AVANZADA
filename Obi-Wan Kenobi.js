 
 //Funcion flecha
 
 const clasificarNaves = (codigoAcceso) => {
  // Separamos el código de acceso de la palabra clave
  const [, piloto] = codigoAcceso.split(': ');

  // Devolvemos el nombre del piloto
  return piloto;
} 

const codigo1 = 'ARQ2555: Sara Bel-Sun';
const codigo2 = 'ARQ2556: Nodin Chavdri';
const codigo3 = 'ARQ2557: Finn';

console.log(clasificarNaves(codigo1)); // Muestra "Sara Bel-Sun"
console.log(clasificarNaves(codigo2)); // Muestra "Nodin Chavdri"
console.log(clasificarNaves(codigo3)); // Muestra "Finn"*/

//Funcion Tradicional

/*function clasificarNaves(codigoAcceso) {
    // Separamos el código de acceso de la palabra clave
    const posicion = codigoAcceso.split(': ');
    const piloto = posicion [1];
  
    // Devolvemos el nombre del piloto
    return piloto;
  }

  const codigo1 = 'ARQ2555: Sara Bel-Sun';
  const codigo2 = 'ARQ2556: Nodin Chavdri';
  const codigo3 = 'ARQ2557: Finn';
  
  console.log(clasificarNaves(codigo1)); // Muestra "Sara Bel-Sun"
  console.log(clasificarNaves(codigo2)); // Muestra "Nodin Chavdri"
  console.log(clasificarNaves(codigo3)); // Muestra "Finn"*/
