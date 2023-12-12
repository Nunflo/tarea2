
// Ejercicio 6
function calcularDescuento() {

    var destino = document.getElementById('destino').value;
    var precio = parseFloat(document.getElementById('precio').value);
    var descuento;


    switch (destino) {
        case 'La costa del Sol':
            descuento = precio * 0.05;
            break;
        case 'Panchimalco':
            descuento = precio * 0.10;
            break;
        case 'Puerto el Triunfo':
            descuento = precio * 0.15;
            break;
        default:
            descuento = 0;
    }
    var precioConDescuento = precio - descuento;

    document.getElementById('resultado').innerHTML = "Destino: " + destino + "<br>Precio original: $" + precio.toFixed(2) + "<br>Descuento aplicado: $" + descuento.toFixed(2) + "<br>Precio con descuento: $" + precioConDescuento.toFixed(2);
}