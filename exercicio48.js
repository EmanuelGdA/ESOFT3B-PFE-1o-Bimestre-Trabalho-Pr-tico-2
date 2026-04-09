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
Descritivo:Use `.reduce()` para transformar um array de objetos em um objeto somatório (ex: somar salários)
***************************/

let funcionarios = [
    { nome: "Euclides", salario: 2000 },
    { nome: "Gabriel", salario: 3000 },
    { nome: "João", salario: 2500 }
];

let totalSalarios = funcionarios.reduce((total, pessoa) => {
    return total + pessoa.salario;
}, 0);

console.log("Total de salários:", totalSalarios);

/*
Explicação:
O método reduce() percorre o array acumulando os valores.
A cada iteração, soma o salário do funcionário ao total.
O valor inicial é 0, e ao final temos a soma de todos os salários.
*/