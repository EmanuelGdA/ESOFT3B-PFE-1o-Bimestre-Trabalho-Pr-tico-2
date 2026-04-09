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
Descritivo:  Gere os primeiros 10 números da sequência de Fibonacci.
***************************/

// setto as duas primeiras variáveis da sequência de Fibonacci, que são 0 e 1
let a = 0;
let b = 1;

console.log(a); // imprimo o primeiro número da sequência de Fibonacci, que é 0
console.log(b); // imprimo o segundo número da sequência de Fibonacci, que é 1

// uso um loop for para gerar os próximos 8 números da sequência de Fibonacci, já que os dois primeiros números já estão definidos
for (let i = 0; i < 8; i++) {
    // calculo o próximo número da sequência de Fibonacci somando os dois números anteriores (a e b) e armazeno o resultado em uma variável chamada "proximo"
    let proximo = a + b;

    // imprimo o próximo número da sequência de Fibonacci no console
    console.log(proximo);

    // atualizo as variáveis a e b para os próximos números da sequência de Fibonacci, onde a recebe o valor de b e b recebe o valor de proximo
    a = b;
    b = proximo;
}