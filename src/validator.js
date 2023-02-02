const validator = {
  isValid: function isValid(recebeNum) {
    //armazenar numeros digitados
    const numeroCartao = recebeNum.split("").map(Number);
    const invert = numeroCartao.reverse();
    //console.log(invert);

    let result = 0;
    for (let i = 0; i < invert.length; i++) {
      //console.log("", i, invert[i]);

      if ((i + 1) % 2 === 0) {
        //(i % 2 === 0) { //posso fazer  i &&
        const multip = invert[i] * 2;
        console.log(multip);

        if (multip > 10) {
          result += multip; //;
          console.log(subtrai);
        } else if (multip <= 10) {
          result += multip - 9;
        } else {
          result += parseInt(numeroCartao[i]);
        }
        console.log("FINal");
      }

      if (result % 10 === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  //maskify: function maskify(recebeNum){

  //}
};

export default validator;
