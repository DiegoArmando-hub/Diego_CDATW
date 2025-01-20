//array en JS es de tipo object, almacena varios valores

//let autos= new Array('BMW','Mercedes Benz','Volvo','Hyundai','Jaguar','Audi','');

//hoy en día se recomienda declarar Arrays de la siguiente manera
// Por referencia no referimos al tipo de dato del arreglo, ya que cuando creamos un arreglo en memoria se asigna espacio de memoria para almacenar este arreglo, a eso nos referimos a la referncia en memoria donde se almacena este arreglo y entonces la variable de autos va almacenar la referencia donde se encuentre en memoria el arreglo que se va ha crear
const autos = ['BMW','Mercedes Benz','Volvo','Hyundai','Jaguar','Audi'];
console.log(autos);

// console.log(autos[0]);
// console.log(autos[1]);
// console.log(autos[2]);
// console.log(autos[3]);
// console.log(autos[4]);

//para recorrer todo el array podemos usar el ciclo for
// let contardor;
for(let i=0;i<autos.length;i++){
    console.log(i+' : '+autos[i])
}

//modificar los elementos de un array y agregar más

autos[1]="MercedesBenz";
console.log(autos[1]);


// console.log(autos);
// agregar elementos a un Array
autos.push('dieog');
console.log( autos);

//otras formas para agregar elementos al array
console.log(autos.length)

//para agregar un elemento al final del Array se puede usar autos.length
autos[autos.length]="Cadillad";
console.log( autos);

//otra forma de agregar un elemento al array podemos usar
autos[8]='hummer';
console.log(autos)

// Preguntar si es un array  usamos la funcion/metodo isArray de la clase Array
console.log(Array.isArray(autos));
//oTRA FORMA usamos el nombre de nuestra variable "autos" instanceof(con esto estamos preguntando que si es una instancia de cierto tipo ) y utilizamos la clase Array
//lo que hace es preguntar si la variable autos es una instancia de la clase array y entonces nos regresa el valor de true
console.log(autos instanceof Array);