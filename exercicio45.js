/******************************************************************************
Curso: Engenharia de Software
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25001118-2 -  Emanuel Gomes de Almeida 
             25033056-2 -  Gabriel Michels Cubas
             25164719-2 -  Rafael Maia
             25291090-2 -  João Lucas Veiga de Carvalho
             25089203-2 -  Vitor Gabriel Vieira Baldão
             25087132-2 -  Matheus Henrique Vieira Baldão
             25363242-2 -  Euclides Benedito Modesto Coelho Neto
             25357453-2 -  Leonardo De Jesus Sabino Flugel
Data: 05 de Março de 2026
Descritivo: Usa o método .forEach() com uma Arrow Function para percorrer
            um array e imprimir cada item no console.
            O .forEach() executa a função passada para cada elemento do array,
            uma vez por elemento, na ordem em que aparecem.
*******************************************************************************/

// Declara um array de strings com 4 itens de material escolar
const itens = ["Caneta", "Caderno", "Borracha", "Régua"];

// .forEach() percorre cada elemento do array automaticamente
// A Arrow Function (item => ...) recebe o elemento atual como parâmetro "item"
// Para cada elemento, executa o console.log imprimindo o valor no console
itens.forEach(item => console.log(item));

// Saída esperada:
// Caneta
// Caderno
// Borracha
// Régua

// Exemplo adicional: forEach com índice (segundo parâmetro opcional)
// O índice indica a posição do elemento no array (começa em 0)
itens.forEach((item, indice) => {
  // Imprime o índice junto com o nome do item
  console.log(`${indice}: ${item}`);
});

// Saída esperada:
// 0: Caneta
// 1: Caderno
// 2: Borracha
// 3: Régua
