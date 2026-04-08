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
Descritivo: Implementa um sistema de login simples verificando usuário e senha.
*******************************************************************************/

// Este código resolve o problema de criar um sistema de login básico.
// Ele define um usuário e uma senha corretos e, em seguida, compara
// as credenciais fornecidas com as credenciais esperadas. Se ambas
// corresponderem, o acesso é permitido; caso contrário, é negado.

// Define as credenciais corretas para o login
const usuarioCorreto = "admin";
const senhaCorreta = "1234";

// --- Teste 1: Credenciais corretas ---
// Simula a entrada de um usuário com as credenciais corretas
const usuarioDigitado1 = "admin";
const senhaDigitada1 = "1234";

console.log("\n--- Teste com credenciais corretas ---");
// Verifica se o usuário e a senha digitados correspondem aos corretos
if (usuarioDigitado1 === usuarioCorreto && senhaDigitada1 === senhaCorreta) {
    console.log("Acesso Permitido");
} else {
    console.log("Acesso Negado");
}

// --- Teste 2: Credenciais incorretas ---
// Simula a entrada de um usuário com credenciais incorretas
const usuarioDigitado2 = "user";
const senhaDigitada2 = "0000";

console.log("\n--- Teste com credenciais incorretas ---");
// Verifica se o usuário e a senha digitados correspondem aos corretos
if (usuarioDigitado2 === usuarioCorreto && senhaDigitada2 === senhaCorreta) {
    console.log("Acesso Permitido");
} else {
    console.log("Acesso Negado");
}
