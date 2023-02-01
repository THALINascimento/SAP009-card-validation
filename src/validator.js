const validator = {
  isValid(recebeNum) {
    //armazenar numeros digitados
    const invert = recebeNum.split("").reverse();

    for (let i = 0; i < invert.length; i++) {
      //console.log("", i, invert[i]);
      if ((i + 1) % 2 === 0) {
        //(i % 2 === 0) { //posso fazer  i &&
        invert[i] = invert[i] * 2; //const multip = invert[i] * 2;
        if (invert[i] > 9) {
          invert[i] = invert[i] - 9; //soma = soma + (multip - 9);
        }
      }
      let result = 0;
      for (let i = 0; i < invert.length; i++) {
        result = result + invert[i];
      }
      if (result % 10 === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
};

//maskify(recebeNum)
export default validator;
