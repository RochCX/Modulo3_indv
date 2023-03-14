let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

function encuentraDias(entrada){
    entrada = entrada -1;
    let dia = dias[entrada];
    if(dia != undefined){
        return "El dia seleccionado es "+dia;
    }
    else{
        return "El dia seleccionado no existe";
    }
}

let ingreso1 = 2;
console.log(encuentraDias(ingreso1));

let ingreso2 = 3;
console.log(encuentraDias(ingreso2));

let ingreso3 = 7;
console.log(encuentraDias(ingreso3));

let ingreso4 = 0;
console.log(encuentraDias(ingreso4));