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
Descritivo:Dado um array de números, use um loop para encontrar o maior valor
***************************/
const fs = require("fs");
const path = require("path");

function encontrarMaiVal(array) {
  if (array.length === 0) {
    return "array vazio.";
  }

  let maiVal = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maiVal) {
      maiVal = array[i];
    }
  }

  return maiVal;
}
const num = [860, 23, 15, 75, 31];
const maior = encontrarMaiVal(num);
console.log("O maior valor dentro do array é:", maior);
