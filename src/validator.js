const validator = { // a const validator é um objeto que é separado por (,)

 isValid (cc) { 
  const invert = cc.split("").reverse(); //const card = document.getElementById("numero").value;
  console.log(invert); //numeros digitados invertidos tem outro jeito?; criar var arr () = invert const cardArray = []; //como colocar no arr para manipular posições ?   //const newNumber = parseInt(?[i]) + parseInt(?[1]);
  let total = 0;   //let total = soma + multiplicar;
  for (let i = 0; i < invert.length; i = i ++) {
  if (i % 2 === 0) {//((i + 1) % 2 !== 0); {simplificar se posicao par multiplicar se posicao impar some (i !== 0 && i % 2 === 0)
  total = total + invert[i] ; //inicia em 0 e soma sequencialmente conforme quantidade de caracteres
  } 
  if (invert [i] > 9) {
  total = (total + (multiplicar - 9 ));
  }  
 
  if (total % 10 === 0) {
  return true; // return soma % 10 === 0;
  } else {
  return false;
  } 
}
,

maskify (cc) {
 const maskifyCard = [];
 
 for (let i = 0; i < cc.length; i ++) {
 if (i < cc.length - 4) { //no numero todo menos os 4 ultimos
   maskifyCard.push("#");
 } else { 
   maskifyCard.push(cc[i]);
 } 
  return maskifyCard.join(""); 
    
 }
}
export default validator ;