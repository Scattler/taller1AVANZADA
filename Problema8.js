//Se crea un arreglo de objetos llamado "planetas" con 15 elementos, cada uno con las propiedades "nombre", "latitud", "longitud", "oxigeno" y "agua".
const planetas = [
    {nombre: 'Planeta 1', latitud: 10, longitud: -20, oxigeno: 50, agua: 100},
    {nombre: 'Planeta 2', latitud: -5, longitud: 15, oxigeno: -10, agua: 0},
    {nombre: 'Planeta 3', latitud: 30, longitud: 40, oxigeno: 80, agua: 500},
    {nombre: 'Planeta 15', latitud: -20, longitud: 5, oxigeno: 30, agua: 200}
  ];
  //Se utiliza el método reduce() para obtener la suma total del valor de la propiedad "agua" de todos los planetas.
  // La variable totalAgua almacena el resultado de la operación y se imprime en la consola.
  
  const totalAgua = planetas.reduce((acc, planeta) => acc + planeta.agua, 0);
  console.log(`La cantidad total de agua de los 15 planetas es ${totalAgua}`);
  
  const totalOxigeno = planetas.reduce((acc, planeta) => acc + planeta.oxigeno, 0) * 100;
  console.log(`La suma y multiplicación por 100 del total de oxígeno de los 15 planetas es ${totalOxigeno}`);
 
  //utilizamos el método find() para buscar en el arreglo un planeta que tenga un valor negativo en la propiedad "oxigeno". Si se encuentra un planeta, se imprime su nombre y propiedades en la consola.
  
  const planetaConOxigenoNegativo = planetas.find(planeta => planeta.oxigeno < 0);
  if (planetaConOxigenoNegativo) {
    console.log(`El planeta ${planetaConOxigenoNegativo.nombre} tiene un nivel de oxígeno negativo.`);
    console.log(planetaConOxigenoNegativo);
  }
  
  const planetaSinAgua = planetas.find(planeta => planeta.agua === 0);
  if (planetaSinAgua) {
    console.log(`El planeta ${planetaSinAgua.nombre} no tiene agua.`);
    console.log(planetaSinAgua);
  }



  