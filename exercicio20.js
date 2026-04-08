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
Descritivo: Demonstra o uso do loop 'do...while' garantindo sua execução mínima.
*******************************************************************************/

// Este código resolve o problema de demonstrar a característica principal do loop 'do...while':
// a garantia de que o bloco de código dentro do loop será executado pelo menos uma vez,
// antes mesmo da condição ser avaliada. Isso é útil para situações onde uma ação inicial
// é sempre necessária, independentemente da condição de continuação.

// Inicializa uma variável para ser usada no loop
let contador = 0;

console.log("\n--- Demonstração do loop do...while ---");

// O loop 'do...while' executa o bloco de código primeiro
do {
    console.log(`Contador: ${contador}`);
    contador++; // Incrementa o contador a cada execução
} while (contador < 3); // A condição é verificada após a primeira execução

console.log("Loop finalizado. O contador atingiu ou ultrapassou 3.");

// Exemplo onde a condição é falsa desde o início, mas o 'do' executa uma vez
let nuncaEntrariaNoWhile = 5;
console.log("\n--- Exemplo com condição inicialmente falsa ---");
do {
    console.log(`Este console.log será executado uma vez. Valor: ${nuncaEntrariaNoWhile}`);
    nuncaEntrariaNoWhile++;
} while (nuncaEntrariaNoWhile < 5); // Condição é falsa (5 não é menor que 5)

console.log("Loop 'do...while' com condição falsa inicial finalizado.");
