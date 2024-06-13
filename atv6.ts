//Vinícius Eduardo Correia
//Crie uma matriz 3x3 com entrada manual de números aceitando somente números de 0 a 9. Em seguida, exiba a matriz na tela.

console.clear();
let teclado = require (`Prompt-sync`)();
let matrizDois: number [][] = new Array(3);

for (let c = 0; c < 3; c++) {
    matrizDois[c] = new Array(3);

    for (let l = 0; l < 3; l++) {
        let numero: number = teclado(`Digite o número que vai estar no endereço [${c}, ${l}] da matriz: `);

        if(numero >= 0 && numero <= 9){
            matrizDois[c][l] = numero;
        }
        else{
            l--;
        }
        
    }
}
console.log(matrizDois);




