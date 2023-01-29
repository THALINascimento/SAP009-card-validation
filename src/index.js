import { isValid } from "./validator.js";

function validar() {
  const card = document.getElementById("numero").value;
  //const validCard = isValid(card); //linka o resutado do input com a função
  const result = document.getElementById("botao");
  //const maskfy = document.getElementById("numero");
  const validade = document.querySelector(".cod");
  const botao = document.getElementById("botao");
  addEventListener("click", isValid);

  if (card === true) {
    result.innerHTML = "Cartão válido!";
  } else {
    result.innerHTML = "Cartão inválido";
  }
}

//const newNumber = parseInt(?[i]) + parseInt(?[1]);

//maskify (validar) {
//const maskNum = [];
//for (let i = 0; i < validar.length; i++) {
//if (i < validar.length - 4) {
//maskNum.push("#");
////}
//else{
//maskNum.push(validar[i]);
//}
///}
//return maskNum.join("");
//}
