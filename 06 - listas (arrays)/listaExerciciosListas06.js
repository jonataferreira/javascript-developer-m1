/*
6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
Ex de lista de notas = [2, 7, 3, 8, 10, 4]*/

const nota = []; //notas
let notaMaior = 0;
let notaMenor = 0;

    nota.push(4); 
    nota.push(11);
    nota.push(10);


    for (let i = 0; i < nota.length; i++) {
        if (notaMaior <=  nota[i]) {
            notaMaior = nota[i];
        }
        if (notaMenor >=  nota[i] || notaMenor == 0) {
            notaMenor = nota[i];
        }
    }

    console.log('A maior nota é: '+ notaMaior);
    console.log('A menor nota é: '+ notaMenor);