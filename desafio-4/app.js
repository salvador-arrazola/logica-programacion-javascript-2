// 1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
console.log(`listaGenerica: ${listaGenerica}`);

// 2. Crea una lista de lenguajes de programación llamada "lenguajesDeProgramacion" con los
//    siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(`lenguajesDeProgramacion: ${lenguajesDeProgramacion}`);

// 3. Agrega a la lista "lenguajesDeProgramacion" los siguientes elementos: 'Java', 'Ruby' y
//    'GoLang'.
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');

// 4. Crea una función que muestre en la consola todos los elementos de la lista
//    "lenguajesDeProgramacion".
function muestraLenguajesDeProgramacion() {
  console.log('Lenguajes de Programación:');
  lenguajesDeProgramacion.forEach(lenguaje => {
    console.log(`- ${lenguaje}`);
  });
  return;
}

// 5. Crea una función que muestre en la consola todos los elementos de la lista
//    "lenguajesDeProgramacion" en orden inverso.
function muestraLenguajesDeProgramacionInverso() {
  console.log('Lenguajes de Programación Inverso:');
  // for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
  //   console.log(`- ${lenguajesDeProgramacion[i]}`);
  // }
  let arregloInvertido = lenguajesDeProgramacion.slice().reverse();
  arregloInvertido.forEach(lenguaje => {
    console.log(`- ${lenguaje}`);
  });
  return;
}

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
function calculaPromedio(numeros) {
  return sumatoria(numeros) / numeros.length;
}

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una
//    lista.
function muestraMaxMin(numeros) {
  let max = undefined;
  let min = undefined;
  numeros.forEach(numero => {
    if (max === undefined || numero > max) {
      max = numero;
    }
    if (min === undefined || numero < min) {
      min = numero;
    }
  });
  console.log(`El máximo y mínimo de ${numeros} es ${max} y ${min}.`);
  return;
}

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumatoria(numeros) {
  // let sumatoria = 0;
  // numeros.forEach(numero => {
  //   sumatoria += numero;
  // });
  // return sumatoria;
  return numeros.reduce(function (suma, numero) {
    return suma + numero;
  }, 0);
}

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado
//    como parámetro, o -1 si no existe en la lista.
function buscaElemento(lista, elemento) {
  // for (let i = 0; i < lista.length; i++) {
  //   if (lista[i] == elemento) {
  //     return i;
  //   }
  // }
  // return -1;
  return lista.findIndex(e => e == elemento);
}

// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista
//     con la suma de los elementos uno a uno.
function sumaElementosListas(lista1, lista2) {
  let listaSumas = [];
  for (let i = 0; i < lista1.length; i++) {
    listaSumas.push(lista1[i] + lista2[i]);
  }
  return listaSumas;
}

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado
//     de cada número.
function calculaCuadradoElementos(lista) {
  // let listaCuadrados = [];
  // for (let i = 0; i < lista.length; i++) {
  //   listaCuadrados.push(lista[i] ** 2);
  // }
  // return listaCuadrados;
  return lista.map(n => n ** 2);
}

muestraLenguajesDeProgramacion();
muestraLenguajesDeProgramacionInverso();
let numeros = [8, 2, 9, 3];
console.log(`El promedio de ${numeros}: ${calculaPromedio(numeros)}.`);
muestraMaxMin(numeros);
console.log(`La sumatoria de ${numeros} es ${sumatoria(numeros)}.`);
console.log(`El numero 2 se encuentra en la posición ${buscaElemento(numeros, 2)} de ${numeros}.`);
console.log(`El numero 5 se encuentra en la posición ${buscaElemento(numeros, 5)} de ${numeros}.`);
let numeros1 = [5, 6, 7, 8];
console.log(`La suma de cada elemento de ${numeros} y ${numeros1} es ${sumaElementosListas(numeros, numeros1)}.`);
console.log(`El cuadrado de cada elemento de ${numeros} es ${calculaCuadradoElementos(numeros)}.`);
