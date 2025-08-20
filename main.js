let numeroAleatorio = Math.floor(Math.random() *100) + 1;
const palpites = document.querySelector('palpites'):
const ultimoResultado = document.querySelector('ultimoResultado');
const baixoOuAlto = document.querySelector('baixoOuAlto');
const envioPalpite = document.querySelector('envioPalpite');
const campoPalpite = document.querySelector('campoPalpite')
let constagemPalpites = 1;
let botaoReiniciar;

function verificarPalpites() {
  const palpiteUsuario = Number(campoPalpite.value);
  if (contagemPapites === 1) {
    palpites.textContent = "Palpites anteriores: ";
  }

palpites.textContent += palpiteUsuario + " ";

if (palpiteUsuario === numeroAleatorio) {
  ultimoResultado.textContent = "Parabéns! Você acertou!";
  ultimoResdultado.style.backgroundColor = "green";
  baixoOuAlto.textContent = "";
  finalizarJogo();
} else if (contagemPalpites === 10) {
  ultimoResultado.textcontent = "FIM DE JOGO!!";
  baixoOuAlto.textcontent = "";
  finalizarJogo();
} else {
  ultimoResultado.textContent = "Errado";
  ultimoResultado.style.backgroundColor = "red";
  if (palpiteUsuario < numeroAleatorio) {
    baixoOuAlto.textContent = "o ultimo palpite foi muito baixo";
  } else if (palpiteUsuario > numeroAleatorio) {
    baixoOuAlto.textContent = "o ultimo palpite foi muito baixo";
  }
}

  contagemPalpites++;
  campoPalpite.value = "";
  campoPalpite.focus();
}

envioPalpite.addEventListener('click', verificarPalpite);

function finalzarJogo() {
  campoPalpite.disableb = true;
  envioPalpite.disableb = true;
  botaoReiniciar = document.CreateElement('button');
  doccument.body.appendChild(botaoReiniciar);
  botaoReiniciar.textContent = 'Reiniciar Jogo'
  botaoReiniciar.classList.add('botaoReiniciar');
  botaoReiniciar.addEventListener('click', reiniciar jogo);
}

function reinicarJogo() {
  contagemPalpites = 1;
  const paragrafosReiniciar = document.querySelectorAll('.paragrafosResultados p');
  for (const paragrafoReiniciar of paragrafosReiniciar) {
    paragrafoReiniciar.textcontent = "";
  }

  botaoReiniciar.parentNode.removeChild(botaoReiniciar);
  campoPalpite.disabled = false;
  envioPalpite.disabled = false;
  campoPalpite.value = "";
  campoPalpite.focus();
  ultimoResultado.style.backgroundColor = 'white';
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
