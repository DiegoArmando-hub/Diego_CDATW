function enviar(color) {
  let c1 = document.getElementById("1");
  let c2 = document.getElementById("2");
  let c3 = document.getElementById("3");
  switch (color) {
    case "rojo":
      c1.style.backgroundColor = "red";
      c2.style.backgroundColor = "yellow";
      c3.style.backgroundColor = "blue";
      break;
    case "verde":
      c1.style.backgroundColor = "green";
      c2.style.backgroundColor = "blueviolet";
      c3.style.backgroundColor = "orange";
      break;
  }
}
function cambiar(color) {
  let c1 = document.getElementById("1");
  let c2 = document.getElementById("2");
  let c3 = document.getElementById("3");
  switch (color) {
    case "rojo":
      c3.style.backgroundColor = "red";
      c3.innerHTML = "Primero";
    //   c3.style.gridTemplateColumns="";//continuar revisando
      c2.style.backgroundColor = "yellow";
      c1.style.backgroundColor = "blue";
      c1.innerHTML="Tercero";
      //   document.getElementById()
      break;
    case "verde":
      c1.style.backgroundColor = "green";
      c2.style.backgroundColor = "blueviolet";
      c3.style.backgroundColor = "orange";
      break;
  }
}
