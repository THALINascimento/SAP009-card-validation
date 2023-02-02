const validator = {
  //objeto
  isValid: function (recebeNum) {
    //armazenar numeros digitados
    const numeroCartao = recebeNum.split("").map(Number);
    const invert = numeroCartao.reverse(); //console.log(invert);
    let result = 0;
    for (let i = 0; i < invert.length; i++) {
      //console.log("teste for");

      if ((i + 1) % 2 === 0) {
        //(i % 2 === 0) { //posso fazer  i &&
        const multip = invert[i] * 2;

        if (multip < 10) {
          result += multip; //;
          //console.log("subtrai");
        } else if (multip >= 10) result += multip - 9;
        //console.log("meuDeus");
      } else {
        result += parseInt(numeroCartao[i]);
      }
    }
    //luhn lindo
    if (result % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify: function (recebeNum) {
    const mascara = [];
    for (let i = 0; i < recebeNum.length; i++) {
      if (i < recebeNum.length - 4) {
        mascara.push("#");
      } else {
        mascara.push(recebeNum[i]);
      }
    }
    const maskNum = mascara.join("");
    return maskNum;
  },
};
export default validator;
