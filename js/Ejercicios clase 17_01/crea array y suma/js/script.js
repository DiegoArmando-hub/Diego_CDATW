function crear(){
    let numeros = new Array(3)
    let suma=0;
    // let i=1;
    let num ="";
    let n=parseInt(numeros.length);
    // while (i <= n) {

    //     numeros[i]=prompt("Ingrese un numero "+[i]+" de 3");
    //     console.log(numeros[i]);
    //     suma = suma + parseInt(numeros[i]);
    //     console-log(suma);
    //     i++;
    // }

    for(let i=1;i<=n;i++){
        numeros[i]=prompt("Ingrese un numero "+[i]+" de 3");
        num += numeros[i];
        console.log(num);
        suma = suma + parseInt(numeros[i]);
        
    }
    document.getElementById("num_ingresados").innerHTML="Los numeros ingresados son: "+num;
    document.getElementById("resul").innerHTML="El resultado de la suma es: "+suma;


}