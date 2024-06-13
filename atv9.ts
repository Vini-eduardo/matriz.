//Vinícius Eduardo Correia
/*Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.*/

console.clear();
let teclado = require(`prompt-sync`)();

let minhaMatriz: number[][] = [];
let linha: number = 6;
let coluna: number = 6;

for (let z = 0; z < linha; z++) {
  minhaMatriz[z] = [];
  for (let x = 0; x < coluna; x++) {
    let numero: number = parseInt(teclado(`Digite o numero que vai estar no endereço [${z}, ${x}] da matriz: `));
    minhaMatriz[z][x] = numero;
    }
}
console.log(minhaMatriz);

let soma: number = 0;
for (let x = 0; x < coluna; x++) {
  if (x % 2 === 0) {
    for (let z = 0; z < linha; z++) {
      soma += minhaMatriz[z][x];
    }
  }
}

console.log(`Soma dos elementos das colunas pares: ${soma}`);