function azar(numero) {
    if ((numero < 15 && numero > 5) || (numero == 70) || (numero == 50)){
        return "El numero ingresado tiene opciones de ganar"
    }
    if (numero>100 || numero < 0){
        return "Por favor ingrese un numero valido"
    }
    else{
        return "el numero ingresado no es favorable"
    }
}

let intento1 = 14;
console.log(azar(intento1));

let intento2 = 70;
console.log(azar(intento2));

let intento3 = 50;
console.log(azar(intento3));

let intento4 = 100;
console.log(azar(intento4));

let intento5 = 0;
console.log(azar(intento5));

let intento6 = -1;
console.log(azar(intento6));