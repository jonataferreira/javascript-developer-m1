/*
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/


   const nome = []; //nomes

   nome.push('João Victor'); 
   nome.push('Victor Hugo');
   nome.push('Vasco da Gama');
   
   for (let i = 0; i < nome.length; i++) {
        nome = nome[i];
       if (nome[0] === 'V') {
           console.log(nome[i]);
       }
   }