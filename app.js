let numeroSecreto = generaNumeroSecreto();
console.log('numeroSecreto: '+ numeroSecreto);

function asignaTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function generaNumeroSecreto() {
  return Math.floor(Math.random() * (10)) + 1;
}

function validaIntentoUsuario() {
  let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
  console.log('numeroUsuario: '+ numeroUsuario);
  console.log('numeroSecreto === numeroUsuario: '+ (numeroSecreto === numeroUsuario));
  return;
}

asignaTextoElemento('h1', '¡Adivina el Número Secreto!');
asignaTextoElemento('p', 'Por favor, escribe un numero del 1 al 10:');
