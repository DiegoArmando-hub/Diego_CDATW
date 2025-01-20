function multiplicar(x) {
  let num = parseInt(x);
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += num + " * " + i + " = " + num * i + "<br>";
  }
//   document.write(resultado);
  document.getElementById("tabla").innerHTML = resultado;
}
