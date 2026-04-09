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
Descritivo: Use `.map()` para dobrar todos os valores de um array numérico.
***************************/

// Cria um array de números
let numeros = [1, 2, 3, 4, 5];

// Utiliza map para criar um novo array com valores dobrados
let dobrados = numeros.map(function(numero) {
    // Retorna o dobro de cada número
    return numero * 2;
});

// Exibe o novo array
console.log(dobrados);

/*
Explicação:
O programa utiliza o método map() para percorrer um array de números.
Para cada elemento, é aplicada uma função que retorna o dobro do valor.
O resultado é um novo array contendo todos os valores transformados.
*/