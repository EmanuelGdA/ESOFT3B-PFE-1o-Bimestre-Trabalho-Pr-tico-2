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
Descritivo:  Use `.filter()` para criar um novo array apenas com números pares.
***************************/

// crio um array de números de 1 a 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// uso .filter() para criar um array novo com o nome de numerosPares (apenas para exemplificar) que contém apenas os números pares da array chama numeros usando uma função que verifica se o resto de uma divisão por 2 é igual a 0, ou seja, se o número é par. O resultado é um novo array que contém apenas os números pares.
let numerosPares = numeros.filter(n => n % 2 === 0);
console.log(numerosPares);

