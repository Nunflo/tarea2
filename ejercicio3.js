// Ejercicio 3

function calcularAumento() {
    var nombre = document.getElementById('nombre').value;
    var salario = parseFloat(document.getElementById('salario').value);
    var categoria = document.getElementById('categoria').value;
    var aumento;

    switch (categoria) {
        case "A":
        case "a":    
            aumento = salario * 0.15;
            break;
        case "B":
        case "b":    
            aumento = salario * 0.30;
            break;
        case "C":
        case "c":    
            aumento = salario * 0.10;
            break;
        case "D":
        case "d":    
            aumento = salario * 0.20;
            break;
        default:
            aumento = 0;
    }

    document.getElementById('resultado').innerHTML = "Nombre: " + nombre + "<br>Salario: $" + salario.toFixed(2) + "<br>Categoría: " + categoria + "<br>Aumento: $" + aumento.toFixed(2);
}