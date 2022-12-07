const jogadores = [
  [27, 4, 20, 13, 14],
  [11, 15, 12, 8, 9],
  [5, 5, 12, 16, 4],
  [20, 33, 11, 12, 19],
  [3, 3, 4, 5, 10],
];

let texto = "";
let media;
for (let jogador in jogadores) {
  texto += `Jogador ${+jogador + 1}: \n\n`;
  let soma = 0;
  for (let temporada in jogadores[jogador]) {
    texto += `Temporada ${+temporada + 1}: ${jogadores[jogador][temporada]} gols\n`;
    soma += jogadores[jogador][temporada];
  }
  media = soma / jogadores[jogador].length;
  texto += `\nTotal: ${soma} gols\n\nMédia por temporada: ${media.toFixed(0)} gols\n\n\n`;
}

console.log(texto);
