import validator from "./validator.js";

/* capturar valor do cartão digitado, vaidar ou invalidar, retornar*/

function cc () {
  const card = document.getElementById("numero").value;
  const result = validator.isValid(card);
  const maskify = validator.maskify(maskify); //maskifyCard.addEventListener("input", maskifyCard);
  const botao = document.getElementById("botao");
  botao.addEventListener("click" , cc);
  const mensagem = document.getElementById("menssagem");

  if (card === "") {
    return (mensagem.innerHTML = "Digite os dados do cartão!");
  }
  if (card.length <= 13) {
    return (mensagem.innerHTML =
      "Verifique o numero do cartão e tente novamente!");
  }
  if (result === true) {
    return (mensagem.innerHTML = "Cartão válido!");
  } else {
    return (mensagem.innerHTML = "Cartão inválido");
  }
}
}
console.log(validator , cc);

