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
Descritivo: Crie um loop que pare (`break`) quando encontrar o número 7 em uma contagem de 1 a 10.
***************************/

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Encontrou o 7, parando...");
        break;
    }
    console.log(i);
}

/*
Explicação:
O loop percorre os números de 1 a 10.
Quando encontra o número 7, o comando break interrompe a execução do loop.
Assim, os números após o 7 não são exibidos.
*/
