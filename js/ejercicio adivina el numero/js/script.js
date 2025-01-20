let descubreNumero = Math.round(Math.random() * 100);
console.log(descubreNumero);
let numero;
let intentos=0;

do {
  numero = prompt("Escribe un número a ver si descubres cual es", "");
  intentos++;
  console.log("Intento número: " + intentos);
  
  if (numero > descubreNumero) {
    alert("no, es un numero menor", "");
  }
  if (numero < descubreNumero) {
    alert("no, es un numero mayor");
  }
} while (numero != descubreNumero);

// alert("correcto!!! en numero es " + descubreNumero);
alert("¡Correcto! El número es " + descubreNumero + ". Lo adivinaste en " + intentos + " intentos.");
// alert()

