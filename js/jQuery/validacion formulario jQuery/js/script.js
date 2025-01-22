// Esto es para evitar que cualquier código jQuery se ejecute antes de que el documento termine de cargarse (esté listo).

// $(document).ready(function(){

// });

$(function(){$("#registro").validate(
    {
        rules:{
            nombre:{
                required:true

            },
            mail:{
                required:true,
                email:true
            },
            contra:{
                required:true,
                rangelengt:[8,16]
            },
            ccontra:{
                equalTo:`#contra`
            }
        },
        messages:{
            nombre:{
                required:"Acurdate de poner el nombre!!"
            },
            mail:{
                required:"Acuerdate de poner el email!!",
                email:"Ojo formato de email nombre@operador.com"
            },
            contra:{
                required:"Escribe  contraseña",
                rangelengt:"debe tener entre 8 y 16 caracteres"
            },
            ccontra:{
                equalTo:"no coincide con la contraseña"
            }
        }
        
    }
   )
  
  });