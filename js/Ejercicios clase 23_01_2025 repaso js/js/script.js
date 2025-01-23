let nombre = prompt("dime tu nombre");
let asignatura = prompt("Dime el nombre de la asignatura");


document.write(`<h1>Asignatura: ${asignatura}</h1>`);
document.write(`<p><strong>Alumno</strong>: ${nombre}</p>`)


// const cambiaColorTamanio = () =>
// const leerNumeroInt = (mensaje, validar) ==> {
//     while(true){
//         let num =parseInt(prompt(mensaje), "Debe ser un número entero");
//     }
// }
let numModulos = leerNumeroInt("¿Número de módulos de la asignatura?", x => x > 0)

function leerNumeroInt(mensaje, validar){
    while(true){
        let num =parseInt(prompt(mensaje), "Debe ser un número entero");

        let valido = !isNaN(num)
//typeof(validar) devuelve el tipo de una variable puede ser (string, number, boolean, biginy, symbol null)
        if(validar != undefined && typeof(validar) == typeof(Function)){
            valido &&= validar(num)
        }
        if(valido)
            return num
    }
}


let notaMedia=0

document.write("ul")

for (let modulo = 1;modulo <= numModulos;modulo++){
    let nota=leerNumeroFloat(`Introduce la nota de módulo ${modulo}`, x => x >= 0 && x <= 10)
    notaMedia += nota

    document.write(`<li><strong>Módulo ${modulo}</strong>: Nota ${nota}</li>`)
}
document.write("</ul>")
notaMedia /=numModulos

let notaFinal = notaMedia.toFixed(2)
alert(`La nota media de la asignatura ${asignatura.toUpperCase()} es ${notaFinal}`)
document.write(`<p><strong>Nota media de la asignatura</strong>: ${notaFinal}</p>`)

if (notaFinal > 5.0)
    document.write()