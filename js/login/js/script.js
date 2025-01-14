function login(u,p){
    let user="diego";
    let pass="diego1234"
    if(u==user&&p==pass){
        document.getElementById("ok").style.display="block";
        document.getElementById("f_login").style.display="none";
    }else{
        alert("datos incorrectos, volver a ingresar")
    }
}