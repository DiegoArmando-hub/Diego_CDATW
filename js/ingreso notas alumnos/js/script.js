function notas(){
 let notas = new Array(4);
notas[0] = prompt("Ingresar la nota de Juan");
notas[1] = prompt("Ingresar la nota de Pedro");
notas[2] = prompt("Ingresar la nota de Luis");
notas[3] = prompt("Ingresar la nota de Oscar");

let celda = document.getElementById("nota");
for (let i = 0; i < notas.length; i++) {
  let resultado = notas[i];
  celda.innerHTML += resultado + "<br>";
  
}
   
}
