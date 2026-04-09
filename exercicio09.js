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
Descritivo:  Crie um programa que aplique um desconto de 10% se a compra for acima de R$ 100,00.
***************************/

// Define o valor da compra
let valorCompra = 150;

// Verifica se o valor é maior que 100
if (valorCompra > 100) {
    // Calcula 10% de desconto
    let desconto = valorCompra * 0.10;

    // Subtrai o desconto do valor original
    let valorFinal = valorCompra - desconto;

    // Exibe o valor com desconto
    console.log("Valor com desconto: R$ " + valorFinal);
} else {
    // Exibe o valor sem desconto
    console.log("Valor sem desconto: R$ " + valorCompra);
}

/*
Explicação:
O código verifica se o valor da compra é maior que 100.
Caso seja, calcula 10% de desconto sobre o valor e subtrai esse desconto do total.
Se não atingir esse valor, o preço permanece o mesmo.
A decisão é feita utilizando uma estrutura condicional if/else.
*/