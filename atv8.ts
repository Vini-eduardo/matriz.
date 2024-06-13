// Vinícius Eduardo Correia
//Crie uma matriz 4x4 com números aleatórios entre 0 e 20. Em seguida, exiba a matriz na tela e encontre o maior elemento da matriz e a posição em que ele se encontra.

console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: number[][] = [];

let linha = 4;
let coluna = 4;

for (let z = 0; z < linha; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        let numero: number = Math.floor(Math.random() * 21);
        minhaMatriz[z][x] = numero;
    }
}

let maiorNum: number = 0
let posicaol: number = 0
let posicaoc: number = 0

for (let z = 0; z < linha; z++) {
    for (let x = 0; x < coluna; x++) {
        if (minhaMatriz[z][x] > maiorNum) {
            maiorNum = minhaMatriz[z][x]
            posicaol = z
            posicaoc = x
        }
    }
}

console.log(minhaMatriz);
console.log(`O maior número é: ${maiorNum}`);
console.log(`Ele se encontra na posição: [${posicaol + 1}],[${posicaoc + 1}]`);