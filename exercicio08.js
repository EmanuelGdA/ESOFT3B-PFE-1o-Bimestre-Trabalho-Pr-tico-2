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
Descritivo: Verifique se três lados informados podem formar um triângulo e, se sim, classifique-o (Equilátero,
Isósceles, Escaleno).
***************************/

/******************************************************************************
Curso: Engenharia de Software
Disciplina: Programação Front-End
Professor: José Carlos Flores
Descritivo: Verificar se três lados formam um triângulo e classificá-lo
*******************************************************************************/

let a = 5;
let b = 5;
let c = 5;

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log("Triângulo Equilátero");
    } else if (a === b || a === c || b === c) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Não forma um triângulo");
}

/*
Explicação:
O programa verifica primeiro se os três lados podem formar um triângulo usando a regra da desigualdade triangular.
Se for válido, ele classifica:
- Todos iguais → Equilátero
- Dois iguais → Isósceles
- Todos diferentes → Escaleno
Caso contrário, informa que não é um triângulo.
*/
