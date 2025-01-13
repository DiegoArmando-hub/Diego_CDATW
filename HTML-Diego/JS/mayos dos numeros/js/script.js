'use strict'

var n1=0;
var n2=0;

//inNaN dice que si ha ingresado una letra devuelve true osea si devuelve true sigue en el bucle hasta que ingrese un numero
while(n1 <= 0 || n2 <=0 || isNaN(n1)||isNaN(n2)){
    n1=parseInt(prompt("Ingrese el primer número",0));
    n2=parseInt(prompt("Ingrese el segundo número",0));
}
// var n1=parseInt(prompt("Ingrese el primer número",0));
// var n2=parseInt(prompt("Ingrese el segundo número",0));

//inNaN dice que si el valor ingresado es letra devuelve true, entonces va ha seguir en el bucle
// let text="";
// for (let i=0;i<5;i++){
//     text += "el número es: "+i+" ";
// }
// console.log(text)

// let num="";
// var i=5;
// for(var i=0;i<=10;i++){
//     num += "el numero actual es: "+i+" ";
// }
// console.log(i)
// console.log(num)
