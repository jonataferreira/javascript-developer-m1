const precoGasolina = 4.89;
const precoAlcool = 2.99;
const tipoCombustivel = 'gasolina';
const isGasoline = (tipoCombustivel === 'gasolina');
const distanciaEmKm = 100;
const gastoMedio = 10;
let total;

if (isGasoline){
    total = (distanciaEmKm / gastoMedio)*precoGasolina;
    //console.log('Será gasto R$' + (total.toFixed(2)) + ' na viagem!');
} else{
    total = (distanciaEmKm / gastoMedio)*precoAlcool;
    //console.log('Será gasto R$' + (total.toFixed(2)) + ' na viagem!');
}

console.log('Será gasto R$' + (total.toFixed(2)) + ' na viagem!');

