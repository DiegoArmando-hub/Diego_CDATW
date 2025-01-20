function validar(dni) {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    
    // Verificamos que el DNI tenga 8 dígitos numéricos
    console.log(dni)
    // if (dni.length !== 8 || isNaN(dni) || dni.trim() === '') {
    //     document.getElementById('resultado').textContent = 'DNI no válido';
    //     return;
    // }

    // Convertimos el DNI a número y calculamos el resto
    const numeroDNI = parseInt(dni, 10);
    const resto = numeroDNI % 23;
    
    // Mostramos la letra correspondiente
    document.getElementById('resultado').textContent = `La letra del DNI es: ${letras[resto]}`;
}