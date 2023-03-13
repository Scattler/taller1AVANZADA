//Funcion tipo flecha

const contarSablesDefectuosos = (sables) => sables.filter(sable => sable < 0).length;

const sables = [2, 4, -8, 5, -6];
const sablesDefectuosos = contarSablesDefectuosos(sables);
console.log(`Hay ${sablesDefectuosos} sables defectuosos con energía negativa.`);

//Funcion Tradicional

  /*function contarSablesDefectuosos(sables) {
    let sablesNegativos = 0;
    for (let i = 0; i < sables.length; i++) {
      if (sables[i] < 0) {
        sablesNegativos++;
      }
    }
    return sablesNegativos;
  }
  
  const sables = [2, 4, -8, 5, -6];
  const sablesDefectuosos = contarSablesDefectuosos(sables);
  console.log(`Hay ${sablesDefectuosos} sables defectuosos con energía negativa.`);*/