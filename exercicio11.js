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
Descritivo:Use um `for` para imprimir os números de 1 a 10 no console.
***************************/
const fs = require("fs");
const path = require("path");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/*
Explicação geral:

O código resolve o problema utilizando uma estrutura de repetição "for" para percorrer uma sequência de números. 
A variável "i" é iniciada com o valor 1 e, a cada repetição, é incrementada em 1 até chegar ao valor 10. 
Durante cada iteração do laço, o valor atual de "i" é exibido no console, resultando na impressão dos números de 1 a 10 em ordem crescente.
*/
