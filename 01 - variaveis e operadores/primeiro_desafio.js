/*faça um programa para calcular o valor gasto de combustível em uma viagem.

Voce terá 3 varáveis, sendo elas:
1 - preço do combustível;
2 - valor médio de gasto médio de combustivel pelo carro;
3 - distância em KM da viagem;

imprima no console o valor que será gasto para realizar a esta viagem.*/


const precoCombustivel = 4.89;
const distanciaEmKm = 100;
const gastoMedio = 10;



let total = (distanciaEmKm / gastoMedio)*precoCombustivel;


console.log('Será gasto R$' + (total.toFixed(2)) + ' na viagem!')