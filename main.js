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


//clousures
//objetos: estrucutra de datos
	let persona = {
		nombre: "messi",
		edad: 37,
		esCasado:false,
		equipos: ["barcelona","psg", "miami"],
		trofeos: {
			copas: "cahmpions",
			liga:"liga españa",
			seleccion: "mundial",
		}
	}
	//accedemos a las propiedades
	console.log(persona);
	console.log(persona.edad);
	console.log(persona["equipos"]);
	console.log(persona.trofeos.copas)
	//agregamos propiedades
	persona.esCasado = true;
	persona["crack"] = true; //agregar nueva propiedad
	persona.edad = 40;

//metodos: funciones que trabajan dentro del objeto. 'this' se utiliza para referirse al objeto
let persona2 = {
	nombre: "messi",
	edad: 37,
	esCasado:false,
	equipos: ["barcelona","psg", "miami"],
	trofeos: {
		copas: "cahmpions",
		liga:"liga españa",
		seleccion: "mundial",
	},
	saludar: function (){
		console.log("hola mi nombre es ${this.nombre} y tengo ${this.edad} años")
	}
}
//object.entries: nos devuelve un arreglo de array con valor de propiedad y su valor. object.value nos devulve solo el valor. object.keys: solo las propiedades

	//object.value
	const value = object.value(persona2)
	console.log(value);
	//object.keys
	const keys = object.keys(persona2)
	console.log(keys);
	//object.entries
	const entries = object.entries(persona2)
	console.log(entries);

//spread operator ...
const nums = [1, 2, 3]
const copyNums = [...nums]

copyNums.push(4)
console.log([...copyNums, "otra cosa", ...nums])
console.log (nums);

