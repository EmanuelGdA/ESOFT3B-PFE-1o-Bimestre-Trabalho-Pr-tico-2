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
Descritivo: Verifica se um array de frutas contém o elemento "Maçã"
            utilizando o método .includes(), que retorna true ou false.
*******************************************************************************/

// Declara um array chamado frutas com 4 elementos do tipo string
const frutas = ["Banana", "Maçã", "Uva", "Laranja"];

// O método .includes("Maçã") percorre o array e verifica se o valor existe
// Retorna true se encontrado, false caso contrário
if (frutas.includes("Maçã")) {

  // Entra aqui se "Maçã" foi encontrada no array
  console.log("Maçã encontrada no array!");

} else {

  // Entra aqui se "Maçã" NÃO foi encontrada no array
  console.log("Maçã não encontrada.");
}

// Teste adicional: verificando um elemento que não existe no array
console.log(frutas.includes("Abacaxi")); // Saída: false
