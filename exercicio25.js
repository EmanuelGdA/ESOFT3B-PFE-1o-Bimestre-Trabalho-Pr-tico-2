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
Descritivo: Faça uma função que receba um array e retorne a soma de seus elementos.
***************************/

// Cria uma função que recebe um array como parâmetro
function somaArray(numeros) {
    // Inicializa variável para armazenar a soma
    let soma = 0;

    // Percorre todos os elementos do array
    for (let i = 0; i < numeros.length; i++) {
        // Soma cada elemento ao total
        soma += numeros[i];
    }

    // Retorna o resultado final
    return soma;
}

// Define um array de números
let lista = [1, 2, 3, 4, 5];

// Exibe o resultado da soma
console.log("Soma do array:", somaArray(lista));

/*
Explicação:
Foi criada uma função que recebe um array de números como parâmetro.
O código percorre todos os elementos do array utilizando um loop e soma cada valor em uma variável acumuladora.
Ao final, a função retorna a soma total dos elementos.
*/