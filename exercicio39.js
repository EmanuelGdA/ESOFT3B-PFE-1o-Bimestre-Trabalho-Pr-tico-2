/**************************
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
Descritivo: Ordene um array de números em ordem crescente
***************************/

let numbers = [76, 531, 2, 50, 67]; // declara a variável numbers e atribui um array de números a ela

numbers.sort((a, b) => a - b); // usa o método sort() para ordenar o array numbers. A função de comparação (a, b) => a - b 
                              //é usada para garantir que os números sejam ordenados em ordem crescente. Se a - b for negativo
                              //a será ordenado antes de b, se for positivo b será ordenado antes de a, e se for zero a ordem não muda.

console.log(numbers); // exibe o array numbers ordenado no terminal, mostrando os números em ordem crescente

