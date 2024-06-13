//Vinícius Eduardo Correia
// Altere o código um(1) desse conteúdo para funcionar com números e ter duas colunas.

console.clear();
let teclado = require (`Prompt-sync`)();
let minhaMatriz: number [][] = []; 


for (let z = 0; z < 2; z++) {
    minhaMatriz[z] = []

    for (let x = 0; x < 5; x++) {
        let number: number = teclado(`Digite o número que vai estar no endereço [${z}, ${x}] da matriz: `);
        minhaMatriz[z][x] = number;
    }
}
console.log(minhaMatriz);