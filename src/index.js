import isValid from "./validator.js";

function validar() {
  const card = document.getElementById("numero").value;
  //const validCard = isValid(card); //linka o resutado do input com a função
  const result = document.getElementById("botao");
  const maskify = document.getElementById("numero").value;
  maskify.addEventListener("input", maskify);
  const validade = document.querySelector(".cod");
  const botao = document.getElementById("botao");
  botao.addEventListener("click", isValid);

  if (card === true) {
    result.innerHTML = "Cartão válido!";
  } else {
    result.innerHTML = "Cartão inválido";
  }
}

validator.isValid(card);
validator.maskify(maskify);
