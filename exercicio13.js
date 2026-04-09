/******************************************************************************
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
Descritivo: Calcula a soma de todos os números de 1 a 100 usando um loop for.
            A cada iteração, o valor de i é acumulado na variável soma.
            Ao final do loop, soma conterá o resultado 5050.
*******************************************************************************/

// Declara a variável soma e inicializa com 0
// Ela vai acumular os valores a cada volta do loop
let soma = 0;

// Loop for que começa em i = 1 e vai até i = 100 (i <= 100)
// A cada iteração, i é incrementado em 1 (i++)
for (let i = 1; i <= 100; i++) {

  // Adiciona o valor atual de i à variável soma
  // Equivale a: soma = soma + i
  soma += i;
}

// Exibe o resultado final no console
// O resultado esperado é 5050
console.log(`A soma de 1 a 100 é: ${soma}`);
