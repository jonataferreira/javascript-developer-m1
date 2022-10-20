/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.*/


    const numero = []; //numero

    numero.push(10); 
    numero.push(11);
    numero.push(10);

    for (let i = 0; i < numero.length; i++) {
        if (numero[i]%2 == 0) {
            console.log(numero[i]);
        }
    }
