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
Descritivo: Cria uma função que retorna um objeto contendo nome e idade.
*******************************************************************************/

// Este código resolve o problema de criar uma função que constrói e retorna
// um objeto JavaScript. O objeto é composto por duas propriedades: 'nome' e 'idade'.
// A função recebe esses dois valores como parâmetros, encapsula-os em um objeto
// e o retorna, demonstrando a criação e manipulação básica de objetos em JavaScript.

/**
 * Cria um objeto representando uma pessoa com nome e idade.
 * @param {string} nome - O nome da pessoa.
 * @param {number} idade - A idade da pessoa.
 * @returns {object} Um objeto com as propriedades 'nome' e 'idade'.
 */
function criarPessoa(nome, idade) {
    // Retorna um novo objeto com as propriedades nome e idade
    return {
        nome: nome,
        idade: idade
    };
}

// Exemplo de uso da função:
console.log("\n--- Exemplo de uso da função criarPessoa ---");

// Chama a função para criar um objeto 'pessoa1'
const pessoa1 = criarPessoa("Ana Silva", 30);
console.log("Pessoa 1:", pessoa1);
console.log("Nome da Pessoa 1:", pessoa1.nome);
console.log("Idade da Pessoa 1:", pessoa1.idade);

// Chama a função para criar um objeto 'pessoa2'
const pessoa2 = criarPessoa("Carlos Souza", 25);
console.log("Pessoa 2:", pessoa2);
console.log("Nome da Pessoa 2:", pessoa2.nome);
console.log("Idade da Pessoa 2:", pessoa2.idade);
