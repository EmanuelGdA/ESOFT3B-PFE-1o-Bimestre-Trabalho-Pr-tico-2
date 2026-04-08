/******************************************************************************
Curso: Engenharia de Software
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25001118-2 - Emanuel Gomes de Almeida 
             25033056-2 - Gabriel Michels Cubas
             25164719-2 - Rafael Maia
             25291090-2 - João Lucas Veiga de Carvalho
             25089203-2 - Vitor Gabriel Vieira Baldão
             25087132-2 - Matheus Henrique Vieira Baldão
             25363242-2 - Euclides Benedito Modesto Coelho Neto
             25357453-2 - Leonardo De Jesus Sabino Flugel
Data: 05 de Março de 2026
Descritivo: Demonstra o uso de setTimeout com uma Arrow Function para atrasar a execução.
*******************************************************************************/

// Este código resolve o problema de executar uma função após um determinado
// período de tempo, utilizando a função `setTimeout` em conjunto com uma
// Arrow Function. A Arrow Function é uma forma concisa de escrever funções
// em JavaScript, e `setTimeout` é ideal para agendar tarefas assíncronas.

console.log("\n--- Demonstração de setTimeout com Arrow Function ---");
console.log("Mensagem inicial: O programa vai imprimir 'Olá' em 2 segundos...");

// Usa setTimeout para agendar a execução de uma função após 2000 milissegundos (2 segundos)
setTimeout(() => {
    // Esta Arrow Function será executada após o atraso
    console.log("Olá");
    console.log("Mensagem final: 'Olá' foi impresso após 2 segundos.");
}, 2000); // 2000 milissegundos = 2 segundos

console.log("Esta mensagem aparece imediatamente, antes do 'Olá'.");
