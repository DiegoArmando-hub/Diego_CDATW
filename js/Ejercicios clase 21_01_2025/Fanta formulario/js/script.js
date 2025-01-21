function validar(){

    let nombre=document.getElementById("name").value;
    let email=document.getElementById("email").value;

    if(nombre===""){
        // alert("el campo nombre no puede estar en blanco")
        document.getElementById("t_name").textContent="el campo nombre no puede estar en blanco"
    }else{
        if(email === ""){
            // alert("El campo email no puede estar vacio");
            document.getElementById("t_email").innerHTML="el campo email no puede estar en blanco"
        }
    }
}

//mostrar formulario
//document.getElementById('mostrarFormulario').addEventListener('click', 
function mostrarFormulario() {
    // Ocultar la sección
    document.getElementById('contenido').style.display = 'none';

    // Mostrar el formulario
    fetch('contacto.html') // Ruta al archivo HTML con el formulario
        .then(response => response.text())
        .then(data => {
            document.getElementById('formulario').innerHTML = data; // Cargar el contenido del formulario
            document.getElementById('formulario').style.display = 'block'; // Mostrar el formulario
        })
        .catch(error => {
            console.error('Error al cargar el formulario:', error);
        });
};