const moto ={
	color: "azul"
	motor: "110"
}
const auto={
	color: "rojo"
	motor: "1.6"
	escape: true
}
console.log({...moto, ...auto, escape: false})

	//rest operator: 
	const resteOperator = (a, b, ...rest) =>{
		console.log("a=>", a)
		console.log("b=>", b)
		console.log("resto=>", rest)
	},
	 
	//destructuring
	const obj = {
		name: "de paul",
		age: "35",
		country: "argentina",

	}
	const {name, age, country} = obj

	//destrucutring array

	const array = [1, 2, 3, 4, 5, 6]
	const [num1, num2, num3, ...resto] = array
	console.log(num1);
	console.log(num2);
	console.log(num3);
	console.log(resto);
	
	//METODOS DE STRING: javascript toma todo como objetos
	string: cadena de caracteres que le podemos asignar a una variable, se ponen entre comillas

	//metodos: funciones dentro de un objeto
	 lenght:saber el largo de una cadena de string
	 mayusuclas y minusculas: toUpperCse, ToLowerCase
							var miAuto = "fiAt"
							console.log(miAuto.toUpperCase()); "FIAT"
	 reemplzar: replace() permite reemplzar LA PRIMER ocurrencia de un caracter o grupo de caracteres por otros
	 				cosnt texto = "messi es el mejor";
					const nuevoTexto = texto.replace("messi","maradona")
					consoloe.log(nuevoTexto) "maradona es el mejor..."
	replaceAll(): permite reemplazar todas las ocurrencias de un caracter o grupo de caracteres por otros
					const texto= "messi es el mejor porque messi.."
					const nuevoTexto = texto.replaceAll("messi","maradona")
					console.log(nuevoTexto) "maradona es el mejor porque maradona..."	
					*/	


					
					
                         // alt91[]  alt60<  alt62> alt96`
								//ctrl-ctrl-} ``
	/*					 //javascript Dalto
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

tipos de datos: String, number, Boolean         //primitivos             
casos especiales: 	undefined:temporalmente sin valor 
					Null: variable declarada con valor vacio
 					NaN: no es un numero, pero si es tipo numero //primitivos: vienen con el lenguaje, son originales
 string: "cadena de texto" ''
 number: numero 19 1000
 boolean: 0 1 true false

 scope: la variable tiene valor dentro del alcance de un bloque de codigo
 
 hosting: 


				    INCIALIZACION       reasignacion 
 declaracion: let nombre = ruben;   nombre = alejandro

 //ejercicio con prompt:

 let nombre = prompt ("cual es tu nombre?")
 alert("un gusto"+ " " + nombre) 
 
 //OPERADORES 
 
 operadores de asignacion: asigna un valor operando de la izquierda basado en el valor der la derecha
 x= asigancion
 x+ adiccion
 x- sustraccion
 x* multiplicacion
 x/ division
 x% resto
 x** exponenciacion 
 
 operadores aritmeticos: toman valores numericos como sus operando y retornan un valor numerico unico
 ++ incremento
 -- decremento

 //concatenacion: union de cadena de textos. (string)
 
 ejemplo: string forzado
 
 numero1 = 12;
 numero2 = 10;
 resultado = "" + numero1 + numero2; (1210)
 
 concat: se necesita obligatoriamente un numero
 ejemplo:

 numero1 = "53";
 numero2 = 8;
 resultado = numero1.concat(numero2); (538)

 `backtiks` y ${}

nombre = "lucas"

frase = `soy ${nombre} y estoy caminando`; (soy lucas y estoy caminando)

//OPERADORES DE COMPARACION Y LOGICOS 
comparacion:
== 	igualdad
!= 	desigualdad
=== identidad / igualdad estricta dato y valor
!== desigualdad estricta
< 	menor que
> 	mayor que
<= 	menor igual que
>= 	mayor igual que


logicos: nos devuelven un resultado a partir de que se cumpla (o no) una condicion, su resultado es booleano, y sus operandos son valores logicos o asimilables a ellos.

&& and  se necesita una falsa para ser false
||	or	se necesita una verdadera para ser true
!   not  niega el valor inviertiendo el resultado

	
camelCase: modo de escritura donde la primera palabra va con minuscula y la segunda empieza con mayuscula (asi se trabaja con variables)	

//CONDICIONALES: sentencias que nos permiten comprobar si una condicion se cumple

if (10<15){
	alert("hola")
}

nombre= "Ruben";
apellido= "Carrizo";
if(nombre == "Ruben" && apellido == "Carrizo"){
	alert("mi nombre es " + nombre + ` ` + apellido)
}
else if (nombre == "Dalto"){
	alert("bienvenido")
}
else{
	alert ("nunca habia escuchado ese nombre");
}
	
dineroCofla = prompt ("cuanto dinero tienes Cofla");
dineroRoberto = prompt ("cuanto dinero tienes Roberto");
dineroPedro = prompt ("cuanto dinero tienes Pedro");1

dineroCofla= parseInt(dineroCofla)
if (dineroCofla >= 0.6 && dineroCofla <1){
	alert("cofla compra el de agua")
	alert ("vuelto" + (dineroCofla - 0.6)) 
}
else if (dineroCofla >=1 && dineroCofla < 1.6){
	alert ("cofla compra el de crema")
	alert ("vuelto" + (dineroCofla - 1))
}
else if (dineroCofla >=1.6 && dineroCofla < 1.7){
	alert ("cofla compra el heladix")
	alert ("vuelto" + (dineroCofla - 1.6))
}
else if (dineroCofla >=1.7 && dineroCofla <1.8){
	alert ("cofla comprate el heladovich")
	alert ("vuelto" + (dineroCofla - 1.7))
}
else if (dineroCofla >=1.8 && dineroCofla < 2.9){
	alert ("cofla compra el de helardo")
	alert ("vuelto" + (dineroCofla - 1.8))
}
else if (dineroCofla >=2.9){
	alert ("cofla helado con cofites o el pote de 1/4kg")
	alert ("vuelto" + (dineroCofla - 2.9))
}
else{
	alert("cofla anda a buscar plata gil")
}

if (dineroRoberto >= 0.6 && dineroRoberto <1){
	alert("roberto compra el de agua")
}
else if (dineroRoberto >=1 && dineroRoberto < 1.6){
	alert ("roberto compra el de crema")
}
else if (dineroRoberto >=1.6 && dineroRoberto < 1.7){
	alert ("roberto compra el heladix")
}
else if (dineroRoberto >=1.7 && dineroRoberto <1.8){
	alert ("roberto comprate el heladovich")
}
else if (dineroRoberto >=1.8 && dineroRoberto < 2.9){
	alert ("roberto compra el de helardo")
}
else if (dineroRoberto >=2.9){
	alert ("roberto helado con cofites o el pote de 1/4kg")
}
else{
	alert("roberto anda a buscar plata gil")
}

if (dineroPedro >= 0.6 && dineroPedro <1){
	alert("pedro compra el de agua")
}
else if (dineroPedro >=1 && dineroPedro < 1.6){
	alert ("pedro compra el de crema")
}
else if (dineroPredro >=1.6 && dineroPedro < 1.7){
	alert ("pedro compra el heladix")
}
else if (dineroPedro >=1.7 && dineroPedro <1.8){
	alert ("pedro comprate el heladovich")
}
else if (dineroPedro >=1.8 && dineroPedro < 2.9){
	alert ("pedro compra el de helardo")
}
else if (dineroPedro >=2.9){
	alert ("pedro helado con cofites o el pote de 1/4kg")
}
else{
	alert("pedro anda a buscar plata gil")
}   
	
//ARRAYS: contenedor con datos arreglados, el array es un objeto

frutas = ["pera","manzana","banana"];
document.write(frutas);
document.write(frutas[2]); //los valores no definidos tiran undefined

//arrays asociativos: 

pc = {
	nombre: "daltoPC",
	procesador: "intel core 17",
	ram: "16gb",
	espacio: "1tb",
}
document.write(pc["ram"])

//BUCLES E INTERACCION

while: mientras que, funciona con true, es infinito

do: hacer

let numero = 0;
do {
	numero++;
	document.write(numero);
	
} 
while (numero <6);

for: finito, necesita declaracion-inicializacion-iteracion(aumento decremento)


for (let i = 0; i<6; i++) {
	document.write(i)
}

/*
//break: cortar y salir del bloque
let numero = 7;
while (numero < 15) {
	numero++;
	document.write (numero)
	if (numero == 13) {
		break
	}
}

//continue: saltar y seguir con el bloque
	
let numero = 7;
while (numero < 15) {
	numero++;
	if (numero == 13) {
		continue;
	}
	document.write (numero)
}

//for in: nos devuelve la posicion, nos muestra el indice

let animales = ["gato", "perro", "tiranosaurio rex"];
for (animal   in animales) {
	document.write (animal);
}

//for of: nos muestra el valor
for (animal   of animales) {
	document.write (animal);
}
//FUNCIONES: porcion de codigo ya declarda que se puede reutilizar
palabra reservada   nombre de funcion   parametros  funcion 
													condiciones
      function         name               (   )      {      }

function saludar(){ //creacion de la funcion
	respuesta =prompt ("¡hola lucas! ¿como fue tu dia?");
	if (respuesta == "bien"){
		alert("me alegro")
	}else{
		alert("una pena")
	}
}
saludar ()
saludar () //llamado a la funcion 
//return: nos devuelve un valor, haciendo que la funcion nos de un tipo de dato, return tambien finaliza la buncion cortando el bucle 

            //parametros
function suma(num1,num2){
	let res = num1+num2;
	document.write(res);
}
    //num1,num2
suma  (30 , 50)

function suma (num1,num2){
	let res = num1+num2;
	return res
}
let resultado = suma(20,20)
document.write(resultado)

function saludar (nombre){
	let frase = `¡Hola ${nombre}! ¿como estas?`;
	document.write (frase)
}
saludar ("ruben")

//scope: hae que las variable tengan un alcance regional, evitando errores con el uso de "let"

//funciones flecha: se reemplaza la palabra function por =>
	las funciones flecha se retornan automaticamente 

const saludar = (nombre)=>{
	let frase = `¡hola ${nombre}! ¿como estas?`;
	document.write (frase)
}
saludar ("jose")

let free= false;
const validarCliente = (time)=>{
	let edad = prompt ("¿cual es tu edad?");
	if (edad > 18){
		if (time >= 2 && time < 7 && free ===false){
			alert (`poder pasar gratis porque sos la primer prsona despues de las 2`);
			free = true;
		}else{
			alert(`son las ${time}:00hs y podes pasar, pero pagas`);

		}
	}else{
		alert("sos menor, no pasas")
	}
}
validarCliente(23);
validarCliente(23.3);
validarCliente(24);
validarCliente(2.3);

let cantidad = prompt ("¿cuantos alumnos son?")
let alunmnosTotales =[];
for (i = 0; i < cantidad ;i++){
	alumnosTotales[i] = [prompt("nombre del alumno "+(i+1)),0];
}
const tomarAsistencia = (nombre,p)=>
	let presencia = prompt (nombre);
	if (presencia == "p" !! presencia == "p"){
		alumnosTotales [i][1]++;
	}
	for (i =0; i<30; i++){
		for (alumno in alumnosTotales){
			tomarAsistencia(alumnosTotales[alumno][0],alumno);
		}
	}
	for (alumno in alumnosTotales){
		let resultado = `${alumnosTotales[alumno][0]<br>
			______presentes: ${}
		}
	}
		

	const sumar = (num1,num2) =>{
		return parseInt(num1) + parseInt(num2)
	}
	const restar = (num1,num2) =>{
		return parseInt(num1) - parseInt(num2)
	}
	const dividir = (num1,num2) =>{
		return parseInt(num1) / parseInt(num2)
	}
	const multiplicar = (num1,num2) =>{
		return parseInt(num1) * parseInt(num2)
	}

	alert ("¿que operacion deseas realizar?");
	operacion = prompt("1:suma, 2:resta, 3:division, 4:multiplicacion");
	
	if (operacion == 1){
		let numero1 = prompt ("primer numero para sumar");
		let numero2= prompt("segundo numero para sumar");
		resultado= sumar(numero1,numero2);
		alert(`tu resultado es ${resultado}`);
	}
	if (operacion == 2){
		let numero1 = prompt ("primer numero para restar");
		let numero2= prompt("segundo numero para restar");
		resultado= restar(numero1,numero2);
		alert(`tu resultado es ${resultado}`);
	}
	if (operacion == 3){
		let numero1 = prompt ("primer numero para dividir");
		let numero2= prompt("segundo numero para dividirr");
		resultado= dividir(numero1,numero2);
		alert(`tu resultado es ${resultado}`);
	}
	if (operacion == 4){
		let numero1 = prompt ("primer numero para multiplicar");
		let numero2= prompt("segundo numero para multiplicar");
		resultado= multiplicar(numero1,numero2);
		alert(`tu resultado es ${resultado}`);
	}

	//POO: paradigma de la programacion, que intenta actualizar la forma en la que programamos como si lo hicieramos en la vida real
	-clase: caja contenedora del objeto
	-objeto: usar const para trabajar con objetos
	-atributo: cualidades, caracteristicas del objeto
	-metodo: cosas que puede hacer nuestro obejto (funcion dentro de una clase)
	-constructor: particuladridad que tienen las clases, funcion obligatoria que construye las propiedades del objeto
	-instanciada: cuando se termina todo se puede decir que estamos instanciando un objeto
	

class animal{
	constructor(especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
	}
	verInfo(){
		document.write(this.info)
	}
} 
const gato = new animal ("gato", 7, "marron")
const loro = new animal ("loro", 4, "verde" )
const perro = new animal ("perro", 5, "negro")
document.write (perro.info)
perro.verInfo();

//caracteristicas de las poo

-abastraccion:intentamos reducir al maximo o resumir el objeto, haciendolo menos complejo

-modularidad: resolver un problema grande, resolviendolo por partes. para resolver por pequeñs porciones 

-encapsulamiento: encapsular los datos para que sean privados y el usario no pueda aceder tan facil

-polimorfismo: capaciodad que tiene un objeto para comportarse distinto del resto solo por sus propiedades
    //no se puede tener un objeto con el mismo nombre de la clase


//otros conceptos poo
-herencia: extends palabra reservada. es crear una clase que va a tomar todo lo que puede hacer otra clase y agregarle cosas nuevas
-metodos estaticos
-metodos accesores (getters, setters)


class Animal{
	constructor(especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
	}
	verInfo(){
		document.write(this.info)
	}
} 

class Perro extends Animal{
	constructor(especie,edad,color,raza){
		super(especie,edad,color);
		this.raza = raza;
	}
	ladrar(){
		alert("waw")
	}
}

const gato = new Animal ("gato", 7, "marron")
const loro = new Animal ("loro", 4, "verde" )
const perro = new Perro ("perro", 5, "negro", "doberman")
perro.ladrar();
*/