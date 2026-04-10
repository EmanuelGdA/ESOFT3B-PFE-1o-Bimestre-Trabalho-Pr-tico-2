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
Descritivo: Receba um número de 1 a 7 e exiba o dia da semana correspondente (use `switch`).
***************************/


let numero = Number(prompt("Digite um número de 1 a 7:"));
let dia;

switch (numero) {
    case 1:
        dia = "Domingo";
        break;
    case 2:
        dia = "Segunda-feira";
        break;
    case 3:
        dia = "Terça-feira";
        break;
    case 4:
        dia = "Quarta-feira";
        break;
    case 5:
        dia = "Quinta-feira";
        break;
    case 6:
        dia = "Sexta-feira";
        break;
    case 7:
        dia = "Sábado";
        break;
    default:
        dia = "Número inválido!";
}

alert(dia);

/*
Explicação geral:

O código resolve o problema solicitando ao usuário um número entre 1 e 7 e utilizando a estrutura "switch" para associar esse número a um dia da semana. 
Cada caso do switch corresponde a um número específico, definindo o nome do dia correspondente. 
Caso o número digitado não esteja entre 1 e 7, o bloco "default" é executado, retornando uma mensagem de número inválido. 
Por fim, o resultado é exibido ao usuário por meio de um alerta.
*/
