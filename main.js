
/*var uno = 1;
var texto = "probando string"
var bul = true
var und;


console.log(typeof uno)
console.log(typeof texto)
console.log(typeof bul)
console.log(typeof und)

var num1 = 13;
var num2 = 27;

console.log("suma", num1 + num2 + "bleblelbe");
console.log("resta", num1 - num2);
console.log("multiplicacion", num1*num2);
console.log("division", num1 / num2);

var num = 4;
console.log(num);
var num2 = --num;
console.log(num2)
*/

/*

var bool1 = true;
var bool2 = false;

console.log(bool1 === bool2);
console.log(bool1 !== bool2);
console.log(bool1 !== bool1);
console.log(bool2 === bool2);
*/

/*operador de comparacion*/

/*
var num1 = 10;
var num2 = 20;

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 <= num1);

*/
/*operador logico */
/*
var num1 = 10;
var num2 = 20;

console.log(num1 < num2 && num2 > num1);
console.log(num1 < num2 && num2 >= num1);
console.log(num1 > num2 && num2 > num1);
console.log(num1 > num2 && num2 > num1);
*/

/*operador OR*/
/*
var num1 = 10;
var num2 = 20;

console.log(num1 < num2 || num2 > num1);
console.log(num1 < num2 || num2 >= num1);
console.log(num1 > num2 || num2 > num1);
console.log(num1 > num2 || num2 < num1);

*/
/*Condicionales*/


/*asignacion condicional operacion ternaria*/
/*var num1 = 10;
var num2 = 20;

console.log(num1 < num2 ? 'si es verdadero' : 'no es falso');
console.log(num1 > num2 ? 'si es verdadero' : 'no es falso');
*/
/*if else*/

/*if simple*/
/*
var num1 = 10;
var num2 = 20;


if(num1 < num2 && num1 > num2){
	console.log("se ejecuta");

}
else if(num1 < num2 || num1 > num2){
	console.log("se ejecuta el if else if")

} 
else
{
	console.log("no se ejecuta");
} 
*/
/*switch*/
/*
var num1 = 10;
var num2 = 20;



switch(num1 + num2){
	case 10:
		console.log("es igual a 10");
		break;
	case 20:
		console.log("es igual a 20");
		break;
	case 30:
	console.log("es igual a 30")
	break;
default:
	console.log("es otro valor")
}

*/
/*
var nombre = "fefa";
switch(nombre){
	case 'flefla':
		console.log("asi me dice mauro ");
		break;
	case 'ferny':
		console.log("asi em dice mi vieja");
		break;
	
default:
	console.log("es otro valor")
}

*/

/*FUNCIONES*/


function nombreCompleto(nombre,apellido){
	
console.log(nombre + " " + apellido);
	}

nombreCompleto("fefa", "morales");


/*edad*/

function edad(anioNac){
	return 2018 - anioNac;

}
console.log(edad(1985));


function edad(anioNac){
	return 2018 - anioNac;

}

if(edad(1985) >= 18){
	console.log("mayor de edad");

}
else if(edad(1985) <= 17){
	console.log("menor de edad")

} 
else
{
	console.log("ni idea");
} 