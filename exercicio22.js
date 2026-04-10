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
Descritivo: Crie uma função `areaRetangulo(base, altura)` que retorne a área.
Explicação: Este código define uma função chamada `areaRetangulo` que recebe dois parâmetros:
             `base` e `altura`. A função calcula a área de um retângulo multiplicando a base pela altura
             e retorna o resultado. Um exemplo de uso demonstra como chamar a função com valores de 5
             para a base e 10 para a altura, e então imprime o resultado no console.
***************************/


function areaRetangulo(base, altura) {
    return base * altura;
}

// Exemplo de uso
let resultado = areaRetangulo(5, 10);
console.log("Área:", resultado);
