/******************************************************************************
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
Descritivo: Implementa uma função recursiva para calcular o fatorial de um número.
            A recursão consiste em a função chamar a si mesma com um valor menor
            a cada vez, até atingir o caso base (n = 0 ou n = 1).
            Exemplo: fatorial(5) → 5 * 4 * 3 * 2 * 1 = 120
*******************************************************************************/

// Declaração da função fatorial que recebe o parâmetro n
function fatorial(n) {

  // CASO BASE: se n for 0 ou 1, o fatorial é 1
  // Sem esse caso base, a função chamaria a si mesma infinitamente
  if (n === 0 || n === 1) {
    return 1; // Encerra a recursão retornando 1
  }

  // CASO RECURSIVO: multiplica n pelo fatorial de (n - 1)
  // Exemplo: fatorial(5) retorna 5 * fatorial(4)
  //          fatorial(4) retorna 4 * fatorial(3)
  //          fatorial(3) retorna 3 * fatorial(2)
  //          fatorial(2) retorna 2 * fatorial(1)
  //          fatorial(1) retorna 1 → caso base atingido
  return n * fatorial(n - 1);
}

// Testa a função com diferentes valores:
console.log(fatorial(5)); // 5! = 120
console.log(fatorial(0)); // 0! = 1 (por definição matemática)
console.log(fatorial(7)); // 7! = 5040
