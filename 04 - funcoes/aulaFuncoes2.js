/*const precoBase = 100;
const tipoPagamento = 3;

if (tipoPagamento === 1) {
    console.log("Valor a pagar: R$ " + ((precoBase)-(precoBase*0.10)).toFixed(2));
} else if (tipoPagamento === 2 ||  tipoPagamento === 3){
    console.log("Valor a pagar: R$ " + ((precoBase)-(precoBase*0.15)).toFixed(2));
} else if (tipoPagamento === 4){
    console.log("Valor a pagar: R$ " + precoBase.toFixed(2));
} else{
    console.log("Valor a pagar: R$ " + (precoBase+precoBase*0.10).toFixed(2));
}               Transpassando para Funções */


//Declaração das funções auxiliares
function aplicarDesconto(preco, desconto) {
  const pDesconto = desconto / 100;
  return (preco - preco * pDesconto).toFixed(2);
}

function comprarProduto(precoBase, tipoPagamento) {
  if (tipoPagamento === 1) {
    desconto = 10;
    return "Valor a pagar: R$ " + aplicarDesconto(precoBase, desconto);
  } else if (tipoPagamento === 2 || tipoPagamento === 3) {
    desconto = 15;
    return "Valor a pagar: R$ " + aplicarDesconto(precoBase, desconto);
  } else if (tipoPagamento === 4) {
    desconto = 0;
    return "Valor a pagar: R$ " + aplicarDesconto(precoBase, desconto);
  } else {
    desconto = -10;
    return "Valor a pagar: R$ " + aplicarDesconto(precoBase, desconto);
  }
}

//função principal declarada de forma autoexecutavel
(function main() {
  const precoBase = 100;
  const tipoPagamento = 5;
  console.log(comprarProduto(precoBase, tipoPagamento));
})(); //função autoexecutável

//main();
