// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su
//    altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calculaIMC(estatura, peso) {
  return peso / (estatura ** 2);
}

// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor
//    equivalente en pesos mexicanos. Para esto, considera la cotización del dólar igual a
//    $17.90 MXN.
function convierteAPesos(dolares) {
  return dolares * 17.90;
}

// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
//    utilizando la altura y la anchura que se proporcionarán como parámetros.
function muestraAreaYPerimetroRectangulo(largo, ancho) {
  let area = largo * ancho;
  let perimetro = (largo * 2) + (ancho * 2);
  console.log(
    `El área de una sala rectangular de ${largo.toFixed(2)}m de largo y ${ancho.toFixed(2)}m de ancho es de ${area.toFixed(2)}m2 y su perímetro es ${perimetro.toFixed(2)}m.`);
  return;
}

// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
//    utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function muestraAreaYPerimetroCirculo(radio) {
  let area = Math.PI * (radio ** 2);
  let perimetro = Math.PI * (radio * 2);
  console.log(
    `El área de una sala circular de ${radio.toFixed(2)}m de radio es de ${area.toFixed(2)}m2 y su perímetro es ${perimetro.toFixed(2)}m.`);
  return;
}

// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como
//    parámetro.
function muestraTablaMultiplicar(n) {
  console.log(`- Tabla de multiplicar del ${n} -`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
  return;
}

console.log(`Si mi estatura es de 1.78m y peso 106.50kg, mi IMC es ${calculaIMC(1.78, 106.5).toFixed(2)}.`);
console.log(`Si mi estatura es de 1.55m y peso 70kg, mi IMC es ${calculaIMC(1.55, 70).toFixed(2)}.`);
console.log(`El factorial de 6 es ${factorial(6)}.`);
console.log(`El factorial de 11 es ${factorial(11)}.`);
console.log(
  `Si $1 USD equivale a $17.90 MXN, $175.80 USD equivalen a $${convierteAPesos(175.8).toFixed(2)} MXN.`);
console.log(
  `Si $1 USD equivale a $17.90 MXN, $5 USD equivalen a $${convierteAPesos(5).toFixed(2)} MXN.`);
muestraAreaYPerimetroRectangulo(10, 5);
muestraAreaYPerimetroRectangulo(3.5, 8);
muestraAreaYPerimetroCirculo(6.9);
muestraAreaYPerimetroCirculo(2.5);
muestraTablaMultiplicar(5);
muestraTablaMultiplicar(8);