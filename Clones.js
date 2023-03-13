//Flecha

/*const obtenerEdadMayor = () => {
  const edades = [];
  const codigos = [];
  const edadFrecuente = {edad: null, repeticiones: 0};

  // Generar 20 edades y códigos aleatorios
  for(let i = 0; i < 20; i++) {
    edades.push(Math.floor(Math.random() * 101));
    codigos.push(Math.floor(Math.random() * 20) + 1);
  }

  // Encontrar la edad mayor y la cantidad de repeticiones
  edades.forEach(edad => {
    const repeticiones = edades.filter(e => e === edad).length;
    if(repeticiones > edadFrecuente.repeticiones) {
      edadFrecuente.edad = edad;
      edadFrecuente.repeticiones = repeticiones;
    }
  });

  // Imprimir resultado
  console.log(`La edad mayor es ${Math.max(...edades)}.`);
  if(edadFrecuente.repeticiones > 1) {
    console.log(`La edad ${edadFrecuente.edad} se repite ${edadFrecuente.repeticiones} veces.`);
  }
}

obtenerEdadMayor();*/

//Tradicional

function obtenerEdadMayor() {
  const edades = [];
  const codigos = [];
  const edadFrecuente = {edad: null, repeticiones: 0};

  // Generar 20 edades y códigos aleatorios
  for(let i = 0; i < 20; i++) {
    edades.push(Math.floor(Math.random() * 101));
    codigos.push(Math.floor(Math.random() * 20) + 1);
  }

  // Buscamos la edad mayor y contamos las repeticiones
  edades.forEach(function(edad) {
    const repeticiones = edades.filter(function(e) {// Utilizamos el método "filter" para buscar cuántas veces se repite la edad actual en el arreglo "edades"
      return e === edad;
    }).length;
    if(repeticiones > edadFrecuente.repeticiones) {// Si la cantidad de repeticiones es mayor que la propiedad "repeticiones" del objeto "edadFrecuente"
      edadFrecuente.edad = edad;// Actualiza la propiedad "edad" del objeto "edadFrecuente" con la edad actual
      edadFrecuente.repeticiones = repeticiones;// Actualiza la propiedad "repeticiones" del objeto "edadFrecuente" con la cantidad de repeticiones encontradas
    }
  });

  // Imprimir resultado
  console.log("La edad mayor es " + Math.max(...edades) + ".");// Utilizamos la función "Math.max" para encontrar la edad mayor en el arreglo "edades" y la imprime en consola
  if(edadFrecuente.repeticiones > 1) {// Si la propiedad "repeticiones" del objeto "edadFrecuente" es mayor a 1
    console.log("La edad " + edadFrecuente.edad + " se repite " + edadFrecuente.repeticiones + " veces."); // Imprime en consola la edad que se repite más veces y cuántas veces se repite
  }
}

obtenerEdadMayor();