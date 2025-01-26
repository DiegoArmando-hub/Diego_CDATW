const patron = /^\d{8}[A-Z]$/;
        
if (!patron.test(dni)) {
  return false; // El formato es incorrecto
}

const numeros = dni.slice(0, 8); // Los primeros 8 caracteres son los números
const letra = dni.slice(8).toUpperCase(); // El último carácter es la letra

// Array con las letras que corresponden a los números del DNI
const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKEAM".split("");

// El índice de la letra correspondiente se calcula con el módulo de los 8 primeros números
const indice = parseInt(numeros) % 23;

// Comparar la letra proporcionada con la letra calculada
return letra === letrasDNI[indice];