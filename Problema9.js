//Tradicional

// Función para crear un objeto Padawan
function crear_padawan(nombre, planeta, edad, estatura) {
  return {
    nombre: nombre,
    planeta: planeta,
    edad: edad,
    estatura: estatura,
  };
}

// Función para asignar la actividad correspondiente a un Padawan
function asignar_actividad(padawan) {
  if (padawan.edad < 15) {
    padawan.actividad = "Manejo de la fuerza";
  } else {
    padawan.actividad = "Manejo del sable de luz";
  }
}

// Crear algunos Padawans de ejemplo
var padawan1 = crear_padawan("Luke Skywalker", "Tatooine", 19, 1.72);
var padawan2 = crear_padawan("Ahsoka Tano", "Shili", 14, 1.63);
var padawan3 = crear_padawan("Ezra Bridger", "Lothal", 16, 1.75);

// Asignar las actividades correspondientes a cada Padawan
asignar_actividad(padawan1);
asignar_actividad(padawan2);
asignar_actividad(padawan3);

// Mostrar los resultados en consola
console.log(padawan1.nombre + " debe aprender " + padawan1.actividad);
console.log(padawan2.nombre + " debe aprender " + padawan2.actividad);
console.log(padawan3.nombre + " debe aprender " + padawan3.actividad);


//Flecha
/*
const asignarActividad = (nombre, planeta, edad, estatura) => {
  const padawan = { nombre, planeta, edad, estatura }; // Crear objeto Padawan con los datos dados
  const actividad = edad < 15 ? "Manejo de la fuerza" : "Manejo del sable de luz"; // Clasificar actividad según la edad
  console.log(`A ${padawan.nombre} de ${padawan.planeta}, de ${padawan.edad} años y ${padawan.estatura}cm, se le ha asignado la actividad de ${actividad}.`); // Mostrar en consola la actividad asignada
}

asignarActividad("Luke Skywalker", "Tatooine", 19, 172);*/
