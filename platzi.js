const show_name = (first_name = 'Vanessa', last_name = "Pimentel") => {
	let completeName = first_name + ' ' + last_name;
    console.log(`Nombre completo: ${first_name} ${last_name}`);
};

const show_money = (money_save = 5678, debt = 1234) => {
    let money = money_save - debt;
    console.log(`Dinero disponible: ${money}`);
};

show_name();
show_money();

const show_name_complete = (first_name = 'Juan David', last_name = "Castro Gallego", nickname = "juandc") => {
	console.log(`Mi nombre es ${first_name} ${last_name} pero prefiero que me digas ${nickname}`);
};

show_name_complete();
show_name_complete('Vanessa', 'Pimentel', 'johanapimentel');




const suscriptions = [
    {nombre: 'ExpertPlus', texto: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'},
    {nombre: 'Expert', texto: 'Puedes tomar casi todos los cursos de Platzi durante un año'},
    {nombre: 'Basic', texto: 'Puedes tomar casi todos los cursos de Platzi durante un mes'},
    {nombre: 'Free', texto: 'Solo puedes tomar los cursos gratis'}
];
const find_suscription = (element_find) => {
    let tipoDeSuscripcion = suscriptions.find(function(texto) {
        return texto.nombre === element_find;   
    });
    if (tipoDeSuscripcion) {
        console.log(`Suscripcion ${tipoDeSuscripcion.nombre} ${tipoDeSuscripcion.texto}`);
    } else {
        console.log("No cuentas con una suscripcion, te invito a que adquieras una");
    }
}
find_suscription('ExpertPlus');
find_suscription('Expert');
find_suscription('Basic');
find_suscription('Free');
find_suscription('');

let count = 0;
while (count < 5) {
    console.log(`El valor de i es: ${count}`);
    count++;
}
count = 10;
while (count >= 2) {
    console.log(`El valor de i es: ${count}`);
    count--;
}


let count_two = prompt('cuánto es 2 + 2: ');
while (count_two != 4) {
    console.log(`Lo siento, respuesta incorrecta, intente nuevamente!`);
    count_two = prompt('cuánto es 2 + 2: ');
};
console.log(`Felicidades respuesta correcta`);


//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
const lista = [
    'Manzana',
    'Pera',
    'Durazno',
];
const primer_elemento = (elementos) => {
    console.log(elementos[0]);
}
primer_elemento(lista);

const lista_de_elementos = (elementos) => {
    elementos.forEach(function(elemento){
        console.log(`${elemento}`);
    })
}
lista_de_elementos(lista);
let objeto_1 = {
    nombre: 'Leticia',
    apellido: 'Lopez' 
}
let objeto_2 = {
    apodo: 'Julieta',
    edad: 23,
    deporte: 'beisbol' 
}
const imprimir_objeto = (objeto) => {
    let propiedades = Object.entries(objeto);
    propiedades.forEach(function(elemento){
        console.log(`${elemento}`);
    })
};
imprimir_objeto(objeto_1);
imprimir_objeto(objeto_2);

//Object.values()
//Object.keys()
//Object.entries()

const suscriptions_2 = {
    ExpertPlus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
    Expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    Basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Free: 'Solo puedes tomar los cursos gratis'
};

const find_suscription_2 = (elementFind) => {
    if (suscriptions_2[elementFind]) {
        console.log(`Suscripcion ${elementFind} ahora ${suscriptions_2[elementFind]}`);
    } else {
        console.log("No cuentas con una suscripcion, te invito a que adquieras una");
    }
}

console.log('probando expertplus');
find_suscription_2('ExpertPlus');
console.log('probando expert');
find_suscription_2('Expert');
console.log('probando basic');
find_suscription_2('Basic');
console.log('probando free');
find_suscription_2('Free');
console.log('probando cualqueircosa');
find_suscription_2('');

const span = document.querySelector('span');
const parrafo = document.querySelector('.parrafo');
let pip = document.querySelector('#pip');
const input = document.querySelector('input');

console.log({
    span,
    parrafo,
    pip,
    input
});

span.className = 'input.value';
parrafo.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nam, ex labore expedita explicabo unde, temporibus quas reiciendis distinctio provident consequatur. Nemo obcaecati dolore ipsa quasi fugit labore, quaerat excepturi!';
parrafo.classList.add('color');
parrafo.classList.add('grande'); //agrega
parrafo.classList.remove('color'); //quita
parrafo.classList.toggle('Hola'); // apagador de clase
parrafo.classList.contains('beber'); //condicional

const img = document.createElement('img');
let src = 'https://www5.minijuegosgratis.com/v3/games/thumbnails/222662_7_sq.jpg';
img.setAttribute('src', src);
img.setAttribute('class', 'verde');
console.log(img);
let embuste = parrafo.getAttribute('class');

pip.replaceWith(img);
input.value = 234;

const numero1 = document.querySelector('#numero1');
const numero2 = document.querySelector('#numero2');
const calcularbtn = document.querySelector('#calcular');

numero1.value = "2";
numero2.value = "4";

const mostrar_numeros = (numero1, numero2) => {
    console.log(numero1);
    console.log(numero2);
}

mostrar_numeros(numero1, numero2);

const escribe = () => {
    console.log("Hay movimiento");
}

const hicisteclick = () => {
    console.log("hiciste click");
}

const calcular = () => {
    console.log("letras " + numero1.value + numero2.value);
    console.log("numero " + parseInt(numero1.value) + parseInt(numero2.value));
    const span = document.querySelector('#resultado');
    span.innerText = parseInt(numero1.value) + parseInt(numero2.value);
}

const btnLlamada = document.querySelector('#btnLlamada');
const llamadaResult = document.querySelector('#llamadaResult');

const click_aqui = () => {
    console.log('Hicistye click');
}

btnLlamada.addEventListener('click', click_aqui);
