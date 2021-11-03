// let js = 'amazing';
// let lenguaje = 'JavaScript';
// console.log(lenguaje + " is " + js);
// let age = 21;
// let year = 2020;
// let result = year - age;
// var bandera = false;

// console.log(bandera)

// if (typeof result == 'number') {
//     const resultChange = 2010;
//     result = resultChange;
//     console.log('Congratulations your born is the ' + result);
// } else {
//     resultChange = 2090;
//     result = resultChange;
//     console.log('Your not born in the 1999');
// }

// let miPrimerEmpleo = 'Programador';
// let miEmpleoActual = 'Director';

// -------------------------
// OPERADORES MATEMATICOS
// -------------------------

// const now = 2037;
// const ageJosue = 2021 - 1999;
// console.log(ageJosue);

// console.log(ageJosue * 2, ageJosue / 10, Math.pow(2, 10));
// const primerNombre = 'Josue';
// const segundoNombre = 'Rojas';

// console.log(primerNombre + ' ' + segundoNombre);

// // -------------------------
// // OPERADORES ASIGNACION
// // -------------------------
// let x = 10 + 5; // 15
// x += 10; // += es igual a  x = x + 10 = 25;
// x *= 4; // *= es igual a x = x * 4 = 100;
// x++; // es igual a  x= x + 1 = 101;
// x--; // es igual a  x= x - 1 = 100;
// x--; // es igual a  x= x - 1 = 99;

// console.log(x);

// console.log(ageJosue < 20);

// const bandera = ageJosue < 20;

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const weightMark = 95;
// const tallMark = 1.88;
// const weightJohn = 85;
// const tallJohn = 1.76;

// const ICMM = weightMark / (tallMark * tallMark);

// const ICMJ = weightJohn / Math.pow(tallJohn, 2);

// const markHigherBMI = ICMM > ICMJ;

// console.log(ICMM, ICMJ, markHigherBMI);

// const nombre = 'Josué Arturo';
// const edad = 21;
// const vocacion = 'estudiante';

// const FormtatoClasico = 'Yo soy ' + nombre + ' y tengo ' + edad + ' años, y por el momento soy ' + vocacion + ' del curso de JavaScript';

// console.log(FormtatoClasico);

// const Josue = `Yo soy ${nombre} y tengo ${edad} años, y por el momento soy ${vocacion} del curso de JavaScript`;
// console.log(Josue);

// console.log('Cadena \n\
// con saltos de linea \n\
// y sin alterar el texto');

// console.log(`Hola
// soy un salto de linea
// y yo soy otro salto de lina =)`);

// const josue = 'Josue Arturo';
// const edadJosue = 21;
// const elena = 'Elena Flores';
// const edadElena = 15;

// const edadConducir = 18;

// if (edadElena >= edadConducir) {
//     console.log(`${josue} puede tener su permiso de conducir`);
// } else {
//     console.log(`${elena} no puede tener su permiso de conducir, porque es menor de edad`);
//     console.log(`A ${elena} le hacen falta ${edadConducir - edadElena} años, para poder tener su permiso de conducir`)
// }

// const weightMark = 78;
// const tallMark = 1.69;
// const weightJohn = 92;
// const tallJohn = 1.95;

// const ICMM = weightMark / (tallMark * tallMark);

// const ICMJ = weightJohn / Math.pow(tallJohn, 2);

// if (ICMM > ICMJ) {
//     console.log(`El ICM de Mark es de:${ICMM} mayor al de John su ICM es de:${ICMJ}`);

// } else if (ICMJ > ICMM) {
//     console.log(`El ICM de John es de:${ICMJ} mayor al de Mark su ICM es de:${ICMM}`);
// }

// Tipo de datos Conversion o Manual

// const numero = String(51);
// const año = 99;

// console.log(numero + año);

// console.log(Number(numero), año);
// console.log(Number(numero) + año);

// console.log(typeof NaN);

// //Tipo de datos automaticos o coercion
// console.log('Yo tengo ' + 21 + ' años');
// console.log('23' + '3' - 3);
// console.log('23' / '2');
// console.log('23' > '18');

// Valores Verdaderos y Defectuosos

// console.log(Boolean(0)); //El resutado de esto es falso por que es un valor Defectuoso
// console.log(Boolean('')); //El resutado de esto es falso por que es un valor Defectuoso
// console.log(Boolean(undefined)); //El resutado de esto es falso por que es un valor Defectuoso
// console.log(Boolean(null)); //El resutado de esto es falso por que es un valor Defectuoso
// console.log(Boolean(NaN)); //El resutado de esto es falso por que es un valor Defectuoso

// const money = 100;
// if (money) {
//     console.log('No gastes todo =)');
// } else {
//     console.log('Deberias conseguir un empleo');
// }

// let height = 0;
// if (height) {
//     console.log('Siii la variable ha sido definida');
// } else {
//     console.table(typeof height);
//     console.log('Upps!! la variable es UNDEFINE');
// }

// const edad = 18;
// if (edad === 18) console.log('Este usuario ya es un adulto (estricto que debe cumplir exactamente el valor y tipo de valor)');

// if (edad == 18) console.log('Este usuario es un adulto (flojo o debil conforme a la condicion)');

// let numero = Number(prompt('¿Cuál es tu numero favorito?', 0));

