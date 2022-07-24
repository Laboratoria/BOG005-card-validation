import validator from './validator.js';


//Guardar el numero de la tarjeta
document.getElementById("enviar").addEventListener("click", mostrarSeleccionado)
function mostrarSeleccionado() {
let creditCard1= document.getElementById("creditCard1").value;
console.log(creditCard1)
validator.isValid(creditCard1)
if (creditCard1 === true)
document.write( "Tarjeta Valida");
else{
    document.write("Su tarjeta no es Valida")
}
//Boton del seleccionador de metodos de pago:
document.getElementById("botonSeleccion").onclick = function(){
    alert("Por favor llena el formulario");
}

//Funcion de replace numbers
let maskifyNumbers= validator.maskify(creditCard1);
result.innerText= "Su tarjeta número"+ maskifyNumbers + " "+ textR;

}


