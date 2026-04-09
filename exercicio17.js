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
Descritivo:  Calcule o fatorial de um número informado (ex: 5! = 5*4*3*2*1).
***************************/

// Define o número para cálculo do fatorial
let numero = 5;

// Inicializa o resultado com 1
let fatorial = 1;

// Loop que vai de 1 até o número informado
for (let i = 1; i <= numero; i++) {
    // Multiplica o valor atual pelo contador
    fatorial = fatorial * i;
}

// Exibe o resultado final
console.log("Fatorial de " + numero + " é " + fatorial);

/*
Explicação:
O programa calcula o fatorial de um número utilizando um loop for.
A variável fatorial começa com valor 1 e é multiplicada progressivamente pelos números de 1 até o valor informado.
Ao final do loop, o resultado acumulado representa o fatorial do número.
*/