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
Descritivo: Calcule o IMC (Peso / Altura²) e classifique (Abaixo do peso, Normal, Sobrepeso, Obesidade)
***************************/


// Colocar os dados pra fazer funcionar
let peso = 75;
let altura = 1.66;

 // validação
if (peso <=0 || altura <= 0) {
    console.log("provavelmente é um atómo"); 
} else {
    let imc = peso / (altura * altura);

    console.log("IMC:", imc.toFixed(2));

    if (imc < 18.5) {
        console.log("Humano Leve");
    } else if (imc < 25) {
        console.log("Humano Normal");
    } else if (imc < 30) {
        console.log("Humano Forte, mas cuidado com o coração");
    } else {
        console.log("Provavelmente é um hipopótamo ou um elefante");
    }
}