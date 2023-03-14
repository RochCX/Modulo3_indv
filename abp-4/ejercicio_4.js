let lista = [];

for (let i = 0; i < 100; i++) {
    lista.push(Math.floor(Math.random() * 100));
}
console.log(lista);

function buscaNumero(lista, numero) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numero) {
            return i;
        }
        else if (buscar<0 || buscar>99) {
            console.log("Ingrese un numero entre 0 y 99");
            return 123;
        }
    }
    return -1
}

// const posicion = buscaNumero(lista, buscar);
function confirmar(){
    const posicion = buscaNumero(lista, buscar);
    if (posicion!== -1 && posicion!== 123) {
        console.log("el numero "+buscar+" se encontró en el índice "+posicion);
    }
    else if (posicion === 123) {
        console.log("Por favor ingrese un número válido");
    }
    else{
        console.log("el numero no se encontró");
    }
}
buscar = 10;
confirmar();
buscar = 20;
confirmar();
buscar = -2;
confirmar();