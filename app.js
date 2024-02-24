let numeroSecreto = 0;
// console.log('numeroSecreto: '+ numeroSecreto);
let intentos = 0;

function inicializaJuego() {
  // Generamos el numero secreto.
  numeroSecreto = generaNumeroSecreto();
  // Inicializamos el numero de intentos.
  intentos = 1;
  // Inicializamos los mensajes para el usuario.
  asignaTextoElemento('h1', '¡Adivina el Número Secreto!');
  asignaTextoElemento('p', 'Escribe un numero del 1 al 10:');
  // Deshabilitamos el botón para reiniciar el juego.
  document.querySelector('#botonReiniciar').setAttribute('disabled', true);
}

function generaNumeroSecreto() {
  return Math.floor(Math.random() * (10)) + 1;
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
  // Reinicializamos el juego.
  inicializaJuego();
  return;
}

inicializaJuego();
