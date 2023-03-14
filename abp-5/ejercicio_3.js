let numeros = [];

function cuentaRegresiva(numInicial) {
    if ((numInicial < 100 && numInicial >= 0) && Number.isInteger(numInicial)){
        for (let i = numInicial; i>=0; i--) {
            numeros.push(i);
        }
        console.log(numeros);
    }
    else{
            console.log("Por favor ingrese entero y menor a 100");
        }
    }
Start1 = 10;
cuentaRegresiva(Start1);
Start2 = 50;
cuentaRegresiva(Start2);
Start3 = 100;
cuentaRegresiva(Start3);
Start4 = 15.23;
cuentaRegresiva(Start4);