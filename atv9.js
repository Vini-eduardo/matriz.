//Vinícius Eduardo Correia
/*Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.*/
console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
var linha = 6;
var coluna = 6;
for (var z = 0; z < linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        var numero = parseInt(teclado("Digite o numero que vai estar no endere\u00E7o [".concat(z, ", ").concat(x, "] da matriz: ")));
        minhaMatriz[z][x] = numero;
    }
}
console.log(minhaMatriz);
var soma = 0;
for (var x = 0; x < coluna; x++) {
    if (x % 2 === 0) {
        for (var z = 0; z < linha; z++) {
            soma += minhaMatriz[z][x];
        }
    }
}
console.log("Soma dos elementos das colunas pares: ".concat(soma));
