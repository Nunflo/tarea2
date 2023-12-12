function analizarNumeros() {
    // Obtener los números ingresados por el usuario
    var numeros = [];
    for (var i = 1; i <= 10; i++) {
        var input = prompt("Ingrese el número " + i + ":");
        var numero = parseInt(input);

        // Verificar si el usuario ingresó un número válido
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            alert("Por favor, ingrese un número entero válido.");
            i--; // Restar 1 a i para volver a solicitar el mismo número
        }
    }

    // Analizar los números
    var cantidadNegativos = 0;
    var cantidadPositivos = 0;
    var cantidadIgualesA15 = 0;
    var cantidadPares = 0;

    for (var j = 0; j < numeros.length; j++) {
        // Contar negativos y positivos
        if (numeros[j] < 0) {
            cantidadNegativos++;
        } else if (numeros[j] > 0) {
            cantidadPositivos++;
        }

        // Contar iguales a 15
        if (numeros[j] === 15) {
            cantidadIgualesA15++;
        }

        // Contar números pares
        if (numeros[j] % 2 === 0) {
            cantidadPares++;
        }
    }

    // Mostrar resultados
    alert("Cantidad de números negativos: " + cantidadNegativos);
    alert("Cantidad de números positivos: " + cantidadPositivos);
    alert("Cantidad de números iguales a 15: " + cantidadIgualesA15);
    alert("Cantidad de números pares: " + cantidadPares);
}

// Llamar a la función cuando se cargue la página
analizarNumeros();