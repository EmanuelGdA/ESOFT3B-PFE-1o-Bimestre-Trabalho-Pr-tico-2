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
Descritivo:  Crie um programa que verifique se um número é par ou ímpar.
***************************/

// Define um número para verificação
let numero = 10;

// Verifica se o resto da divisão por 2 é igual a 0
if (numero % 2 === 0) {
    // Exibe mensagem caso o número seja par
    console.log("Número par");
} else {
    // Exibe mensagem caso o número seja ímpar
    console.log("Número ímpar");
}


/*
Explicação:
O programa define um número e utiliza o operador de módulo (%) para verificar o resto da divisão por 2.
Se o resto for igual a 0, o número é considerado par; caso contrário, é ímpar.
A estrutura condicional if/else é usada para decidir qual mensagem será exibida no console.
*/

