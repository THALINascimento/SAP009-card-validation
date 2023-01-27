import { isValid } from "./validator";

function validar() {
  const card = document.getElementById("numero");
  const validCard = isValid(card); //linka o resutado do input com a função
  const result = document.getElementById("botao");
  //const maskfy

  if (card === true) {
    result.innerHTML = "Cartão válido!";
  } else {
    result.innerHTML = "Cartão inválido";
  }
}

const botao = addEventListener(click, "botao");
