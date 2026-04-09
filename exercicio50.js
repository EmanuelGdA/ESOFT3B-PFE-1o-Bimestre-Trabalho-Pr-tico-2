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
Descritivo: Implemente um "Currying" simples: `soma(2)(3)` deve retornar 5.
***************************/

function soma(a) { // declara a função soma que recebe um parâmetro a
    return function(b) { // retorna uma função anônima que recebe um parâmetro b
        return a + b; // a função anônima retorna a soma de a e b, permitindo que a função soma seja chamada em um estilo de currying
                     //onde a primeira chamada recebe o primeiro número e retorna uma nova função que recebe o segundo número e retorna a soma dos dois números
    };
}

console.log(soma(19)(20)); //chama a função soma dando os numeros 19 e 20, e mostra o resultando.