// declarar una función
function miFuncion(a,b){
    console.log("Suma: "+ (a + b));
}
miFuncion(4,5);

// una funcion la podemos usar varias veces como la necesitemos
miFuncion(2,3);

// ----------------------------------------------------------------------------------------------------------
// return en las funciones JS
// declara la funcion
 function suma(a,b){
    return a + b;
 }

//  a el resultado lo podemos asignar a una variable o mandar a imprimir
// llamar a la funcion
let resultado=suma(4,3);
console.log(resultado);

// Declarar una funcion de tipo Expresion
let sumar = function (x, y) {return x + y};
result=sumar(1,2);
console.log(result);