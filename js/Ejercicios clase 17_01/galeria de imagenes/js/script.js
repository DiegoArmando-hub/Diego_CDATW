function cambia(x){
    let img=["images/escalera1.webp","images/escalera2.webp","images/escalera3.webp","images/escalera4.webp","images/escalera5.webp","images/escalera6.webp","images/escalera7.webp"];

    let ruta_img=document.getElementById("imagen");

    let elementos = document.getElementsByName("escaleras");

console.log("el numero de X es "+x)
console.log(elementos.length)

    for (i = 0; i < elementos.length; i++) {
        if (elementos[i].checked == true) {
            ruta_img.src= img[i];
        }
    }
}
