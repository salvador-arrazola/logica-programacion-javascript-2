let numeroSecreto = 0;
// console.log('numeroSecreto: '+ numeroSecreto);
let intentos = 0;
let numerosJugados = [];
let numeroMaximo = 5;

function inicializaJuego() {
  // Generamos el numero secreto.
  numeroSecreto = generaNumeroSecreto();
  // Inicializamos el numero de intentos.
  intentos = 1;
  // Inicializamos los mensajes para el usuario.
  asignaTextoElemento('h1', '¡Adivina el Número Secreto!');
  asignaTextoElemento('p', `Escribe un numero del 1 al ${numeroMaximo}:`);
  // Deshabilitamos el botón para reiniciar el juego.
  document.querySelector('#botonReiniciar').setAttribute('disabled', true);
}

function generaNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * (numeroMaximo)) + 1;
  console.log(`numeroGenerado: ${numeroGenerado}`);
  if (numerosJugados.includes(numeroGenerado)) {
    // Si ya se jugo el numero generado.
    // Tratamos de generar uno nuevo mediante recursividad.
    return generaNumeroSecreto();
  }
  // Si el numero generado no se ha jugado.
  // Agregamos el numero generado a la lista de numeros jugados.
  console.log(`numerosJugados: ${numerosJugados}`);
  numerosJugados.push(numeroGenerado);
  return numeroGenerado;
}

function asignaTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function validaIntentoUsuario() {
  let numeroUsuario = parseInt(document.getElementById('inputNumeroUsuario').value);
  if (numeroSecreto === numeroUsuario) {
    asignaTextoElemento(
      'p',
      `¡Adivinaste el número secreto en ${intentos} ${intentos > 1 ? "intentos" : "intento"}!`);
      document.querySelector('#botonReiniciar').removeAttribute('disabled');
  } else {
    if (numeroSecreto < numeroUsuario) {
      asignaTextoElemento('p', 'El número secreto es menor.');
    } else {
      asignaTextoElemento('p', 'El número secreto es mayor.');
    }
    intentos++;
    limpiaNumeroUsuario();
  }
  return;
}

function limpiaNumeroUsuario() {
  document.querySelector('#inputNumeroUsuario').value = '';
  return;
}

function reiniciaJuego() {
  // Limpiamos el numero del usuario.
  limpiaNumeroUsuario();
  if (numerosJugados.length === numeroMaximo) {
    // Si el usuario ya adivino todos los numeros posibles.
    finalizaJuego();
  } else {
    // Reinicializamos el juego.
    inicializaJuego();
  }
  return;
}

function finalizaJuego() {
  asignaTextoElemento(
    'p',
    `¡Felicidades! Has adivinado todos los numeros del 1 al ${numeroMaximo}.`);
  document.getElementById('botonReiniciar').setAttribute('disabled','true');
  document.getElementById('botonIntentar').setAttribute('disabled','true');
}

inicializaJuego();
