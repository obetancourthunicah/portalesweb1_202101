// Esto son comentario en Javascript
// Javascript subset sub language de c++
// Estructuras y bloque son similares a l sintaxis de c
/*
  Los comentario multilineas 

  La unica diferencia con c  es que Javascript no es fuertemente tipeado.
 */

//int edad = 16;

var edad = 16;
console.log(edad);
edad = "Es mayor de edad";
console.log(edad);

// Definir Gramática de programación.

var cuandolosgatosnoestanlosratonesgranfiestahacen = true;

// Camel Case Camello
var cuandoLosGatosNoEstanLosRatonesGranFiestaHacen = true;

// Snake
var cuando_los_gatos_no_estan_los_ratones_grab_fiesta_hacen = true;

// Hungaro
var iEdad = 10
var sEdad = "Mayor de Edad";
var bEdad = true;
var vEdad = [1,2,3,4,5];

var hola = 1;
var Hola = 10;
console.log(Hola);

// hungaro Camello

var intEdad = 10;

if (bEdad) {
  //expresiones
}

if (bEdad) {
  //expresiones
} else {
  //expresiones
}

var sTernario = (bEdad) ? "expresion verdadero" : "expresion falso";

var sTernario = "";
if (bEdad) {
  sTernario = "expresion verdadero";
} else {
  sTernario = "expresion falso";
}



switch (hola) {
  case 1:
    //expresiones
    //expresiones
    //expresiones
    break;
  case 2:
     //expresiones
    break;
  default:
    //expresiones
}


if (bEdad){
  if (bEdad1) {
    if (bEdad2) {
      if (bEdad3) {
        if (bEdad4) {
          if (bEdad5) {
            if (bEdad6) {

            }
          }
        }
      }
    }
  }
} // Pesimo analisis y diseño del algoritmo


//Ciclos en javascript 

for ( var i = 0 ; i < 100; i++){
  // ¿Cuantas iteraciones?
}

var i = 0;
while ( i < 100) {
  // ¿cuantas iteraciones?
  i++;
}

var i=0;
do {
  // iteraciones
  i++;
} while ( i > 100);

var mensaje = "Hola";
function saludar(mensaje){
  mensaje = "Adios";
  console.log(mensaje);
}

console.log(mensaje);// Hola

saludar(mensaje); // Adios

console.log(mensaje); //Hola


// Programacion sin IO (Input Output -> Bloqueo)

/*

  boolean function getValue( handler ){
    sleep(50000);
    if (hayerror){
      handler(err, null);
    }
    handler(false);
  }

  integer value = 10;
  boolean value2 = getValue(
    function (err,  returnValue ) {
      if (err)
      {}
      print( "Hola Mundo " + returnValue);
    }
  );
try{}catch(e)={}
  throw exception()



 */

/*
Ninguna
1) Solo una <----
Infinito
 */
// Versiones de Javascript

// ES5 ES6 ES7

// ES6  // Vanilla Javascript
// const, let, var

// Segun el Caso
// Front End, página directamente sin usar ningun transpilador o compilador

// Babel, webpack, trasnpilar  -> transforma sintaxis de ES6 7 a ES5 seguro.
