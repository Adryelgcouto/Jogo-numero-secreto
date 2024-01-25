let listasDeNumerosSorteados = [];
let numeroLimite = 9;
let NumeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
console.log(NumeroAleatorio);
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do numero secreto");
  exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
}

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == NumeroAleatorio) {
    let palavraTentativa = tentativas > 1 ? "tentivas" : "tentativas";
    let mensagemTentaivas = `Voce descobriu o numero seceto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela("h1", "voce acertou");
    exibirTextoNaTela("p", mensagemTentaivas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > NumeroAleatorio) {
      exibirTextoNaTela("p", "O numero secreto é menor");
    } else {
      exibirTextoNaTela("p", "O numero secreto é maior");
    }
    limparCampo();
  }
  tentativas++;
}
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementoNaLista = listasDeNumerosSorteados.length;
  if (quantidadeElementoNaLista == numeroLimite) {
    listasDeNumerosSorteados = [];
  }
  if (listasDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listasDeNumerosSorteados.push(numeroEscolhido);
    console.log(listasDeNumerosSorteados);
    return numeroEscolhido;
  }
}
function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
function reloadPag() {
  NumeroAleatorio = gerarNumeroAleatorio();
  tentativas = 1;
  limparCampo();
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
exibirMensagemInicial();
