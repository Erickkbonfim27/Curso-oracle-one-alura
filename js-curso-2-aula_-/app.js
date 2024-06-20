let numm = 0;
let listaDeNumerosGerados = [];
let tentativas = 1;
let SecretNumber = gerarNumeroAleatorio();
console.log(SecretNumber);

function verificarChute() {
  let chute = document.querySelector("input").value;
  let palavraTentativa = tentativas > 1 ? "Tentativas!!" : "tentativa";
  if (chute == SecretNumber) {
    exibirTextoNaTela("h1", "Acertou");
    exibirTextoNaTela(
      "p",
      `Você acertou o número em ${tentativas} ${palavraTentativa}`
    );

    disableButton(false);
  } else if (chute > SecretNumber) {
    tentativas++;
    limparCampo();
    exibirTextoNaTela("p", "O número secreto é menor");
  } else {
    tentativas++;
    limparCampo();
    exibirTextoNaTela("p", "O número secreto é maior");
  }
}
function exibirTextoNaTela(tag, texto) {
  let textThatWillApear = document.querySelector(tag);
  textThatWillApear.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela("h1", "Adivinhe o número secreto");
exibirTextoNaTela("p", "escolha um número de 1 e 10");

function gerarNumeroAleatorio() {
  let NumeroEscolhido = parseInt(Math.random() * 10 + 1);
  if(listaDeNumerosGerados.length >= 10){
    listaDeNumerosGerados.length=0
  }

  if (listaDeNumerosGerados.includes(NumeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosGerados.push(NumeroEscolhido);
    console.log(listaDeNumerosGerados);
    return NumeroEscolhido;
  }
}
function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
const mensagens = () => {
  exibirTextoNaTela("h1", "jogo da massa");
  exibirTextoNaTela("p", "escolha um número de 1 e 10");
};

const disableButton = (cond) => {
  if (cond === true) {
    document.getElementById("reiniciar").setAttribute("disabled", true);
  } else {
    document.getElementById("reiniciar").removeAttribute("disabled");
  }
};

function reiniciarJogo() {
  SecretNumber = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagens();
  disableButton(true);
}
