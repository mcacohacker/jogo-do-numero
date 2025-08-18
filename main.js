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
