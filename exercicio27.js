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
Descritivo:Escreva uma função que receba um número e retorne `true` se for primo, `false` caso contrário.
***************************/
const fs = require("fs");
const path = require("path");

function ehPrimo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
const numero = 21;
const resultado = ehPrimo(numero);
console.log(`O número ${numero} é primo?`, resultado);

/*
Explicação geral:

O código resolve o problema criando uma função que verifica se um número é primo. 
Primeiramente, é feita uma validação para números menores ou iguais a 1, que não são considerados primos. 
Em seguida, é utilizado um loop que testa divisões do número por todos os valores entre 2 e ele mesmo (exclusivo). 
Se o número for divisível por qualquer um desses valores, significa que ele não é primo e a função retorna false. 
Caso nenhuma divisão exata seja encontrada, o número é considerado primo e a função retorna true. 
Por fim, a função é chamada com um valor de exemplo e o resultado é exibido no console.
*/
