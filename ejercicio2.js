function calcularNotaFinal() {
    // Obtener valores de los campos
    const examen = parseFloat(document.getElementById('examen').value);
    const tareas = parseFloat(document.getElementById('tareas').value);
    const asistencia = parseFloat(document.getElementById('asistencia').value);
    const investigacion = parseFloat(document.getElementById('investigacion').value);

    // Verificar que los valores estén en el rango correcto
    if (examen < 0 || examen > 10 || tareas < 0 || tareas > 10 || asistencia < 0 || asistencia > 10 || investigacion < 0 || investigacion > 10) {
        alert('Por favor, introduce valores válidos.');
        return;
    }

    // Calcular ponderaciones
    const ponderacionExamen = examen * 0.2;
    const ponderacionTareas = tareas * 0.4;
    const ponderacionAsistencia =  asistencia * 0.1; // Invertir la asistencia, ya que menos ausencias es mejor
    const ponderacionInvestigacion = investigacion * 0.3;

    // Calcular nota final
    const notaFinal = ponderacionExamen + ponderacionTareas + ponderacionAsistencia + ponderacionInvestigacion;

    // Mostrar resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Nota Final: ${notaFinal.toFixed(2)}`;
}