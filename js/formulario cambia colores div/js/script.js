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
    case "gris":
      c1.style.backgroundColor = "gainsboro";
      c2.style.backgroundColor = "darkgray";
      c3.style.backgroundColor = "gray";
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
      c2.style.backgroundColor = "yellow";
      c1.style.backgroundColor = "blue";
      c1.innerHTML = "Tercero";
      document.getElementById("caja").style.gridTemplateColumns = "1fr 1fr 2fr";
      break;
    case "verde":
      c3.style.backgroundColor = "green";
      c3.innerHTML = "Primero";
      c2.style.backgroundColor = "blueviolet";
      c1.style.backgroundColor = "orange";
      c1.innerHTML = "Tercero";
      document.getElementById("caja").style.gridTemplateColumns = "1fr 1fr 2fr";
      break;
    case "gris":
      c3.style.backgroundColor = "gainsboro";
      c2.style.backgroundColor = "darkgray";
      c1.style.backgroundColor = "gray";
      document.getElementById("caja").style.gridTemplateColumns = "1fr 1fr 2fr";
      break;
  }
}
