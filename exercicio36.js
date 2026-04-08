/******************************************************************************
Curso: Engenharia de Software
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25001118-2 - Emanuel Gomes de Almeida 
             25033056-2 - Gabriel Michels Cubas
             25164719-2 - Rafael Maia
             25291090-2 - João Lucas Veiga de Carvalho
             25089203-2 - Vitor Gabriel Vieira Baldão
             25087132-2 - Matheus Henrique Vieira Baldão
             25363242-2 - Euclides Benedito Modesto Coelho Neto
             25357453-2 - Leonardo De Jesus Sabino Flugel
Data: 05 de Março de 2026
Descritivo: Soma todos os elementos de um array usando o método .reduce().
*******************************************************************************/

// Este código resolve o problema de somar todos os elementos de um array numérico
// utilizando o método `reduce()` do JavaScript. O `reduce()` itera sobre cada
// elemento do array, aplicando uma função de callback que acumula um único valor
// (neste caso, a soma) a partir dos elementos do array.

// Define um array de números para ser somado
const numeros = [1, 2, 3, 4, 5];

console.log("\n--- Soma de elementos de um array com .reduce() ---");
console.log("Array original:", numeros);

/**
 * Função de callback para o método reduce que realiza a soma.
 * @param {number} acumulador - O valor acumulado até o momento.
 * @param {number} valorAtual - O elemento atual do array sendo processado.
 * @returns {number} A soma parcial dos elementos.
 */
const somaTotal = numeros.reduce((acumulador, valorAtual) => {
    // A cada iteração, o acumulador recebe a soma do acumulador anterior com o valor atual
    return acumulador + valorAtual;
}, 0); // O '0' é o valor inicial do acumulador

console.log("A soma de todos os elementos do array é:", somaTotal);

// Exemplo com outro array
const precos = [10.50, 20.00, 5.75, 15.25];
console.log("\nArray de preços:", precos);

const totalPrecos = precos.reduce((acc, preco) => acc + preco, 0);
console.log("O total dos preços é:", totalPrecos.toFixed(2)); // toFixed(2) para formatar como moeda
