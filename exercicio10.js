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
Descritivo:  Verifique se um caractere informado é uma vogal ou consoante.
***************************/

// setto uma variável fixa para o caractere a ser verificado
let caractere = 'A';

// converto o caractere para minúsculo para facilitar a comparação caso o usuário digite uma letra maiúscula
caractere = caractere.toLowerCase(); 

// uso a estrutura if/else para verificar se o caractere é uma vogal ou consoante, usando a comparação == para comparar o caractere com as vogais (a, e, i, o, u) e o operador lógico || para verificar se o caractere é igual a qualquer uma das vogais  
if (caractere == 'a' || caractere == 'e' || caractere == 'i' || caractere == 'o' || caractere == 'u') {
    console.log("O caractere é uma vogal!");
} else { 
    console.log("O caractere é uma consoante!");
}