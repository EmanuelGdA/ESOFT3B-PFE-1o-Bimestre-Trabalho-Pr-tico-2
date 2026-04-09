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
Descritivo: Crie uma função `operacao(a, b, callback)` que execute o callback com a e b.
***************************/
const fs = require("fs");
const path = require("path");

function operacao(a, b, callback) {
  return callback(a, b);
}
operacao(7, 57, function (a, b) {
  console.log("Soma:", a + b);
});

operacao(7, 57, function (a, b) {
  console.log("Subtração:", a - b);
});

operacao(7, 57, function (a, b) {
  console.log("Multiplicação:", a * b);
});

operacao(70, 7, function (a, b) {
  console.log("Divisão:", a / b);
});
