function lavado(x) {
  if (x == "si") {
    document.getElementById("lavado").innerHTML = "SI";
  } else if (x == "no") {
    document.getElementById("lavado").innerHTML = "NO";
  }
  // let texto="Desea lavar\n SI / NO";
  // if(confirm(texto)== true){
  //     document.getElementById("lavado").innerHTML="SI";
  //     document.getElementById("lav").style.display="none";
  // }else{
  //     document.getElementById("lavado").innerHTML="NO";
  //     document.getElementById("lav").style.display="none";
  // }
}
function corte(x) {
  if (x == "si") {
    document.getElementById("corte").innerHTML = "SI";
  } else if (x == "no") {
    document.getElementById("corte").innerHTML = "NO";
  }
}
function tenir(x) {
  if (x == "si") {
    document.getElementById("tenir").innerHTML = "SI";
  } else if (x == "no") {
    document.getElementById("tenir").innerHTML = "NO";
  }
}
function roja() {
  document.getElementById("img").style.display = "block";
  document.getElementById("img").src = "images/roja.jpg";
}
function franc() {
  document.getElementById("img").style.display = "block";
  document.getElementById("img").src = "images/francesa.webp";
}
function borrar() {
  document.getElementById("img").style.display = "none";
  document.getElementById("formulario").style.display = "none";
  document.getElementById("form").reset();
  document.getElementById("array").style.display = "none";
}
function mostrarFormulario() {
  //   document.getElementById("d_cli").style.display = "block";
  document.getElementById("formulario").style.display = "block";
  document.getElementById("b_agrega_cl").style.display = "none";
  document.getElementById("b_validar").style.display = "block";
}
function valida(x, y) {
  if (x == "" || y == "") {
    alert("No puede enviar campos vacios");
  } else {
    let patron = /^[67]{1}[0-9]{8}$/;
    if (patron.test(x)) {
      // alert("info ok")
      document.getElementById("b_validar").style.display = "none";
      document.getElementById("b_agrega_cl").style.display = "block";
      document.getElementById("tel").disabled = true;
      document.getElementById("nom").disabled = true;
    } else {
      alert(
        "El número de teléfono ingresado está incorrecto, por favor verifica. \nDebe empezar con 6 o 7 y tener 9 dígitos."
      );
    }
  }
}
function mostrar_clientes() {
  document.getElementById("array").style.display = "block";
  const clientes = ["Diego", "Juan", "Pedro", "Luis"];
  let n_cli = clientes.length;

  let text = "<ul>";
  for (let i = 0; i < n_cli; i++) {
    text += clientes[i] + "<br>";
  }
  text += "</ul>";

  document.getElementById("clientes").innerHTML = text;
}

function guardar_cliente(nom) {
  const clientes = ["Diego", "Juan", "Pedro", "Luis"];
  clientes.push(nom);
  let n_cli = clientes.length;

  let text = "<ul>";
  for (let i = 0; i < n_cli; i++) {
    text += clientes[i] + "<br>";
  }
  text += "</ul>";

  document.getElementById("array").style.display = "block";
  document.getElementById("clientes").innerHTML = text;
  document.getElementById("tel").disabled = false;
  document.getElementById("nom").disabled = false;
  document.getElementById("form").reset();
  document.getElementById("b_validar").style.display = "block";
  document.getElementById("b_agrega_cl").style.display = "none";
  //   document.getElementById("formulario").style.display = "none";
}

// function pideDatos() {
//     let tel = prompt("Introduce el teléfono móvil");

//     // Validación para teléfono vacío
//     while (tel == "") {
//         alert("No ha ingresado información");
//         tel = prompt("Introduce el teléfono móvil");
//     }

//     // Convertir el teléfono a un número
//     let n = parseInt(tel);

//     // Verificar si el teléfono tiene el formato adecuado
//     valida(n);

//     function nombre() {
//         let nombre = prompt("Ingresa tu nombre");

//         // Validar que el nombre no esté vacío
//         while (nombre == "") {
//             alert("No ha ingresado información en el campo nombre");
//             nombre = prompt("Ingresa tu nombre");
//         }
//         if(nombre !=""){
//           document.getElementById("datos").innerHTML = "Hola " + nombre + ", tu teléfono es " + tel;
//         }
//         // Mostrar los datos si el nombre es válido

//     }

//     function valida_n(x) {
//         let patron = /^[67]{1}[0-9]{8}$/;

//         if (patron.test(x)) {
//             nombre();  // Si el número es válido, pedir el nombre
//         } else {
//             alert("Número incorrecto");
//             pideDatos();  // Si el número no es válido, volver a pedirlo
//         }
//     }
//}
