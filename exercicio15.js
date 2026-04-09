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
Descritivo: Use um `while` para contar regressivamente de 10 até 0.
***************************/

let i = 10; //declara a variável i com o valor 10

while (i >= 0) {   // while é uma estrutura de repetição que executa um bloco de código enquanto uma condição for verdadeira
     //enquanto i for maior ou igual a 0, faça o seguinte
    console.log("contagem-->", i); //exibe no terminal a contagem regressiva, mostrando o valor atual de i
    i--;
}