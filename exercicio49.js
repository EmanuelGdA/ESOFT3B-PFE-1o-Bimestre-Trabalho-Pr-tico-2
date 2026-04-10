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
Descritivo: Crie uma função `criarMultiplicador(multiplicador)` que retorne uma função que multiplica qualquer número
pelo multiplicador (Closure).
Explicação: Este código demonstra o conceito de Closure em JavaScript.
             A função `criarMultiplicador` recebe um `multiplicador` e retorna uma nova função.
             Essa nova função "lembra" o valor do `multiplicador` do seu ambiente léxico de criação,
             mesmo depois que `criarMultiplicador` já terminou sua execução.
             Assim, `dobrar` e `triplicar` são funções que, ao serem chamadas com um número,
             multiplicam esse número pelo valor do `multiplicador` que foi definido quando foram criadas
             (2 e 3, respectivamente).
***************************/


function criarMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
}

// Exemplo de uso
const dobrar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log(dobrar(5));    // 10
console.log(triplicar(5)); // 15