// if (numero === 23) {
//     console.log('Felicidades este es un buen numero ' + numero);
// } else if (numero === 7) {
//     console.log('Felicidades este tambien es un buen numero ' + numero);
// } else {
//     console.log('Upps!! esto no es un numero por favor intentelo de nuevo');
// }

// if (numero != 23) {
//     console.log('Ok este numero no es 23 porque no escogiste 23 ??');
// }

// const licenciadeConducir = true; // A
// const buenaVision = true; // B

// console.log(licenciadeConducir && buenaVision);
// console.log(licenciadeConducir || buenaVision);
// console.log(!licenciadeConducir);

// if (licenciadeConducir === true && buenaVision === true) {
//     console.log('Sarah cumple todos los puntos para poder conducir');
// } else {
//     console.log('A sarah le faltan puntos para poder tener su licencia de conducir');
// }

// const estaCansada = true;
// let cambio = !estaCansada;

// if (licenciadeConducir === true && buenaVision === true && cambio === false) {
//     console.log('Sarah cumple todos los puntos para poder conducir');
// } else {
//     console.log('A sarah le faltan puntos para poder tener su licencia de conducir');
// }

// -----------------------------
// CODING CHALLENGE #3
// -----------------------------
// const puntuacion1Dolphins = Number(prompt('Por favor introduzca la puntuacion numero 1 de los Dolphins:', 0));
// const puntuacion2Dolphins = Number(prompt('Por favor introduzca la puntuacion numero 2 de los Dolphins:', 0));
// const puntuacion3Dolphins = Number(prompt('Por favor introduzca la puntuacion numero 3 de los Dolphins:', 0));
// const scoreDolphins = (puntuacion1Dolphins + puntuacion2Dolphins + puntuacion3Dolphins) / 3;

// const puntuacion1Koalas = Number(prompt('Por favor introduzca la puntuacion numero 1 de los Koalas:', 0));
// const puntuacion2Koalas = Number(prompt('Por favor introduzca la puntuacion numero 2 de los Koalas:', 0));
// const puntuacion3Koalas = Number(prompt('Por favor introduzca la puntuacion numero 3 de los Koalas:', 0));
// const scoreKoalas = (puntuacion1Koalas + puntuacion2Koalas + puntuacion3Koalas) / 3;

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Felicidades Dolphins son los ganadores!!!');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Felicidades Koalas son los ganadores!!!');
// } else if (scoreKoalas === scoreDolphins && scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100) {
//     console.log('Que buen partido fue un empate');
// } else {
//     console.log('Lo siento nadie gano deben superar la puntuacion minima de 100');
// }

// const dia = "Sabado";

// switch (dia) {
//     case "Lunes": // Aqui hara una comparacion estricta de dia === 'Lunes' si no lo es buscara hasta el caso que si lo sea
//         console.log("Feliz Inicio de Semana");
//         break;
//     case "Martes":
//         console.log("Necesitas preparar tus apuntes de JavaScript");
//         break;
//     case "Miercoles":
//     case "Jueves": // Nosotros compartiremos el mismo bloque de ejecucion ya sea si el resultado caiga en Miercoles o Jueves
//         console.log("Estudia para el Coding Challenge");
//         console.log("Meta del dia llegar a 10 videos diarios de JS");
//         break;
//     case "Viernes":
//         console.log("Ya casi es fin de semana venga vamos con todo");
//         break;
//     case "Sabado":
//     case "Domingo": // Nosotros compartiremos el mismo bloque de ejecucion ya sea si el resultado caiga en Miercoles o Jueves
//         console.log("Felicidades ya es fin de semana disfrutalo con tu familia =D");
//         break;
//     default:
//         // Aqui caeran los usuarios si en elemento switch si el valor no aplica para ninguno de los casos
//         console.log("Upps no encontramos evento para ti intenta de nuevo");
// }

// // Aqui esta el caso si usamos if/ else

// console.log("----------------------------");

// if (dia === "Lunes") {
//     console.log("Feliz Inicio de Semana");
// } else if (dia === "Martes") {
//     console.log("Necesitas preparar tus apuntes de JavaScript");
// } else if (dia === "Miercoles" || dia === "Jueves") {
//     console.log("Estudia para el Coding Challenge");
//     console.log("Meta del dia llegar a 10 videos diarios de JS");
// } else if (dia === "Viernes") {
//     console.log("Ya casi es fin de semana venga vamos con todo");
// } else if (dia === "Sabado" || dia === "Domingo") {
//     console.log("Felicidades ya es fin de semana disfrutalo con tu familia =D");
// } else {
//     console.log("Upps no encontramos evento para ti intenta de nuevo");
// }

// const cuenta = 430;
// const facturacion =
//     cuenta < 50 || cuenta > 300 ?
//     "La cuenta se le aplicara el 20%" :
//     cuenta >= 50 || cuenta <= 300 ?
//     "La cuenta se le aplicara el 15%" :
//     "Ingrese otro numero";

// console.log(facturacion);
// switch (facturacion) {
//     case "La cuenta se le aplicara el 20%":
//         console.log(
//             `Tu factura es de ${cuenta} y ya con propinas seria de ${
//         (cuenta * 20) / 100 + cuenta
//       }`
//         );
//         break;
//     case "La cuenta se le aplicara el 15%":
//         console.log(
//             `Tu factura es de ${cuenta} y ya con propinas seria de ${
//         (cuenta * 15) / 100 + cuenta
//       }`
//         );
//         break;
//     default:
//         console.log("Cuenta incorrecta");
// }

// //Solucion del profe
// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//     `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );