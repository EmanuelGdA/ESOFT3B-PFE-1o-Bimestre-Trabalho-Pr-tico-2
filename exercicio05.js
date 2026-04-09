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
Descritivo: Verifica se um ano é bissexto.
            Um ano é bissexto se for divisível por 4, mas não por 100,
            exceto quando também for divisível por 400.
*******************************************************************************/

// Declaração da função que recebe o ano como parâmetro
function eBissexto(ano) {

  // Condição composta:
  // (ano % 4 === 0 && ano % 100 !== 0) → divisível por 4 E não divisível por 100
  // || ano % 400 === 0                 → OU divisível por 400 (exceção da regra dos 100)
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {

    // Se a condição for verdadeira, o ano É bissexto
    console.log(`${ano} é bissexto.`);

  } else {

    // Caso contrário, o ano NÃO é bissexto
    console.log(`${ano} não é bissexto.`);
  }
}

// Testes com diferentes anos:
eBissexto(2000); // Divisível por 400 → bissexto
eBissexto(1900); // Divisível por 100 mas não por 400 → não bissexto
eBissexto(2024); // Divisível por 4 e não por 100 → bissexto
eBissexto(2023); // Não divisível por 4 → não bissexto
