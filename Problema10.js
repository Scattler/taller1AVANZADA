
  // Definimos los 300 alimentos que va a consumir Grogu
const alimentos = [
  {nombre: "zanahoria", tipo: "vegetal", nivelEnergia: 150},
  {nombre: "pollo", tipo: "animal", nivelEnergia: 350},
  {nombre: "manzana", tipo: "vegetal", nivelEnergia: 220},
  {nombre: "gusanos", tipo: "insecto", nivelEnergia: 100},
  {nombre: "espinacas", tipo: "vegetal", nivelEnergia: 500}
];

// Función primaria que filtra los alimentos de tipo vegetal con más de 200 unidades de energía
function filtrarAlimentos(callback) {
  const alimentosFiltrados = alimentos.filter(alimento => alimento.tipo === "vegetal" && alimento.nivelEnergia > 200);
  setTimeout(() => callback(alimentosFiltrados), 5000); // Esperamos 5 segundos antes de ejecutar el callback
}

// Función callback que entrega la sumatoria de niveles de energía de los alimentos vegetales
function obtenerSumatoriaEnergia(alimentosFiltrados) {
  const sumatoriaEnergia = alimentosFiltrados.reduce((acumulador, alimento) => acumulador + alimento.nivelEnergia, 0);
  console.log("La sumatoria de niveles de energía entregados por los alimentos vegetales consumidos es: " + sumatoriaEnergia);
}

// Ejecutamos la función primaria pasando la función callback como argumento
filtrarAlimentos(obtenerSumatoriaEnergia);


