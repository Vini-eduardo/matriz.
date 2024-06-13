//Vinícius Eduardo Correia
//Crie uma matriz 3x3 com números aleatórios de 0 a 9. Em seguida, exiba a matriz na tela.
console.clear();
var minhaMatriz = [];
for (var z = 0; z < 3; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x < 3; x++) {
        minhaMatriz[z][x] = Math.floor(Math.random() * 10);
    }
}
console.log(minhaMatriz);
