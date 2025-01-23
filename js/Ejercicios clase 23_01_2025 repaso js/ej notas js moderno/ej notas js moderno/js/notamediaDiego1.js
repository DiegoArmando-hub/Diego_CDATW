document.addEventListener("DOMContentLoaded", function() {
    // Función para solicitar un número con validación
    function pedirNumero(mensaje, esEntero = false, min = 0, max = 10) {
        let num;
        do {
            num = esEntero ? parseInt(prompt(mensaje)) : parseFloat(prompt(mensaje));
            if (isNaN(num) || num < min || num > max) {
                alert(`Por favor, ingresa un número válido entre ${min} y ${max}.`);
            }
        } while (isNaN(num) || num < min || num > max);
        return num;
    }

    // Solicitar el nombre del alumno y la asignatura
    let nombre = prompt("Dime tu nombre");
    let asignatura = prompt("Dime el nombre de la asignatura");

    // Solicitar el número de parciales (número entero mayor que 0)
    let numModulos = pedirNumero("¿Cuántos parciales tienes en la asignatura?", true, 1);

    // Crear un contenedor para agregar el contenido dinámico en la página
    let contenido = document.createElement("div");
    document.body.appendChild(contenido);

    // Mostrar la información inicial
    contenido.innerHTML = `
        <h1>Asignatura: ${asignatura}</h1>
        <p><strong>Alumno</strong>: ${nombre}</p>
        <h2>Notas:</h2>
    `;

    let notaMedia = 0;

    // Solicitar las notas de cada parcial
    for (let modulo = 1; modulo <= numModulos; modulo++) {
        let nota = pedirNumero(`Introduce la nota del parcial ${modulo} (entre 0 y 10)`, false, 0, 10);
        notaMedia += nota;  // Sumar la nota para el cálculo de la media
        contenido.innerHTML += `<p><strong>Parcial ${modulo}</strong>: Nota ${nota}</p>`;
    }

    // Calcular la media de las notas
    let notaFinal = (notaMedia / numModulos).toFixed(2);  // Limitar la media a 2 decimales

    // Mostrar la media en un alert
    alert(`La nota media de la asignatura ${asignatura.toUpperCase()} es ${notaFinal}`);

    // Mostrar la nota media en el documento
    contenido.innerHTML += `
        <p><strong>Nota media de la asignatura</strong>: ${notaFinal}</p>
    `;

    // Mostrar si el alumno aprobó o suspendió
    contenido.innerHTML += notaFinal > 5.0 ? '<p class="aprobado">Aprobado</p>' : '<p class="suspenso">Suspenso</p>';
});
