// Practicando variables en JavaScript, todas las variables son dinámicas,
// osea que cambian de tipo de dato segun el valor que se le asigne.

// Declarando variables
var Cadena = "Hola Mundo desde JavaScript";
var Numero = 10;
var Decimal = 10.5;
var Booleano = true;
var Arreglo = [1,2,3,4,5];
var Objeto = {Nombre: "Juan", Apellido: "Perez", Edad: 20};
function Funcion() { return "Hola Mundo desde una funcion" }

// Imprimiendo variables
console.log(Cadena);
console.log(Numero);
console.log(Decimal);
console.log(Booleano);
console.log(Arreglo);
console.log(Objeto);
console.log(Funcion());

// Imprimiendo variables con su tipo de dato
console.log(typeof Cadena);
console.log(typeof Numero);
console.log(typeof Decimal);
console.log(typeof Booleano);
console.log(typeof Arreglo);
console.log(typeof Objeto);
console.log(typeof Funcion);

// Como anteriormente demostrado, cada variable tiene su propio tipo de dato
// Al cambiar el valor de una variable, su tipo de dato cambia
// Ejemplo:
Cadena = 10;
console.log(Cadena);
console.log(typeof Cadena);

// Tambien se puede declarar una variable sin asignarle un valor
var SinValor;
console.log(SinValor);

// Tambien existe un tipo de dato llamado simbolo
var Simbolo = Symbol("Simbolo");
console.log(Simbolo);
console.log(typeof Simbolo);

// Tambien declarar clases es un tipo de dato que entra como funcion
class Clase {
    constructor(Nombre, Apellido) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
    }
}

console.log(Clase);
console.log(typeof Clase);

// Tambien se puede declarar una variable con el tipo de dato null
var Nulo = null;
console.log(Nulo);
console.log(typeof Nulo);

// Existe una variacion del tipo de dato String llamado empty string
var EmptyString = "";
console.log(EmptyString);
console.log(typeof EmptyString);

// En javascript tambien podemos concatenar como en los otros lenguajes, pero ademas tambien
// podemos concatenar variables con texto, ya que los interpreta como string
var Nombre = "Juan";
var Apellido = "Perez";
var Edad = 20;
var Texto = "Mi nombre es " + Nombre + " " + Apellido + " y tengo " + Edad + " años";
console.log(Texto);

// Si en el proceso de contatenar variables que son numeros y se colocan de primero, el resultado
// sera un numero, pero si se colocan de ultimo, el resultado sera un string
var Texto2 = 10 + 10 + "10";
console.log(Texto2);