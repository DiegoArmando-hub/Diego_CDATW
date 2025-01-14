function verificar(a,b){
//   console.log(a,b)
    
    if(b<=3){
       
        document.getElementById("nuevo").style.display="block";
        document.getElementById("nombre_nuevo").innerHTML=a;
        document.getElementById("datos").style.display="none";
    }else if (b<=10){
        document.getElementById("veterano").style.display="block";
        document.getElementById("nombre_viejo").innerHTML=a;
        document.getElementById("datos").style.display="none";
    }else
    document.getElementById("honor").style.display="block";
    document.getElementById("nombre_honor").innerHTML=a;
    document.getElementById("datos").style.display="none";
}