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
Descritivo:Escreva uma função que receba dois números e retorne o maior deles.
***************************/
const fs = require("fs");
const path = require("path");

function maiorNumero(num, num1) {
  if (num > num1) {
    return num;
  } else if (num1 > num) {
    return num1;
  } else {
    return "Os números são iguais.";
  }
}

// Exemplo de uso:
const numero1 = 10;
const numero2 = 20;
const resultado = maiorNumero(numero1, numero2);
console.log("O maior número é:", resultado);


/*
Explicação geral:

O código resolve o problema criando uma função chamada "maiorNumero" que recebe dois números como parâmetros. 
Dentro da função, são feitas comparações utilizando estruturas condicionais (if/else) para identificar qual dos dois valores é maior. 
Se o primeiro número for maior, ele é retornado; se o segundo for maior, ele é retornado; e, caso os dois sejam iguais, a função retorna uma mensagem informando isso. 
Por fim, a função é chamada com dois valores de exemplo e o resultado é exibido no console.
*/
