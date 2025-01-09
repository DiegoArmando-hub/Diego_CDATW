// concatenar cadenas

var nombre= 'Juan';
var apellido='Perez';

var nombreCompleto = nombre +' '+ apellido;
console.log(nombreCompleto);

var nombreCompleto='Juan'+' '+'Lopez';
console.log(nombreCompleto); //devuelve Juan Lopez

var x = nombre + 2 +4
console.log(x); //devuelve Juan24

x=nombre + (2 + 4)
console.log(x); //devuelve Juan6 devido a que toma como prioridad lo que esta dentro del parentecis, es decir primero realiza la suma de los valores y luego lo impreme

x =2+6 + nombre
console.log(x); //aquí va a devolver 8Juan, esto es debido a que comienza a leer desde la izquierda entonces primero encuentra tipo de datos numerico y el segundo tambien entonces realiza la suma de los valores y luego encuentra un string entonces concatena el nombre