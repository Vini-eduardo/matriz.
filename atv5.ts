//Vinícius Eduardo Correia
//Crie uma matriz 3x3 com entrada manual de números. Em seguida, exiba a matriz na tela.

console.clear();
let teclado = require (`Prompt-sync`)();
let matrizDois: number [][] = new Array(3);

for (let i = 0; i < 3; i++) {
    matrizDois[i] = new Array(3);

    for (let j = 0; j < 3; j++) {
        let number: number = teclado(`Digite o número que vai estar no endereço [${i}, ${j}] da matriz: `);
        matrizDois[i][j] = number;
    }
}
console.log(matrizDois);