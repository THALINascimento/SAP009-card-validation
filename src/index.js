import validator from './validator.js';


//manipulação do DOM
//cons ou variavel pode ser qual que nome para usar no js
const number = document.querySelector('.numero') //chamar id ou classe do html
const button = document.querySelector('#botao')
const message = document.querySelector ('.mensagem')


button.addEventListener('click', cardvalidation) 
//adicionar evento de clique no botão para ouvir a função
//criar função com as regras de digitaçãoo da cardvalidation

function cardvalidation(evento){
  evento.preventDefault()
   //não atualizar a página antes de realizar evento de click
   const valorDigitado = number.value
   //criar variavel = valor do numero digitado no input
   const validado = validator.isValid(valorDigitado)
   //se alguem souber de uma descrição mais clara me fala <3

//if tem condição para retorno ou ou if para outra opção
//else if se if não for verdadeira 
//else não tem condição
   if(
    valorDigitado === '' ||
    valorDigitado === '0000000000000000' ||
    valorDigitado === '000000000000000' ||
    valorDigitado === '00000000000000' ||
    valorDigitado.length <= 13 
      ){
   return (message.innerHTML = 'que saco cartão')
   }

   else if(validado === true){
  return (message.innerHTML = 'Parabéns')  
  }

  else if (validado === false){
    return (message.innerHTML = 'SPSSERASA')

  }
    

}

number.addEventListener('keyup',clone)
//informações digitadas no formulario do cartão vão ser 
//impressar na imagem do cartão na tela

function clone(){
  const value = document.getElementById('numero').value
  //pegar o que for digitado no input (value)
  //ou
  const ocultar = validator.maskify(value)
  //maskify mascara numeros do cartão
  const clone = document.getElementById('cardClone').value = ocultar
  //o valor digitado no numero do cartao vai clonar no input clone e chamar a função
  //ocultar

}
