function apellido(){
    let ap = prompt("Ingresa tu apellido");
    document.getElementById("apellido").innerHTML=ap;
    document.getElementById("b_a").style.display="none";
}
function curso(){
    let cu=prompt("Ingresa el curso");
    document.getElementById("curso").innerHTML=cu;
    document.getElementById("b_c").style.display="none";
}
function telefono(){
    let te=prompt("Ingresa tu numero de telefono");
    document.getElementById("telefono").innerHTML=te;
    document.getElementById("bt").style.display="none";
}