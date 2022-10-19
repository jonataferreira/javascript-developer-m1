/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/


//Criando o objeto 'Carro'
class Carro {
    marca;
    cor;
    kmLitro;

    constructor(marca, cor, kmLitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmLitro =  kmLitro;
    }

    descrever() {
        console.log(`Meu carro é um ${this.marca} da cor ${this.cor}`);  
    }
}

//Calculando o valor da viagem
function calcularValorViagem(carro, precoCombustivel, kmViagem) {
    valor = kmViagem * precoCombustivel / carro.kmLitro;
    return (valor);
}

//Função principal
function main () {
const fox = new Carro('Fox', 'Verde', 12); //instanciando o carro Fox
console.log('A viagem vai custar R$ ' + (calcularValorViagem(fox, 3.19, 40)).toFixed(2)) //executando o calculo da viagem
} 

main();