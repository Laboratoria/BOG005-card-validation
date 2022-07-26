import validator from './validator.js';

debugger
//Guardar el numero de la tarjeta
document.getElementById("enviar").addEventListener("click", mostrarSeleccionado)
function mostrarSeleccionado() {
let creditCard= document.getElementById("creditCard1").value;
let textoResultado= "";
if (creditCard == null || creditCard == ""){
 alert("Los datos son requeridos.");
 return;
 } else{
    alert("Validando" + " " + creditCard)
 }

let finalNumber= validator.isValid(creditCard);
if (finalNumber === true) {
  textoResultado= "¡Tarjeta Valida, su conductor esta siendo elegido!";
}else{
    textoResultado= "¡Su tarjeta no es Valida, por favor intente nuevamente!";
}

//Funcion de replace numbers
 let maskifyNumbers= validator.maskify(creditCard)
 document.write ("¡Tu tarjeta número " + maskifyNumbers + " "+ textoResultado);
 
console.log(maskifyNumbers)
}
