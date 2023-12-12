//  Ejercicio 1 calcular edad

document.querySelector('#app').innerHTML = `
<h1>Ingresa tu Edad, para saber si eres mayor de edad o no?</h1>
<label for="edad">Ingresa tu edad:</label>
<input type="text" placeholder="Ingresa tus años" id="edad" min="0" required>
<button onclick="verificarEdad()">Verificar</button>
<p id="resultado"></p> 
`


function verificarEdad() {
    var edad = document.getElementById("edad").value;
    var mensaje = (edad >= 18) ? "Eres mayor de edad." : "Eres menor de edad.";
    document.getElementById("resultado").innerHTML = mensaje;
}