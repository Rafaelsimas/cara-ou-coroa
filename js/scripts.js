function jogarMoeda() {
  const numeroRandomico = Math.random();
  let vencedor = "";

  if (numeroRandomico > 0.5) {
    vencedor = "cara";
  } else {
    vencedor = "coroa";
  }

  let caminhoImagem = `assets/images/${vencedor}.png`;

  document.getElementById("imagemMoeda").src = caminhoImagem;
}
