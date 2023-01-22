import validator from './validator.js';
console.log (validator)

//manipulação do DOM
//cons ou variavel pode ser qual que nome para usar no js
const cardNumber = document.querySelector("#numero")//chamar id ou classe do html
const button = document.querySelector('#botao')// crie variavel para acontecer o evento da validação no clique do botão a seguir
const message = document.getElementById('mensagem') //criei variavel para aparecer o resultado da validação


button.addEventListener("click", cc)
//adicionar evento de clique no botão para ouvir a função
//criar função com as regras de digitação

console.log("baby") //teste da função click do botão ok
function cc(){
 //criar uma função com parametros de validação após preenchimento do form e click no botão 
let digitadow = cardNumber.value;
//criei uma variável relativa que recebe o conteudo digitado na constante que recebe o valor do input 

  
if (
  digitadow.length <=13
  ){
  console.log(digitadow) //teste de retorno do numero digitado no input 
} {
//return(message.innerHTML= "Dados inválidos, por favor verifique o cartão e tente novamente! :(")

}
//digitadow.reverse //numero digitado fica invertido
//retornar valor invertido em um array
//dobrar numeros na posição impar
//numeors multiplicados devem ter apenas 1 digito então -9
//somar todos os numeros 
//mod 10 se resto  0 verdaideiro se não falso

}
//Até aqui tudo funcionando ALELUIA SOCORRO DEUS

//else if(digitadow = ""){
//return(message.innerHTML= "Por favor, digite o numero do cartão")

/*addEventListener('input', function() {masknumber())});
function maskify (masknumber){
  let numeroCartao = cardNumber.value;
  if (cardNumber.length <=16) {
    //como delimitar quantidade valida de caracteres e fazer aceitação de apenas numeros?
    cardNumber.value
    //pegar valor digitado no imput do numero do cartão e ocultar os digitos subistituindo por #
    //primeiro precisa validar ? validate ou isvalid ?
    return 
  }

  if (criar nova variavel ? == numeroCartao ) {
    let numCartao = numeroCartao.replace(/[^0-9]/g.'');
    verdadeiro = cartao valido 
    else = cartão invalido
}




function isValid(input [input.length])
sun :=0
parity := length mode 2
for i fron 1 
i é igual o numero do cartao ?
 */


/* const numeroDigitado = input id
function checkLuhn(numeroDigitado) {
  // remove todos os caracteres não numericos
  let numeroDigitado = numeroDigitado.replace(/\D/g, '');
  let sum = 0;
  let shouldDouble = false;
  // percorre o valor começando pelo lado direito
  for (let i = numeroDigitado.length - 1; i >= 0; i--) {
    let digit = parseInt(numeroDigitado.charAt(i));
    
    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return (sum % 10) == 0;
} */

//if (< 13.leanth || === 00000000)