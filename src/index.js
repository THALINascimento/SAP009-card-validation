import { isValid } from "./validator.js"; //quando eu coloco {} eu pego apenas as funções
console.log(isValid(1234445566667777));

//manipulação do DOM
//c ou v pode ser qual que nome para usar no js
const cardNumber = document.querySelector("#numero"); //chamar id ou classe do html
const button = document.querySelector("#botao"); // crie variavel para acontecer o evento da validação no clique do botão a seguir
const message = document.getElementById("mensagem"); //criei variavel para aparecer o resultado da validação
button.addEventListener("click", cc);
//adicionar evento de clique no botão para ouvir a função
//criar função com as regras de digitação
//src/index.js: aqui você deve escutar os eventos de DOM, chamar validator.isValid()e validator.maskify().
console.log("testea"); //teste da função click do botão ok
function cc() {
  console.log("testeb");
  //criar uma função com parametros de validação após preenchimento do form e click no botão
  //const cardArray = []; //como colocar no arr para manipular posições ?
  const digit = cardNumber.value;
  const invert = digit.split("").reverse(); //numeros digitados invertidos;
  // = >= 48 && <= 57 //a identificação no Js dos  caracteres são numeros para aceitar somente numeros[0-9] usar padrão patern ?
  console.log(digit);
  console.log(invert);

  if (
    //criei uma variável relativa que recebe o conteudo digitado na constante que recebe o valor do input
    //VAI SER SOMENTE A MENSAGEM DE INTERAÇÃO COM A PERSONA NÃO VALIDA NADA SEM O LUHN , É ISSO THALITA ?

    digit.length <= 13 ||
    digit === "0000000000000000" ||
    digit === "000000000000000" ||
    digit === "00000000000000" ||
    digit === " "
  ) {
    console.log(digit); //teste de retorno do numero digitado no input
    return (message.innerHTML =
      "Dados inválidos, por favor verifique o cartão e tente novamente!");
  } else {
    return (message.innerHTML = "Por favor, digite o numero do cartão");
  }
}

//Até aqui tudo funcionando ALELUIA SOCORRO DEUS
