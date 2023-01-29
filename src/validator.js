export function isValid(validar) {
  const invert = digit.split("").reverse();
  console.log(invert); //numeros digitados invertidos tem outro jeito?; criar var arr () = invert const cardArray = []; //como colocar no arr para manipular posições ?

  let soma = 0;
  for (let i = 0; i < invert.length; i ++) {
    //let digito = parseInt(validar[i]);
    if ((i + 1) % 2 !== 0); { //simplificar se posicao par multiplicar se posicao impar some (i !== 0 && i % 2 === 0)
      invert[i] = invert[i] *= 2;
      return digit;
    } else { 
      //invert[i] > 9 
      //invert[i] = invert[i] - 9;
    
    soma + soma= invert;
  }
  return soma % 10 === 0;
}

