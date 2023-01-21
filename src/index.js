//import validator from './validator.js';
//console.log (validator)

//manipulação do DOM
//cons ou variavel pode ser qual que nome para usar no js
const cardNumber = document.querySelector("#numero")//chamar id ou classe do html
const button = document.querySelector('#botao')
const message = document.getElementById('mensagem')


button.addEventListener("click", cc)
//adicionar evento de clique no botão para ouvir a função
//criar função com as regras de digitação

//console.log("baby") teste da função click do botão ok
function cc(){
 //criar uma função com parametros de validação após preenchimento do form e click no botão 
let digitadow = cardNumber.value;
//criei uma variável relativa que recebe o conteudo digitado na constante que recebe o valor do input 

  
if (
  digitadow.length <=13
  ){
  console.log(digitadow) //teste de retorno do numero digitado no input 
} {
return(message.innerHTML= "Dados inválidos, por favor verifique o cartão e tente novamente! :(")
}

}
//Até aqui tudo funcionando ALELUIA SOCORRO DEUS

//else if(digitadow = ""){
//return(message.innerHTML= "Por favor, digite o numero do cartão")
