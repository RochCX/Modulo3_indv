function bisiesto(year){
    if (year % 4 == 0 && year % 100!= 0 || year % 400 == 0) {
        return "Es bisiesto";
    }
    if (year <0){
        return "Ingrese una fecha valida";
    } 
    else {
        return "No es bisiesto";
    }
}

let prueba1 = 2018;
console.log(bisiesto(prueba1));

let prueba2 = 2019;
console.log(bisiesto(prueba2));

let prueba3 = 2020;
console.log(bisiesto(prueba3));

let prueba4 = -200;
console.log(bisiesto(prueba4));

let prueba5 = 0;
console.log(bisiesto(prueba5));

let prueba6 = 100;
console.log(bisiesto(prueba6));

let prueba7 = 400;
console.log(bisiesto(prueba7));