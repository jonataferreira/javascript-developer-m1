/*
5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
Ex de lista = [2, 7, 3, 8, 10, 4]
*/

const nota = []; //notas
let total =0;

    nota.push(4); 
    nota.push(11);
    nota.push(10);

    for (let i = 0; i < nota.length; i++) {
        total += nota[i];
    }

    media = (total / nota.length).toFixed(1);

    if (media <=  5) {
        console.log('aluno de recuperação com nota: '+ media);
    } else {
        console.log('aluno de aprovado com nota: '+ media);
    }