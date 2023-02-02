import validator from "./validator.js";

const botao = document.getElementById("botao");
botao.addEventListener("click", cardValidator);
const msg = document.getElementById("mensagem"); //quando clicar no botao vai retornar mensagem de acordo com o que foi inserido

function cardValidator() {
  const recebeNum = document.getElementById("numero").value; // o que for digitado
  const result = validator.isValid(recebeNum); // o numero digitado passa pelo luhn
  //const mask = validator.maskify(recebeNum); //mascara o numero digato

  if (recebeNum === "") {
    return (msg.innerHTML = "Digite os dados do cartão");
  } else if (recebeNum.length < 10) {
    return (msg.innerHTML = "Verifique o cartão e tente novamente");
  } else if (result === true) {
    return (msg.innerHTML = "Cartão + maskify válido! ");
  } else (result === false) {
    return (msg.innerHTML = "Cartão inválido! Revise os dados e tente novamente.");
  }
}
console.log(validator);
