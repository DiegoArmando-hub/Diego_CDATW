document.addEventListener("DOMContentLoaded", function() {
    // Solicitar el nombre del alumno y la asignatura mediante prompt
    let nombre = prompt("Dime tu nombre");
    let asignatura = prompt("Dime el nombre de la asignatura");

    // Solicitar el número de parciales (número entero mayor que 0)
    let numModulos = parseInt(prompt("¿Cuántos parciales tienes en la asignatura?"));
    while (isNaN(numModulos) || numModulos <= 0) {
        alert("Por favor, ingresa un número entero mayor que 0.");
        numModulos = parseInt(prompt("¿Cuántos parciales tienes en la asignatura?"));
    }

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
        let nota = parseFloat(prompt(`Introduce la nota del parcial ${modulo} (entre 0 y 10)`));
        while (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Por favor, ingresa una nota válida entre 0 y 10.");
            nota = parseFloat(prompt(`Introduce la nota del parcial ${modulo} (entre 0 y 10)`));
        }

        notaMedia += nota;  // Sumar la nota para el cálculo de la media
        contenido.innerHTML += `<p><strong>Parcial ${modulo}</strong>: Nota ${nota}</p>`;
    }

    // Calcular la media de las notas
    notaMedia /= numModulos;
    let notaFinal = notaMedia.toFixed(2);  // Limitar la media a 2 decimales

    // Mostrar la media en un alert
    alert(`La nota media de la asignatura ${asignatura.toUpperCase()} es ${notaFinal}`);

    // Mostrar la nota media en el documento
    contenido.innerHTML += `
        <p><strong>Nota media de la asignatura</strong>: ${notaFinal}</p>
    `;

    // Mostrar si el alumno aprobó o suspendió
    if (notaFinal > 5.0) {
        contenido.innerHTML += '<p class="aprobado">Aprobado</p>';
    } else {
        contenido.innerHTML += '<p class="suspenso">Suspenso</p>';
    }
});
