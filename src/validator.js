export function isValid (validar) {
  const arrNcartao = digit.split("").reverse();//let invert = digit.split("").reverse();
  console.log(arrNcartao); //numeros digitados invertidos tem outro jeito?; criar var arr () = invert const cardArray = []; //como colocar no arr para manipular posições ?
  // = >= 48 && <= 57 //a identificação no Js dos  caracteres são numeros para aceitar somente numeros[0-9] usar padrão patern ?
  let soma = 0;
  for (let i = 0; i < arrNcartao.length; i++) {
    //ao inves de i++ por  i +1//seleciona posição do array para percorrer e atribuir a condição desejada.
    console.log("indice", i, arrNcartao[i]);
    if(i !==0 && i %2 ===0);
    //((i + 1) % 2 !== 0) { //simplificar se posicao par multiplicar se posicao impar some
      if{
      arrNcartao[i]= arrNcartao[i] *=2;
      return digit;
    }
    if(arrNcartao[i] > 9) {
      arrNcartao[i] = arrNcartao[i] - 9;
      return digit % 10;
    }
  }
}

//var newNumber = parseInt(?[0]) + parseInt(?[1]);
