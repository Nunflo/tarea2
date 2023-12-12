// Ejercicio 4

function compararNumeros() {
   
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

  
    var resultadoMensaje = (numero1 > numero2)
        ? "El número mayor es: " + numero1
        : (numero2 > numero1)
            ? "El número mayor es: " + numero2
            : "Los números son iguales";

    document.getElementById("resultado").innerHTML = resultadoMensaje;
}