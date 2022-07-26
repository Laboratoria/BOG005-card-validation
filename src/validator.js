
let validator = {
  isValid: (creditCardNumber) => {
    debugger
    let reverseTarjeta = creditCardNumber.toString().split("").reverse();
    console.log(reverseTarjeta)
    let valor = 0;
    reverseTarjeta.forEach((item, index) => {
      console.log("ini", item)
      //donde index toma las posiciones pares 
      if (index % 2 === 0) {
        let pairNumber = item * 2
        //donde item multiplica por dos las posiciones par
        if (pairNumber > 9) {

          let digits = pairNumber.toString().split("")
          let suma = parseInt(digits[0]) + parseInt(digits[1])
          item = suma
          console.log("resultadosuma", item)
          valor = valor + item;

          console.log("despues", valor)
        } else {
          let numberNuevo = item * 2
          //numberNuevo son aquellos numeros en la posicion par que no eran mayores a 10. 
          valor = valor + numberNuevo;
        }

      } else {
        valor = valor + parseInt(item);
      }
      debugger
    })
    if (valor % 10 === 0) {
      return true;
    } else {
      return false;
    }

  },
  maskify: (creditCardNumber) => {
    let maskify = "";
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i <= creditCardNumber.length - 5) {
        maskify = maskify + "#"
      } else {
        maskify = maskify + creditCardNumber[i];
      }
    } return maskify;
  }
}

// ...  
export default validator;
