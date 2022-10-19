/*
const pesoKg = 80;
const alturaM = 1.80;
const ICM = pesoKg / (alturaM*alturaM);

if (ICM < 18.5 ) {
    console.log("Abaixo do peso!");
} else if (ICM >= 18.5 && ICM <= 25 ){
    console.log("Peso normal!");
} else if (ICM > 25 && ICM <= 40 ){
        console.log("Obesidade");  
} else{
    console.log("Obesidade grave");
}*/

function calcularIMC(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarIMC(ICM){
    if (ICM < 18.5 ) {
        return("Abaixo do peso!");
    } else if (ICM >= 18.5 && ICM <= 25 ){
        return("Peso normal!");
    } else if (ICM > 25 && ICM <= 40 ){
            return("Obesidade");  
    } else{
        return("Obesidade grave");
    }
}
//Codigo Main
(function() /*main()*/ {
    const peso = 80;
    const altura = 1.80;
    
    const IMC = calcularIMC(peso, altura);
    console.log(classificarIMC(IMC));
})(); //Função autoexecutável

//main();