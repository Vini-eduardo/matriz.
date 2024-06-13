// Vinícius Eduardo Correia
//Crie uma matriz 4x4 com números aleatórios entre 0 e 20. Em seguida, exiba a matriz na tela e encontre o maior elemento da matriz e a posição em que ele se encontra.
console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
var linha = 4;
var coluna = 4;
for (var z = 0; z < linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        var numero = Math.floor(Math.random() * 21);
        minhaMatriz[z][x] = numero;
    }
}
var maiorNum = 0;
var posicaol = 0;
var posicaoc = 0;
for (var z = 0; z < linha; z++) {
    for (var x = 0; x < coluna; x++) {
        if (minhaMatriz[z][x] > maiorNum) {
            maiorNum = minhaMatriz[z][x];
            posicaol = z;
            posicaoc = x;
        }
    }
}
console.log(minhaMatriz);
console.log("O maior n\u00FAmero \u00E9: ".concat(maiorNum));
console.log("Ele se encontra na posi\u00E7\u00E3o: [".concat(posicaol + 1, "],[").concat(posicaoc + 1, "]"));
