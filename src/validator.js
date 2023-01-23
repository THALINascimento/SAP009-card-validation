const validator = {
//...
}

export default validator;


/*//preciso colocar nessa parte o maskify e i isvalid

//para comprimento LEAGTH!!!!!!
//const num = cardNumber.value;//chamar id ou classe do html também igualo  outro js ?
//const arrayNum = [] = const num

//isValid(creditCardNumber){ //é um string com o número do cartão a ser verificado.
//Esta função deve retornar um boolean, dependendo de sua validade, de acordo com o algoritmo de Luhn.*\


//para numero item inicial 0 até o comprimento do numero  somando item ++)
//let = i = arrayNum
//for (let i=0, i < num.length, i++)
//let numCard = parseInt(creditCardNumber[i])//parseint converte argumento em string e retorna inteiro o u NAN
//arrayNum.push()//adiciona elementos no final do array atualizando modificação do comprimento.
//}
//const invertido = arrayNum.reverse() //para inverter o conteudo do array
//for (let i=0, i < invertido.length, i++){
//if((i + 1) % 2 === 0){
//    invertido[i] = invertido[i] * 2
//}
//if (invertido[i]) {
    //} else {
    
//}
//}
//}






//validator.maskify(creditCardNumber): //é um string com o número do cartão e esta função 
//deve retornar um stringonde todos, exceto os últimos quatro caracteres, são substituídos por um número
//( #) ou gato. Essa função deve sempre manter os quatro últimos caracteres intactos, mesmo quando o
//stringfor mais curto.









Em resumo, os critérios mínimos de aceitação do projeto para considerar o Feedback do Projeto:

Possui uma interface que permite ao usuário validar o número de um cartão de crédito 
ocultar todos os dígitos de um cartão e ocultar o número até os 4 últimos dígitos.
O projeto será entregue incluindo testes unitários dos métodos validator( isValide maskify).

src/validator.js: aqui você deve implementar o objeto validator, o qual já está exportado no clichê .
Este objeto ( validator) deve conter dois métodos:

validator.isValid(creditCardNumber): creditCardNumberé um string com o número do cartão a ser verificado.
Esta função deve retornar um boolean, dependendo de sua validade, de acordo com o algoritmo de Luhn .


validator.maskify(creditCardNumber): creditCardNumber é um string com o número do cartão e esta função 
deve retornar um stringonde todos, exceto os últimos quatro caracteres, são substituídos por um número
 ( #) ou gato. Essa função deve sempre manter os quatro últimos caracteres intactos, mesmo quando o
 stringfor mais curto.

Exemplo de uso:

maskify('4556364607935616') === '############5616'npm init @eslint/config
maskify(     '64607935616') ===      '#######5616'
maskify(               '1') ===                '1'
maskify(               '')  ===                ''


test/validator.spec.js: este arquivo contém alguns testes de exemplo e aqui você deve implementar os
testes para validator.isValid()e validator.maskify().*/

