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
Descritivo: Crie uma Higher-Order Function que receba uma função e retorne outra função que execute a primeira
duas vezes.
Explicação: Este código demonstra o conceito de Higher-Order Function (HOF).
             A função `executarDuasVezes` recebe outra função (`func`) como argumento
             e retorna uma nova função. Quando a nova função é invocada,
             ela executa a função original (`func`) duas vezes.
             No exemplo de uso, a função `dizerOi` é passada para `executarDuasVezes`,
             criando `novaFuncao` que, ao ser chamada, imprime "Oi!" duas vezes no console.
***************************/


function executarDuasVezes(func) {
    return function() {
        func();
        func();
    };
}

// Exemplo de uso
function dizerOi() {
    console.log("Oi!");
}

const novaFuncao = executarDuasVezes(dizerOi);
novaFuncao(); // Oi! Oi!
