//Vinícius Eduardo Correia
// Altere o código um(1) desse conteúdo para funcionar com números e ter duas colunas.
console.clear();
var teclado = require("Prompt-sync")();
var minhaMatriz = [];
for (var z = 0; z < 2; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x < 5; x++) {
        var number = teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o [".concat(z, ", ").concat(x, "] da matriz: "));
        minhaMatriz[z][x] = number;
    }
}
console.log(minhaMatriz);
