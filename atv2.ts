// Vinícius Eduardo Correia

console.clear();
let teclado = require (`Prompt-sync`)();
// declarando matriz usando o construtor Array limitando a 3 linhas
let matrizDois: string [][] = new Array(3);

for (let i = 0; i < 3; i++) {
    // cria um array vazio para preencher a linha correspondente ao i limitando a três linhas
    matrizDois[i] = new Array(3);

    for (let j = 0; j < 4; j++) {
        //atribuição via entrada de dados manual na variavel nome
        let nome: string = teclado(`Digite o nome que vai estar no endereço [${i}, ${j}] da matriz: `);

        // Atribui nome na minha matriz do endereço dado por i e j
        matrizDois[i][j] = nome;
    }
}
//Imprime a matriz
console.log(matrizDois);