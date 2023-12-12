// Ejercicio 9
function convertirTemperatura() {
    const temperaturaCelsius = document.getElementById("temperaturaCelsius").value;

    if (!isNaN(temperaturaCelsius) && temperaturaCelsius !== "") {
        const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

        document.getElementById("resultado").innerHTML = `<p>${temperaturaCelsius} ºC es igual a ${temperaturaFahrenheit.toFixed(2)} ºF.</p>`;

        if (temperaturaFahrenheit >= 14 && temperaturaFahrenheit <= 32) {
            document.getElementById("resultado").innerHTML += "<p>Temperatura baja</p>";
        } else if (temperaturaFahrenheit > 32 && temperaturaFahrenheit <= 68) {
            document.getElementById("resultado").innerHTML += "<p>Temperatura adecuada</p>";
        } else if (temperaturaFahrenheit > 68 && temperaturaFahrenheit <= 96) {
            document.getElementById("resultado").innerHTML += "<p>Temperatura alta</p>";
        } else {
            document.getElementById("resultado").innerHTML += "<p>Temperatura desconocida</p>";
        }
    } else {
        alert("Por favor, ingrese una temperatura válida en Celsius.");
    }
}