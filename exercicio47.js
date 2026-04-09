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
Descritivo: Encadeie `.filter()` e `.map()`: filtre pares e depois eleve ao quadrado.
***************************/

let numeros = [0, 2, 4, 9, 12, 6];

let resultado = numeros
    .filter(num => num % 2 === 0)
    
    .map(num => num * num);
    console.log("Filtrados:", filtrados);

console.log(resultado);