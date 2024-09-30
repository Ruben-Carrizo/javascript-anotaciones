/*
JAVA SCRIPT
-LINK DE VINCULACION ABAJO  EN EL BODY
Tipo de datos:
-number:  5124  3.14  .236
-strings: “hola” ‘hola’   ´hola ${nombre}´ (ingresar código java script)
-boolean:  true  false
-undefined: existe la variable pero no tiene dato alguno
-null:
-NAN “not a number” : no es numero pero es  tipo number 

Variables:
-var: var soyVar  = “soy var” (hosting – se  puede redeclarar o sobreescribir – se pueden reasignar – son globales)
-let: let soyLet = “soy let” (no se le aplica hosting – no se puede redeclarar – se puede reasignar “cambiar el valor” – si están en bloque solo se leen ahi) consejo usar “let o var” para no cometer el error de repetir nombre
-const: (no se puede reasignar ni redeclarar)
-typeof nos permite saber con que dato estamos trabajando
Console.log(typeof “nombre variable”) string
Console.log(typeof true) boolean
Console.log(typeof  453) number
Console.log(typeof 345, “hgola”) object
Prompt
Prompt (“ingresa tu edad”) 
Cosole.log (typeof edad)
    -String a number  “26” a 26 console.log(+edad);  (number(edad));

alert 
alert (“alerta de algo..”)
operadores de asignación:
incremento ++
decremento --
estricto igual ===  valor y tipo de dato
igual valor ==
desigual ¡= valor
desigual estricto ¡== valor y tipo de dato
< menor
>mayor
<=menor igual
>= mayor igual
Operadores lógicos comparan booleanos
And  &&
Or || (necesita un true para dar verdadero)
Not  ¡ (invierte el valor ¡true=false)
Condicional
Ejercicio; mostrar en consola si la edad pasada por promt es mayor o menor:
Const edad = promt (“ingrese su edad”)
If(edad > 18){
Console.log(“sos mayor”);
}else{
Console.log(“sos menor”);
}


-operador  ternario
Edad >= 18 ?
	Console.log(“sos mayor”) :
Console.log(“sos menor”)
Anidado:
Edad >= 18 ?
	Console.log(“sos mayor”) :
	( (edad>16 ) ?
	Console.log(“te falta poco”) :
	Console.log(“te falta mas de 3 años”) )
Console.log(“sos menor”)
Else if
Const colorfavorito = promt  (“verde rojo blanco”)
If (colorfavorito ===rojo){
	Console.log (“aguante el rojo”);
}else if (colorfavorito === “verde”){
Console.log(“san martin”);
}else if (colorfavorito === “blanco”){
 	Console.log(un angel puro)
}else{
Console.log(“te di opciones”);
}


switch
Switch(colorfavorito){
	Case “rojo”:
		Console.log(“aguante el rojo”)
		Break;
	Case “amarillo” :
		Console.log (“primavera”)
		Break;
	case “verde” :
		console.log (san martin)
		break;
	default :
		console.log(“te di opcines”);
		break;
}

Array: estrucutura de datos / se pueden meter varios datos en un array / elemento iterable 
Let myarray =  
[ 						indices
1, 					//0
“holis”,				//1
 “manzana”,				//2
 [“autos, camionetas” ],		//3
 True					//4
]
Console.log(myarray);
Console.log(myarray.length); 			//length cantidad de elementos en el array
Console.log(myarray[4]);			//true

For (let i = 0, i< myarray.length; i++){
	Console.log(myarray [ i ])
}

For (let objeto of myarray){
Console.log(objeto)
}
Let str = “hola como estas”
For (const element of str) {
	Console.log(element)
}

let i = -1;
while (i > 0){
	console.lo g(i)
	i--
}
do {
	console.log(i)
	i--
} while (i>0);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];

for (let index = 0; index < numbers.length; index++) {
	if(number [index] % 2 !== 0){
		continue
	}
	console.log(number [index])
	
}
	
// funciones

		//porcion de codigo que procesa una entrada y nos devuelve una salida, y las podemos usar cuando querramos o necesitemos en otra parte del codigo

function saludar() {            //declaracion
	console.log("hola mundo")
}                              //ejecucion
saludar()

//arrow function funciones anonimas se deben almacenar en algun lugar para poder usarlas

const suma = (a,b) => {
	console.log(a + b)
}
suma(10,12)
//console.log es solo para mostrar en consola
//return es para retornar o de devolver un valor y poder reutilizarlo 
const mult = (a,b) => {
	return a*b
}
suma(mult(6,6),8)


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
for(let i=0; i < numbers.length; i++){ //desde
	if (i===4) { //hasta
		continue
	}
	console.log (numbers [i]);
}
x

//funciones recursivas => es una funcion que se llama asi misma dentro de ella

function factorial (n){
	//caso base se define dentro de la funcion o caso de corte
	if(n=== 1) return 1
	return n * factorial (n-1)
}
console.log(factorial(6));

function cuentaAtras(n){
	console.log(n)
	//caso de corte
	if(n===0){
		console.log('hasta aca llegue')
		return
	}
	return cuentaAtras(n+1)
}
cuentaAtras(12)
*/
                         // alt91[]  alt60<  alt62>
             //javascript
-lenguaje de programacion
-interpretado (el codigo no debe de ser pasado por un compilador)
-orientado a objetos 
-imperativo (instrucciones de linea a linea)
-case sensitive (importa si es en mayusculas o no)
-tipado debil (el valor de las variables puede cambiar en el tiempo)
-lenguaje dinamico (la variable se adapta al texto)
-ecmascript 

				se usa para:
dinamismo de los sitios web
servidor en nodejs
tecnologias frontend como angular, react  o Vue.JS 

//VARIABLES	
es un un espacio que guardamos en memoria
var
let
const: se debe declarar e inicializar al mismo tiempo

tipos de daos: String, number, Boolean
casos especiales: undefined, Null, NaN
 string: "cadena de texto" ''
 number: numero 19 1000
 boolean: 0 1 true false

 scope: la variable tiene valor dentro del alcance de un bloque de codigo
 
 hosting: 


				    INCIALIZACION       reasignacion 
 declaracion: let nombre = ruben;   nombre = alejandro