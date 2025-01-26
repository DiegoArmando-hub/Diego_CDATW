let resultado = sumarTodo(5, 4, 7, 9, 3)
console.log(resultado)//resultado 28

function sumarTodo(){
    let suma= 0;
    // console.log(arguments.length)
    for(let i=0; i < arguments.length; i++){
        suma += arguments[i];
        
        let contador = ` ${suma}`;
        console.log(contador);
    }
    return suma; //le resultado de la suma de 5+4+7+9+3 =28
}
//Asi de esta manera dinamicamente podemos pasar tantos argumentos como necesitemos a nuestra funcion de sumarTodo,
// podemos observar que no estamos especificando ningun parametro a nuestra funcion, pero todos lo valores que hemos pasado,
//  todos los argumentos se asignan a cada uno de ellos