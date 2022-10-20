/*1) Crie um programa que dado um número imprima a sua tabuada.*/


   const n = 3;

   if (!(n%2 == 0)) {
    for (let i = 0; i < 11; i++) {
        console.log(n + ' x ' + i + ' = ' + (n * i));
    } 
   } else {
        console.log('Numero par!')
    }
   