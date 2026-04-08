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
Descritivo: Imprime a tabuada do 5 de 1 a 10 usando um loop 'for'.
*******************************************************************************/

// Este código resolve o problema de exibir a tabuada do número 5.
// Ele utiliza um loop 'for' para iterar de 1 a 10 e, em cada iteração,
// calcula o produto do número 5 pelo valor atual do contador, imprimindo
// o resultado no console.

// Define o número para o qual a tabuada será calculada
const numero = 5;

console.log(`\n--- Tabuada do ${numero} ---`);

// Loop 'for' para iterar de 1 a 10
for (let i = 1; i <= 10; i++) {
    // Calcula o resultado da multiplicação
    const resultado = numero * i;
    // Imprime a operação e o resultado no console
    console.log(`${numero} x ${i} = ${resultado}`);
}
