// Ejercicio 10
function calcularPromedios() {

    const edadesManana = document.getElementById("edadesManana").value.split(',').map(Number);
    const edadesTarde = document.getElementById("edadesTarde").value.split(',').map(Number);
    const edadesNoche = document.getElementById("edadesNoche").value.split(',').map(Number);

    const promedioManana = calcularPromedio(edadesManana);
    const promedioTarde = calcularPromedio(edadesTarde);
    const promedioNoche = calcularPromedio(edadesNoche);

    document.getElementById("resultado").innerHTML = `
        <p>Promedio de edades del turno mañana: ${promedioManana}</p>
        <p>Promedio de edades del turno tarde: ${promedioTarde}</p>
        <p>Promedio de edades del turno noche: ${promedioNoche}</p>
    `;

    let turnoMayor = "";
    let promedioMayor = 0;

    if (promedioManana > promedioMayor) {
        turnoMayor = "mañana";
        promedioMayor = promedioManana;
    }

    if (promedioTarde > promedioMayor) {
        turnoMayor = "tarde";
        promedioMayor = promedioTarde;
    }

    if (promedioNoche > promedioMayor) {
        turnoMayor = "noche";
        promedioMayor = promedioNoche;
    }

    document.getElementById("resultado").innerHTML += `<p>El turno con el promedio de edades mayor es: ${turnoMayor}</p>`;
}

function calcularPromedio(edades) {
    if (edades.length === 0) return 0;

    const sumaEdades = edades.reduce((total, edad) => total + edad, 0);
    return sumaEdades / edades.length;
}