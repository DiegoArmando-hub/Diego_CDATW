function lavado(x) {
  if (x === "si") {
    document.getElementById("lavado").innerHTML = "SI";
  } else if (x === "no") {
    document.getElementById("lavado").innerHTML = "NO";
  }
}
function corte_u(x) {
  // console.log(x);
  if (x === "si") {
    document.getElementById("corte").innerHTML = "SI";
  } else if (x === "no") {
    document.getElementById("corte").innerHTML = "NO";
  }
}
function tenir_u(x) {
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
  document.getElementById("form_lav").reset();
  // document.getElementById("form_corte").reset();
  // document.getElementById("form_ten").reset();
  document.getElementById("array").style.display = "none";
  document.getElementById("b_validar").style.display = "block";
  document.getElementById("b_agrega_cl").style.display = "none";
}
// prueba ocultar y mostrar desde el mismo boton
function mostrarFormulario() {
  // Obtener el div con el id "formulario"
  const formulario = document.getElementById("formulario");
  const btn_validar = document.getElementById("b_validar");
  const btn_guarda_cli = document.getElementById("b_agrega_cl");

  // Alternar la visibilidad del formulario
  if (formulario.style.display === "none" || formulario.style.display === "") {
    // Si el formulario está oculto, mostrarlo
    formulario.style.display = "block";
    //Pregunto si el boton "Validar" esta oculto o no tiene un estilo definido (=== "") y el boton "Guardar cliente" esta visible y los envio en el mismo estado
    if (
      (btn_validar.style.display === "none" ||
        btn_validar.style.display === "") &&
      (btn_guarda_cli.style.display === "block" ||
        btn_guarda_cli.style.display !== "")
    ) {
      btn_validar.style.display = "none";
      btn_guarda_cli.style.display = "block";
    } else {
      btn_validar.style.display = "block";
      btn_guarda_cli.style.display = "none";
    }
  } else {
    // Si el formulario está visible, ocultarlo
    formulario.style.display = "none";
    if (
      (btn_validar.style.display === "none" ||
        btn_validar.style.display === "") &&
      (btn_guarda_cli.style.display === "block" ||
        btn_guarda_cli.style.display !== "")
    ) {
      btn_validar.style.display = "none";
      btn_guarda_cli.style.display = "block";
    } else {
      btn_validar.style.display = "block";
      btn_guarda_cli.style.display = "none";
    }
  }
}
function valida(x, y) {
  if (x === "" || y === "") {
    alert("No puede enviar campos vacios");
  } else {
    let patron = /^[67]{1}[0-9]{8}$/;
    if (patron.test(x)) {
       alert("La información ingresada esta correcta")
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

// Función que maneja la visualización y creación de la lista de clientes
function actualizarClientes(clientes) {
  const n_cli = clientes.length;
  let text = "<ul>";
  
  for (let i = 0; i < n_cli; i++) {
    text += '<li>' + clientes[i]+'</li>';
  }
  text += "</ul>";
  
  document.getElementById("array").innerHTML = text;
}

// Función para mostrar/ocultar la lista de clientes
function mostrar_clientes() {
  const div_array_cl = document.getElementById("array");

  if (div_array_cl.style.display === "none" || div_array_cl.style.display === "") {
    div_array_cl.style.display = "block";
    
    const clientes = ["Diego", "Juan", "Pedro", "Luis", "Karla", "Maria", "Celina"];
    actualizarClientes(clientes); // Actualizar el listado de clientes
  } else {
    div_array_cl.style.display = "none";
  }
}

// Función para guardar un nuevo cliente y actualizar la lista
function guardar_cliente(nom) {
  const clientes = ["Diego", "Juan", "Pedro", "Luis", "Karla", "Maria", "Celina"];
  
  // Agregar el nuevo cliente al array
  clientes.push(nom);
  
  // Mostrar la lista actualizada de clientes
  actualizarClientes(clientes);
  
  // Realizar otras acciones para habilitar campos y actualizar botones
  document.getElementById("array").style.display = "block";
  document.getElementById("tel").disabled = false;
  document.getElementById("nom").disabled = false;
  document.getElementById("form").reset();
  document.getElementById("b_validar").style.display = "block";
  document.getElementById("b_agrega_cl").style.display = "none";
}

