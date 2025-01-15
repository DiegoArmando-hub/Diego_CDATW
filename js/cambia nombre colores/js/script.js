function cambia(a) {
  if (a == "rojo") {
    document.getElementById("texto").innerHTML = "ROJO";
    document.getElementById("texto").style.backgroundColor="red";
  } else if (a == "naranja") {
    document.getElementById("texto").innerHTML = "NARANJA";
    document.getElementById("texto").style.backgroundColor="orange";
  } else if (a == "verde") {
    document.getElementById("texto").innerHTML = "VERDE";
    document.getElementById("texto").style.backgroundColor="green";
  } else if (a == "amarillo") {
    document.getElementById("texto").innerHTML = "AMARILLO";
    document.getElementById("texto").style.backgroundColor="yellow";
  }else
  {
    document.getElementById("texto").innerHTML = "NINGUNO";
    document.getElementById("texto").style.backgroundColor="white";
  }
}
