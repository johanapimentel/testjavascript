const h1 = document.querySelector('h1');
const texto = document.querySelector('#texto');

h1.innerText = `Mi Test de Javascript`;

/*texto.innerText = `Mi Test de Javascript

Variables y operaciones

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve? 
	Es un espacio en memoria que sirve para guardar un valor
¿Cuál es la diferencia entre declarar e inicializar una variable? 
	declarar es reservar el espacio en memoria, inicializarla es decirle que valor inicial o por default tendrá al principio
¿Cuál es la diferencia entre sumar números y concatenar strings? 
	son dos tipos de variables distintas, en la primera son números en la segunda es texto, se usa el mismo operador.
¿Cuál operador me permite sumar o concatenar? 
	el de suma "+"

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre= name: texto
Apellido= last_name: texto
Nombre de usuario en Platzi= user_platzi: texto
Edad= age: número entero
Correo electrónico= email: texto
Mayor de edad= elder: booleano
Dinero ahorrado= money: número decimal
Deudas= debt: número decimal

3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let name = “”;
let last_name = “”;
let user_platzi = “”;
let age = 0;
let email = “”;
let elder = true;
let money_save = 0.0;
let debt = 0.0;

4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

const show_name = (first_name = ‘Vanessa’, last_name = “Pimentel”) => {
	console.log(Nombre completo: {first_name} {last_name});
};
const show_money = (money_save = 5678, debt = 1234) => {
	let money = money_save - debt;
	console.log(Dinero disponible: {money});
};
show_name();
show_money();

Funciones

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función? 
	un bloque de código
¿Cuándo me sirve usar una función en mi código? 
	para cuando un bloque de código se repite o para simplificar y hacer más leíble el código
¿Cuál es la diferencia entre parámetros y argumentos de una función?
2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = “Juan David”;
const lastname = “Castro Gallego”;
const completeName = name + lastname;
const nickname = “juandc”;

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + “.”);

const show_name_complete = (first_name = ‘Juan David’, last_name = “Castro Gallego”, nickname = “juandc”) => {
	console.log(Mi nombre es {first_name} {last_name} pero prefiero que me digas {nickname});
};
show_name_complete();
show_name_complete(‘Vanessa’, ‘Pimentel’, ‘johanapimentel’);

Condicionales

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un condicional? 
	nos permite ejecutar un bloque de código sólo si cumple con unas condiciones
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

es mayor que
< es menor que
&& y
|| o
== es igual en valor
=== es igual en valor y tipo de variable
! no
!= no es igual
!== no es igual en valor o tipo
= es mayor o igual que
<= es menor o igual que
true Verdad
false Falso

¿Puedo combinar funciones y condicionales? 
	si, dentro de las funciones pueden encontrarse condicionales y a su vez si pueden existir funciones en el bloque de código de las condicionales

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = “Basic”;

switch (tipoDeSuscripcion) {
	case “Free”:
	console.log(“Solo puedes tomar los cursos gratis”);
	break;
	case “Basic”:
	console.log(“Puedes tomar casi todos los cursos de Platzi durante un mes”);
	break;
	case “Expert”:
	console.log(“Puedes tomar casi todos los cursos de Platzi durante un año”);
	break;
	case “ExpertPlus”:
	console.log(“Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año”);
	break;
}
const tipoDeSuscripcion = (suscription) => {
if (suscription == ‘ExpertPlus’) {
		console.log(“Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año”);
	} else if (suscription == ‘Expert’) {
		console.log(“Puedes tomar casi todos los cursos de Platzi durante un año”);
	} else if (suscription == ‘Basic’) {
		console.log(“Puedes tomar casi todos los cursos de Platzi durante un mes”);
	} else if (suscription == ‘Free’) {
		console.log(“Solo puedes tomar los cursos gratis”);
	} else {
		console.log(“No cuentas con una suscripcion, te invito a que adquieras una”);
	}
};
console.log(ExpertPlus);
tipoDeSuscripcion(ExpertPlus);
console.log(Expert);
tipoDeSuscripcion(Expert);
console.log(Basic);
tipoDeSuscripcion(Basic);
console.log(Free);
tipoDeSuscripcion(Free);
console.log(Cualquier otro tipo de texto);
tipoDeSuscripcion();

3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

const suscriptions = [
	{nombre: ‘ExpertPlus’, texto: ‘Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año’},
	{nombre: ‘Expert’, texto: ‘Puedes tomar casi todos los cursos de Platzi durante un año’},
	{nombre: ‘Basic’, texto: ‘Puedes tomar casi todos los cursos de Platzi durante un mes’},
	{nombre: ‘Free’, texto: ‘Solo puedes tomar los cursos gratis’}
];
const find_suscription = (element_find) => {
	let tipoDeSuscripcion = suscriptions.find(function(articulo) {
	return articulo.nombre === element_find;
});
if (tipoDeSuscripcion) {
		console.log(Suscripcion {tipoDeSuscripcion.nombre} {tipoDeSuscripcion.texto});
	} else {
		console.log(“No cuentas con una suscripcion, te invito a que adquieras una”);
	}
}
find_suscription(‘ExpertPlus’);
find_suscription(‘Expert’);
find_suscription(‘Basic’);
find_suscription(‘Free’);
find_suscription(’’);

Ciclos

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo? 
	es un bloque de código que se repite tantas veces como sea necesario
¿Qué tipos de ciclos existen en JavaScript? 
	for, while, do while,
¿Qué es un ciclo infinito y por qué es un problema? 
	un ciclo que se repite infinitamente es un problema porque el código no se culmina, no tiene un fin
¿Puedo mezclar ciclos y condicionales? 
	si, las condicionales pueden contener ciclos y los ciclos pueden contener condicionales

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
	console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i–) {
	console.log("El valor de i es: " + i);
}
let count = 0;
while (count < 5) {
	console.log(El valor de i es: {count});
	count++;
}
count = 10;
while (count >= 2) {
	console.log(El valor de i es: {count});
	count–;
}

3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

let count_two = prompt('cuánto es 2 + 2: ');
while (count_two != 4) {
	console.log(Lo siento, respuesta incorrecta, intente nuevamente!);
	count_two = prompt('cuánto es 2 + 2: ');
};
console.log(Felicidades respuesta correcta);

Listas

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array? 
	una lista de variables
¿Qué es un objeto? 
	un elemento unico
¿Cuándo es mejor usar objetos o arrays? 
	los arrays para tener un orden secuencial de variables, objeto es una colección de funciones y propiedades
¿Puedo mezclar arrays con objetos o incluso objetos con arrays? 
	si, claro que se pueden mezclar,

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

const lista = [
	‘Manzana’,
	‘Pera’,
	‘Durazno’,
];
const primer_elemento = (elementos) => {
	console.log(elementos[0]);
}
primer_elemento(lista);

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

const lista = [
	‘Manzana’,
	‘Pera’,
	‘Durazno’,
];
const lista_de_elementos = (elementos) => {
	elementos.forEach(function(elemento){
		console.log({elemento});
	})
}
lista_de_elementos(lista);

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
*/ //`;

