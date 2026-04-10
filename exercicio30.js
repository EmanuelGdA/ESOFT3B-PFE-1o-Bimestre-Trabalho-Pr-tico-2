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
Descritivo: Crie uma função que receba uma string e retorne-a invertida.
Explicação: Este código define uma função `inverterString` que recebe uma string como entrada.
             Para inverter a string, ela primeiro a divide em um array de caracteres usando `split("")`,
             depois inverte a ordem dos elementos do array com `reverse()`,
             e finalmente junta os caracteres de volta em uma string usando `join("")`.
             Um exemplo de uso demonstra a função invertendo a string "Olá mundo" para "odnum álO".
***************************/


function inverterString(texto) {
    return texto.split("").reverse().join("");
}

// Exemplo de uso
console.log(inverterString("Olá mundo")); // odnum álO
