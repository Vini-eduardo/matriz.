// Vinícius Eduardo Correia
console.clear();
var teclado = require("Prompt-sync")();
// declarando matriz usando o construtor Array limitando a 3 linhas
var matrizDois = new Array(3);
for (var i = 0; i < 3; i++) {
    // cria um array vazio para preencher a linha correspondente ao i limitando a três linhas
    matrizDois[i] = new Array(3);
    for (var j = 0; j < 4; j++) {
        //atribuição via entrada de dados manual na variavel nome
        var nome = teclado("Digite o nome que vai estar no endere\u00E7o [".concat(i, ", ").concat(j, "] da matriz: "));
        // Atribui nome na minha matriz do endereço dado por i e j
        matrizDois[i][j] = nome;
    }
}
//Imprime a matriz
console.log(matrizDois);
