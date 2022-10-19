/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/


//Criando o objeto 'Pessoa'
class Pessoa {
    nome;
    peso;
    altura;
    //IMC;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    //  this.IMC =  ( peso / ( Math.pow(altura, 2) ) ).toFixed(2) ; //resolvendo o IMC com calculo dentro do atributo IMC
    }

    //Resolvendo o IMC com método próprio
    calcularIMC(){ 
       return  (this.peso / Math.pow(this.altura, 2) ).toFixed(2);
    }

}


//Função principal
function main () {
const jose = new Pessoa('José', 70, 1.75); //instanciando a pessoa José
console.log('José tem ' + jose.calcularIMC() + ' de IMC!') //Chamando o método ===============  jose.IMC chamaria o atributo
} 

main();