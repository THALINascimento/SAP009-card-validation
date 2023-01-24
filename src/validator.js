// ALGO LUHN É A ISVALID E A MASK ?
//function isValid(input [input.length]){
//A FUNÇÃO DE VALIDAR PEGA O INPUT COMO PARAMENTRO OU A LARGURA DELE ? CHAMA POR GET ELEMENT DE NOVO ?

//const inteiro = (document.querySelector("#numero").value); // posso fazer um .velue para já pegar o valor junto com o elemento


export function isValid(creditCardNumber){
  const invert = creditCardNumber.split("").reverse(); //numeros digitados invertidos tem outro jeito?; criar var arr () = invert const cardArray = []; //como colocar no arr para manipular posições ? 
  // = >= 48 && <= 57 //a identificação no Js dos  caracteres são numeros para aceitar somente numeros[0-9] usar padrão patern ?
for (let i = 0; i < invert.length; i++){ 
  if (i % 2 === 0) {
    let multiplica = invert[i] * 2;
 }
if (result % 10 == 0){
  return true
  
  }else{
  return false
  }


  //?????
/*exportar function cc (){
  f//sempre essa formula PARA VALIDAR ?
    //LEMBRAR ONDE ANOTEI O CODIGO PARA SÓ ACEITAR NUMEROS PODE SER QUE DENTRO DA FUNÇÃO FUNCIONE (REDUNDANCIA THALITA)
    // = >= 48 && <= 57 //a identificação no Js dos  caracteres são numeros para aceitar somente numeros[0-9] usar padrão patern ?
    
      //se o item na posição for par, DOBRA/
      console.log("posicoes[i]" ou item ou é o conteudo[i])
      //const multiplica = invert[i] * 2;
      //console.log(multiplica)
  
    } else { ((multiplica[i] quando for >= 10) subritai para ficar com 1 digito só -9 e depois somar ou ja soma automatico?) {
      //SE O RESULTADO FOR MAIOR QUE 9 OU = OU MAIRO 10 , SUBRITAIA 9 ?
      multiplica[i] = multiplica[i] - 9;
      }
    }
  //VARIAVEL MULTIPLICAR + VARIAVEL SOMA OU + POSICOES IMPARES , ? DEVE DAR PRA FAZER UMA SÓ ai o returne fica fora da função para fazer tudo ?

