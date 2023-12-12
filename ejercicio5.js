
// Ejercicio 5
function calcularDescuento() {

    var vehiculo = document.getElementById('vehiculo').value;
    var precio = parseFloat(document.getElementById('precio').value);
    var descuento;

    switch (vehiculo) {
        case 'Ford Fiesta':
            descuento = precio * 0.05;
            break;
        case 'Ford Focus':
            descuento = precio * 0.10;
            break;
        case 'Ford Escape':
            descuento = precio * 0.20;
            break;
        default:
            descuento = 0;
    }

    var precioConDescuento = precio - descuento;

    document.getElementById('resultado').innerHTML = "Vehículo: " + vehiculo + "<br>Precio original: $" + precio.toFixed(2) + "<br>Descuento aplicado: $" + descuento.toFixed(2) + "<br>Precio con descuento: $" + precioConDescuento.toFixed(2);
}
