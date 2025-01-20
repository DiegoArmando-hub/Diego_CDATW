function servicio(x) {
  console.log(x);
  if (x == 1) {
    let text = "Deseas este servicio? \n SI / NO";
    if (confirm(text) == true) {
      document.getElementById("texto1").innerHTML = "SI";
      document.getElementById("boton1").style.display = "none";
    } else {
      document.getElementById("texto1").innerHTML = "NO";
      document.getElementById("boton1").style.display = "none";
    }
  } else if (x == 2) {
    let text = "Deseas este servicio? \n SI / NO";
    if (confirm(text) == true) {
      document.getElementById("texto2").innerHTML = "SI";
      document.getElementById("boton2").style.display = "none";
    } else {
      document.getElementById("texto2").innerHTML = "NO";
      document.getElementById("boton2").style.display = "none";
    }
  } else {
    let text = "Deseas este servicio? \n SI / NO";
    if (confirm(text) == true) {
      document.getElementById("texto3").innerHTML = "SI";
      document.getElementById("boton3").style.display = "none";
    } else {
      document.getElementById("texto3").innerHTML = "NO";
      document.getElementById("boton3").style.display = "none";
    }
  }
}
function roja() {
  document.getElementById("imagen").src = "images/opt1.jpg";
  document.getElementById("imagen").style.display = "block";
}
function francesa() {
  document.getElementById("imagen").src = "images/opt2.webp";
  document.getElementById("imagen").style.display = "block";
}
function borrar() {
  document.getElementById("imagen").style.display = "none";
}

function datos() {
  let tel = prompt("Introduce el telenono movil");
  let patron = /^[67]{1}[0-9]{8}$/;
  // if(patron.test(tel)==true){
  if (patron.test(tel)) {
    alert("número correcto");
    let nombre = prompt("Ingresa tu nombre");
    let patron1 = /^[a-z][A-Z]$/;
    if (patron1.test(nombre)) {
      alert("Nombre correcto");
    } else {
      alert("Número incorrecto");
      // nombre = prompt("Ingresa tu nombre");
    }
  } else {
    alert("Número incorrecto");
    datos();
  }
}
