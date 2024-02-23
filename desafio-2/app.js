// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function muestraHolaMundo() {
  console.log(`¡Hola Mundo!`);
  return;
}

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la
//    consola.
function muestraHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
  return;
}

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function duplicaNumero(numero) {
  return numero * 2;
}

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function calculaPromedio(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function identificaMaximo(num1, num2) {
  return num1 > num2 ? num1 : num2 > num1 ? num2 : undefined;
}

// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar
//    ese número por sí mismo.
function calculaCuadrado(numero) {
  return numero ** 2;
}

muestraHolaMundo();
muestraHolaNombre('Juanito');

console.log(`El doble de 100 es ${duplicaNumero(100)}.`);
console.log(`El promedio de la suma de 5, 8 y 9 es ${calculaPromedio(5, 8, 9)}.`);
console.log(`El máximo entre 7 y 6 es ${identificaMaximo(7, 6)}.`);
console.log(`El máximo entre 5 y 5 es ${identificaMaximo(5, 5)}.`);
console.log(`El cuadrado de 10 es ${calculaCuadrado(10)}.`);
