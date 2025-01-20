function sumar(x,y){
    let n1=parseInt(x);
    let n2=parseInt(y);
    let resultado= n1 + n2;
    document.getElementById("resultado").innerHTML=resultado;
}
function conf(){
    let text = "Deseas continuar?";
  if (confirm(text) == true) {
    alert("Vuelve a ingresar dos numeros");
    document.getElementById("form").reset();
    
    document.getElementById("resultado").innerHTML=" ";
  } else {
    alert("Nos vemos")
  }
  
}