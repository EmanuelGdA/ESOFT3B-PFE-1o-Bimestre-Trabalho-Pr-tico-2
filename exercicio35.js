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
Descritivo:Use `.find()` para encontrar o primeiro número maior que 10 em um array
***************************/
const fs = require("fs");
const path = require("path");

const num = [1, 0, 6, 4, 3, 9, 12, 8, 19, 2];
const numMaiQueDez = num.find((num) => num > 10);

if (numMaiQueDez !== undefined) {
  console.log("O primeiro número que é maior que 10 é:", numMaiQueDez);
} else {
  console.log("Não há números que sejam maiores que 10 no array.");
}
