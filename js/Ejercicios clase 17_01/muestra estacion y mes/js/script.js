function mostrar_estacion(x) {
  let mes = parseInt(x);
  let est = document.getElementById("estacion");
  switch (mes) {
    case 1:
    case 2:
    case 3:
      est.innerHTML = "INVIERNO";
      break;
    case 4:
    case 5:
    case 6:
      est.innerHTML = "PRIMAVERA";
      break;
    case 7:
    case 8:
    case 9:
      est.innerHTML = "OTONO";
      break;
    case 10:
    case 11:
    case 12:
      est.innerHTML = "VERANO";
      break;
    default:
      alert("Debes ingresar un numero del 1 a 12");
  }
}
function mostrar_mes(x) {
  let m = parseInt(x);
  let mes = document.getElementById("v_mes");
  if (m == 1) {
    mes.innerHTML = "ENERO";
  } else if (m == 2) {
    mes.innerHTML = "FEBRERO";
  } else if (m == 3) {
    mes.innerHTML = "MARZO";
  } else if (m == 4) {
    mes.innerHTML = "ABRIL";
  } else if (m == 5) {
    mes.innerHTML = "MAYO";
  } else if (m == 6) {
    mes.innerHTML = "JUNIO";
  } else if (m == 7) {
    mes.innerHTML = "JULIO";
  } else if (m == 8) {
    mes.innerHTML = "AGOSTO";
  } else if (m == 9) {
    mes.innerHTML = "SEPTIEMBRE";
  } else if (m == 10) {
    mes.innerHTML = "OCTUBRE";
  } else if (m == 11) {
    mes.innerHTML = "NOVIEMBRE";
  } else if (m == 12) {
    mes.innerHTML = "DICIEMBRE";
  } else alert("Debes ingresar un numero del 1 a 12");
}
