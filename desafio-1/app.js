// 2. Cambia el contenido de la etiqueta h1 con document.querySelector
//    y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

// 3. Crea una función que muestre en la consola el mensaje
//    "El botón fue clicado" siempre que se presione el botón "Console".
function muestraMensajeConsola() {
  console.log('El usuario hizo click en el botón "Console".');
}

// 4. Crea una función que se ejecute cuando se haga clic en el botón "prompt",
//    preguntando el nombre de una ciudad de Brasil.
//    Luego, muestra una alerta con el mensaje concatenando la respuesta con
//    el texto: "Estuve en {ciudad} y me acordé de ti".
function muestraMensajePrompt() {
  let ciudad = prompt('Dime el nombre de una ciudad:');
  alert(`Estuve en ${ciudad} y me acordé de ti.`);
}

// 5. Crea una función que muestre una alerta con el mensaje: "Yo amo JS"
//    siempre que se presione el botón "Alerta".
function muestraAlert() {
  alert('Yo amo JS');
}

// 6. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de
//    la suma en una alerta.
function solicitaSuma() {
  let num1 = parseInt(prompt('Dame el primer numero para sumar:'));
  let num2 = parseInt(prompt('Dame el segundo numero para sumar:'));
  alert(`El resultado de sumar ${num1} + ${num2} es igual a: ${num1 + num2}.`);
}
