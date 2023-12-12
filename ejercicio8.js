// Ejercicio 8
function mostrarTabla() {

    const numeroIngresado = document.getElementById("numero").value;

    if (!isNaN(numeroIngresado) && numeroIngresado !== "") {

        const numero = parseInt(numeroIngresado);

        let tablaHTML = "<h2>Tabla de Multiplicar del " + numero + "</h2>";
        for (let i = 1; i <= 10; i++) {
            tablaHTML += `<p>${numero} x ${i} = ${numero * i}</p>`;
        }

        document.getElementById("resultado").innerHTML = tablaHTML;
    } else {

        alert("Por favor, ingrese un número válido.");
    }
}