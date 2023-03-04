//la función distanciaPlanetas recibe cuatro parámetros: x1, y1, x2 y y2, que corresponden a las coordenadas X e Y del planeta de origen y el planeta de destino
//Para calcular la distancia entre Naboo y cualquier otro planeta de la ruta N-14 cambia los valores asignados de las posiciones x1, y1, x2 y y2


//Funcion tipo Flecha

/*const distanciaPlanetas = (x1, y1, x2, y2) => {
  const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return distancia;
};

let distanciaNabooPlanetaN14 = distanciaPlanetas(7, 34, 4, 81);
console.log(`La distancia entre Naboo y el planeta  ruta N-14 ${distanciaNabooPlanetaN14} UA`);*/


//Funcion tradicional

function distanciaPlanetas(x1, y1, x2, y2) {
  const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distancia;
}

let distanciaNabooPlanetaN14 = distanciaPlanetas(124, 90, 30, 40);
console.log("La distancia entre Naboo y el planeta en ruta N-14 " + distanciaNabooPlanetaN14 + " UA");