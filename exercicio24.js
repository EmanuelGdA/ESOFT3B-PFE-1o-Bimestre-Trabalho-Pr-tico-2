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
Descritivo:  Crie uma função que converta graus Celsius para Fahrenheit
***************************/

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let tempC = 30;
let tempF = celsiusParaFahrenheit(tempC);

console.log("Temperatura em Fahrenheit:", tempF);

/*
Explicação:
A função recebe uma temperatura em Celsius e aplica a fórmula de conversão:
F = (C × 9/5) + 32.
O resultado é retornado e exibido no console.
*/