//Vinícius Eduardo Correia
//Crie uma matriz 3x3 com entrada manual de números aceitando somente números de 0 a 9. Em seguida, exiba a matriz na tela.
console.clear();
var teclado = require("Prompt-sync")();
var matrizDois = new Array(3);
for (var c = 0; c < 3; c++) {
    matrizDois[c] = new Array(3);
    for (var l = 0; l < 3; l++) {
        var numero = teclado("Digite o nome que vai estar no endere\u00E7o [".concat(c, ", ").concat(l, "] da matriz: "));
        if (numero >= 0 && numero <= 9) {
            matrizDois[c][l] = numero;
        }
        else {
            l--;
        }
    }
}
console.log(matrizDois);
