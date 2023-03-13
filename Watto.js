// FLecha
const calcularSalarioMensual = (licenciasVendidas) => {
  const salarioBase = 3500000;
  const comisionPorLicencia = 1500000;
  const totalComisiones = comisionPorLicencia * licenciasVendidas;
  const totalDevengado = salarioBase + totalComisiones;
  const deducciones = totalDevengado * 0.05;
  const salarioMensual = totalDevengado - deducciones;
  
  console.log(`El salario mensual del vendedor es: $${salarioMensual}`);
}


calcularSalarioMensual(3); // Calcula el salario mensual si el vendedor vendió 3 licencias


//Tradicional

/*function calcularSalarioMensual(licenciasVendidas) {
    var salarioBase = 3500000;
    var comisionPorLicencia = 1500000;
    var totalComisiones = comisionPorLicencia * licenciasVendidas;
    var totalDevengado = salarioBase + totalComisiones;
    var deducciones = totalDevengado * 0.05;
    var salarioMensual = totalDevengado - deducciones;
    
    console.log("El salario mensual del vendedor es: $" + salarioMensual);
  }
  

  calcularSalarioMensual(3);*/